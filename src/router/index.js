import Vue from 'vue'
import Router from 'vue-router'

import Page from '@/components/Page'
import Error from '@/components/Error'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/en' },
    { path: '/fr', redirect: '/fr/accueil' },
    { path: '/en', redirect: '/en/home' },
    { path: '/:language/home', alias: ['/:language/accueil'], name: 'home', component: Page },
    { path: '/:language/works', alias: ['/:language/travaux'], name: 'works', component: Page },
    { path: '/:language/about', alias: ['/:language/a-propos'], name: 'about', component: Page },
    { path: '/:language/*', name: 'error-404', component: Error }
  ]
})

export default router
