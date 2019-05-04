<template>
    <form class="app-signup">
        <h3>Create your personal account</h3>
        <p>
            <input class="app-form-input" type="text" placeholder="E-mail" v-model="email">
        </p>
        <p>
            <input class = "app-form-input" type="password" placeholder="Password" v-model="password">
        </p>
        <p>
            <button class="app-btn app-btn--success" type="submit" @click="signup">Sign Up</button>
        </p>
        <p>
            Already have the account?
            <router-link to="/login">Sign in</router-link>.
        </p>
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
    .app-signup {
        width: 400px;
        text-align: center;
    }
</style>
