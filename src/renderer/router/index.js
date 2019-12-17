import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Tpv from '../components/Tpv'
import Settings from '../components/Settings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/tpv',
      name: 'Tpv',
      component: Tpv
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
