<template>
    <div class="sect">
        <h2>{{title}}</h2>
        <ul class="tlist">
            <li v-for="(v,k) in items" :key="k">
                <router-link :to="v.url" :target="target">{{v.content}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from "axios"
    import {url} from "../util"

    export default {
        name: "SidebarList",
        props: {
            title: String,
            url: String,
            target: {
                default: "_self"
            }
        },
        data() {
            return {
                items: {}
            }
        },
        mounted() {
            axios({
                method: "post",
                url: url(this.url),
            }).then(ret => {
                this.items = ret.data.data
            })
        }
    }
</script>