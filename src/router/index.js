import { createRouter, createWebHistory} from 'vue-router';
import Home from '../components/Home.vue';
import MealRecipe from '../components/MealRecipe.vue';
import RandomMeal from '../components/RandomMeal.vue';
import SearchRecipe from '../components/SearchRecipe.vue';
import CategoryValues from '../components/CategoryValues.vue';

const myroutes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/dish/:dishid',
        name: 'MealRecipe',
        component: MealRecipe
    },
    {
        path: '/randommeal',
        name:'RandomMeal',
        component: RandomMeal
    },
    {
        path: '/search/:dish',
        name:'SearchRecipe',
        component: SearchRecipe
    },
    {
        path: '/category/:category',
        name:'CategoryValues',
        component: CategoryValues
    },
];

const router = createRouter({

    history: createWebHistory(process.env.BASE_URL),

    routes: myroutes

})

export default router;
