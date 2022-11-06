<template>
  <div>
    <div class="pt-5 space-y-6">
      <UIInput
        v-model="data.username"
        label="Username"
        placeholder="@username"
      />
      <h2>{{ data.password }}</h2>
      <UIInput
        v-model="data.password"
        label="Password"
        placeholder="******"
        type="password"
      />
      <div>
        <button @click="handleLogin">Login</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const data = reactive({
  username: '',
  password: '',
});

function handleLogin() {
  alert(JSON.stringify(data));
}
</script>
