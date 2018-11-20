<template>
    <div v-if="data.article">
    <div class="article-single">
        <CArticle :article="data.article"></CArticle>
    </div>
    <Comment :postId="data.article.id"></Comment>
    </div>
</template>

<script>
    import {CArticle,Comment} from "../components";
    import axios from "axios"
    import {url} from "../util"

    export default {
        name: 'About',
        components:{
            CArticle,
            Comment
        },
        data() {
            return {
                data: {},
            }
        },
        methods: {
            loadList() {
                axios({
                    method: "post",
                    url: url("/api/article/detail"),
                    data: {url:"about"},
                }).then(ret => {
                    this.data = ret.data.data
                })
            }
        },
        created() {
            this.loadList()
        }
    }
</script>