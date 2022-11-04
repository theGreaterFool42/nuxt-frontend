<template>
  <div
    class="m-2 border rounded-2xl bg-gray-50 dark:bg-dim-700 overflow-hidden"
    :class="customBorderColor"
  >
    <h1
      class="p-3 text-xl font-extrabold text-gray-900 dark:text-white border-b"
      :class="customBorderColor"
    >
      {{ props.title }}
    </h1>
    <slot></slot>
    <div
      class="p-3 text-sm text-blue-400 cursor-pointer hover:bg-gray-100 dark:hover:bg-dim-300"
      :class="defaultTransition"
      @click="register('Keks')"
    >
      Show more
    </div>
  </div>
</template>

<script setup lang="ts">
import { register } from '~~/server/db/user';

const { customBorderColor, defaultTransition } = useTailwindConfig();
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
const hello = () => {
  console.log('Hallo');
};

const localRegister = async (username: string) => {
  console.log(username);
  try {
    const res = await $fetch<unknown>('url', {
      method: 'POST',
      body: { username },
    });
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};
</script>
