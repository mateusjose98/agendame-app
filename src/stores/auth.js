// Utilities
import { defineStore } from 'pinia'
import axios from 'axios'
export const useAuthStore = defineStore('auth', {
  state: () => ({
      user: null,
  }),
  actions: {
    login(username, password) {
      return axios.post('api/auth', {username, password}).then(response => {
        console.log(response)
        this.user = response.data;
      })
    }
  },
  getters: {
    isLoggedIn: state => {
      return !!state?.user?.email
    }
  }
})
