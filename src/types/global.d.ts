export {};

declare global {
  interface HTMLElement {
    __clickOutsideHandler__?: (event: Event) => void;
    __debounceHandler__?: (event: Event) => void;
  }
}
