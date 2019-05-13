<template>
  <div class="app-profile">
    <content class="app-profile-content">
      <aside class="app-profile-aside">
        <div id='app-profile-image'></div>
        <input type='file' id='getval'/>
        <label for="getval" class="app-btn app-btn--success app-btn-upload"><span>Upload New</span></label>
      </aside>
      <section class="app-profile-section">
        <form class="app-profile-form" @submit="addNewLocation(name, dateBirth, univer, position, phone)">
          <label class="app-profile-field">
            Full Name<br class="app-profile-line">
            <input class="app-form-input app-profile-field-input" v-model="name" placeholder="Name and Sername"/>
          </label>
          <label class="app-profile-field">
            Date of Birth<br class="app-profile-line">
            <input class="app-form-input app-profile-field-input" v-model="dateBirth" type="date"/>
          </label>
          <label class="app-profile-field">
            University<br class="app-profile-line">
            <input class="app-form-input app-profile-field-input" v-model="univer" placeholder="Abbreviated name"/>
          </label>
          <label class="app-profile-field">
            Position<br class="app-profile-line">
            <input class="app-form-input app-profile-field-input" v-model="position" placeholder="Enter desired position"/>
          </label>
          <label class="app-profile-field">
            Phone Number<br class="app-profile-line">
            <input class="app-form-input app-profile-field-input" v-model="phone" placeholder="+38(0XX)XXXXXXX"/>
          </label>
          <p class="app-profile-save-btn-wrapper">
            <button class="app-btn app-btn--success app-profile-save" type="submit">Save</button>
          </p>
        </form>
      </section>
    </content>
    <section class="app-profile-skills">
        <h2 class="app-profile-skills-header">Choose your skills</h2>
        <div class="app-side-bar">
          <form class="app-side-form">
            <b-tabs pills card vertical class="app-side-bar-menu">
              <b-tab title="Frontend" active class="app-tabs">
                <b-card class="app-profile-card">
                  <div v-for="item in itemMenuFront" :key="item.id" class="app-side-bar-card">
                    <label :for="item.for"
                            class="app-side-bar-label">{{item.text}}</label>
                    <b-form-input :id="item.for"
                                  v-model="item.value"
                                  type="range"
                                  min="0"
                                  max="100"
                                  step="1"></b-form-input>
                    <div class="mt-2">Value: {{ item.value }}</div>
                  </div>
                </b-card>
               </b-tab>
              <b-tab title="Backend">
                <b-card class="app-profile-card">
                  <div v-for="item in itemMenuBack" :key="item.id" class="app-side-bar-card">
                    <label :for="item.for"
                            class="app-side-bar-label">{{item.text}}</label>
                    <b-form-input :id="item.for"
                                  v-model="item.value"
                                  type="range"
                                  min="0"
                                  max="100"
                                  step="1"></b-form-input>
                    <div class="mt-2">Value: {{ item.value }}</div>
                  </div>
                </b-card>
              </b-tab>
              <b-tab title="Data Bases">
                <b-card class="app-profile-card">
                  <div v-for="item in itemMenuData" :key="item.id" class="app-side-bar-card">
                    <label :for="item.for"
                           class="app-side-bar-label">{{item.text}}</label>
                    <b-form-input :id="item.for"
                                  v-model="item.value"
                                  type="range"
                                  min="0"
                                  max="100"
                                  step="1"></b-form-input>
                    <div class="mt-2">Value: {{ item.value }}</div>
                 </div>
                </b-card>
              </b-tab>
            </b-tabs>
            <p class="app-categories-save-btn-wrapper">
              <button class="app-btn app-btn--success app-side-save-button">Save</button>
            </p>
        </form>
    </div>
    </section>
  </div>
</template>

<script>
import firebase from 'firebase';
import { db } from '../main.js';

export default {
  name: 'profile',
  data () {
    return {
      title: "Profile",
      locations: [],
      name: '',
      dateBirth: '',
      univer: '',
      position: '',
      phone: '',
      value: '50',
      itemMenuFront: [
        {
          text: 'HTML', for: 'range-1', value: ''
        },
        {
          text: 'CSS', for: 'range-2', value: ''
        },
        {
          text: 'JavaScript', for: 'range-3', value: ''
        },
        {
          text: 'Vue JS', for: 'range-4', value: ''
        },
        {
          text: 'Angular 2+', for: 'range-5', value: ''
        },
        {
          text: 'React JS', for: 'range-6', value: ''
        }
      ],
      itemMenuBack: [
        {
          text: 'Java', for: 'range-7', value: ''
        },
        {
          text: 'Python', for: 'range-8', value: ''
        },
        {
          text: 'Ruby', for: 'range-9', value: ''
        },
        {
          text: 'C/C++', for: 'range-10', value: ''
        },
        {
          text: 'PHP', for: 'range-11', value: ''
        },
        {
          text: 'NodeJS', for: 'range-12', value: ''
        }
      ],
      itemMenuData: [
        {
          text: 'Mongo BD', for: 'range-13', value: ''
        },
        {
          text: 'SQLS', for: 'range-14', value: ''
        },
        {
          text: 'Oracle', for: 'range-15', value: ''
        }
      ]
    }
  },
  firestore () {
   return {
     locations: db.collection('locations').orderBy('name')
   }
  },
  methods: {
    valueChanged(v) {
        console.log(`New value: ${v}`);
    },
    addNewLocation(name, dateBirth, univer, position, phone) {
      db.collection('locations').add({ name, dateBirth, univer, position, phone });

      location.reload();
    }
  },
  mounted() {
    document.getElementById('getval').addEventListener('change', readURL, true);
		function readURL(){
   		var file = document.getElementById("getval").files[0];
   		var reader = new FileReader();
   		reader.onloadend = function(){
      	document.getElementById('app-profile-image').style.backgroundImage = "url(" + reader.result + ")";
      }
   		if(file){
      	reader.readAsDataURL(file);
    	}else{
   		}
		}
  }
}
</script>

<style lang="scss">

  .app-profile-line {
    display: none;
  }

  .app-profile .app-profile-button {
    margin-left: 100px;
  }

  .app-profile {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
  }

  .app-btn .app-profile-save {
    width: 250px;
  }

  .app-profile-content {
    width: 100%;
    display: flex;
    flex: 1 0 auto;
  }

  .app-profile-aside {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: end;
  }

  .app-profile-btn-wrapper {
    margin-top: 10px;
  }

  .app-profile-btn {
    width: 50% !important;
  }

  .app-profile-aside-image {
    width: 100%;
  }

  .app-profile-section {
    width: 70%;
  }

  .app-profile-form {
    display: flex;
    flex-direction: column;
    justify-self: center;
    box-sizing: border-box;
    padding: 0 15px;
  }

  .app-profile-field {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    white-space: nowrap;

    .app-profile-field-input {
      width: 300px;
      margin-left: 15px;
    }
  }

  .app-profile-save-btn-wrapper {
    width: 50%;
    text-align: center;
  }

  .app-profile-skills-header {
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 2em;
    margin-top: 30px;
    margin-bottom: 30px;
    color: #959595;
  }

  .app-profile-card {
    border: none;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  .app-side-bar-card {
    border-bottom: 1px solid #959595;
  }

  .app-side-bar-card:first-of-type {
    border-top: 1px solid #959595;
  }

  .app-side-bar {
    margin-bottom: 30px;
  }

  .app-side-bar-label {
    color: #959595;
    width: 100%;
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.5em;
    margin-top: 5px;
  }

  .mt-2 {
    color: #959595;
  }

  #app-profile-image{
   background-image: url('');
   background-size:cover;
   background-position: center;
   height: 250px; 
   width: 250px;
   border: 1px solid #bbb;
  }

  input[type='file'] {
    color: transparent;
    width: 102px;
    margin-right: 85px;
    margin-top: 20px;
  }

  #getval {
    display: none;
  }

  .app-categories-save-btn-wrapper {
    width: 100%;
    display: grid;
    justify-content: center;
    margin-top: 10px;
  }

  .app-categories-save-btn-wrapper .app-side-save-button {
    width: 300px;
  }

  .app-profile-aside .app-btn-upload {
    width: 250px;
    margin-top: 20px;
  }

  @media screen and (min-width: 1200px) {
    #app-profile-image {
      width: 300px;
      height: 310px;
    }

    .app-profile-aside .app-btn-upload {
      width: 300px;
    }

    .app-profile-field .app-profile-field-input {
      width: 400px;
    }

    .app-profile-field {
      margin-top: 10px;
    }

  }

  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    .app-profile-content {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    .app-profile-line {
      display: none;
    }

    .app-profile-form {
      display: flex;
      flex-direction: column;
      justify-self: center;
      box-sizing: border-box;
      padding: 0 15px;
    }

    .app-profile-field {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      white-space: nowrap;

      .app-profile-field-input {
        width: 300px;
      }
    }

    .app-profile-aside {
      width: 100%;
    }

    .app-profile-section {
      width: 100%;
    }

    .app-profile-aside #app-profile-image {
      width: 250px;
      margin: 0 auto;
    }

    .app-profile-aside .app-btn-upload {
      margin: 0 auto;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }

  @media only screen and (min-width: 420px) and (max-width: 768px) {
    .app-profile {
      width: 90%;
    }

    .app-profile-line {
      display: block;
    }

    .app-profile-field {
      width: 100%;
      display: inline-block;
      text-align: center;
      .app-profile-field-input {
        width: 250px;
        margin: 0 auto;
      }
    }
    
    .app-profile-content {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    .app-profile-aside {
      width: 100%;
    }

    .app-profile-section {
      width: 100%;
    }

    .app-profile-aside #app-profile-image {
      width: 250px;
      margin: 0 auto;
    }

    .app-profile-aside .app-btn-upload {
      margin: 0 auto;
      margin-top: 20px;
      margin-bottom: 20px;
    }

    .app-profile-save-btn-wrapper {
      width: 300px;
      margin: 0 auto;
    }
  }

   @media only screen and (max-width: 420px) {
     .app-side-bar {
       margin-bottom: 90px;
     }

     .col-auto .nav {
       width: 100%;
     }

     .app-profile {
      width: 90%;
    }

    .app-profile-line {
      display: block;
    }

    .app-profile-field {
      width: 100%;
      display: inline-block;
      text-align: center;
      .app-profile-field-input {
        width: 100%;
        margin: 0 auto;
      }
    }

    .app-profile-content {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    .app-profile-aside {
      width: 100%;
    }

    .app-profile-section {
      width: 100%;
    }

    .app-profile-aside #app-profile-image {
      width: 250px;
      margin: 0 auto;
    }

   .app-profile-aside .app-btn-upload {
      margin: 0 auto;
      margin-top: 20px;
      margin-bottom: 20px;
      width: 90%;
    }

    .app-profile-save-btn-wrapper {
      width: 100%;
    }

    .app-categories-save-btn-wrapper {
      width: 100%;
      display: grid;
      justify-content: center;
      margin-top: 10px;
    }

    .app-categories-save-btn-wrapper .app-side-save-button {
      width: 250px;
    }
  }

  
</style>
