import Vue from 'vue'
import App from './App.vue'
import store from "./store"
import {router} from "./router"
import axios from "axios"


new Vue({
  el: '#app',
  store,
  axios,
  router,
  render: h => h(App),
})
