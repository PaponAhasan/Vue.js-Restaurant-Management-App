<template>
<img class="logo" src="../assets/RestaurantLogo.jpg" alt="">
<h1>Sign Up</h1>
<div class="register">
  <input type="text" v-model="name" placeholder="Enter Name">
  <input type="text"  v-model="email" placeholder="Enter Email">
  <input type="password" v-model="password" placeholder="Enter Password">
  <button v-on:click="signUp">Sign Up</button>
</div>
<p>
  <router-link to="/login">Login</router-link>
</p>
</template>

<script>
import axios from 'axios'
export default {
    name: 'SignUp',
    data(){
      return{
        name:'',
        email:'',
        password:''
      }
    },
    methods:{
      async signUp(){
        let result = await axios.post("http://localhost:3000/user",{
          email:this.email,
          password:this.password,
          name:this.name
        });
        console.warn("Signup",result);
        if(result.status==201 && result.data.name!='' && result.data.email!='' && result.data.password!=''){
          alert("sign-up done");
          localStorage.setItem("user-info",JSON.stringify(result.data));
          this.$router.push({name:'Home'})
        }
      }
    },
    // mounted(){
    //   let user=localStorage.getItem('user-info');
    //   if(user){
    //     this.$router.push({name:'Home'})
    //   }
    // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.logo {
    width: 125px;
    margin: 30px;
}
.register input{
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
}
.register button{
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  background: skyblue;
  color: white;
  cursor: pointer;
}
</style>
