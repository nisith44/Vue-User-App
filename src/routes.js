import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import User from './components/user.vue'

Vue.use(VueRouter);

const router=new VueRouter({

    mode:'history',

    routes:[
        {path:'/',component:Home},
        {path:'/user/:id',component:User}
    ]


});

export default router;