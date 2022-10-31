<template>
    <NuxtLink to="#"
        class="flex items-center p-3 w-min rounded-full hover:bg-gray-200 dark:hover:bg-dim-200 text-black dark:text-white"
        :class="defaultTransition">
        <slot></slot>
        <div class="w-6 h-6 text-dark">
            <slot name="icon"></slot>
        </div>
        <div class="hidden ml-4 text-xl xl:block" :class="textClasses">
            <slot name="name"></slot>
        </div>
    </NuxtLink>
</template>

<script setup>
const { defaultTransition } = useTailwindConfig
const props = defineProps({
    active: {
        type: Boolean,
        default: false,
    }
})

const textClasses = computed(() => props.active ? 'font-semibold' : 'font-normal')
</script>