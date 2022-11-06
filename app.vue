<template>
  <div class="bg-white dark:bg-dim-900">
    <div v-if="true" class="min-h-full">
      <div
        class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5"
      >
        <!-- Left sidebar -->
        <div class="hidden md:block xs:col-span-1 xl:col-span-2">
          <div class="sticky top-0">
            <SidebarLeft></SidebarLeft>
          </div>
        </div>
        <!-- Main content -->
        <main class="col-span-12 md:col-span-8 xl:col-span-6">
          <RouterView></RouterView>
        </main>

        <!-- Right sidebar -->
        <div class="hidden md:block md:col-span-3 xl:col-span-4">
          <div class="sticky top-0">
            <SidebarRight />
          </div>
        </div>
      </div>
    </div>
    <AuthPage v-else />
  </div>
</template>

<script setup lang="ts">
import AuthPage from './pages/sign/authPage.vue';
</script>

<style scoped lang="scss"></style>
