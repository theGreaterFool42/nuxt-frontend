<template>
  <div>
    <div class="pt-5 space-y-6">
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
      <div>
        <button @click="handleLogin">SignUp</button>
      </div>
    </div>
  </div>
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
  const { signUp } = useAuth();
  data.loading = true;
  try {
    signUp({
      ...data,
    });
  } catch (error) {
  } finally {
    data.loading = false;
  }
}
</script>
