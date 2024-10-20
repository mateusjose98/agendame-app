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
      return axios.post('api/auth', {username, password}).then(response => {
        console.log(response)
        this.user = response.data.user;
        this.token = response.data.token;

        localStorage.setItem('token', this.token);
        localStorage.setItem('user', JSON.stringify(this.user));
      })
    },

    checkToken() {
      return axios.get("usuarios/me").then(response => {
        alert(response.data)
      }).catch(
        (error) => {
          console.log(error)
        }
      )
    },

    clear() {
      this.user = null;
      this.token = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
  },
  getters: {
    isLoggedIn: state => {
      return !!state?.user?.username && !!state.token;
    }
  }
})
