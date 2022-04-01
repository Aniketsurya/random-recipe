<template lang="html">
  <div class="container d-flex flex-row bd-highlight mb-3" style="flex-wrap:wrap;">
    <div class="" v-for="meal in meals" :key="meal" >
      <div class="shrink card p-2 bd-highlight" v-if="dish!=''" style="width:23rem;height:40rem; border:1px solid; background-color:#E5E4E2;border-radius:5px">
        <router-link :to="{path: `/dish/${meal.idMeal}`}" style="text-decoration: none;">
        <div class="" style="margin:20px">

        <img class="card-img-top" :src="meal.strMealThumb" alt="{{meal.strMeal}}" height="180" width="200" >

          <h3 class="card-title" style="color:#800000; ">{{meal.strMeal}}</h3>


      </div>
      </router-link>
      </div>
    </div>
    </div>
</template>

<script>
import Axios from 'axios';
export default {
  name : 'CategoryValues',
  data(){
    return{
      category:this.$route.params.category,
      loading:false,
      clicked:false,
      err:'',
      meals:'',

    }
  },
  created(){
    Axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c='+ this.category).then(response => {
      this.meals = response.data.meals;
      this.loading = false;
        this.clicked = true;
    }).catch(err => {
      this.err = 'Sorry for trouble. Something went wrong. Wait for sometime or try again later';
      console.log(err);
    });
  }

}
</script>

<style lang="css" scoped>
.card{
  flex-basis: 1 0 21%;
  margin: 20px;

}
.shrink {
transition: all .2s ease-in-out;
}

.shrink:hover {
transform: scale(0.9);
}
</style>
