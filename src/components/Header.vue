<template lang="html">

  <div class="bg-dark text-white">
<div class="container">
    <div class="logo-class">
      <router-link :to="{path: `/`}" style="text-decoration: none;">
      <img src="../assets/logo.png" alt="allrecipes" height="54" width="156" align="left" style="position:relative;border-radius:2px">
      </router-link>
    </div>
</div>
<div class="container">

    <div class="search-bar input-group rounded">
      <form class="" method="post">

    <input type="search" class="form-control rounded input-lg grow" placeholder="Search your fav recipe..." v-model="dish" >

    <router-link :to="{path: `/search/${dish}`}" style="text-decoration: none; position:absolute">
      <!--<i class="fa-brands fa-searchengin fa-2xl" ></i>-->
      <button type="submit" class="btn btn-default btn-lg grow" style="border:0;">
                <span class="glyphicon glyphicon-search "></span>
                <!--<i class="fas fa-search"></i>-->
            </button>
    </router-link>
    </form>

      </div>
    </div>
  </div>
</template>

<script>

//import SearchRecipe from './SearchRecipe.vue'

export default {
  name:'Header',
  data(){
    return{
      dish:'',

    }
  },

}
</script>

<style lang="css" scoped>
.container{
  padding: 15px;
  box-sizing: border-box;
  display: block;
}
.logo-class{
  margin: 10;
}
.search-bar{


}
.grow {
transition: all .2s ease-in-out;
}

.grow:hover {
transform: scale(1.04);
}
</style>
