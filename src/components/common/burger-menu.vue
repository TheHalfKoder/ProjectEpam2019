<template>
  <div class="app-menu-wrapper">
    <div class="app-burger-menu-wrapper" :class="{'app-burger-menu--active': isOpened}">
      <ul class="app-burger-menu">
        <li v-for="(item, key) in menuItems"
          :key="key"
          class="app-burger-menu-item"
          @click="reloadPage">
          <router-link href="#" class="app-burger-menu-item-link" :to="item.to">{{item.text}}</router-link>
        </li>
      </ul>
    </div>
    <div class="app-burger-menu-button" @click="onMenuClick">
      <a href="#" class="app-burger-menu-link" :class="{'app-burger-menu-button--active': isOpened}">
        <span class="app-burger-menu-line"></span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'burger-menu',
  data() {
    return {
      isOpened: false,
      menuItems: [
        {
          text: "Home", to: "/"
        },
        {
          text: "Profile", to: '/profile'
        },
        {
          text: "Employee", to: "/employee"
        },
        {
          text: "Contacts", to: "/contacts"
        }
      ]
    };
  },
  methods: {
    onMenuClick() {
      this.isOpened = !this.isOpened;
    },
    reloadPage() {
      window.location.reload();
    }
  }
}
</script>

<style scoped>
  .app-menu-wrapper {
    position: relative;
    z-index: 9999;
    display: grid;
    grid-template-areas: 'app-burger-menu app-burger-menu-button';
    grid-template-columns: 60%, 20%;
  }

  .app-burger-menu-button {
    position: absolute;
    right: 15%;
    top: -30px;
  }

  .app-burger-menu {
    list-style: none;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1em;
  }

  .app-burger-menu-item {
    text-align: center;
    margin-top: 20%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.5em;
  }

  .app-burger-menu-link {
    position: relative;
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    left: 100%;
  }

  .app-burger-menu-line, .app-burger-menu-line::after, .app-burger-menu-line::before {
    display: block;
    width: 30px;
    height: 2px;
    background-color: #000;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -15px;
    margin-top: -1px;
    transition: all 0.5s;
  }

  .app-burger-menu-line::after {
    content: '';
    transform: translateY(7px);
  }

  .app-burger-menu-line::before {
    content: '';
    transform: translateY(-7px);
  }

  .app-burger-menu-link.app-burger-menu-button--active .app-burger-menu-line::before {
    width: 30px;
    transform: rotate(-45deg);
  }

  .app-burger-menu-link.app-burger-menu-button--active .app-burger-menu-line::after {
    width: 30px;
    transform: rotate(45deg);
  }

  .app-burger-menu-link.app-burger-menu-button--active .app-burger-menu-line {
    background-color: transparent;
  }

  .app-burger-menu-wrapper {
    visibility: hidden;
    opacity: 0;
    position: fixed;
    width: 100%;
    height: 90vh;
    left: 0;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .app-burger-menu-wrapper.app-burger-menu--active {
    visibility: visible;
    opacity: 1;
    margin-top: 30px;
  }

  .app-burger-menu-item-link{
    text-decoration: none; 
    color: #333;
    cursor: pointer;
  }

  .app-burger-menu-item-link:hover {
    color: #01afb0;
    transition: 0.5s;
  }

  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    .app-burger-menu-button {
      margin-right: 10%;
    }

    .app-burger-menu-item {
      margin-top: 0;
    }

    .app-burger-menu-item {
      font-size: 2em;
    }

    .app-burger-menu {
      width: 100%;
      margin: 0;
      margin-right: 20px;
    }
  }

  @media only screen and (min-width: 420px) and (max-width: 768px) {
    .app-burger-menu-button {
      right: 55%;
    }

    .app-burger-menu-item {
      margin-top: 10%;
    }
  }

  @media only screen and (max-width: 420px) {
    .app-burger-menu-button {
      margin-right: 10%;
    }

    .app-burger-menu-item {
      margin-top: 0;
    }

    .app-burger-menu-item {
      font-size: 1.5em;
    }

    .app-burger-menu {
      width: 100%;
      margin: 0;
      margin-right: 20px;
    }
  }

</style>