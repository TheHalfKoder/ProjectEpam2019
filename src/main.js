// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router'
import Axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import EditableText from "./components/common/editable-text";
import 'hooper/dist/hooper.css';

import firebase from 'firebase'

import BCarousel from '../node_modules/bootstrap-vue/es/components/carousel/carousel';
import BCarouselSlide from '../node_modules/bootstrap-vue/es/components/carousel/carousel-slide';
import BTable from "../node_modules/bootstrap-vue/es/components/table/table";

import BContainer from "../node_modules/bootstrap-vue/es/components/layout/container";
import BRow from '../node_modules/bootstrap-vue/es/components/layout/row';
import BCol from '../node_modules/bootstrap-vue/es/components/layout/col';
import BFormGroup from '../node_modules/bootstrap-vue/es/components/form-group/form-group';
import BFormInput from '../node_modules/bootstrap-vue/es/components/form-input/form-input';
import BInputGroup from '../node_modules/bootstrap-vue/es/components/input-group/input-group';
import BInputGroupAppend from '../node_modules/bootstrap-vue/es/components/input-group/input-group-append';
import BButton from '../node_modules/bootstrap-vue/es/components/button/button';
import BFormSelect from '../node_modules/bootstrap-vue/es/components/form-select/form-select';
import BPagination from '../node_modules/bootstrap-vue/es/components/pagination/pagination';
import BCard from '../node_modules/bootstrap-vue/es/components/card/card';
import BModal from '../node_modules/bootstrap-vue/es/components/modal/modal';

import BTab from '../node_modules/bootstrap-vue/es/components/tabs/tab';
import BTabs from '../node_modules/bootstrap-vue/es/components/tabs/tabs';
import BCardText from '../node_modules/bootstrap-vue/es/components/card/card-text';

import BPopover from '../node_modules/bootstrap-vue/es/components/popover/popover'

Vue.config.productionTip = false;
library.add(faPen);

Vue.prototype.$http = Axios;

Vue.component('b-carousel', BCarousel);
Vue.component('b-carousel-slide', BCarouselSlide);

Vue.component('b-table', BTable);
Vue.component('b-container', BContainer);
Vue.component('b-row', BRow);
Vue.component('b-col', BCol);
Vue.component('b-form-group', BFormGroup);
Vue.component('b-form-input', BFormInput);
Vue.component('b-input-group', BInputGroup);
Vue.component('b-input-group-append', BInputGroupAppend);
Vue.component('b-button', BButton);
Vue.component('b-form-select', BFormSelect);
Vue.component('b-pagination', BPagination);
Vue.component('b-modal', BModal);
Vue.component('b-card', BCard);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(EditableText);

Vue.component('b-tab', BTab);
Vue.component('b-tabs', BTabs);
Vue.component('b-card-text', BCardText);

Vue.component('b-popover', BPopover);

import '../node_modules/bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next()
});

let app = '';
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
      render: h => h(App)
    }).$mount('#app');
  }
})


