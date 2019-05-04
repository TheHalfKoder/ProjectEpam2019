<template>
  <div class="app-profile">
    <content class="app-profile-content">
      <aside class="app-profile-aside">
        <img alt="Your photo" src="../assets/images/myPhoto.jpg" class="app-profile-aside-image">
        <div class="app-profile-btn-wrapper">
          <button class="app-btn app-btn--secondary app-profile-btn">Upload New</button>
        </div>
        <div class="app-profile-btn-wrapper">
          <button class="app-btn app-btn--secondary app-profile-btn" @click="logout">Log out</button>
        </div>
      </aside>
      <section class="app-profile-section">
        <form class="app-profile-form">
          <label class="app-profile-field">
            Full Name
            <input class="app-form-input app-profile-field-input"/>
          </label>
          <label class="app-profile-field">
            Date of Birth
            <input class="app-form-input app-profile-field-input"/>
          </label>
          <label class="app-profile-field">
            University
            <input class="app-form-input app-profile-field-input"/>
          </label>
          <label class="app-profile-field">
            Position
            <input class="app-form-input app-profile-field-input"/>
          </label>
          <label class="app-profile-field">
            Phone Number
            <input class="app-form-input app-profile-field-input"/>
          </label>
          <p class="app-profile-save-btn-wrapper">
            <button class="app-btn app-btn--success app-profile-save">Save</button>
          </p>
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

<style lang="scss">
  .app-profile {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
  }

  .app-profile-content {
    width: 100%;
    display: flex;
    flex: 1 0 auto;
  }

  .app-profile-aside {
    width: 30%;
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
    width: 30%;
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
</style>
