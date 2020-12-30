import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ec25dc26 = () => interopDefault(import('../pages/back.vue' /* webpackChunkName: "pages/back" */))
const _77829462 = () => interopDefault(import('../pages/back13.vue' /* webpackChunkName: "pages/back13" */))
const _f6015030 = () => interopDefault(import('../pages/golf.vue' /* webpackChunkName: "pages/golf" */))
const _1ac8c848 = () => interopDefault(import('../pages/golf-back.vue' /* webpackChunkName: "pages/golf-back" */))
const _c57a8514 = () => interopDefault(import('../pages/hic2.vue' /* webpackChunkName: "pages/hic2" */))
const _500101e4 = () => interopDefault(import('../pages/hic2-back.vue' /* webpackChunkName: "pages/hic2-back" */))
const _0b27865e = () => interopDefault(import('../pages/index13.vue' /* webpackChunkName: "pages/index13" */))
const _290d258b = () => interopDefault(import('../pages/pol2.vue' /* webpackChunkName: "pages/pol2" */))
const _936847ce = () => interopDefault(import('../pages/pol2-back.vue' /* webpackChunkName: "pages/pol2-back" */))
const _239baf2a = () => interopDefault(import('../pages/rd2.vue' /* webpackChunkName: "pages/rd2" */))
const _0885044c = () => interopDefault(import('../pages/rd2-back.vue' /* webpackChunkName: "pages/rd2-back" */))
const _16a22abc = () => interopDefault(import('../pages/sicc.vue' /* webpackChunkName: "pages/sicc" */))
const _4ca124f0 = () => interopDefault(import('../pages/sicc-back.vue' /* webpackChunkName: "pages/sicc-back" */))
const _349ce184 = () => interopDefault(import('../pages/sma10PIimamsyafii.vue' /* webpackChunkName: "pages/sma10PIimamsyafii" */))
const _7628ca10 = () => interopDefault(import('../pages/tkimamsyafii.vue' /* webpackChunkName: "pages/tkimamsyafii" */))
const _369eba3c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _ec25dc26,
    name: "back"
  }, {
    path: "/back13",
    component: _77829462,
    name: "back13"
  }, {
    path: "/golf",
    component: _f6015030,
    name: "golf"
  }, {
    path: "/golf-back",
    component: _1ac8c848,
    name: "golf-back"
  }, {
    path: "/hic2",
    component: _c57a8514,
    name: "hic2"
  }, {
    path: "/hic2-back",
    component: _500101e4,
    name: "hic2-back"
  }, {
    path: "/index13",
    component: _0b27865e,
    name: "index13"
  }, {
    path: "/pol2",
    component: _290d258b,
    name: "pol2"
  }, {
    path: "/pol2-back",
    component: _936847ce,
    name: "pol2-back"
  }, {
    path: "/rd2",
    component: _239baf2a,
    name: "rd2"
  }, {
    path: "/rd2-back",
    component: _0885044c,
    name: "rd2-back"
  }, {
    path: "/sicc",
    component: _16a22abc,
    name: "sicc"
  }, {
    path: "/sicc-back",
    component: _4ca124f0,
    name: "sicc-back"
  }, {
    path: "/sma10PIimamsyafii",
    component: _349ce184,
    name: "sma10PIimamsyafii"
  }, {
    path: "/tkimamsyafii",
    component: _7628ca10,
    name: "tkimamsyafii"
  }, {
    path: "/",
    component: _369eba3c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
