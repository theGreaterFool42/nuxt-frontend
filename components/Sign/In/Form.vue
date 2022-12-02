<template>
  <MDCardElevated>
    <template v-slot:headline><h1>Sign in</h1></template>
    <template v-slot:text>
      <div class="pt-5 space-y-6 text-light-textColor">
        <UIInput
          v-model="data.email"
          label="Email"
          placeholder="name@e-mail.com"
        />
        <UIInput
          v-model="data.password"
          label="Password"
          placeholder="******"
          type="password"
        />
      </div>
    </template>
    <template v-slot:buttons>
      <MDButtonElevated @click="handleLogin">Submit</MDButtonElevated>
    </template>
  </MDCardElevated>
</template>

<script setup lang="ts">
const data = reactive({
  email: '',
  password: '',
  loading: false,
});

function handleLogin() {
  data.loading = true;
  try {
    loginWithEmail(data.email, data.password);
  } catch (error) {
  } finally {
    data.loading = false;
  }
}
</script>
