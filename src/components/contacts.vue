<template>
  <div class="app-contacts">
    <gallery></gallery>
    <div class="app-contacts-line"></div>
    <section class="app-contacts-map-wrapper">
      <p class="app-contacts-map-paragraph">Find us</p>
      <div class="app-map-wrapper">
        <google-map key111="AIzaSyBQnEOhZMd6BpSMRV13246gEDdI75gKBLc"></google-map>
      </div>
    </section>
  </div>
</template>

<script>
  import Gallery from './common/gallery';
  import GoogleMap from './common/google-map';

  export default {
    name: 'contacts',
    components: {Gallery, GoogleMap},
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

    }
  }
</script>

<style scoped>
  .app-contacts {
    width: 100%;
  }

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
