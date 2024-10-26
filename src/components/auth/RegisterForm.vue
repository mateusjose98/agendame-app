
<template>

        <v-form autocomplete="off" @submit.prevent="submit">
            <v-col cols="12">
                <v-label class="font-weight-bold mb-1">Nome</v-label>
                <v-text-field v-model="nome.value.value"
                              :error-messages="nome.errorMessage.value" color="primary" hide-details variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-label class="font-weight-bold mb-1">Username</v-label>
                <v-text-field v-model="username.value.value"
                              :error-messages="username.errorMessage.value"  color="primary" hide-details variant="outlined"></v-text-field>
            </v-col>
<!--            <v-col cols="12">-->
<!--                <v-label class="font-weight-bold mb-1">Data de nascimento</v-label>-->
<!--                <v-date-input v-model="dataNascimento"-->
<!--                             label="" persistent-placeholder prepend-icon=""-->
<!--                    variant="outlined"></v-date-input>-->
<!--            </v-col>-->
            <v-col cols="12">
                <v-label class="font-weight-bold mb-1">E-mail</v-label>
                <v-text-field v-model="email.value.value"
                              :error-messages="email.errorMessage.value" color="primary" hide-details type="email"
                    variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-label class="font-weight-bold mb-1">Senha</v-label>
                <v-text-field v-model="senha.value.value"
                              :error-messages="senha.errorMessage.value"  color="primary" hide-details type="password"
                    variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-btn block color="primary" flat size="large" type="submit">Registrar-se</v-btn>
            </v-col>
        </v-form>

</template>

<script setup>


import { object, string } from 'yup';
import { useForm, useField } from "vee-validate";
import axios from "axios";


const { handleSubmit, isSubmiting } = useForm({
  validationSchema: object({
    nome: string().required().label('Nome'),
    username: string().required().label('Username'),
    email: string().required().label('E-mail'),
    senha: string().required().label('Senha')
  }),
  initialValues: {
    nome: '',
    username: '',
    email: '',
    senha: '',
  }
});
const nome = useField('nome');
const username = useField('username');
const email = useField('email');
const senha = useField('senha');


const submit = handleSubmit(async (values) => {
  await register(values)
})

const register = async (values) => {
  axios.post('/usuarios', values)
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.log(error)
    })
}

</script>

