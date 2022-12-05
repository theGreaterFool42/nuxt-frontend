<template>
  <div>
    <h1 class="text-red-500 dark:text-dim-500">Settings</h1>
    <p class="text-black dark:text-white">
      Here will be a template for the settings view at some point.
    </p>
    <MDButtonElevated @click="buttonAction">{{ buttonText }}</MDButtonElevated>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'feed',
});
const buttonText = ref('Button' as string);
const buttonAction = () => {
  if (buttonText.value === 'Button') {
    buttonText.value = 'Cool, Bro';
    buttonText.value = JSON.stringify(localStorage.getItem('user'));
  } else {
    buttonText.value = 'Button';
  }
};
</script>
