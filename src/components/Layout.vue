<template>
    <div id="container">
        <CHeader/>
        <div class="header-wapper">
            <h1><router-link to="/">Cindy Blog</router-link></h1>
            <p class="description"><span>live beautifully, dream passionately, love completely</span></p>
        </div>
        <div id="main">
            <div id="content">
                <router-view/>
            </div>
            <Sidebar/>
        </div>
        <CFooter/>
    </div>
</template>

<script>
    import {CFooter, CHeader, Mood, Sidebar} from './index'

    export default {
        name: 'Layout',
        components: {
            CHeader,
            CFooter,
            Sidebar,
            Mood
        },
        methods:{
            isPage:function (path) {
                return this.$route.path === path
            }
        }
    }
</script>
<style>
    .hljs-keyword,.hljs-request,.hljs-status,.hljs-subst,.hljs-winutils,.nginx .hljs-title,.hljs-id,.hljs-title,.scss .hljs-preprocessor,.hljs-class .hljs-title,.hljs-type,.tex .hljs-command,.vhdl .hljs-literal,.hljs-cdata,.hljs-doctype,.hljs-pi,.hljs-pragma,.hljs-preprocessor,.hljs-shebang {
        font-weight: 700
    }
</style>