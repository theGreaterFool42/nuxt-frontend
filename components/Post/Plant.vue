<template>
  <MDCardElevated>
    <template v-slot:image>
      <img class="w-full rounded-xl" :src="plant.image" />
    </template>
    <template v-slot:headline
      ><h1>{{ plant.title }}</h1></template
    >
    <template v-slot:subhead
      ><h2>{{ plant.category }}</h2></template
    >
    <template v-slot:text>
      <p>
        Dies ist meine Pflanze. Es gibt viele Pflanzen, aber dies ist meine
        Pflanze. Ohne meine Pflanze bin ich nichts.
      </p>
      <p>{{ plant.plantedAt }}</p>
    </template>
    <template v-slot:buttons>
      <MDButtonElevated @click="buttonAction">{{
        buttonText
      }}</MDButtonElevated>
    </template>
  </MDCardElevated>
</template>

<script setup lang="ts">
import { IPlant } from '~/types/IPlant';

const props = defineProps({
  plant: { type: Object as () => IPlant, required: true },
});

const buttonText = ref('Button' as string);
const buttonAction = () => {
  if (buttonText.value === 'Button') {
    buttonText.value = 'Cool, Bro';
  } else {
    buttonText.value = 'Button';
  }
};
</script>
