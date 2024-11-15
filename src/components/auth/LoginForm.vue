<template>

    <v-alert v-if="feedback" class="mb-2 px-5" color="error">{{ feedback }}</v-alert>

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
            <v-col cols="12">
                <v-label class="font-weight-bold mb-1">Senha</v-label>
                <v-text-field
                v-model="password.value.value"
                :error-messages="password.errorMessage.value" color="primary" type="password"
                    variant="outlined"></v-text-field>
            </v-col>
            <v-col class="pt-0" cols="12">
                <div class="d-flex flex-wrap align-center ml-n2">

                    <div class="ml-sm-auto">
                        <RouterLink :to="{name: 'forgotPassword'}"
                            class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium" >Esqueceu
                            sua
                            senha?
                        </RouterLink>
                    </div>
                </div>
            </v-col>
            <v-col class="pt-0" cols="12">
                <v-btn :loading="isSubmiting" block color="primary" flat size="large" type="submit">Entrar</v-btn>
            </v-col>

        </v-row>

    </v-form>

</template>

<script setup>

import { ref } from 'vue';
import { object, string } from 'yup';
import { useForm, useField, defineRule } from "vee-validate";
import {useRouter} from 'vue-router';
import { useAuthStore } from "@/stores/auth";

const checkbox = ref(true);
const feedback = ref('');
const router = useRouter();
const authStore = useAuthStore();

const { handleSubmit, isSubmiting } = useForm({
    validationSchema: object({
        email: string().required().label('E-mail'),
        password: string().required().label('Senha'),
    }),
   initialValues: {
      email: 'josemateus.ufma@gmail.com',
      password: '123'
   }
  });

const email = useField('email');
const password = useField('password');

const submit = handleSubmit(async (values) => {
    await login(values)
})

const login = async (values) => {

      authStore.login(values.email, values.password)
        .then(res => {
          router.push({name: 'Dashboard'})
        })
        .catch(err => feedback.value = 'E-mail ou senha inválidos.');
  }
</script>
