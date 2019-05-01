<template>
  <header class="app-header">
    <a class="app-header-logo" href="/">Internal Rank Manager</a>
    <navigation class="app-header-navigation"/>
    <button v-for="item in battonMenu"
            :key="item.id"
            :type="item.type"
            class="app-header-sign">
      <router-link :to="item.to" href="#" class="app-navigation-item-link">{{item.text}}</router-link>
    </button>
  </header>
</template>

<script>
import Navigation from './common/navigation'

export default {
  name: "app-header",
  components: {
    Navigation
  },
  data() {
    return {
      battonMenu: [
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

<style scoped>
  .app-header {
    display: flex;
    width: 100%;
    height: 90px;
    position: relative;
  }
  
  .app-header-logo {
    font-family: 'Indie Flower', cursive, sans-serif;
    font-size: 2em;
    font-weight: 600;
    padding-top: 20px;
    padding-left: 5%;
    text-decoration: none;
    color: inherit;
    white-space: nowrap;
  }

  .app-header-navigation {
    position: absolute;
    top: 20px;
    right: 25%;
    flex: 1 0 0;
  }

  .app-header-sign {
    position: absolute;
    width: 100px;
    height: 35px;
  }

  .app-header-sign:first-of-type {
    right: 180px;
    top: 30px;
    background-color: #fff;
    border: 1px solid #01AFB0;
    border-radius: 5px;
  }

  .app-header-sign:first-of-type .app-navigation-item-link {
    color: #01AFB0;
  }

  .app-header-sign:last-of-type {
    right: 5%;
    top: 30px;
    background-color: #01afb0;
    border: 1px solid #01AFB0;
    border-radius: 5px;
  }

  .app-header-sign:first-of-type:hover {
    border: 1px solid #F38524;
    transition: 0.5s;
  }

  .app-header-sign:first-of-type:hover .app-navigation-item-link {
    color: #F38524;
    transition: 0.5s;
  }

  .app-header-sign:last-of-type:hover {
    background-color: #F38524;
    border: 1px solid #F38524;
    transition: 0.5s;
  }

  .app-header-sign:last-of-type .app-navigation-item-link {
    color: #fff;
  }

  .app-navigation-item-link {
    text-decoration: none;
  }
</style>

