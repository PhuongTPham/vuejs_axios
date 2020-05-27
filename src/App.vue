<template>
  <v-app>
    <v-toolbar app>
      <router-link :to="{ name: 'HelloWorld'}">Home</router-link>
      <router-link to="users">Users</router-link>
     <router-view></router-view>
    </v-toolbar>
    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>
