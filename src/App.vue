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

const isScroll = ref(false)
const handleScroll = () => {
  isScroll.value = true
}
</script>

<template>
  <main>
    <div v-sticky="{ zIndex: 10, stickyTop: 10 }">
      <div>
        <!-- sticky wrapper, IMPORTANT -->
        CONTENT
      </div>
    </div>
    <input type="text" v-focus />
    <div v-click-outside="handleClick">{{ isOutside }}</div>
    <div class="container">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo unde architecto perferendis
      earum tenetur repellendus! Ullam, voluptatibus quam ducimus cumque corrupti sapiente unde
      tempore impedit, fugit cum laudantium, nostrum harum.
    </div>
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
.container {
  height: 10000px;
}
</style>
