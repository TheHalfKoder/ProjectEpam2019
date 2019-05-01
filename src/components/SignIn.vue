<template>
    <form
         class="app-signin">
        <p
            class="app-signin-header">Sign in to your system</p>
        <input class = "app-signin-info" type="text" placeholder="E-mail" v-model="email">
        <input class = "app-signin-info" type="password" placeholder="Password" v-model="password">
        <button class="app-signin-button" type="submit" @click="login">Sign In</button>
        <p class="app-signin-header"><router-link class="app-signin-link" to="/register">Create your account</router-link></p>
    </form>
</template>

<script>
import firebase from 'firebase';

export default {
    name: "SignIn",
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login: function() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                (user) => {
                    this.$router.replace('profile')
                },
                (err) => {
                    alert('Oops. ' + err.message)
                }
            );
        }
    }
}
</script>

<style scoped>
    .app-signin-header, .app-signin-info, .app-signin-button {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .app-signin-header {
        font-size: 2em;
        text-align: center;
        width: 100%;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
    }

    .app-signin {
        width: 100%;
        padding: 40px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }

    .app-signin-info {
        border: 2px solid #959595;
        background: none;
        display: block;
        margin: 20px auto;
        text-align: center;
        padding: 14px 10px;
        width: 300px;
        outline: none;
        border-radius: 24px;
        color: #959595;
        transition: 0.5s;
    }


    .app-signin-button {
        border: 2px solid #959595;
        background: none;
        display: block;
        margin: 20px auto;
        text-align: center;
        padding: 14px 10px;
        width: 300px;
        outline: none;
        border-radius: 25px;
        color: #959595;
        transition: 0.5s;
        margin-bottom: 20px;
    }

    .app-signin-button:hover {
        border-color: #079c4a;
        background-color: #079c4a;
        color: #fff;
    }

    .app-signin-link {
        color: #959595;
        text-decoration: none;
    }
</style>