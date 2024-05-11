<script setup lang="ts">
import { computed, ref } from 'vue'
const test = ref<HTMLElement | null>(null)
const isFocused = computed(() => {
  return test.value?.focus() ? 'focused' : 'not focused'
})

const isOutside = ref(true)
const handleClick = () => {
  isOutside.value = !isOutside.value
}
</script>

<template>
  <main>
    <input type="text" v-focus />
    <div v-click-outside="handleClick">{{ isOutside }}</div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
