<template lang="html">

  <div class="container d-flex flex-row bd-highlight mb-3" style="flex-wrap:wrap;">
    <div class="" v-for="meal in meals" :key="meal" >
      <div class="shrink card p-2 bd-highlight" v-if="dish!=''" style="width:23rem;height:40rem; border:1px solid; background-color:#E5E4E2;border-radius:5px">
        <router-link :to="{path: `/dish/${meal.idMeal}`}" style="text-decoration: none;">
        <div class="" style="margin:20px">

        <img class="card-img-top" :src="meal.strMealThumb" alt="{{meal.strMeal}}" height="180" width="200" >

          <h3 class="card-title" style="color:#800000; ">{{meal.strMeal}}</h3>

        <p class="card-text" v-if="meal.strTags!=null"><i>Tags:-{{meal.strTags}}</i></p>
      </div>
      </router-link>
      </div>
    </div>
    </div>
</template>

<script>
import Axios from 'axios';

export default {
  name: 'SearchRecipe',
  data(){
    return{
      dish:this.$route.params.dish,
      meals:[]
    }
  },
  props:['model'],

  created(){
    Axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s='+ this.dish).then(response => {
      this.meals = response.data.meals;
      this.youtubeVideo = this.meal[0].strYoutube.substring(32);
      this.loading = false;
    }).catch(err => {
      this.err = "Sorry we don't have this dish. we will try to include it. For now, try to search for other dish :)";
      console.log(err);
    });
  },
  /*updated(){
    Axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s='+ this.dish).then(response => {
      this.meals = response.data.meals;
      this.youtubeVideo = this.meal[0].strYoutube.substring(32);
      this.loading = false;
    }).catch(err => {
      this.err = "Sorry we don't have this dish. we will try to include it. For now, try to search for other dish :)";
      console.log(err);
    });
  },*/
  methods:{

  }
}
</script>

<style lang="css" scoped>
.container{


}
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
