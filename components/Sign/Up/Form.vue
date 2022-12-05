<template>
  <MDCardElevated>
    <template v-slot:headline><h1>Sign up</h1></template>
    <template v-slot:text>
      <div class="pt-5 space-y-6 text-light-textColor">
        <UIInput v-model="data.name" label="Name" placeholder="Name" />
        <UIInput
          v-model="data.username"
          label="Username"
          placeholder="@username"
        />
        <UIInput
          v-model="data.email"
          label="Email"
          placeholder="name@e-mail.com"
          type="email"
        />
        <UIInput
          v-model="data.password"
          label="Password"
          placeholder="******"
          type="password"
        />
        <UIInput
          v-model="data.repeatPassword"
          label=" Repeat password"
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
  name: '',
  username: '',
  email: '',
  password: '',
  repeatPassword: '',
  loading: false,
});

function handleLogin() {
  data.loading = true;
  try {
    registerWithEmail(data.username, data.name, data.email, data.password);
  } catch (error) {
  } finally {
    data.loading = false;
  }
}
</script>
