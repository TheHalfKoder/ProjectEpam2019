<template>
  <header class="app-header" id="application-header">
    <div class="app-logo-wrapper">
      <a class="app-header-logo" href="/">Internal Rank<br class="app-transparent"> Manager</a>
    </div>
    <template v-if="currentUser">
      <div class="app-nav-wrapper">
        <navigation class="app-header-navigation"/>
        <burger-menu class="app-burger-menu"></burger-menu>
      </div>
      <a class="app-btn app-btn--secondary app-header-action-btn" @click="signOut">Sign Out</a>
    </template>
    
  </header>
</template>

<script>
import Navigation from './navigation'
import database from './../../main.js'
import BurgerMenu from '../common/burger-menu'

export default {
  name: "app-header",
  components: {
    Navigation, BurgerMenu
  },
  data() {
    return {
      buttonMenu: [
        {
          type: "submit", to: '/login', text: 'Sign In'
        },
        {
          type: "submit", to: '/register', text: 'Sign Up'
        }
      ]
    }
  },
  computed: {
    currentUser () {
      return this.$store.state.currentUser
    }
  },
  methods: {
    async signOut () {
      await database.signOut()

      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang="scss">
  .app-transparent {
    display: none;
  }

  .app-header {
    display: flex;
    align-items: baseline;
    width: 100%;
    height: 90px;
    position: relative;
  }
  
  .app-header-logo {
    font-family: 'Indie Flower', cursive, sans-serif;
    font-size: 2em;
    font-weight: 600;
    text-decoration: none;
    color: inherit;
    white-space: nowrap;
  }

  .app-nav-wrapper {
    flex: 1 0 auto;

    .app-navigation {
      display: inline-block;
    }
  }

  .app-header-action-btn {
    width: 100px;
    margin: .5em;
  }

  .app-nav-wrapper .app-burger-menu {
    display: none;
  }

  @media screen and (min-width: 1200px)  {
    .app-header {
      display: flex;
      align-content: center;
      height: 100px;
    }

    .app-header-logo {
      width: 100%;
      font-size: 2.2em;
    }

    .app-header-action-btn {
      width: 10%;
      font-size: 1.1em;
    }

  }

  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    .app-nav-wrapper .app-header-navigation {
        display: none;
    }

    .app-nav-wrapper .app-burger-menu {
        display: flex;
    }
  }

  @media only screen and (min-width: 420px) and (max-width: 768px) {
    .app-nav-wrapper .app-header-navigation {
        display: none;
    }

    .app-nav-wrapper .app-burger-menu {
        display: flex;
    }

    .app-header {
      position: relative;
      height: 110px;
      width: 100%;
      display: grid;
      grid-template-areas: 'app-logo-wrapper app-logo-wrapper' 'app-nav-wrapper app-btn';
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }

    .app-logo-wrapper {
      width: 100%;
      grid-area: app-logo-wrapper;
    }

    .app-header-logo {
      display: inline;
      text-align: center;

    }

    .app-nav-wrapper {
      grid-area: app-nav-wrapper;
      position: absolute;
      left: 0;
      top: 35px;
    }

    .app-btn {
      grid-area: app-btn;
    }

    .app-header-action-btn {
      position: absolute;
      right: 0;
    }

  }

  @media only screen and (max-width: 420px) {
    .app-nav-wrapper .app-header-navigation {
        display: none;
    }

    .app-nav-wrapper .app-burger-menu {
        display: flex;
    }

    .app-header {
      height: 200px;
      width: 100%;
      display: grid;
      grid-template-areas: 'app-logo-wrapper app-logo-wrapper' 'app-nav-wrapper app-btn';
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }

    .app-logo-wrapper {
      width: 100%;
      grid-area: app-logo-wrapper;
    }

    .app-header-logo {
      display: inline;
      text-align: center;
    }

    .app-nav-wrapper {
      grid-area: app-nav-wrapper;
      top: 35px;
      position: absolute;
      left: 2%;
    }

    .app-btn {
      grid-area: app-btn;
    }

    .app-transparent {
      display: block;
    }

    .app-header-action-btn {
      position: absolute;
      right: 0;
    }
  }

</style>

