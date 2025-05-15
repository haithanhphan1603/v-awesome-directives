import type { DirectiveBinding, ObjectDirective } from "vue";

type TooltipOptions = {
  text: string;
  placement?: "top" | "right" | "bottom" | "left";
  offsetX?: number;
  offsetY?: number;
  style?: Partial<CSSStyleDeclaration>;
};

declare global {
  interface HTMLElement {
    __tooltipEl__?: HTMLDivElement;
    __tooltipHandlers__?: {
      showTooltip: (e: MouseEvent) => void;
      moveTooltip: (e: MouseEvent) => void;
      hideTooltip: () => void;
    };
  }
}

function getOptions(
  binding: DirectiveBinding<string | TooltipOptions>
): TooltipOptions {
  if (typeof binding.value === "string") {
    return { text: binding.value };
  }
  return binding.value;
}

const vTooltip: ObjectDirective<HTMLElement, string | TooltipOptions> = {
  mounted(el, binding) {
    const options = getOptions(binding);
    const {
      text,
      placement = "top",
      offsetX = 10,
      offsetY = 10,
      style: customStyle = {},
    } = options;

    const tooltip = document.createElement("div");
    tooltip.textContent = text;
    Object.assign(tooltip.style, {
      position: "absolute",
      padding: "4px 8px",
      background: "rgba(0, 0, 0, 0.75)",
      color: "#fff",
      fontSize: "12px",
      borderRadius: "4px",
      whiteSpace: "nowrap",
      pointerEvents: "none",
      zIndex: "1000",
      transition: "opacity 0.2s",
      opacity: "0",
      ...customStyle,
    });

    document.body.appendChild(tooltip);
    el.__tooltipEl__ = tooltip;

    const updatePosition = (e: MouseEvent) => {
      const { pageX, pageY } = e;
      let left = pageX + offsetX;
      let top = pageY + offsetY;

      if (placement === "top") {
        top = pageY - tooltip.offsetHeight - offsetY;
      } else if (placement === "left") {
        left = pageX - tooltip.offsetWidth - offsetX;
      } else if (placement === "right") {
        left = pageX + offsetX;
      } else if (placement === "bottom") {
        top = pageY + offsetY;
      }

      tooltip.style.left = `${left}px`;
      tooltip.style.top = `${top}px`;
    };

    const showTooltip = (e: MouseEvent) => {
      updatePosition(e);
      tooltip.style.opacity = "1";
    };

    const moveTooltip = (e: MouseEvent) => {
      updatePosition(e);
    };

    const hideTooltip = () => {
      tooltip.style.opacity = "0";
    };

    el.__tooltipHandlers__ = { showTooltip, moveTooltip, hideTooltip };

    el.addEventListener("mouseenter", showTooltip);
    el.addEventListener("mousemove", moveTooltip);
    el.addEventListener("mouseleave", hideTooltip);
  },

  updated(el, binding) {
    const tooltip = el.__tooltipEl__;
    const options = getOptions(binding);
    if (tooltip) {
      tooltip.textContent = options.text;
      if (options.style) {
        Object.assign(tooltip.style, options.style);
      }
    }
  },

  unmounted(el) {
    const tooltip = el.__tooltipEl__;
    const handlers = el.__tooltipHandlers__;

    if (tooltip && tooltip.parentNode) {
      tooltip.parentNode.removeChild(tooltip);
    }

    if (handlers) {
      el.removeEventListener("mouseenter", handlers.showTooltip);
      el.removeEventListener("mousemove", handlers.moveTooltip);
      el.removeEventListener("mouseleave", handlers.hideTooltip);
    }

    delete el.__tooltipEl__;
    delete el.__tooltipHandlers__;
  },
};

export default vTooltip;
