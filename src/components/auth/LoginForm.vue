<script setup>
import { ref } from 'vue';
import axios from 'axios';
const checkbox = ref(true);
const email = ref('');
const pass = ref('');
const feedback = ref('');
const loading = ref(false)
const rules = {
    required: value => !!value || 'Obrigatório.',
    counter: value => value.length <= 40 || 'Máximo de 40 caracteres!',
    email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Email inválido'
    },
}
function login() {
    loading.value = true;
    feedback.value = '';
    axios.post('http://localhost:8080/api/auth', {
        email: email.value,
        password: pass.value
    }).catch((error) => {
        feedback.value = 'Email e/ou senha inválidos!'
    }).finally(
        () => {
            loading.value = false;
        }
    );
}

</script>


<template>

    <v-alert v-if="feedback" color="error" class="mb-2 px-5">{{ feedback }}</v-alert>
    <v-form @submit.prevent="login">
        <v-row class="d-flex mb-3">
            <v-col cols="12">
                <v-label class="font-weight-bold mb-1">E-mail</v-label>
                <v-text-field :rules="[rules.required, rules.email]" v-model="email" variant="outlined"
                    color="primary"></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-label class="font-weight-bold mb-1">Senha</v-label>
                <v-text-field :rules="[rules.required]" v-model="pass" variant="outlined" type="password"
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
                <v-btn :loading="loading" type="submit" color="primary" size="large" block flat>Entrar</v-btn>
            </v-col>
        </v-row>
    </v-form>

</template>
