import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import GenerateDinners from '@/views/GenerateDinners'
import ViewRecipies from '@/views/ViewRecipies'
import AddRecipie from '@/views/AddRecipie'
import Recipies from '@/views/Recipies'
import Recipie from '@/views/Recipie'
import EditRecipie from '@/views/EditRecipie'


Vue.use(Router)

export const router = new Router({
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
      component: ViewRecipies,
      children: [
        { path: '', component: Recipies },
        { path: ':id', component: Recipie },
        { path: ':id/edit', component: EditRecipie }
      ]
    },
    { path: '*', redirect: '/' }
  ],
  mode: 'history',
  scrollBehavior (to, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  next()
})
