<template>
    <div class="flex flex-col h-screen">
        <div mt-2 space-y-3>
            <SidebarLeftTab active>
                <template v-slot:icon>
                    <HomeIcon />
                </template>
                <template v-slot:name>Home</template>
            </SidebarLeftTab>

            <SidebarLeftTab>
                <template v-slot:icon>
                    <UserIcon />
                </template>
                <template v-slot:name>Login</template>
            </SidebarLeftTab>

            <SidebarLeftTab>
                <template v-slot:icon>
                    <CloudIcon />
                </template>
                <template v-slot:name>PlantOverview</template>
            </SidebarLeftTab>

            <SidebarLeftTab>
                <template v-slot:icon>
                    <CogIcon />
                </template>
                <template v-slot:name>Settings</template>
            </SidebarLeftTab>

            <SidebarLeftTab>
                <template v-slot:icon>
                    <DocumentIcon />
                </template>
                <template v-slot:name>Logout</template>
            </SidebarLeftTab>
        </div>
    </div>
</template>

<script setup>
import { HomeIcon, UserIcon, CloudIcon, CogIcon, DocumentIcon } from "@heroicons/vue/24/solid"

const { defaultTransition } = useTailwindConfig();

</script>