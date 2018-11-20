<template>
    <div v-if="data.article">
        <div class="article-single">
            <CArticle :article="data.article"></CArticle>
            <div class="post-navi">
                <div class="prev"><strong>上一篇：</strong><span v-if="data.prev.id"><router-link
                        :to="'/article/'+data.prev.id">{{data.prev.title}}</router-link></span><span
                        v-if="!data.prev.id">嘿，这已经是最新的文章啦</span></div>
                <div class="next"><strong>下一篇：</strong><span v-if="data.next.id"><router-link
                        :to="'/article/'+data.next.id">{{data.next.title}}</router-link></span><span
                        v-if="!data.next.id">嘿，这已经是最后的文章啦</span></div>
            </div>
        </div>
        <Comment :postId="data.article.id"></Comment>
    </div>
</template>

<script>
    import {CArticle, Comment} from "../components";
    import axios from "axios"
    import {url} from "../util"

    export default {
        name: 'ArticleDetail',
        components: {
            CArticle,
            Comment
        },
        data() {
            return {
                data: {},
            }
        },
        methods: {
            loadList(data) {
                axios({
                    method: "post",
                    url: url("/api/article/detail"),
                    data: data,
                }).then(ret => {
                    this.data = ret.data.data
                })
            }
        },
        created() {
            this.loadList(this.$route.params)
        },
        beforeRouteUpdate(to, from, next) {
            this.loadList(to.params)
            next()
        }
    }
</script>