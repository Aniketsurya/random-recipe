<template lang="html">

    <div id="myCarousel" class="carousel slide" data-ride="carousel">

    <!-- Wrapper for slides -->
    <div class="carousel-inner">

      <div class="item active">
        <img src="../assets/dessert.png" alt="Food">
        <div class="buttonclass">
          <button class="button" type="button" name="randomMeal" @click="getMeal">
            <i class='fas fa-hamburger' style='font-size:48px;color:red'></i>
            <h4 style="font-family:p Fantasy">Let's try Random Meal</h4>
          </button>
        </div>
      </div>
      <div class="item">
        <img src="../assets/veg.png" alt="Dessert">
        <div class="buttonclass">
          <button class="button" type="button" name="randomMeal" @click="getMeal">
            <i class='fas fa-hamburger' style='font-size:48px;color:red'></i>
            <h4 style="font-family:p Fantasy">Let's try Random Meal</h4>
          </button>
        </div>
      </div>
      <div class="item">
        <img src="../assets/pasta.png" alt="Pasta">
        <div class="buttonclass">
          <button class="button" type="button" name="randomMeal" @click="getMeal">
            <i class='fas fa-hamburger' style='font-size:48px;color:red'></i>
            <h4 style="font-family:p Fantasy">Let's try Random Meal</h4>
          </button>
        </div>
      </div>
      <div class="item">
        <img src="../assets/nonveg.png" alt="Non veg Food">
        <div class="buttonclass">
          <button class="button" type="button" name="randomMeal" @click="getMeal">
            <i class='fas fa-hamburger' style='font-size:48px;color:red'></i>
            <h4 style="font-family:p Fantasy">Let's try Random Meal</h4>
          </button>
        </div>
      </div>
    </div>
    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
    </div>

    <!--<div class="buttonclass">
      <button class="button" type="button" name="randomMeal" @click="getMeal">
        <i class='fas fa-hamburger' style='font-size:48px;color:red'></i>
        <h4 style="font-family:p Fantasy">Let's try Random Meal</h4>
      </button>
    </div>-->


    <div class="container" style="padding: 20px">
      <h3 v-if="loading">Data loading...</h3>
      <div class="row align-items-start" v-else-if="err==='' && clicked" style="padding:30px;border: 1px solid grey">
        <div class="col-md-6">
       <img :src="meal[0].strMealThumb" alt="{{meal[0].strMeal}}" height="350" width="500" style="border:2px solid;shadow:2px; width:100%;">
       </div>
       <div class="col-md-6" style="align:center;text-align:center;margin:auto">
      <h2 ><b>{{meal[0].strMeal}}</b></h2>
      <p style="color:grey"><i>This dish comes from area of {{meal[0].strArea}}.</i> <br> <b>Category :</b> {{meal[0].strCategory}}</p>
      <p style="color:grey" v-if="meal[0].strTags!=null"><i>Tags:-{{meal[0].strTags}}</i></p>
      </div>
      <div class="col-md-12">
        <iframe width="940" height="400" class="responsive-iframe" :src="'https://www.youtube.com/embed/' + youtubeVideo"></iframe>
      </div>
      <div class="col-md-6">
        <h3><i>Ingredients</i></h3>

          <ul v-for="ingredient in ingredients" :key="ingredient" style="list-style: none;text-align:left; padding-left:100px ">
            <li v-if="ingredient!=''">{{ingredient}}</li>
          </ul>
      </div>


      <div class="col-md-6">
        <h3><i>Instructions</i></h3>
            <p>{{meal[0].strInstructions}}</p>
          </div>



         </div>
      <h3 v-else>{{err}}</h3>

    </div>


</template>

<script>
import Axios from 'axios';

export default {
  name: 'RandomMeal',
  data(){
        return{
            meal:'',
            loading:false,
            err:'',
            clicked:false,
            youtubeVideo:'',
            ingredients:[]

        }
    },
    created(){
      /*Axios.get('https://www.themealdb.com/api/json/v1/1/random.php/').then(response => {
        this.meal = response.data.meals; //response.data.meals[0]
        this.youtubeVideo = this.meal[0].strYoutube.substring(32);
        this.loading = false;
        this.getIngredients();
      }).catch(err => {
        this.err = 'Sorry for trouble. Something went wrong. Wait for sometime or try again later';
        console.log(err);
      });*/
      this.getMealRandomComponent();
    },

    watch:{

    },

    methods:{
      getIngredients(){
        this.ingredients = [];
        
       /*for(let i = 0;i<20;i++){
          this.ingredients.push(`${this.meal[0].strIngredient${i}} - ${this.meal[0].strMeasure${i}}`);
        }*/

        this.ingredients.push(`${this.meal[0].strIngredient1}`);this.ingredients.push(`${this.meal[0].strIngredient2}`);this.ingredients.push(`${this.meal[0].strIngredient3}`);this.ingredients.push(`${this.meal[0].strIngredient4}`);
        this.ingredients.push(`${this.meal[0].strIngredient5}`);this.ingredients.push(`${this.meal[0].strIngredient6}`);this.ingredients.push(`${this.meal[0].strIngredient7}`);this.ingredients.push(`${this.meal[0].strIngredient8}`);
        this.ingredients.push(`${this.meal[0].strIngredient9}`);this.ingredients.push(`${this.meal[0].strIngredient10}`);this.ingredients.push(`${this.meal[0].strIngredient11}`);this.ingredients.push(`${this.meal[0].strIngredient12}`);
        this.ingredients.push(`${this.meal[0].strIngredient13}`);this.ingredients.push(`${this.meal[0].strIngredient14}`);this.ingredients.push(`${this.meal[0].strIngredient15}`);this.ingredients.push(`${this.meal[0].strIngredient16}`);
        this.ingredients.push(`${this.meal[0].strIngredient17}`);this.ingredients.push(`${this.meal[0].strIngredient18}`);this.ingredients.push(`${this.meal[0].strIngredient19}`);this.ingredients.push(`${this.meal[0].strIngredient20}`);
      },
      /*sleep(ms){
          return new Promise(resolve => setTimeout(resolve, ms));
      },*/
      async getMealRandomComponent(){
          var res = await Axios.get('https://www.themealdb.com/api/json/v1/1/random.php/').then(response => {
          this.meal = response.data.meals;
          this.youtubeVideo = this.meal[0].strYoutube.substring(32);
          this.loading = false;

          this.getIngredients();

        }).catch(err => {
          this.err = 'Sorry for trouble. Something went wrong. Wait for sometime or try again later';
          console.log(err);
        });
        //await this.sleep(10000);
        return res;
      },
      getMeal(){
        this.loading = true;
        if (this.clicked) {
          this.getMealRandomComponent();
        }
        this.clicked = true;
        console.log(this.ingredients);
      //  this.getIngredients();
        this.loading=false;
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
.buttonclass{
  position: relative;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100px;
  height: auto;
  padding: 20px;



  transform: translate(-50%, -800%);

}
.button{
  color: inherit;
  border-radius: 5px;
  border-width: medium;
  border-color: green;
  padding: 20px;


  position: absolute;
  text-align: center;
}

.button:active {
            transform: scale(0.98);
            /* Scaling button to 0.98 to its original size */
            box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
            /* Lowering the shadow */
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
.item{
   height:400px;
 }
.item img {
width: 100%;
height: 100% !important;
object-fit: cover;}
</style>
