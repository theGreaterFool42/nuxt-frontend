<template>
  <button
    @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')"
    class="flex items-center p-3 w-min rounded-full hover:bg-light-primaryContainer dark:hover:bg-dim-200 text-light-textColor dark:text-white"
    :class="defaultTransition"
  >
    <slot></slot>
    <div class="w-6 h-6 text-dark">
      <div v-if="useColorMode().preference == 'dark'"><SunIcon /></div>
      <div v-else-if="colorMode == 'light'"><MoonIcon /></div>
      <div v-else><MoonIcon /></div>
    </div>
    <div class="hidden ml-4 text-xl xl:block" :class="textClasses">
      <slot name="name"></slot>
    </div>
  </button>
</template>

<script setup lang="ts">
import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid';

const { defaultTransition } = useTailwindConfig();
const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});

const textClasses = computed(() =>
  props.active ? 'font-semibold' : 'font-normal'
);
const colorMode = ref('');
const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme;
  colorMode.value = newTheme;
};
</script>
