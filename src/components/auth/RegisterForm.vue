<script setup>
import { ref } from 'vue';


function submit() {
    console.log()
}

</script>

<template>
    <v-row class="d-flex mb-3">
        <v-form @submit.prevent="submit">
            <v-col cols="12">
                <v-label class="font-weight-bold mb-1">Nome</v-label>
                <v-text-field v-model="nome" variant="outlined" hide-details color="primary"></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-label class="font-weight-bold mb-1">Username</v-label>
                <v-text-field v-model="username" variant="outlined" hide-details color="primary"></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-label class="font-weight-bold mb-1">Data de nascimento</v-label>
                <v-date-input v-model="dataNascimento" label="" prepend-icon="" variant="outlined"
                    persistent-placeholder></v-date-input>
            </v-col>
            <v-col cols="12">
                <v-label class="font-weight-bold mb-1">E-mail</v-label>
                <v-text-field v-model="email" variant="outlined" type="email" hide-details
                    color="primary"></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-label class="font-weight-bold mb-1">Senha</v-label>
                <v-text-field v-model="senha" variant="outlined" type="password" hide-details
                    color="primary"></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-btn type="submit" color="primary" size="large" block flat>Registrar-se</v-btn>
            </v-col>
        </v-form>

    </v-row>
</template>
