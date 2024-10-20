// Utilities
import { defineStore } from 'pinia'
import axios from 'axios'
export const useAuthStore = defineStore('auth', {
  state: () => ({
      user: null,
  }),
  actions: {
    login(username, password) {
      return axios.post('json/jwt-auth/v1/token', {username, password}).then(response => {
        console.log(response.data)
        this.user = { 'email': response.data.user_email, 'name': response.data.user_display_name};
      })
    }
  },
  getters: {
    isLoggedIn: state => {
      return !!state?.user?.email
    }
  }
})
