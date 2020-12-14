import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2fa2bc06 = () => interopDefault(import('../pages/back.vue' /* webpackChunkName: "pages/back" */))
const _cf46fc42 = () => interopDefault(import('../pages/back13.vue' /* webpackChunkName: "pages/back13" */))
const _397e3010 = () => interopDefault(import('../pages/golf.vue' /* webpackChunkName: "pages/golf" */))
const _2a2195cc = () => interopDefault(import('../pages/golf-back.vue' /* webpackChunkName: "pages/golf-back" */))
const _8a798764 = () => interopDefault(import('../pages/index13.vue' /* webpackChunkName: "pages/index13" */))
const _74e3bacc = () => interopDefault(import('../pages/sicc.vue' /* webpackChunkName: "pages/sicc" */))
const _11356778 = () => interopDefault(import('../pages/sicc-back.vue' /* webpackChunkName: "pages/sicc-back" */))
const _b17c2918 = () => interopDefault(import('../pages/sma10PIimamsyafii.vue' /* webpackChunkName: "pages/sma10PIimamsyafii" */))
const _14e41b08 = () => interopDefault(import('../pages/tkimamsyafii.vue' /* webpackChunkName: "pages/tkimamsyafii" */))
const _bee1a7a8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/back",
    component: _2fa2bc06,
    name: "back"
  }, {
    path: "/back13",
    component: _cf46fc42,
    name: "back13"
  }, {
    path: "/golf",
    component: _397e3010,
    name: "golf"
  }, {
    path: "/golf-back",
    component: _2a2195cc,
    name: "golf-back"
  }, {
    path: "/index13",
    component: _8a798764,
    name: "index13"
  }, {
    path: "/sicc",
    component: _74e3bacc,
    name: "sicc"
  }, {
    path: "/sicc-back",
    component: _11356778,
    name: "sicc-back"
  }, {
    path: "/sma10PIimamsyafii",
    component: _b17c2918,
    name: "sma10PIimamsyafii"
  }, {
    path: "/tkimamsyafii",
    component: _14e41b08,
    name: "tkimamsyafii"
  }, {
    path: "/",
    component: _bee1a7a8,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
