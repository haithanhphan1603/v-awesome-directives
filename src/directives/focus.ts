import type { Directive } from 'vue'

export const vFocus: Directive = {
  mounted: (el: HTMLElement) => el.focus()
}
