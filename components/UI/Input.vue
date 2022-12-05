<template>
  <div>
    <label
      for=""
      v-if="props.label"
      class="block pl-3 ml-px text-sm font-medium text-gray-700"
    >
      {{ props.label }}</label
    >
    <div class="mt-1">
      <input
        class="block px-4 w-full border-gray-300 rounded-full shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
