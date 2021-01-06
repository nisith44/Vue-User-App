<template>
  <div id="app">
    <Navbar/>

    <router-view> </router-view>
    
  </div>
</template>

<script>
//import Home from './components/Home.vue'
import Navbar from './components/navbar.vue'

export default {
  name: 'App',
  components: {  
    Navbar,
    
  }
}
</script>

<style>
#app {
  
}
</style>
