<template>
  <header class="app-header">
    <div class="app-logo-wrapper">
      <a class="app-header-logo" href="/">Internal Rank Manager</a>
    </div>
    <div class="app-nav-wrapper">
      <navigation class="app-header-navigation"/>
    </div>
    <div class="app-actions-wrapper">
      <router-link to="/login" class="app-btn app-btn--secondary app-header-action-btn">Sign in</router-link>
      <router-link to="/register" class="app-btn app-btn--secondary app-header-action-btn">Sign up</router-link>
    </div>
  </header>
</template>

<script>
import Navigation from './navigation'

export default {
  name: "app-header",
  components: {
    Navigation
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
  }
}
</script>

<style scoped lang="scss">
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
</style>

