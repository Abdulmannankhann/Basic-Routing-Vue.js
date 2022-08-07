import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobsDetails from '../views/jobs/JobsDetails.vue'
import Error404 from '../views/Error404.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
	component: About
  },
  {
	path:'/jobs',
	name:'jobs',
	component:Jobs
  },
  {
	path:'/jobs/:id',
	name:'JobsDetails',
	component:JobsDetails,
	props:true
  },
  //redirect
  {
	path:'/all-jobs',
	redirect:'/jobs'
  },
  //Error 404
  {
	path:'/:catchAll(.*)',
	name:'Error404',
	component:Error404
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
