import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import firebase from 'firebase';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import BootstrapVue from 'bootstrap-vue';
import * as VueGoogleMaps from 'vue2-google-maps';

import "./styles/main.scss";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'hooper/dist/hooper.css';

Vue.config.productionTip = false;

Vue.use(FontAwesomeIcon);
Vue.use(BootstrapVue);
Vue.use(VueGoogleMaps, {
  key: 'AIzaSyBQnEOhZMd6BpSMRV13246gEDdI75gKBLc',
  libraries: 'places'
});

let app;

firebase.initializeApp({
  apiKey: "AIzaSyCnY9FlzL2mFpI86lN06qu4p1ndKInBtxE",
  authDomain: "vue-router-4d41a.firebaseapp.com",
  databaseURL: "https://vue-router-4d41a.firebaseio.com",
  projectId: "vue-router-4d41a",
  storageBucket: "vue-router-4d41a.appspot.com",
  messagingSenderId: "671663880986"
});

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app');
  }
});
