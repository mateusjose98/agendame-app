// Components
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "@/plugins/yup";
import "@/plugins/axios";
import pinia from "@/plugins/pinia"
// Composables
import { createApp } from "vue";
import "@/scss/style.scss";
import axios from "axios";



const app = createApp(App);


axios.get("usuario/me").finally((response) => {
  console.log(response)
  app.use(pinia)
  app.use(router);
  app.use(vuetify);
  app.mount("#app");
});


