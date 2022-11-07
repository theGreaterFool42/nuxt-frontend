<template>
  <div class="flex h-screen">
    <div class="relative flex-1 hidden w-0 lg:block">
      <!--TODO: Put better background image here-->
      <img
        class="absolute inset-0 object-cover w-full h-full"
        src="/img/basil_img.jpg"
      />
    </div>
    <div
      class="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
    >
      <div class="flex items-center w-full h-full max-w-sm mx-auto lg:w-96">
        <SignInForm v-if="inOrUp.bool"></SignInForm>
        <SignUpForm v-else></SignUpForm>
      </div>
      <button
        @click="
          () => {
            if (inOrUp.bool) {
              inOrUp.text = 'Up';
              inOrUp.bool = !inOrUp.bool;
            } else {
              inOrUp.text = 'In';
              inOrUp.bool = !inOrUp.bool;
            }
          }
        "
      >
        Go to Sign {{ inOrUp.text }} Page
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
// const inOrUp = ref(false);
// const inOrUp = ref('In');
const inOrUp = reactive({
  bool: false,
  text: 'Up',
});
</script>
