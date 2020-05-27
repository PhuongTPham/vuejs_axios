<template>
<div class="users">
  <v-container>
    <h2>Users</h2>
   <div class="user" >
     <table class="table">
       <thead>
         <th>Name</th>
         <th>Username</th>
         <th>Email</th>
         <th>Address</th>
         <th>Phone</th>
         <th>Website</th>
         <th>Company</th>
       </thead>
       <tbody>
         <tr v-for="user in users"
    :key="user.id">
           <td>{{user.name}}</td>
           <td>{{user.username}}</td>
           <td>{{user.email}}</td>
           <td>{{user.address.street}}-{{user.address.suite}}-{{user.address.city}}</td>
           <td>{{user.phone}}</td>
           <td>{{user.website}}</td>
           <td>{{user.company.name}}</td>
         </tr>
       </tbody>
     </table>
   </div>
  </v-container>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "Users",
    data() {
      return {
        users:[]
      }
    },
    mounted() {
      var self = this;
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then( function(res){
        self.posts = res.data;
        console.log('Data: ',res.data);
      })
      .catch( function(error){
        console.log('Error: ', error);
      })
    }
  }
</script>

<style type="text/css">
.table {
  width: 100%;
  border-collapse: collapse;
}
table,th,tr,td {
  border: 1px solid black;
}
td {
  height: 50px;
  vertical-align: bottom;
  padding: 15px;
  text-align: left;
}

th {
  padding: 15px;
  text-align: left;
  background-color: green;
  color: white;
}
</style>
