<template>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
    <StarportCarrier>
      <router-view v-slot="{ Component }">
        <Transition name="page-fade">
          <component
            :is="Component"
            absolute left-0 right-0 top-25
          />
        </Transition>
      </router-view>
    </StarportCarrier>
    <Footer />
  </main>
</template>
