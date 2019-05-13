<template>
    <form class="app-signin" @submit.prevent='signIn'>
        <h3>Sign in to Rank Manager</h3>
        <p>
            <input class="app-form-input" type="text" placeholder="E-mail" v-model="email">
        </p>
        <p>
            <input class="app-form-input" type="password" placeholder="Password" v-model="password">
        </p>
        <p>
            <button class="app-btn app-btn--success" type="submit">Sign In</button>
        </p>
        <p>
            New in Rank Manager?
            <router-link to="/register">Create an account</router-link>.
        </p>
    </form>
</template>

<script>
import database from './../main.js';

export default {
    name: "SignIn",
    data() {
        return {
            email: '',
            password: '',
            error: ''
        }
    },
    methods: {
        async signIn () {
            let result = await database.signIn(this.email, this.password)

            if(result.message){
                this.error = this.message
            }
            else {
                console.log('User is signed in');

                this.$router.push('/home')
            }
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