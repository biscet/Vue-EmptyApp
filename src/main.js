import Vue from "vue"
import App from "./App/app.vue"
import router from "./App/Router/index.js"
import store from "./App/Store/index.js"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
