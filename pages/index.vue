<template>
  <div>
    <MainSection title="Home" :loading="loading"> Content </MainSection>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'feed',
});
const loading = ref(false);
</script>
