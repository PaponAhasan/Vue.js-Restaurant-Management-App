<template>
<Header />
<h1>Hello User, Welcome on Update Restaurant</h1>
<!-- <teleport to="#footer">
    <Footer/>
</teleport> -->
</template>

<script>
import Header from './Header.vue'
// import Footer from './Footer.vue'
export default {
    name: 'Update Restaurant',
    components: {
        Header,
        // Footer
    },
    mounted(){
      let user=localStorage.getItem('user-info');
      if(!user){
        this.$router.push({name:'SignUp'})
      }
    }
}
</script>
