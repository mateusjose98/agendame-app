<template>
  <v-alert v-if="feedbackMessage"
           class="mb-2 px-5"
           color="error">{{feedbackMessage}}</v-alert>
  <v-form @submit.prevent="submit">
    <v-row class="d-flex mb-3">

        <v-col cols="12">
          <v-label class="font-weight-bold mb-1">Nova senha</v-label>
          <v-text-field
            v-model="password.value.value"
            :error-messages="password.errorMessage.value" color="primary" type="password"
            variant="outlined"></v-text-field>
        </v-col>

      <v-col cols="12">
        <v-label class="font-weight-bold mb-1">Token recebido no email</v-label>
        <v-text-field
          v-model="token.value.value"
          :error-messages="token.errorMessage.value" color="primary" type="text"
          variant="outlined"></v-text-field>
      </v-col>

      <v-col class="pt-0" cols="12">
        <v-btn :loading="isSubmiting" block color="primary" flat size="large" type="submit">Go!</v-btn>
      </v-col>

    </v-row>

  </v-form>

</template>

<script setup>

import { object, string } from 'yup';
import { useForm, useField } from "vee-validate";
import {useRouter} from 'vue-router';
import {useAuthStore} from "@/stores/auth";
const router = useRouter();
const authStore = useAuthStore();

const { handleSubmit, isSubmiting } = useForm({
  validationSchema: object({
    password: string().required().label('Senha')
  }),
  initialValues: {
    password: '',
    token: ''
  }
});
const emit = defineEmits(['after-reset']);

const token = useField('token');
const password = useField('password');

const feedbackMessage = ref('');
const submit = handleSubmit(async (values) => {
  await forgotPassword(values)
})


const forgotPassword = async (values) => {
  feedbackMessage.value = null;
  await authStore.resetPassword(values)
    .then(() => {
      emit('after-reset');
    })
    .catch((error) => {
      feedbackMessage.value = error.response.data.message;
    });
}
</script>
