<template>
  <div class="app-menu-wrapper">
    <div class="app-burger-menu-wrapper" :class="{'app-burger-menu--active': isOpened}">
      <ul class="app-burger-menu">
        <li v-for="(item, key) in menuItems"
          :key="key"
          class="app-burger-menu-item">
          <a href="#" class="app-burger-menu-item-link">{{item}}</a>
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
        "Home",
        "Profile",
        "Employee",
        "Contacts"
      ]
    };
  },
  methods: {
    onMenuClick() {
      this.isOpened = !this.isOpened;
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
    right: 10%;
    top: 20px;
  }

  .app-burger-menu {
    list-style: none;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.5em;
    margin: auto;
  }

  .app-burger-menu-item {
    text-align: center;
    margin-top: 35%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.5em;
  }

  .app-burger-menu-link {
    display: block;
    width: 50px;
    height: 50px;
    background-color: #959595;
    border-radius: 25px;
    margin-left: 70%;
    margin-top: 5%;
    position: relative;
  }

  .app-burger-menu-line, .app-burger-menu-line::after, .app-burger-menu-line::before {
    display: block;
    width: 30px;
    height: 2px;
    background-color: #fafafa;
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
  }

  .app-burger-menu-wrapper.app-burger-menu--active {
    visibility: visible;
    opacity: 1;
  }

  .app-burger-menu-wrapper {
    position: fixed;
    width: 100%;
    height: 100vh;
    left: 0;
    background-color: #959595;
    display: flex;
  }

  .app-burger-menu-item-link{
    text-decoration: none; 
    color: #fafafa;
    cursor: pointer;
  }

  .app-burger-menu-item-link:hover {
    color: #000;
    transition: 0.5s;
  }

</style>