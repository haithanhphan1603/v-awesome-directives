import './assets/main.css'
import { vFocus } from './directives/focus'
import { vClickOutside } from './directives/clickOutside'
import { vSticky } from './directives/sticky'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.directive('focus', vFocus)
app.directive('click-outside', vClickOutside)
app.directive('sticky', vSticky)

app.mount('#app')
