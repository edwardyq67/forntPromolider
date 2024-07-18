import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import './index.css'



Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [

  { path: '/marketing', component: ()=>import("./components/Marketing.vue") },
  {path: '/marketing/index', component: ()=>import("./components/Plantilla/Index.vue") },
  {path: '/marketing/pagVenta', component: ()=>import("./components/Plantilla/Gratis/Edicion/Index.vue") },
];

const router = new VueRouter({
  mode: 'hash',
  routes,
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
