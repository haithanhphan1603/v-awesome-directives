import type { DirectiveBinding } from 'vue'

export const vFocus = {
  mounted: (el: HTMLElement, binding: DirectiveBinding) => {
    if (binding.value) {
      el.focus()
    } else el.blur()
  },
  updated: (el: HTMLElement, binding: DirectiveBinding) => {
    if (binding.modifiers.lazy) {
      if (Boolean(binding.value) === Boolean(binding.oldValue)) {
        return
      }
    }

    if (binding.value) el.focus()
    else el.blur()
  }
}
