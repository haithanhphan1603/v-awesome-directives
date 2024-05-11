import './assets/main.css'
import { vFocus } from './directives/focus'
import { vClickOutside } from './directives/clickOutside'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.directive('focus', vFocus)
app.directive('click-outside', vClickOutside)

app.mount('#app')
