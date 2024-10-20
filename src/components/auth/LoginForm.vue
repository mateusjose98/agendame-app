<template>

    <v-alert v-if="feedback" color="error" class="mb-2 px-5">{{ feedback }}</v-alert>

    <v-form @submit.prevent="submit">
        <v-row class="d-flex mb-3">
            <v-col cols="12">
                <v-label class="font-weight-bold mb-1">E-mail</v-label>
                <v-text-field 
                    :error-messages="username.errorMessage.value"
                    v-model="username.value.value" 
                    variant="outlined"
                    color="primary">
                </v-text-field>
                    <div>
        
        </div>
            </v-col>
            <v-col cols="12">
                <v-label class="font-weight-bold mb-1">Senha</v-label>
                <v-text-field 
                :error-messages="password.errorMessage.value" 
                v-model="password.value.value" variant="outlined" type="password"
                    color="primary"></v-text-field>
            </v-col>
            <v-col cols="12" class="pt-0">
                <div class="d-flex flex-wrap align-center ml-n2">

                    <div class="ml-sm-auto">
                        <RouterLink to="/"
                            class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium">Esqueceu
                            sua
                            senha?
                        </RouterLink>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" class="pt-0">
                <v-btn :loading="isSubmiting" type="submit" color="primary" size="large" block flat>Entrar</v-btn>
            </v-col>
            
        </v-row>
        
    </v-form>
   
</template>

<script setup>

import { ref } from 'vue';
import axios from 'axios';
import { object, string } from 'yup';
import { useForm, useField, defineRule } from "vee-validate";
import {useRouter} from 'vue-router';
const checkbox = ref(true);
const feedback = ref('');
const router = useRouter();

const { handleSubmit, isSubmiting } = useForm({
    validationSchema: object({
        username: string().required().label('E-mail'),
        password: string().required().label('Senha'),
    })
  });

const username = useField('username');
const password = useField('password');

const submit = handleSubmit(async (values) => {
    await login(values)
})

const login = async (values) => {
    try {
      const response = await axios.post('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', values)
      console.log(response)
      router.push({name: 'Dashboard'})
    } catch (error) {
      feedback.value = 'E-mail ou senha inválidos.'
    }
  }
</script>