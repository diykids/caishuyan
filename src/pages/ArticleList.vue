<template>
    <div>
        <div class="articles" v-for="(v,k) in articles" :key="k">
            <CArticle :article="v"></CArticle>
            <div class="post-meta">
                <span v-if="v.comment_num === 0">暂无评论</span><span
                    v-if="v.comment_num > 0">评论({{v.comment_num}})</span><span class="line">|</span><router-link
                    :to="'/article/'+v.id+'#comments'">发表评论&gt;&gt;</router-link>
            </div>
        </div>
        <Paginate
                v-model="page"
                :page-count="pageTotal"
                :click-handler="changePage"
                :prev-text="'<上一页'"
                :next-text="'下一页>'"
                :container-class="'paginator'">
        </Paginate>
    </div>
</template>

<script>
    import axios from "axios"
    import {mapState,mapMutations} from "vuex"
    import {CArticle} from "../components";
    import Paginate from 'vuejs-paginate'
    import {url} from "../util"

    export default {
        name: 'ArticleList',
        components:{
            CArticle,
            Paginate
        },
        data() {
            return {
                articles: [],
                pageTotal: 0,
                page:1
            }
        },
        methods: {
            ...mapMutations(['setKeyword']),
            loadList() {
                let data = {...this.$route.params,...this.$route.query}
                axios({
                    method: "post",
                    url: url("/api/article/list"),
                    data: data,
                }).then(ret => {
                    this.articles = ret.data.data.articles
                    this.pageTotal = ret.data.data.pageTotal
                })
            },
            changePage(pageNum){
                this.page = pageNum
                let q = {...this.$route.query}
                q.page = pageNum
                this.$router.push({path:this.$router.path,query:q})
            }
        },
        computed:{
            ...mapState(['keyword'])
        },
        created() {
            if(this.$route.query.page){
                this.page = parseInt(this.$route.query.page)
            }
            this.loadList()
        },
        watch: {
            '$route'(to, from) {
                if(!to.query.page){
                    this.page = 1
                }

                if(to.path !== '/search'){
                    this.setKeyword('')
                }
                this.loadList()
            }
        }
    }
</script>