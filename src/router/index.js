import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/CompanyHome'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
  
    component: () => import('../views/About.vue')
  },

  {
    path: '/group',
    name: 'Group',
    
    component: () => import('../components/CompanyGroup.vue')
  },

  {
    path: '/groups/:recipiantID',
    name: 'GroupsDetail',
    
    component: () => import('../components/CompanyGroupDetail.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
