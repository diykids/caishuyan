import Vue from 'vue'
import Router from 'vue-router'
import {Layout} from "../components"
import {About, ArticleDetail, ArticleList} from "../pages"
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router)

const AppRoute = {
    path: '/',
    component: Layout,
    children: [
        {
            path: '/',
            component: ArticleList,
        },
        {
            path: '/search',
            name: 'search',
            component: ArticleList,
        },
        {
            path: '/date/:year/:month',
            component: ArticleList,
        },
        {
            path: '/categroy/:domain',
            component: ArticleList,
        },
        {
            path: '/about',
            component: About,
        },
        {
            path: '/article/:id',
            component: ArticleDetail,
        }
    ]
}

const router = new Router({
    routes: [AppRoute],
    mode: 'hash',
    scrollBehavior(to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})


router.beforeEach((to, from, next) => {
    NProgress.start();
    next()
});

router.afterEach((to, from) => {
    NProgress.done();
});

export default router