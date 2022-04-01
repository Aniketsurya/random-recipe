<template lang="html">

  <div class="container" style="padding: 20px">
    <h3 v-if="loading">Data loading...</h3>
    <div class="row align-items-start" v-else-if="err==='' && clicked" style="padding:30px;border: 1px solid grey">
      <div class="col-md-6">
     <img :src="meal[0].strMealThumb" alt="{{meal[0].strMeal}}" height="350" width="500" style="border:2px solid;shadow:2px; width:100%;">
     </div>
     <div class="col-md-6" style="align:center;text-align:center;margin:auto">
    <h3 ><b>{{meal[0].strMeal}}</b></h3>
    <p style="color:grey"><i>This dish comes from area of {{meal[0].strArea}}.</i> <br> <b>Category :</b> {{meal[0].strCategory}}</p>
    <p style="color:grey" v-if="meal[0].strTags!=null"><i>Tags:-{{meal[0].strTags}}</i></p>
    </div>
    <div class="col-md-12">
      <iframe width="940" height="400" class="responsive-iframe" :src="'https://www.youtube.com/embed/' + youtubeVideo"></iframe>
    </div>
    <div class="col-md-6">
      <h4><i>Ingredients</i></h4>

        <ul v-for="ingredient in ingredients" :key="ingredient" style="list-style: none;text-align:left; padding-left:100px ">
          <li v-if="ingredient!=''">{{ingredient}}</li>
        </ul>
    </div>


    <div class="col-md-6">
      <h4><i>Instructions</i></h4>
          <p>{{meal[0].strInstructions}}</p>
        </div>



       </div>
    <h3 v-else>{{err}}</h3>

  </div>
  <!--<div class="container">

  <table>
  <tr>
    <td> <img :src="meal[0].strMealThumb" alt="{{meal[0].strMeal}}" height="200" width="400"> </td>
    <td>{{meal[0].strMeal}}</td>
   </tr>
  <tr >
    <th>Ingredients </th>
    <table>
      <tr v-for="ingredient in ingredients" :key="ingredient">
        {{ingredient}}
      </tr>
    </table>
  </tr>
  <tr>
    <th>Instructions</th>
    <td>
      {{meal[0].strInstructions}}
    </td>
  </tr>
  <tr ><th colspan="2"> <iframe width="1000" height="315" :src="'https://www.youtube.com/embed/' + youtubeVideo"></iframe></th></tr>

</table>
</div>-->
</template>

<script>
import Axios from 'axios';

export default {
  name: "MealRecipe",
  data(){
    return{
      dishid:this.$route.params.dishid,
      loading:false,
      clicked:false,
      err:'',
      youtubeVideo:'',
      meal:'',
      ingredients:[]
    }
  },
  created(){
    Axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+ this.dishid).then(response => {
      this.meal = response.data.meals;
      this.youtubeVideo = this.meal[0].strYoutube.substring(32);
      this.loading = false;
        this.clicked = true;
      this.getIngredients();
    }).catch(err => {
      this.err = 'Sorry for trouble. Something went wrong. Wait for sometime or try again later';
      console.log(err);
    });

  },
  methods:{
    getIngredients(){
    //this.ingredients = [];
     /*for(let i = 0;i<20;i++){
        this.ingredients.push(`${this.meal[0].strIngredient+i.toString()} - ${this.meal[0].strMeasure+i.toString()}`);
        console.log(typeof(i.toString()));
      }*/

      this.ingredients.push(`${this.meal[0].strIngredient1}`);this.ingredients.push(`${this.meal[0].strIngredient2}`);this.ingredients.push(`${this.meal[0].strIngredient3}`);this.ingredients.push(`${this.meal[0].strIngredient4}`);
      this.ingredients.push(`${this.meal[0].strIngredient5}`);this.ingredients.push(`${this.meal[0].strIngredient6}`);this.ingredients.push(`${this.meal[0].strIngredient7}`);this.ingredients.push(`${this.meal[0].strIngredient8}`);
      this.ingredients.push(`${this.meal[0].strIngredient9}`);this.ingredients.push(`${this.meal[0].strIngredient10}`);this.ingredients.push(`${this.meal[0].strIngredient11}`);this.ingredients.push(`${this.meal[0].strIngredient12}`);
      this.ingredients.push(`${this.meal[0].strIngredient13}`);this.ingredients.push(`${this.meal[0].strIngredient14}`);this.ingredients.push(`${this.meal[0].strIngredient15}`);this.ingredients.push(`${this.meal[0].strIngredient16}`);
      this.ingredients.push(`${this.meal[0].strIngredient17}`);this.ingredients.push(`${this.meal[0].strIngredient18}`);this.ingredients.push(`${this.meal[0].strIngredient19}`);this.ingredients.push(`${this.meal[0].strIngredient20}`);
    },
  }
}
</script>

<style lang="css" scoped>
td,tr,th {
  text-align: center;
  vertical-align: middle;
}
table,th,tr,td{
  border: solid; margin: 10px; align:center;
}
li::before{
            content: "\00BB";
}
.col-md-6{
  padding: 20px;
}
.responsive-iframe{
  position: relative;
  width: 100%;
}

</style>
