import Vue from 'vue';
import VueRouter from 'vue-router';
import RouterPrefetch from 'vue-router-prefetch'
import DashboardPlugin from './plugins/dashboard-plugin';
import App from './App.vue';
import io from "socket.io-client";
import VueSocketIO from "vue-socket.io";
import NetworkService from "./util/netservice";

// router setup
import router from './routes/router';
import i18n from './i18n';
import './registerServiceWorker'
// import VueMqtt from 'vue-mqtt';
// Vue.use(VueMqtt, 'wss://mqttsec.vectolabs.com', {clientId: 'WebClient-' + parseInt(Math.random() * 100000)});

//test
// var socket = new WebSocket(process.env.VUE_APP_WS_URL + ":8765")
// Vue.prototype.$socket = socket
// plugin setup
Vue.use(DashboardPlugin);
Vue.use(VueRouter);
Vue.use(RouterPrefetch);
Vue.prototype.$http = NetworkService;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  i18n
});
