import { App } from "vue";
import vClickOutside from "./v-click-outside";
import vFocus from "./v-focus";
import vDebounce from "./v-debounce";

export default {
  install(app: App) {
    app.directive("click-outside", vClickOutside);
    app.directive("focus", vFocus);
    app.directive("debounce", vDebounce);
  },
};
