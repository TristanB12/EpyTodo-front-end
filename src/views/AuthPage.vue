<template>
    <div class="auth-page">
        <div class="menu">
            <router-link :to="{name: 'SignIn'}">Sign in</router-link> |
            <router-link :to="{name: 'SignUp'}">Sign up</router-link>
        </div>
        <div class="page-content">
            <transition name="fade" mode="out-in">
                <router-view />
            </transition>
            <img src="@/assets/project-management.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        mounted () {
            this.$router.push({name: 'SignIn'});
        },
    }
</script>

<style lang="scss" scoped>
.auth-page {
    width: 80%;
    margin: auto;
    margin-top: 50px;
}
.menu {
    font-family: 'Raleway', sans-serif;
    font-size: 2em;
    text-align: center;
    font-weight: 300;

    a {
        text-decoration: none;
        color: black;
    }
}
.page-content {
    display: flex;
    justify-content: space-around;
    img {
        height: 600px;
    }
}
</style>