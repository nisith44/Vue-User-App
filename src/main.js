import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
//import VueRouter from 'vue-router'
import Router from './routes.js'


//var VueResource = require('vue-resource');
Vue.use(VueResource);
//Vue.use(VueRouter);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:Router,
}).$mount('#app')
