import type { ObjectDirective } from "vue";

const vFocus: ObjectDirective = {
  mounted(el: HTMLElement) {
    el.focus();
  },
};

export default vFocus;
