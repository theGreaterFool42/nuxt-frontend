<template>
  <div class="flex flex-col h-screen">
    <div mt-2 space-y-3>
      <SidebarLeftTab active link="/">
        <template v-slot:icon>
          <HomeIcon />
        </template>
        <template v-slot:name>Home</template>
      </SidebarLeftTab>

      <SidebarLeftTab link="/sign/authPage">
        <template v-slot:icon>
          <UserIcon />
        </template>
        <template v-slot:name>Login</template>
      </SidebarLeftTab>

      <SidebarLeftTab link="/plantOverview">
        <template v-slot:icon>
          <CloudIcon />
        </template>
        <template v-slot:name>PlantOverview</template>
      </SidebarLeftTab>

      <SidebarLeftTab link="/settings">
        <template v-slot:icon>
          <CogIcon />
        </template>
        <template v-slot:name>Settings</template>
      </SidebarLeftTab>

      <SidebarLeftTab link="/signOut">
        <template v-slot:icon>
          <ArrowLeftOnRectangleIcon />
        </template>
        <template v-slot:name>Logout</template>
      </SidebarLeftTab>
      <SidebarLeftDarkModeButton>
        <template v-slot:name>DarkMode</template>
      </SidebarLeftDarkModeButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  HomeIcon,
  UserIcon,
  CloudIcon,
  CogIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/vue/24/solid';
</script>
