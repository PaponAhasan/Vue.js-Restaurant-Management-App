<template>
   <div class="nav">
       <a href="#">Home</a>
       <a href="#">Add Restaurant</a>
       <a href="#">Update Restaurant</a>
       <a @click="logout">Logout</a>
   </div>
</template>

<script>
export default {
    name:'Header',
    methods:{
        logout(){
            this.$store.dispatch('user',null);
            localStorage.removeItem('token');
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