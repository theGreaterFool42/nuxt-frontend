<template>
  <div class="min-h-full">
    <div class="grid grid-cols-12 mx-auto sm:px-6 lg:px-8 lg:gap-5">
      <!-- Left sidebar -->
      <div class="hidden md:block xs:col-span-1 xl:col-span-2">
        <div class="sticky top-0">
          <SidebarLeft></SidebarLeft>
        </div>
      </div>
      <!-- Main content -->
      <main class="col-span-12 md:col-span-11 xl:col-span-10">
        <RouterView></RouterView>
      </main>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
