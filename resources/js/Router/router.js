import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login/Login'
import Signup from '../components/login/signup'
import Forum from '../components/forum/forum'
import Logout from '../components/login/Logout'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/logout',
        component: Logout
    },
    {
        path: '/signup',
        component: Signup
    },
    {
        path: '/forum',
        name: 'forum',
        component: Forum
    }
]

const router = new VueRouter({
    routes, // (缩写) 相当于 routes: routes
    mode: 'history'
})

export default router;