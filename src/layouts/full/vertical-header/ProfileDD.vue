<script lang="ts" setup>
import { UserIcon, MailIcon, ListCheckIcon } from 'vue-tabler-icons';
import { useAuthStore } from "@/stores/auth";
import {useRouter} from "vue-router";
const authStore = useAuthStore();
const router = useRouter();

function logout () {
  authStore.clear();
  router.push({name: 'login'});

}

</script>

<template>
    <!-- ---------------------------------------------- -->
    <!-- notifications DD -->
    <!-- ---------------------------------------------- -->
    <v-menu :close-on-content-click="false">
        <template v-slot:activator="{ props }">
            <v-btn class="profileBtn custom-hover-primary" icon v-bind="props" variant="text">
                <v-avatar size="35">
                    <img alt="user" height="35" src="@/assets/images/users/avatar-1.jpg" />
                </v-avatar>
            </v-btn>
        </template>
        <v-sheet class="mt-2" elevation="10" rounded="md" width="200">
            <v-list class="py-0" density="compact" lines="one">
                <v-list-item color="primary" value="item1" >
                    <template v-slot:prepend>
                        <UserIcon size="20" stroke-width="1.5"/>
                    </template>
                    <v-list-item-title class="pl-4 text-body-1">My Profile</v-list-item-title>
                </v-list-item>
                <v-list-item color="primary" value="item2">
                    <template v-slot:prepend>
                        <MailIcon size="20" stroke-width="1.5"/>
                    </template>
                    <v-list-item-title  class="pl-4 text-body-1">My Account</v-list-item-title>
                </v-list-item>
                <v-list-item color="primary" value="item3">
                    <template v-slot:prepend>
                        <ListCheckIcon size="20"  stroke-width="1.5"/>
                    </template>
                    <v-list-item-title class="pl-4 text-body-1">My Task</v-list-item-title>
                </v-list-item>
            </v-list>
            <div class="pt-4 pb-4 px-5 text-center">
                <v-btn block color="primary" variant="outlined" @click="logout">Logout</v-btn>
            </div>
        </v-sheet>
    </v-menu>
</template>
