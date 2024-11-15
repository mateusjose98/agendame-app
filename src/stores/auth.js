// Utilities
import { defineStore } from 'pinia'
import axios from 'axios'
export const useAuthStore = defineStore('auth', {


  state: () => ({
    user: null,
    token: null,
  }),
  actions: {
    login(email, password) {
      return axios.post('api/auth', { email, password }).then(response => {
        console.log(response)
        this.user = response.data.user.email;
        this.token = response.data.token;

        localStorage.setItem('token', this.token);
        localStorage.setItem('user', JSON.stringify(this.user));
      })
    },

    checkToken() {
      return axios.get("usuarios/me").then(response => {
        console.log(response)
        this.user = response.data.principal.username
        this.token = localStorage.getItem('token')
      }).catch(
        (error) => {
          console.log(error)
          clear()
        }
      )
    },

    clear() {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.user = null;
      this.token = null;

    },
    verifyEmail(token) {
      return axios.get(`usuarios/verify-email?tk=${token}`);
    },
    forgotPassword(values) {
      return axios.post(`usuarios/forgot-password`, values);
    },
    resetPassword(values) {
      return axios.post(`usuarios/change-password`, {novaSenha: values.password, token: values.token});
    }
  },
  getters: {
    isLoggedIn: state => {
      return !!state?.user && !!state.token;
    }
  }
})
