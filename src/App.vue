<template>
  <div id="app">
  

     <CompanyNav />

      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
      <router-view />

      <CompanyFooter />
    
   
  </div>
</template>

<script>
import CompanyFooter from './components/CompanyFooter.vue'
import CompanyNav from './components/CompanyNav.vue'

export default {
 name: 'App',
 components:{
   CompanyNav,
   CompanyFooter,
 }
}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>