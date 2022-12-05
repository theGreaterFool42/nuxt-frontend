<template>
  <div
    class="p-3 hover:bg-light-primaryContainer dark:hover:bg-dim-300 cursor-pointer"
    :class="wrapperClasses"
  >
    <slot></slot>
  </div>
</template>
<script setup>
const { defaultTransition, customBorderColor } = useTailwindConfig();

const wrapperClasses = computed(
  () => `${defaultTransition} ${customBorderColor}`
);
</script>
