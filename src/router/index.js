import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Works from '@/components/Works'
import Error from '@/components/Error'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/fr' },
    { path: '/:lang/', name: 'home', component: Home },
    { path: '/:lang/works', alias: ['/:lang/travaux', '/:lang/works-de'], name: 'works', component: Works },
    { path: '/:lang/about', alias: ['/:lang/a-propos', '/:lang/about-de'], name: 'about', component: About },
    { path: '/:lang/*', name: 'page-404', component: Error }
  ]
})

export default router
