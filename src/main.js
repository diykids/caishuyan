import Vue from 'vue'
import App from './App.vue'
import './assets/css/base.css'
import router from "./router";
import dayjs from "dayjs"
import hljs from "highlight.js"
import 'highlight.js/styles/atelier-lakeside-light.css'
import {store} from "./store"

Vue.config.productionTip = false;

Vue.filter("formatDate", function (v,f) {
    return dayjs(v).format(f)
})

Vue.directive('highlight',function (el) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block)=>{
        hljs.highlightBlock(block)
    })
})

// Vue.directive('is-page', function(el, binding, vnode) {
//         console.log((vnode.context.$route.path,binding.value,el.className))
//     if(vnode.context.$route.path === binding.value){
//         console.log(el.className)
//         el.className += " active"
//         console.log(el.className)
//     }
//
// });
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');