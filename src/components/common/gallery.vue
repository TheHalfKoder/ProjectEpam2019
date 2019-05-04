<template>
  <hooper :itemsToShow="1.25" :centerMode="true" class="app-gallery-wrapper">
    <slide class="app-gallery">
      <div class="app-gallery-image"></div>
    </slide>
    <slide class="app-gallery">
      <div class="app-gallery-image"></div>
    </slide>
    <slide class="app-gallery">
      <div class="app-gallery-image"></div>
    </slide>
    <slide class="app-gallery">
      <div class="app-gallery-image"></div>
    </slide>
    <slide class="app-gallery">
      <div class="app-gallery-image"></div>
    </slide>
  </hooper>
</template>

<script>
import { Hooper, Slide } from 'hooper';

export default {
  name: 'gallery',
  components: {
    Hooper,
    Slide
  }
}
</script>


<style scoped>
  .app-gallery-wrapper {
    width: 100%;
    height: 300px;
  }

  .app-gallery-image {
    background-repeat: no-repeat;
    background-size: 100%;
    height: 100%;
    width: 100%;
  }

  .app-gallery:nth-of-type(1) .app-gallery-image {
    background-image: url('../../assets/images/kyiv.jpg');
  }

  .app-gallery:nth-of-type(2) .app-gallery-image {
    background-image: url('../../assets/images/kyiv1.jpg');
  }

  .app-gallery:nth-of-type(3) .app-gallery-image {
    background-image: url('../../assets/images/kyiv2.jpg');
  }

  .app-gallery:nth-of-type(4) .app-gallery-image {
    background-image: url('../../assets/images/kyiv3.jpg');
  }

  .app-gallery:nth-of-type(5) .app-gallery-image {
    background-image: url('../../assets/images/kyiv4.jpg');
  }

  @media screen and (max-width: 900px){
    .app-gallery-image {
      background-size: 700px;
    }
  }
</style>
