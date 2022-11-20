<template>
  <MDCardElevated>
    <template v-slot:headline><h1>Sign in</h1></template>
    <template v-slot:text>
      <div class="pt-5 space-y-6">
        <UIInput
          v-model="data.username"
          label="Username"
          placeholder="@username"
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
  username: '',
  password: '',
  loading: false,
});

function handleLogin() {
  const { signIn } = useAuth();
  data.loading = true;
  try {
    signIn(data.username, data.password);
  } catch (error) {
  } finally {
    data.loading = false;
  }
}
</script>
