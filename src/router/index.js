import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import AddRecipie from '@/views/AddRecipie'
import GenerateDinners from '@/views/GenerateDinners'
import ViewRecipies from '@/views/ViewRecipies'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Home
    },
    {
      path: '/add-recipie',
      name: 'AddRecipie',
      component: AddRecipie
    },
    {
      path: '/generate-dinners',
      name: 'GenerateDinners',
      component: GenerateDinners
    },
    {
      path: '/view-recipies',
      name: 'ViewRecipies',
      component: ViewRecipies
    }
  ]
})
