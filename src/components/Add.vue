<template>
<Header />
<div class="content">
  <h3>Add Restaurant</h3>
  <form class="add">
    <input type="text" v-model="restaurant.name" placeholder="Enter Name">
     <input type="text" v-model="restaurant.contact" placeholder="Enter Contact">
    <input type="text" v-model="restaurant.address" placeholder="Enter Address">
    <button type="button" v-on:click="addRestaurant">Add New Restaurant</button>
  </form>
</div>
<Footer/>
<!-- <teleport to="#footer">
    <Footer/>
</teleport> -->
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import axios from 'axios'
export default {
    name: 'Add Restaurant',
    data() {
        return {
          restaurant:{
            name: '',
            contact: '',
            address: ''
          }
        }
    },
    components: {
        Header,
        Footer
    },
       methods: {
        async addRestaurant() {
            let result = await axios.post("http://localhost:3000/restaurant", {
                name: this.restaurant.name,
                contact: this.restaurant.contact,
                address: this.restaurant.address,
            });
            if (result.status == 201 && result.data.name != '' && result.data.contact != '' && result.data.address != '') {
                this.$toast.show("Add Restaurant Successfully!", {
                    type: "info",
                    position: "top-right",
                    duration: 1300
                    // all of other options may go here
                }); 
                console.warn("Add Restaurant", result);
                // localStorage.setItem("restaurant-info", JSON.stringify(result.data));

                //Redirect home page
                this.$router.push({
                    name: 'Home'
                })
            }
        }
    },
    mounted(){
      let user=localStorage.getItem('user-info');
      if(!user){
        this.$router.push({name:'SignUp'})
      }
    }
}
</script>

<style scoped>
  /* Style the content */
  .content {
    background-color: rgb(255, 255, 255);
    padding: 10px;
    height: 600px; /* Should be removed. Only for demonstration */
  }
</style>
