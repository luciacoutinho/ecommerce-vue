import Vue from 'vue'
import VueRouter from 'vue-router'
import inicioView from '../views/inicioView.vue'
import productosView from '../views/productosView.vue'
import carritoView from '../views/carritoView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: inicioView
  },
  {
    path: '/productos',
    name: 'Productos',
    component: productosView
  },
  {
    path: '/carrito',
    name: 'Carrito',
    component: carritoView
  },
  {
    path: '/panel',
    name: 'Panel',
    component: carritoView
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
