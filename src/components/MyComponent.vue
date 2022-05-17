<script setup lang="ts">
import { images } from '~/composables/data'
const { index } = defineProps<{
  index: number
}>()

const src = $computed(() => images[index])
const counter = $ref(Math.round(Math.random() * 100))

onMounted(() => {
  // eslint-disable-next-line no-console
  console.log('MyComponent Mounted')
})
</script>

<template>
  <div
    class="my-component"
    overflow-hidden w-full h-full
    transition-all duration-900
    relative select-none
  >
    <img
      object-cover block w-full h-full
      bg-gray-400:20
      :src="src"
    >
    <div @click.prevent="counter += 1">
      {{ counter }}
    </div>
  </div>
</template>
