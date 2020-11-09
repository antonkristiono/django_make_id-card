import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c8886d5e = () => interopDefault(import('../pages/back.vue' /* webpackChunkName: "pages/back" */))
const _c585b79a = () => interopDefault(import('../pages/back13.vue' /* webpackChunkName: "pages/back13" */))
const _51f6e47a = () => interopDefault(import('../pages/index13.vue' /* webpackChunkName: "pages/index13" */))
const _715b66c0 = () => interopDefault(import('../pages/sma10PIimamsyafii.vue' /* webpackChunkName: "pages/sma10PIimamsyafii" */))
const _0262a348 = () => interopDefault(import('../pages/tkimamsyafii.vue' /* webpackChunkName: "pages/tkimamsyafii" */))
const _5ea6ef58 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _c8886d5e,
    name: "back"
  }, {
    path: "/back13",
    component: _c585b79a,
    name: "back13"
  }, {
    path: "/index13",
    component: _51f6e47a,
    name: "index13"
  }, {
    path: "/sma10PIimamsyafii",
    component: _715b66c0,
    name: "sma10PIimamsyafii"
  }, {
    path: "/tkimamsyafii",
    component: _0262a348,
    name: "tkimamsyafii"
  }, {
    path: "/",
    component: _5ea6ef58,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
