<template>
    <div id="info">
        <div id="avatar"><img title="莫一哲" alt="莫一哲" src="../assets/images/faceicon.jpg"></div>
        <div id="latest">
            <p class="current">
                {{mood.content}}
                <span class="stamp">
                <span class="method">{{mood.created_at | formatDate('YYYY-MM-DD HH:mm')}} by {{mood.nick_name}}</span>
            </span>
            </p>
        </div>
    </div>
</template>

<script>
    import axios from "axios"
    import {url} from "../util"

    export default {
        name: 'Mood',
        data(){
            return {
                mood:{}
            }
        },
        mounted(){
            axios({
                method:"post",
                url: url("/api/mood/first"),
            }).then( ret =>{
                this.mood = ret.data.data
            })
        }
    }
</script>