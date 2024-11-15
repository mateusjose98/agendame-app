<script setup>
import Logo from '@/layouts/full/logo/Logo.vue';
import { useAuthStore } from '@/stores/auth';
import {useRoute} from "vue-router";

const authStore = useAuthStore();
const route = useRoute()
const loading = ref(true)
const status = ref(null)
authStore.verifyEmail(route.query.token)
  .then((r) => {
    console.log('Email verificado' + route.query.token)
    if(r.data === true){
      status.value = 'success'
    } else {
      status.value = 'error'
    }
  })
  .catch(() => {
    console.log('Erro ao verificar email' + route.query.token)
    status.value = 'error'
  }).finally(() => {
    loading.value = false
  })


</script>
<template>
    <div class="authentication">
        <v-container class="pa-3" fluid>
            <v-row class="h-100vh d-flex justify-center align-center">
                <v-col class="d-flex align-center" cols="12" lg="4" xl="3">
                    <v-card class="px-sm-1 px-0 withbg mx-auto" elevation="10" max-width="500" rounded="md">
                        <v-card-item class="pa-sm-8">
                            <div class="d-flex justify-center py-4">
                                <Logo />
                            </div>
                            <div class="text-body-1 text-muted text-center mb-3"></div>

                          <v-alert :color="status" class="mb-2 px-5">{{status}}</v-alert>
                          <div v-if="loading" class="text-center">
                            <v-progress-circular class="mb-2" color="primary" indeterminate size="34"></v-progress-circular>
                          </div>
                        </v-card-item>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
