<template>
    <div id="header" class="clearfix">
        <div id="navigation">
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="#">Photo</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CHeader"
    }
</script>