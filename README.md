
# 🦙⚡😎 v-awesome-directives 🦙⚡😎

v-awesome-directive is a collection of essential custom directives for Vue.js 3 applications. These directives enhance your application's functionality and provide convenient solutions for common use cases.
Current supported directives:

#### ✅ v-focus
#### ✅ v-sticky
#### ✅ v-click-outside


## Installation

You can install the package via npm or yarn:

```bash
# With npm
npm install v-awesome-directive

# With Yarn
yarn add v-awesome-directive
```

## Usage

Import the desired directives from the package and register them in your Vue application:

```js
import { createApp } from 'vue'
import App from './App.vue'
import { vFocus, vClickOutside, vSticky } from 'v-awesome-directive'

const app = createApp(App)

app.directive('focus', vFocus)
app.directive('click-outside', vClickOutside)
app.directive('sticky', vSticky)

app.mount('#app')
```

Then, you can use the directives in your Vue components like any other built-in directive:

```html
<template>
  <input v-focus />
  <div v-click-outside="handleClickOutside">
    <!-- Content -->
  </div>
  <div v-sticky>
    <!-- Sticky content -->
  </div>
</template>
```

## Directives

### v-focus

The `v-focus` directive automatically focuses the associated input element when the component is mounted.

#### Usage

```html
<input v-focus />
```


### v-click-outside

The `v-click-outside` directive allows you to detect clicks outside of a specific element. It's useful for closing modals, dropdowns, or any other UI components that should be dismissed when clicking outside their boundaries.

#### Usage

```html
<div v-click-outside="handleClickOutside">
  <!-- Content -->
</div>
```

#### Arguments

- `handleClickOutside`: A function that will be called when a click occurs outside the target element.

### v-sticky

The `v-sticky` directive makes an element sticky (position: sticky) based on the specified offset and viewport boundaries.

#### Usage

```html
<div v-sticky="{ top: 50, bottom: 20 }">
  <!-- Sticky content -->
</div>
```

#### Options

- `top` (optional): The top offset value for the sticky positioning.
- `bottom` (optional): The bottom offset value for the sticky positioning.

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request on the [GitHub repository](https://github.com/haithanhphan1603/v-awesome-directive).

## License

This project is licensed under the [MIT License](LICENSE).
