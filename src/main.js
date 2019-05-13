import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import firebase from 'firebase';
import VueFire from 'vuefire';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import BootstrapVue from 'bootstrap-vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import 'firebase/firestore'

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

Vue.use(VueFire)

let app;

const config = {
  apiKey: "AIzaSyCnY9FlzL2mFpI86lN06qu4p1ndKInBtxE",
  authDomain: "vue-router-4d41a.firebaseapp.com",
  databaseURL: "https://vue-router-4d41a.firebaseio.com",
  projectId: "vue-router-4d41a",
  storageBucket: "vue-router-4d41a.appspot.com",
  messagingSenderId: "671663880986"
};

const database = firebase.initializeApp(config);

export const db = firebase.firestore();

database.signUp = async (email, password) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    store.commit('setCurrentUser', firebase.auth().currentUser)

    return true
  } catch(error) {
    return error
  }
}

database.signIn = async (email, password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password)

    store.commit('setCurrentUser', firebase.auth().currentUser)

    return true
  } catch (error) {
    return error
  }
}

database.signOut = async () => {
  try {
    await firebase.auth().signOut()

    store.commit('setCurrentUser', null)
    return true
  } catch(error) {
      return error
  }
}

const initialize = () => {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app');
  }
};

firebase.auth().onAuthStateChanged(user => {
  if(user) {
    store.commit('setCurrentUser', user)
  } else {
    store.commit('setCurrentUser', null)
  }

  initialize()
})

export default database