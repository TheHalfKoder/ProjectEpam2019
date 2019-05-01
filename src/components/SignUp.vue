<template>
    <form
         class="app-signup">
        <p
            class="app-signup-header">Sign up to your system</p>
        <input class = "app-signup-info" type="text" placeholder="E-mail" v-model="email">
        <input class = "app-signup-info" type="password" placeholder="Password" v-model="password">
        <button class="app-signup-button" type="submit" @click="signup">Sign Up</button>
        <p class="app-signup-header"><router-link class="app-sign-up-link" to="/login">Already have the account</router-link></p>
    </form>
</template>

<script>
import firebase from 'firebase';

export default {
    name: "SignUp",
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        signup: function() {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                this.$router.replace('home'), 
                (err) => {
                    alert('Oops. ' + err.message)
                }
            );
        }
    }
}
</script>

<style scoped>
    .app-signup-header, .app-signup-info, .app-signup-button {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .app-signup-header {
        width: 100%;
        text-align: center;
        font-size: 2em;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .app-signup {
        width: 100%;
        padding: 40px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }

    .app-signup-info {
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

    .app-signup-button {
        border: 2px solid #959595;
        background: none;
        display: block;
        margin: 0 auto;
        text-align: center;
        padding: 10px 10px;
        width: 300px;
        outline: none;
        border-radius: 25px;
        color: #959595;
        transition: 0.5s;
        margin-bottom: 20px;
    }

    .app-signup-button:hover {
        border-color: #079c4a;
        background-color: #079c4a;
        color: #fff;
    }

    .app-sign-up-link {
        color: #959595;
        text-decoration: none;
    }
</style>