# v-awesome-directive

`v-awesome-directive` is a collection of highly useful custom directives for Vue 3 applications. It provides a set of directives that can enhance the functionality and user experience of your Vue.js projects.

## Installation

You can install the package via npm or yarn:

```bash
# With npm
npm install v-awesome-directive

# With Yarn
yarn add v-awesome-directive
```

## Usage

Import the directives you need in your Vue component and register them as custom directives:

```js
import { vFocus, vClickOutside, vSticky } from 'v-awesome-directive'

export default {
  directives: {
    focus: vFocus,
    clickOutside: vClickOutside,
    sticky: vSticky
  }
  // ...
}
```

Then, you can use the directives in your Vue template:

```html
<template>
  <input type="text" v-focus />
  <div v-click-outside="handleClickOutside">
    <!-- content -->
  </div>
  <div v-sticky="{ top: 50 }">
    <!-- sticky content -->
  </div>
</template>
```

## Directives

### `v-focus`

The `v-focus` directive automatically focuses on the associated element when the component is mounted or the directive expression evaluates to `true`.

**Usage**

```html
<input type="text" v-focus />
```

### `v-click-outside`

The `v-click-outside` directive calls a specified function when the user clicks outside of the associated element. This is useful for closing dropdowns, modals, or other UI components when the user clicks outside of them.

**Usage**

```html
<div v-click-outside="handleClickOutside">
  <!-- content -->
</div>
```

```js
export default {
  methods: {
    handleClickOutside() {
      // Handle click outside logic
    }
  }
}
```

### `v-sticky`

The `v-sticky` directive makes an element sticky (position: sticky) based on the provided options. It accepts an object with `top` and `bottom` properties, representing the offset from the top and bottom of the viewport, respectively.

**Usage**

```html
<div v-sticky="{ top: 50 }">
  <!-- sticky content -->
</div>
```

```html
<div v-sticky="{ bottom: 20 }">
  <!-- sticky content -->
</div>
```

## Contributing

Contributions are welcome! If you find any issues or want to add new features, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
