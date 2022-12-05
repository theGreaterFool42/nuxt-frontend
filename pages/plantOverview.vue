<template>
  <div>
    <MDTextFieldOutlined
      v-model="data.query"
      :label="data.query"
      placeholder="Search"
      :onchange="fetchPlants"
    />
    <div class="plantView flex flex-row flex-wrap">
      <div v-for="plant in plants" class="w-96 p-2">
        <PostPlant :plant="plant"></PostPlant>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IPlant } from '~/types/IPlant';
const data = reactive({ query: '' });
const { getPlantsByCategory } = usePlants();
definePageMeta({
  layout: 'cards',
});

const plants = ref([] as IPlant[]);
const fetchedPlants = ref([] as IPlant[]);

const fetchPlants = async () => {
  fetchedPlants.value = await getPlantsByCategory(data.query);
  //@ts-ignore
  plants.value = fetchedPlants.value.plants;
};
watch(
  () => data.query,
  () => fetchPlants()
);
onMounted(() => {
  fetchPlants();
});
</script>
