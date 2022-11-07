<template>
  <h1 class="text-red-500 dark:text-dim-500">Plant Overview</h1>
  <p class="text-black dark:text-white">
    Here will be a template for the plant view at some point.
  </p>
  <button @click="">Add Plant</button>
</template>

<script setup lang="ts">
import { IPlantToAdd } from '~/types/IPlant';
const testPlant = ref({
  title: 'Klaus',
  category: 'Awesome Plant',
  plantedAt: new Date(),
} as IPlantToAdd);
</script>
