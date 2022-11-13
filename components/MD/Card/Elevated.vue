<template>
  <div class="bg-light-surface dark:bg-dark-surface rounded-xl m-2">
    <!--Picture Slot-->
    <div class="">
      <slot name="image" />
    </div>
    <div
      class="bg-light-surface dark:bg-dark-surface px-4 rounded-b-xl shadow-xl"
    >
      <!--Title Slot-->
      <div
        class="text-light-textColor dark:text-dark-textColor text-3xl font-semi-bold pt-2"
      >
        <slot name="headline" />
      </div>

      <!--Subtitle Slot-->
      <div
        class="text-light-textColor dark:text-dark-textColor font-semibold pb-2"
      >
        <slot name="subhead" />
      </div>

      <!--Text Slot-->
      <div>
        <slot name="text" />
      </div>
      <!--Buttons Slot-->
      <div class="py-2 flex justify-end">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
