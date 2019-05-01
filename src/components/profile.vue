<template>
  <div class="app-profile">
    <content class="app-profile-content">
      <aside class="app-profile-aside">
        <img alt="Your photo" src="../images/myPhoto.jpg" class="app-profile-aside-image">
        <input type="submit" value="Upload new" class="app-profile-aside-button">
        <button class="app-profile-aside-button" type="submit" @click="logout">Log out</button>
      </aside>
      <section class="app-profile-section">
        <form class="app-profile-form">
          <label v-for="item in infoItem"
               :key="item.key"
               :text="item.text"
               :for="item.for"
               class="app-profile-label">{{item.text}}
               <editable-text :id="item.for" 
                              class="app-profile-fields"
                              :value="model" 
                              @changed="valueChanged"
                              ></editable-text>
          </label>
          <input class="app-profile-save" type="submit" value="Save">
        </form>
      </section>
    </content>
    <section class="app-profile-skills">
        <h2 class="app-profile-skills-header">Choose your skills</h2>
        <tabs></tabs>
    </section>
  </div>
</template>

<script>
import EditableText from "./common/editable-text";
import Tabs from "./common/tabs";
import firebase from 'firebase';

export default {
  name: 'profile',
  components: {EditableText, Tabs},
  data () {
    return {
      title: "Profile",
      infoItem: [
        {
          text: "Full Name", for: "app-profile-inputs1"
        },
        {
          text: "Date of Birth", for: "app-profile-input2"
        },
        {
          text: "University", for: "app-profile-input3"
        },
        {
          text: "Position", for: "app-profile-input4"
        },
        {
          text: "Phone number", for: "app-profile-input5"
        }
      ],
      model: "...",
    }
  },
  methods: {
    valueChanged(v) {
        console.log(`New value: ${v}`);
    },
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>

<style>
  .app-profile-content {
    width: 100%;
    display: flex;
    flex: 1 0 0;
    border: 1px solid #dfdfdf;
    border-radius: 0.25rem;
  }

  .app-profile-aside {
    width: 30%;
    height: 500px;
    background-color: #f7f7f7;;
  }

  .app-profile-aside-button {
    width: 50%;
    height: 40px;
    background-color: #fff;
    border: 1px solid #959595;
    outline: none;
    border-radius: 5px;
    margin-left: 25%;
    color: #959595;
    margin-top: 10%;
  }

  .app-profile-aside-button:hover {
    color: #01AFB0;
    border: 1px solid #01AFB0;
    transition: 0.5s;
  }

  .app-profile-aside-image {
    width: 70%;
    height: 40%;
    margin-left: 15%;
    margin-top: 10%;
  }

  .app-profile-section {
    width: 70%;
  }

  .app-profile-form {
    display: flex;
    width: 90%;
    flex-direction: column;
    justify-self: center;
    margin-left: 5%;
    margin-top: 10%;
  }

  .app-profile-label {
    width: 100%;
    height: 60px;
    position: relative;
    color: #959595;
  }

  .app-profile-fields {
    position: absolute;
    right: 0;
  }

  .app-profile-save {
    width: 30%;
    margin-left: 35%;
    margin-top: 5%;
    background-color: #fff;
    border: 1px solid #959595;
    border-radius: 5px;
    outline: none;
    height: 40px;
    color: #959595;
  }

  .app-profile-save:hover {
    border: 1px solid #01AFB0;
    background-color: #01AFB0;
    color: #fff;
    transition: 0.5s;
  }

  .app-profile-skills-header {
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 2em;
    margin-top: 30px;
    margin-bottom: 30px;
    color: #959595;
  }

  .nav-pills .nav-link.active {
    background-color: #F38524;
  }

  .nav-pills .nav-link.active:hover {
    color: #fff;
  }

  .nav-pills .nav-link {
    color: #959595;
  }

  .nav-pills .nav-link:hover {
    color: #01AFB0;
  }
</style>