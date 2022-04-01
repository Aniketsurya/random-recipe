<template>
  <div class="">
      <Header />
  </div>
  <hr>
  <div class="">
    <router-view :key="$route.path"/> <!-- Best to router view rerendering a
      component As I was clicking search button but SearchRecipe was not RE-rendering again so used
      :key='$route.path' where 'path' is from index.js file so it rerender the routerview accoridng to 
      change in 'path'
    -->
    <!--<router-view name="SearchRecipe" :model="dish"></router-view>-->
  </div>

  <div class="">
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  data(){
    return{

    }
  },
  components: {
    Header,
    Footer
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
  margin-top: 60px;
}
</style>
