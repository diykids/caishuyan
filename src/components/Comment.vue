<template>
    <div class="comment" id="comments">
        <h3><span class=commsty>评论内容</span></h3>
        <ul>
            <li class="comment-null" v-if="comments.length === 0">还没有评论!</li>
            <li v-for="(v,k) in comments" :key="k">
                <a :title="v.name" href="javascript:void(0);" class="avatar"><img width="32" height="32"
                                                                                  :src="url('/api/avatar?name=')+v.name"></a>
                <div class="comment-doc">
                    <h4><a href="javascript:void(0);" class="author">{{v.name}}</a><span class="actions">{{v.created_at | formatDate('YYYY-MM-DD HH:mm')}}</span>
                    </h4>
                    <div class="comment-entry">{{v.content}}</div>
                </div>
            </li>
        </ul>
        <div class="comment-form">
            <form id="comment_form" method="post" @submit.prevent="submit">
                <p><textarea name="content" placeholder="内容" v-model="inputdata.content"></textarea></p>
                <p>
                    <input type="text" class="input_text" name="name" placeholder="昵称" v-model="inputdata.name"/>
                    <input type="hidden" name="post_id" :value="postId"/>
                </p>
                <p><input class="formbutton" type="submit" value="提交"></p>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from "axios"
    import {url} from "../utils"

    export default {
        name: "Comment",
        props: ["postId"],
        data() {
            return {
                inputdata: {},
                comments: [],
            }
        },
        methods: {
            url(u){
              return url(u)
            },
            submit(e) {
                this.inputdata.post_id = this.postId
                axios({
                    method: "post",
                    url: url("/api/comment/post"),
                    data: this.inputdata,
                }).then(ret => {
                    if(ret.data.statusCode === 200){
                        this.comments.push(ret.data.data)
                        this.inputdata = {}
                    }else{
                        alert(ret.data.message)
                    }
                })
            },
            loadList(id) {
                axios({
                    method: "post",
                    url: url("/api/comment/list"),
                    data: {id: id},
                }).then(ret => {
                    this.comments = ret.data.data
                })
            }
        },
        created() {
            this.loadList(this.postId)
        },
    }
</script>