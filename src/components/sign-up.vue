<template>
    <form class="app-signup" @submit.prevent='signUp'>
        <h3>Create your personal account</h3>
        <p>
            <input class="app-form-input" type="text" placeholder="E-mail" v-model="email">
        </p>
        <p>
            <input class = "app-form-input" type="password" placeholder="Password" v-model="password">
        </p>
        <p>
            <input class = "app-form-input" type="password" placeholder="Confirm Password" v-model="confirmpassword">
        </p>
        <p>
            <button class="app-btn app-btn--success" type="submit">Sign Up</button>
        </p>
        <p>
            Already have the account?
            <router-link to="/login">Sign in</router-link>.
        </p>
    </form>
</template>

<script>
import database from './../main.js';

export default {
    name: "SignUp",
    data() {
        return {
            email: '',
            password: '',
            confirmpassword: '',
            error: ''
        }
    },
    methods: {
        async signUp () {
            if(this.password == this.confirmpassword){
                let result = await database.signUp(this.email, this.password)

                if(result.message){
                    this.error = this.message
                }
                else {
                    console.log('User is created');

                    this.$router.push('/profile');
                }   
            }else {
                alert("Your passwords is not match up! Try again.");
            }
            
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
