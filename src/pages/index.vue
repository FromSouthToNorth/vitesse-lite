<script setup lang="ts">
import { images } from '~/composables/data'

const mode = useStorage('starport-image-mode', true)
const toggle = useToggle(mode)
</script>

<template>
  <div px6 py-2>
    <p pb5>
      xxx
    </p>
    <div p5 flex="~ gap-2" justify-center>
      <button btn @click="toggle()">
        Toggle Size
      </button>
    </div>
    <div id="gallery" grid="~ cols-1 sm:cols-2 md:cols-3 lg:clos-4 xl:cols-6" px-10 justiy-center>
      <RouterLink v-for="img, idx of images" :key="img" :class="`image-${idx}`" :to="`/${idx}`">
        <Starport
          :port="String(idx)"
          :class="mode ? 'aspect-1/1 m2' : 'aspect-16/9'"
          transition-all duration-800
        >
          <MyComponent :class="mode ? 'rounded shadow-lg' : ''" :index="idx" />
        </Starport>
      </RouterLink>
    </div>
  </div>
</template>
