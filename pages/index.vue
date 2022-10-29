<template>
  <div :class="{ 'dark': darkMode }">
    <div class="bg-white dark:bg-dim-900">
      <div class="min-h-full">
        <h1 class="text-green-800">Pflanzen und so</h1>
        <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">
          <!-- Left sidebar -->
          <div class="border border-red-500 md:block xs:col-spam-1 xl:col-span-2">
            <div class="sticky top-0">
              <SidebarLeft></SidebarLeft>
            </div>

          </div>
          <!-- Main content-->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const darkMode = ref(true)
</script>

<style scoped lang="scss">

</style>