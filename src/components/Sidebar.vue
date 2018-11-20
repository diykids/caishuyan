<template>
    <div id="sidebar">
        <div class="sect" id="search">
            <form id="searchpanel" action="/search" method="get" @submit.prevent="submit">
                <p>
                    <input class="input_text" type="text" name="keyword" @change="changeKeyword" :value="keyword"/>&nbsp;<input
                        class="formbutton" type="submit" value="搜索"/>
                </p>
            </form>
        </div>

        <Calendar/>
        <SidebarList title="文章分类" url="/api/cate/all"></SidebarList>
        <SidebarList title="历史存档" url="/api/article/archive"></SidebarList>
        <SidebarList title="最新评论" url="/api/comment/new"></SidebarList>
        <SidebarList title="我关注的" url="/api/link/all" target="_blank"></SidebarList>

        <div class="rss">
            <i class="iconfont icon-feed" style="color: orangered"></i><a href="/feed.xml" target="_blank">订阅我的消息</a>
        </div>
    </div>
</template>

<script>
    import SidebarList from "./SidebarList";
    import Calendar from "./Calendar";
    import {mapState,mapMutations} from "vuex"

    export default {
        name: "Sidebar",
        components: {
            SidebarList,
            Calendar
        },
        computed:{
            ...mapState(['keyword'])
        },
        methods: {
            ...mapMutations(['setKeyword']),
            submit: function () {
                this.$router.push({name: 'search', query: {keyword: this.keyword}})
            },
            changeKeyword(e){
                this.setKeyword(e.target.value)
            }
        },
        created(){
            this.setKeyword(this.$route.query.keyword)
        }
    }
</script>