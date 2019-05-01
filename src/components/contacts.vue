<template>
  <div>
    <gallery></gallery>
    <div class="app-contacts-line"></div>
    <section class="app-contacts-map-wrapper">
      <p class="app-contacts-map-paragraph">Find us</p>
      <div class="app-map-wrapper" id="map"></div>
    </section>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from './common/footer';
import Gallery from './common/gallery';
  export default {
    name: 'contacts',
    components: {
      AppFooter, Gallery
    },
    data () {
      return {
        title: "Contacts",
        itemParagraphs: [
          'E-mail: progstudio@gmail.com',
          'Phone:  +38(044)365600',
          'Adress: Pobedi avenue 36b'
        ],
        mounted: function () {
        },
        name: 'map'
      }
    },
    mounted() {
      const center = {
        lat: 50.4495911,
        lng: 30.4559864
      };
      const map = new google.maps.Map(document.getElementById('map'), {
        center,
        scrollwheel: false,
        zoom: 17
      });
      const marker = new google.maps.Marker({
        position: center,
        map,
        title: 'We are here!'
      });
    }
  }
</script>

<style scoped>

  .app-contacts-line {
    width: 20%;
    height: 3px;
    background-color: #959595;
    margin: 0 auto;
    margin-top: 3%;
  }

  .app-contacts-map-paragraph {
    text-align: center;
    color: #959595;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 2em;
  }

  .app-map-wrapper {
    height: 400px;
  }
</style>