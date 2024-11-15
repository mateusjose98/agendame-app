
<template>
    <v-row>
        <v-col cols="12">
          <pre>{{authStore.user}}</pre>
          <pre>{{authStore.isLoggedIn}}</pre>
        </v-col>

        <v-col class="text-center mt-2">
            <p class="text-muted">Design and Developed by <a class="pl-1 text-primary" flat href="https://adminmart.com/" target="_blank" variant="text">AdminMart.com</a></p>
        </v-col>
    </v-row>
</template>

<script setup >
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();
</script>
