<script setup>

import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm.vue";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm.vue";
import { ref } from 'vue';


const state = ref('step1');



</script>

<template>

 <div>

   <ForgotPasswordForm v-if="state === 'step1'" @after-request="state = 'step2'" />
   <ResetPasswordForm v-if="state === 'step2'" @after-reset="state = 'step3'"/>
   <v-alert v-if="state === 'step3'"
            class="mb-2 px-5"
            color="success">Sucesso!</v-alert>
 </div>

</template>

<style scoped>

</style>
