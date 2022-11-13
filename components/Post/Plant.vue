<template>
  <MDCardElevated>
    <template v-slot:image>
      <img class="w-full rounded-xl" src="/img/tomato_small.png" />
    </template>
    <template v-slot:headline><h1>Headline</h1></template>
    <template v-slot:subhead><h2>Subhead</h2></template>
    <template v-slot:text>
      <p>Hier kommt eine ganze Menge Text hin.</p>
    </template>
    <template v-slot:buttons>
      <MDButtonElevated>Button</MDButtonElevated>
    </template>
  </MDCardElevated>
</template>

<script setup lang="ts"></script>
