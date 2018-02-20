import Vue from 'vue'
import Router from 'vue-router'

import Page from '@/components/Page'
import Error from '@/components/Error'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/en' },
    { path: '/:lang/', name: 'home', component: Page },
    { path: '/:lang/works', alias: ['/:lang/travaux'], name: 'works', component: Page },
    { path: '/:lang/about', alias: ['/:lang/a-propos'], name: 'about', component: Page },
    { path: '/:lang/*', name: 'page-404', component: Error }
  ]
})

export default router
