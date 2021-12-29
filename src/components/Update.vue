<template>
<Header />
<div class="content">
  <h3>Update Restaurant</h3>
  <form class="add">
    <input type="text" v-model="restaurant.name" placeholder="Enter Name">
     <input type="text" v-model="restaurant.contact" placeholder="Enter Contact">
    <input type="text" v-model="restaurant.address" placeholder="Enter Address">
    <button type="button" v-on:click="updateRestaurant">Update Restaurant</button>
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
    name: 'Update Restaurant',
    data() {
        return {
          restaurant:{
            name: '',
            contact: '',
            address: ''
          }
        }
    },
    methods:{
      async updateRestaurant(){
        console.warn("Update Data", this.restaurant);
        let result = await axios.put("http://localhost:3000/restaurant/"+this.$route.params.id, {
                name: this.restaurant.name,
                contact: this.restaurant.contact,
                address: this.restaurant.address,
            });
            if (result.status == 200 && result.data.name != '' && result.data.contact != '' && result.data.address != '') {
                this.$toast.show("Update Successfully!", {
                    type: "info",
                    position: "top",
                    duration: 1200
                    // all of other options may go here
                }); 
                // console.warn("Update Restaurant", result);
                // localStorage.setItem("restaurant-info", JSON.stringify(result.data));

                //Redirect home page
                this.$router.push({
                    name: 'Home'
                })
            }
      }
    },
    components: {
        Header,
        Footer
    },
    async mounted(){
      let user=localStorage.getItem('user-info');
      if(!user){
        this.$router.push({name:'SignUp'})
      }
      let result = await axios.get(`http://localhost:3000/restaurant/`+this.$route.params.id);
            // console.warn(this.$route.params.id);
            console.warn("Will Update", result);
            this.restaurant = result.data;
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
