<template>
<img class="logo" src="../assets/RestaurantLogo.jpg" alt="">
<h1>Login</h1>
<div class="login">
    <input type="text" name="email" v-model="email" placeholder="Enter Email">
    <input type="password" name="password" v-model="password" placeholder="Enter Password">
    <button v-on:click="login">Login</button>
</div>
<p>
    <router-link to="/sign-up">Sign Up</router-link>
</p>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async login() {
            let result = await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`);
            console.warn("Login", result);
            if (result.status == 200 && result.data.length > 0 && result.data.email != '' && result.data.password != '') {
                this.$toast.show("Login Successfully!", {
                    type: "info",
                    position: "top-right",
                    duration: 1300
                    // all of other options may go here
                });

                localStorage.setItem("user-info", JSON.stringify(result.data[0]));
                this.$router.push({
                    name: 'Home'
                });
            } else {
                this.$toast.show("Invalid! Login Failed", {
                    type: "error",
                    position: "top-right",
                    duration: 1300
                    // all of other options may go here
                });
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push({
                name: 'Home'
            })
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
</style>
