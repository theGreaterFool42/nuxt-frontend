<template>
  <button @click="$emit('click')">
    <div
      class="bg-light-surfaceVariant dark:bg-dark-surfaceVariant rounded-full px-6 shadow-md text-light-primary dark:text-dark-primary"
    >
      <slot />
    </div>
  </button>
</template>

<script setup lang="ts">
const emits = defineEmits(['click']);
</script>
