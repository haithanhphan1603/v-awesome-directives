import { ObjectDirective } from "vue";

const vDebounce: ObjectDirective = {
  mounted(el: HTMLInputElement, binding) {
    const delay = parseInt(binding.arg || "300", 10); // Default delay is 300ms
    let timeoutId: number;

    const debounceHandler = (event: Event) => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        binding.value(event);
      }, delay);
    };
    el.__debounceHandler__ = debounceHandler;
    el.addEventListener("input", debounceHandler);
  },
  unmounted(el: HTMLInputElement) {
    if (el.__debounceHandler__) {
      el.removeEventListener("input", el.__debounceHandler__);
      delete el.__debounceHandler__;
    }
  },
};

export default vDebounce;
