import type { DirectiveBinding, VNode } from 'vue'

interface BindingElement extends HTMLElement {
  clickOutside: (e: MouseEvent) => void
}

export const vClickOutside = {
  mounted: (el: BindingElement, binding: DirectiveBinding, vnode: VNode) => {
    const callback = binding.value
    el.clickOutside = (e: MouseEvent) => {
      if (!(el === e.target || el.contains(e.target as Node))) {
        callback.call(vnode.appContext, e)
      }
    }
    document.addEventListener('click', el.clickOutside)
  },
  unmounted: (el: BindingElement) => {
    document.removeEventListener('click', el.clickOutside)
  }
}
