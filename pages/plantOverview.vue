<template>
  <div class="dark">
    <h1 class="text-red-500 dark:text-dim-500">Plant Overview</h1>
    <p>Here will be a template for the plant view at some point.</p>
    <button @click="plantStore.add(testPlant)">Add Plant</button>
    <p>{{ plantStore.plants }}</p>
    <NuxtLink to="/test">Test</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { usePlantStore } from '~~/store/plantStore';
import { IPlantToAdd } from '~/types/IPlant';
const testPlant = ref({
  title: 'Klaus',
  category: 'Awesome Plant',
  plantedAt: new Date(),
} as IPlantToAdd);
const plantStore = usePlantStore();
console.log(plantStore.plants);
</script>

<style></style>
