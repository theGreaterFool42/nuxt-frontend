<template>
  <div>
    <h1 class="text-red-500 dark:text-dim-500">Plant Overview</h1>
    <MDButtonElevated @click="addPlants">AddPlants</MDButtonElevated>
    <p class="text-black dark:text-white">
      Here will be a template for the plant view at some point.
    </p>
    <div class="plantView flex flex-row flex-wrap">
      <div v-for="plant in plants" class="w-96 p-2">
        <PostPlant :plant="plant"></PostPlant>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IPlant } from '~/types/IPlant';
const { getPlants } = usePlants();
definePageMeta({
  layout: 'cards',
});

const plants = ref([] as IPlant[]);
const testPlant = ref({
  title: 'Klaus',
  category: 'Awesome Plant',
  plantedAt: new Date(),
} as IPlant);

const addPlants = () => {
  plants.value.push(testPlant.value);
  console.log('plant');
};
onMounted(() => {
  getPlants();
});
</script>
