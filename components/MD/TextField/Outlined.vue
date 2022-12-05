<template>
  <div>
    <label
      v-if="props.label"
      class="=block pl-3 ml-px text-sm font-medium text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant"
      >{{ props.label }}</label
    >
    <div class="mt-1">
      <input
        v-if="props.type === 'search'"
        class="block px-4 w-full border-light-outline dark:border-dark-outline rounded-full shadow-sm focus:ring-2 focus:ring-light-primary focus:border-light-primary dark:focus:ring-dark-primary dark:focus:border-dark-primary sm:text-sm"
        @input="(event) => emitInput(event)"
        :value="props.modelValue"
        :placeholder="props.placeholder"
        :type="props.type"
      />
      <input
        v-else
        class="block px-4 w-full border-light-outline dark:border-dark-outline rounded-full shadow-sm focus:ring-2 focus:ring-light-primary focus:border-light-primary dark:focus:ring-dark-primary dark:focus:border-dark-primary sm:text-sm"
        @input="(event) => emitInput(event)"
        :value="props.modelValue"
        :placeholder="props.placeholder"
        :type="props.type"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits(['update:modelValue']);
const props = defineProps({
  modelValue: { type: String, required: true },
  label: { type: String, default: null },
  placeholder: { type: String, default: '' },
  type: { type: String, default: 'text' },
});

function emitInput(event: Event) {
  const target = event.target as HTMLInputElement;
  emits('update:modelValue', target!.value);
}
</script>
