<template>
<div class="hello">
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/logo.png')"
          class="my-3"
          contain
          height="100"
        ></v-img>
      </v-flex>   
    </v-layout>
    <h2>Data Table</h2>
   <div class="post" >
     <table class="table">
       <thead>
         <th>UserId</th>
         <th>Id</th>
         <th>Title</th>
         <th>Body</th>
         <th></th>
         <th></th>
         <th class="btn btn-primary"></th>
       </thead>
       <tbody>
         <tr v-for="post in posts"
    :key="post.id">
           <td>{{post.userId}}</td>
           <td>{{post.id}}</td>
           <td>{{post.title}}</td>
           <td>{{post.body}}</td>
           <td ><a class="btn btn-primary" href="#" role="button">Edit</a></td>
           <td><a class="btn btn-danger" href="#" role="button">Delete</a></td>
           <td><a class="btn btn-danger" href="#/users" role="button">DetailUser</a></td>

         </tr>
       </tbody>
       <tfoot>
         <tr>

         </tr>
       </tfoot>
     </table>
   </div>
  </v-container>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name:"Hello",
    data() {
      return {
        posts:[]
      }
    },
    mounted() {
      var self = this;
      axios.get('https://jsonplaceholder.typicode.com/posts')
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
  background-color:green;
  color: white;
}
.editbtn{
  color: rgb(13, 13, 14);
  background-color: red
}
</style>
