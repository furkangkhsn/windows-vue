import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { dom, library } from "@fortawesome/fontawesome-svg-core";
import {
  faCog,
  faMicrophone,
  faBars,
  faUser,
  faPowerOff
} from "@fortawesome/free-solid-svg-icons";
import { faWindows } from "@fortawesome/free-brands-svg-icons";

library.add(faWindows, faCog, faMicrophone, faBars, faUser, faPowerOff);

dom.watch();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
