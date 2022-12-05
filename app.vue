<template>
  <div class="bg-light-background dark:bg-dark-background">
    <!-- <LoadingPage v-if="isAuthLoading" /> -->
    <!-- <div v-else-if="user"> -->
    <NuxtLayout>
      <NuxtPage>Index</NuxtPage>
    </NuxtLayout>
  </div>
  <!-- <AuthPage v-else /> -->
  <!-- </div> -->
</template>

<script setup lang="ts">
import AuthPage from './pages/sign/authPage.vue';
import LoadingPage from './pages/sign/loadingPage.vue';
import { useUser } from '~/composables/useAuth';
await useUser();
// const { useAuthUser, initAuth, useAuthLoading } = useAuth();
// const user = useAuthUser();
// const isAuthLoading = useAuthLoading();

// onBeforeMount(() => {
//   initAuth();
// });
</script>
