<template>
  <v-alert v-if="feedbackMessage"
           class="mb-2 px-5"
           color="error">{{feedbackMessage}}</v-alert>
  <v-form @submit.prevent="submit">
    <v-row class="d-flex mb-3">
      <v-col cols="12">
        <v-label class="font-weight-bold mb-1">E-mail</v-label>
        <v-text-field
          v-model="email.value.value"
          :error-messages="email.errorMessage.value"
          color="primary"
          variant="outlined">
        </v-text-field>
        <div>

        </div>
      </v-col>
      <v-col class="pt-0" cols="12">
        <v-btn :loading="isSubmiting" block color="primary" flat size="large" type="submit">Solicitar reset</v-btn>
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
    email: string().required().label('E-mail')
  }),
  initialValues: {
    email: 'josemateus.ufma@gmail.com',
  }
});
const emit = defineEmits(['after-request']);
const email = useField('email');
const feedbackMessage = ref('');
const submit = handleSubmit(async (values) => {
  await forgotPassword(values)
})

const forgotPassword = async (values) => {
  feedbackMessage.value = null;
    await authStore.forgotPassword(values)
    .then(() => {
      emit('after-request');
    })
    .catch((error) => {
      feedbackMessage.value = error.response.data.message;
    });
}
</script>
