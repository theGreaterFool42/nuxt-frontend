<template>
  <div class="flex flex-col">
    <!-- Preview Card : What's happening -->
    <SidebarRightPreviewCard title="What's happening">
      <SidebarRightPreviewCardItem
        v-for="whatsHappening in whatsHappeningItems"
      >
        <h2 class="font-bold text-md text-light-primary dark:text-white">
          {{ whatsHappening.title }}
        </h2>
        <p class="text-xs text-gray-400">{{ whatsHappening.count }}</p>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>

    <!-- Preview Card : Who to follow -->
    <SidebarRightPreviewCard title="Who to follow">
      <SidebarRightPreviewCardItem v-for="whoToFollow in whoToFollowItems">
        <div class="flex flex-row justify-between items-center p-2">
          <div class="flex flex-row">
            <img
              class="w-10 h-10 rounded-full m-1"
              :src="whoToFollow.image"
              :alt="whoToFollow.name"
            />
            <div>
              <h1 class="text-sm font-bold text-light-primary dark:text-white">
                {{ whoToFollow.name }}
              </h1>
              <p class="text-xs text-gray-400">{{ whoToFollow.handle }}</p>
            </div>
          </div>
          <div class="flex h-full">
            <button
              class="px-4 py-2 rounded-full font-bold text-sx text-light-onPrimary dark:text-black bg-light-primary dark:bg-white"
            >
              Follow
            </button>
          </div>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
    <PostPlant :plant="testPlant"></PostPlant>
  </div>
</template>
<script setup lang="ts">
import { IPlant } from '~~/types/IPlant';

const testPlant = ref({
  title: 'Schneller Ede',
  category: 'Recreational',
  plantedAt: new Date(),
  image: '/img/basil_small.png',
} as IPlant);

const whatsHappeningItems = ref([
  {
    title: 'Cooler Kram',
    count: '42.9k Tweets',
  },
  {
    title: 'Nicht so cooler Kram',
    count: '19.19k Tweets',
  },
  {
    title: 'Richtig C00ler Kram',
    count: '69.42   k Tweets',
  },
]);

const whoToFollowItems = ref([
  {
    name: 'Klaus',
    handle: '@klausHandle',
    image: '/img/basil_small.png',
  },
  {
    name: 'Peter',
    handle: '@peterHandle',
    image: '/img/tomato_small.png',
  },
]);
</script>
