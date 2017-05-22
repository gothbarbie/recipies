import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import GenerateDinners from '@/views/GenerateDinners'
// import ViewRecipies from '@/views/ViewRecipies'
import AddRecipie from '@/views/AddRecipie'
import Recipies from '@/views/Recipies'
// import Recipie from '@/views/Recipie'
// import EditRecipie from '@/views/EditRecipie'


Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/add-recipie',
      component: AddRecipie
    },
    {
      path: '/generate-dinners',
      component: GenerateDinners
    },
    {
      path: '/view-recipies',
      component: Recipies
    },
    { path: '*', redirect: '/' }
  ],
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  next()
})
