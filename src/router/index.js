import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import home from '@/components/home'
import contacts from '@/components/contacts'
import employee from '@/components/employee'
import profile from '@/components/profile'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'


Vue.use(Router)
let router = new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'home'
      }
    },
    {
      path: '/login',
      name: 'SignIn',
      meta: {
        title: "Sign In",
      },
      component: SignIn
    },
    {
      path: '/register',
      name: 'SignUp',
      meta: {
        title: 'Sign Up',

      },
      component: SignUp
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        title: "Home",
        requiresAuth: true
      },
      component: home
    },
    {
      path: '/contacts',
      name: 'contacts',
      meta: {
        title: "Contacts",
        requiresAuth: true
      },
      component: contacts
    },
    {
      path: '/employee',
      name: 'employee',
      meta: {
        title: "Employee",
        requiresAuth: true
      },
      component: employee
    },
    {
      path: '/profile',
      name: 'profile',
      meta: {
        title: "Profile",
        requiresAuth: true
      },
      component: profile
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('home');
  else next();
});

export default router;
