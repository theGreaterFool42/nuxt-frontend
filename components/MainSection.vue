<template>
  <div class="border-x" :class="customBorderColor">
    <div
      class="sticky top-0 px-4 py-3 bg-light-background dark:bg-dark-background backdrop-blur-md"
    >
      <h2
        class="text-xl font-bold text-light-textColor dark:text-dark-textColor"
      >
        {{ props.title }}
      </h2>
    </div>
    <div
      v-if="loading"
      class="p-4 flex items-center justify-center border-b"
      :class="customBorderColor"
    >
      <UISpinner />
    </div>
    <div v-else>
      <slot> </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const { customBorderColor } = useTailwindConfig();

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  loading: {
    type: Boolean,
    required: true,
  },
});
</script>
