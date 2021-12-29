<template>
   <div class="nav">
       <router-link to="/">Home</router-link>
       <router-link to="/add">Add Restaurant</router-link>
       <!-- <router-link to="/update">Update Restaurant</router-link> -->
       <a @click="logout">Logout</a>
   </div>
</template>

<script>
export default {
    name:'Header',
    methods:{
        logout(){
            localStorage.removeItem('user-info');
            this.$router.push('/login');
        }
    }
}
</script>

<style scoped>
.nav{
    background-color: #333;
    overflow: hidden;
}
.nav a{
    float: left;
    color: white;
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
}
.nav a:hover{
    background: #ddd;
    color: #333;
}
</style>