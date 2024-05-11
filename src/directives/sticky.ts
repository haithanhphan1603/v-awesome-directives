import type { Directive, DirectiveBinding } from 'vue'
import throttle from 'lodash/throttle'

interface BindingStyle {
  top: number
  zIndex: number
  disabled: boolean
}

interface InitialStyle {
  zIndex: string
}

let listenAction: () => void
let supportCSSSticky: boolean

const getBindingStyle = (binding: DirectiveBinding): BindingStyle => {
  const { top = 0, zIndex = 1000, disabled = false } = binding.value || {}
  return { top, zIndex, disabled }
}

const getInitialStyle = (el: HTMLElement): InitialStyle => ({ zIndex: el.style.zIndex })

const unwatch = () => window.removeEventListener('scroll', listenAction)

const watch = () => window.addEventListener('scroll', listenAction)

export const vSticky: Directive = {
  mounted(el, binding) {
    const { top, zIndex, disabled } = getBindingStyle(binding)
    if (disabled) return

    const elStyle = el.style
    elStyle.position = '-webkit-sticky'
    elStyle.position = 'sticky'

    const childStyle = (el.firstElementChild as HTMLElement)?.style

    supportCSSSticky = elStyle.position.indexOf('sticky') !== -1

    if (supportCSSSticky) {
      elStyle.top = `${top}px`
      elStyle.zIndex = zIndex.toString()
    } else {
      elStyle.position = ''
      childStyle.cssText = `left: 0; right: 0; top: ${top}px; z-index: ${zIndex}; ${childStyle.cssText}`
    }

    let active = false

    const sticky = () => {
      if (supportCSSSticky || active) return

      if (!elStyle.height) elStyle.height = `${el.offsetHeight}px`
      if (childStyle) childStyle.position = 'fixed'

      active = true
    }

    const reset = () => {
      if (supportCSSSticky || !active) return
      childStyle.position = 'static'
      active = false
    }

    listenAction = throttle(() => {
      const offsetTop = el.getBoundingClientRect().top
      offsetTop <= top ? sticky() : reset()
    })

    watch()
  },
  unmounted: unwatch,
  updated(el, binding) {
    const { top, zIndex, disabled } = getBindingStyle(binding)
    const childStyle = (el.firstElementChild as HTMLElement)?.style

    if (supportCSSSticky) {
      el.style.top = `${top}px`
      el.style.zIndex = zIndex.toString()
    } else {
      childStyle.top = `${top}px`
      childStyle.zIndex = zIndex.toString()
    }

    if (disabled) {
      if (supportCSSSticky) {
        el.style.position = ''
      } else {
        childStyle.position = ''
        childStyle.top = ''
        childStyle.zIndex = getInitialStyle(el).zIndex
        unwatch()
      }
      return
    }

    if (supportCSSSticky) {
      el.style.position = '-webkit-sticky'
      el.style.position = 'sticky'
    } else {
      watch()
    }
  }
}
