<template>
    <form class="app-signin">
        <h3>Sign in to Rank Manager</h3>
        <p>
            <input class="app-form-input" type="text" placeholder="E-mail" v-model="email">
        </p>
        <p>
            <input class="app-form-input" type="password" placeholder="Password" v-model="password">
        </p>
        <p>
            <button class="app-btn app-btn--success" type="submit" @click="login">Sign In</button>
        </p>
        <p>
            New in Rank Manager?
            <router-link to="/register">Create an account</router-link>.
        </p>
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
    .app-signin {
        width: 400px;
        text-align: center;
    }
</style>
