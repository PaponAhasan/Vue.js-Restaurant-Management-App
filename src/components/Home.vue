<template>
<Header />
<div class="content">
  <!-- <h3>Hello {{ name }}, Welcome on Home Page</h3> -->
  <h3>Restaurant List</h3>
  <table>
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Contact</th>
    <th>Address</th>
    <th>Action</th>
  </tr>
  <tr v-for="item in restaurant" :key="item.id">
    <td>{{ item.id }}</td>
    <td>{{ item.name }}</td>
    <td>{{ item.contact }}</td>
    <td>{{ item.address }}</td>
    <td>
      <button class="button1">
        <router-link :to="'/update/'+item.id" class="updateBtn">Update</router-link>
      </button>&nbsp; 
      <button class="button2" v-on:click="deleteRestaurant(item.id)">Delete</button>
    </td>
  </tr>
</table>
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
    name: 'Home',
    data(){
      return{
        name:'',
        restaurant:[],
      }
    },
    components: {
        Header,
        Footer
    },  
    methods:{
      async deleteRestaurant(id){
        console.warn("Delete Data",id);
        let result = await axios.delete("http://localhost:3000/restaurant/"+id);
        if (result.status == 200) {
                this.$toast.show("Delete Successfully!", {
                    type: "info",
                    position: "top-right",
                    duration: 1300
                    // all of other options may go here
                });
             this.loadData(); 
         }
      },
      async loadData(){
          let user=localStorage.getItem('user-info');
          this.name=JSON.parse(user).name;
          if(!user){
            this.$router.push({name:'SignUp'})
          }

          let result = await axios.get("http://localhost:3000/restaurant");
          console.warn("List of restaurant", result);
          this.restaurant=result.data;
      }
    },
    async mounted(){
      this.loadData();
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

  table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 60%;
   margin-left: auto;
  margin-right: auto;
 }

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 12px;
 }

tr:nth-child(even) {
  background-color: #dddddd;
 }

 .updateBtn{
   text-decoration: none;
   color: inherit;
 }

.button1 {
    padding: 10px 15px;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 4px 2px;
    cursor: pointer;
    background-color: #008CBA;
  } /* Blue */
 .button2 {
    padding: 10px 15px;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 4px 2px;
    cursor: pointer;
    background-color: #f44336;
   } /* Red */
</style>
