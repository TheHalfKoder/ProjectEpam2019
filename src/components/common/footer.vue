<template>
  <div class="app-footer">
    <p class="app-footer-name">&copy; Mameko Daria</p>
    <ul class="app-footer-menu">
      <li v-for="item in iconsMenu"
          :key="item.id"
          class="app-footer-menu-item">
          <a :id="item._id" class="app-footer-menu-link" :name="item.name" :href="item.href">
            <img :src="item.src"
                 :alt="item.alt"
                 class="app-footer-menu-icon">
          </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app-footer',
  data() {
    return {
      iconsMenu: [
        {
          src: 'https://img.icons8.com/metro/26/000000/facebook.png', 
          alt: 'Facebook', 
          name: 'fb_share',
          href: 'http://www.facebook.com/sharer.php?u=http://localhost:8080',
          _id: 'share'
        }
      ]
    }
  }
};

$('#share').popupWindow({ 
  width:550, 
  height:400,
  centerBrowser:1
});
</script>

<style scoped>
  .app-footer{
    position: relative;
    width: 100%;
    height: 90px;
    position: relative;
    left: 0;
    bottom: 0;
    display: flex;
    flex: 1 0 0;
  }

  .app-footer-name {
    color: #959595;
    width: 80%;
    margin-top: 40px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1em;
    padding-left: 100px;
  }

  .app-footer-menu {
    position: absolute;
    list-style: none;
    display: flex;
    flex: 1 0 0;
    margin-top: 40px;
    width: 20%;
    margin-left: 50%;
    padding: 0;
    right: 70px;
  }

  .app-footer-menu-item {
    padding-left: 20px;
  }
  
</style>
