import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Works from '@/components/Works'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/fr' },
    { path: '/:lang/', name: 'home', component: Home },
    { path: '/:lang/about', alias: ['/:lang/a-propos', '/:lang/about-slug-de'], name: 'about', component: About },
    { path: '/:lang/works', alias: ['/:lang/travaux', '/:lang/travaux-slug-de'], name: 'works', component: Works }
  ]
})

export default router
