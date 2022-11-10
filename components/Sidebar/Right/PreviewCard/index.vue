<template>
  <div
    class="m-2 border rounded-2xl bg-light-onPrimary dark:bg-dim-700 overflow-hidden"
    :class="customBorderColor"
  >
    <h1
      class="p-3 text-xl font-extrabold text-light-primary dark:text-white border-b"
      :class="customBorderColor"
    >
      {{ props.title }}
    </h1>
    <slot></slot>
    <div
      class="p-3 text-sm text-blue-400 cursor-pointer hover:bg-gray-100 dark:hover:bg-dim-300"
      :class="defaultTransition"
    >
      Show more
    </div>
  </div>
</template>

<script setup lang="ts">
const { customBorderColor, defaultTransition } = useTailwindConfig();
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
