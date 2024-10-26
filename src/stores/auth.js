// Utilities
import { defineStore } from 'pinia'
import axios from 'axios'
export const useAuthStore = defineStore('auth', {


  state: () => ({
    user: null,
    token: null,
  }),
  actions: {
    login(username, password) {
      return axios.post('api/auth', { username, password }).then(response => {
        console.log(response)
        this.user = response.data.user.username;
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
  },
  getters: {
    isLoggedIn: state => {
      return !!state?.user && !!state.token;
    }
  }
})
