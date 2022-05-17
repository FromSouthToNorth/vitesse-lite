<script setup lang="ts">
const props = defineProps<{
  no: string
}>()

const index = $computed(() => props.no)
let size = $(useStorage('size', 200))
function enlarge() {
  size += 20
}
function reset() {
  size = 200
}
</script>

<template>
  <div px6 py-2 flex="~ col" items-center>
    <div p2 flex="~ gap-2">
      <RouterLink btn to="/" saturate-0 class="back-btn">
        Back
      </RouterLink>
      <button btn @click="enlarge()">
        Enlarge
      </button>
      <button btn @click="reset()">
        Reset
      </button>
    </div>
    <div class="circle-0" m10 items-center max-w-180 flex="~ col sm:row gap6">
      <Starport
        :port="String(index)"
        :style="{ width: `${size}px`, height: `${size}px` }"
        transition-all duration-800
      >
        <MyComponent
          class="rounded-1/2 shadow-xl"
          :index="index"
        />
      </Starport>
    </div>
  </div>
</template>
