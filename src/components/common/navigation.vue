<template>
  <nav class="app-navigation">
    <ul class="app-navigation-wrapper">
      <li v-for="item in menuItems"
          :key="item.key"
          :id="item.id"
          class="app-navigation-item"
          @mouseover="item.hovered = true"
          @mouseout="item.hovered = false"
          @mousedown="item.actived = true"
          @mouseup="item.actived = false"><router-link href="#" class="app-navigation-item-link" :to="item.to">{{item.text}}</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'navigation',
  data() {
    return {
      menuItems: [
        {text: "Home", id: "firstItem", to: "/home"},
        {text: "Profile", id: "secondItem", to: "/profile"},
        {text: "Employee", id: "thirdItem", to: "/employee"},
        {text: "Contacts", id: "fourthItem",to: "/contacts"}
      ]
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  .app-navigation {
    margin-left: 70%;
  }

  .app-navigation-wrapper {
    width: 500px;
    height: 50px;
    display: flex;
    list-style: none;
    padding: 0;
  }

  .app-navigation-item {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 50px;
    text-align: center;
    flex: 1 0 0;
    justify-items: center;
    position: relative;
    background-color: #fff;
  }

  .app-navigation-item-link:hover {
    color: #01AFB0;
  }

  .app-navigation-item-link {
    text-decoration: none;
    color: #959595;
  }

  .router-link-active {
    color: #F38524;
  }
</style>