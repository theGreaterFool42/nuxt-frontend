<template>
  <div class="flex flex-col h-screen">
    <div mt-2 space-y-3>
      <SidebarLeftTab active link="/">
        <template v-slot:icon>
          <Icon name="material-symbols:home-outline" />
        </template>
        <template v-slot:name>Home</template>
      </SidebarLeftTab>

      <SidebarLeftTab link="/sign/authPage">
        <template v-slot:icon>
          <Icon name="mdi:user-outline" />
        </template>
        <template v-slot:name>Login</template>
      </SidebarLeftTab>

      <SidebarLeftTab link="/plantOverview">
        <template v-slot:icon>
          <Icon name="material-symbols:potted-plant-outline" />
        </template>
        <template v-slot:name>PlantOverview</template>
      </SidebarLeftTab>

      <SidebarLeftTab link="/settings">
        <template v-slot:icon>
          <Icon name="material-symbols:settings-outline" />
        </template>
        <template v-slot:name>Settings</template>
      </SidebarLeftTab>

      <SidebarLeftTab link="/signOut">
        <template v-slot:icon>
          <Icon name="material-symbols:logout" />
        </template>
        <template v-slot:name>Logout</template>
      </SidebarLeftTab>
      <SidebarLeftDarkModeButton>
        <template v-slot:name>DarkMode</template>
      </SidebarLeftDarkModeButton>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
