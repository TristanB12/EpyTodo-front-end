<template>
    <div class="nav-bar-container">
        <div class="nav-bar">
            <div class="title-container">
                <img class="logo" src="@/assets/logo.png" alt="logo">
                <h1>EpyTodo</h1>
            </div>
            <ul class="nav-content">
                <li v-for="item in content"
                    :key="item.title"
                    :class="item.status">
                    {{ item.title }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import navContent from '@/datas/navContent.js'
    export default {
        computed: {
            content() {
                if (this.$store.state.user)
                    return navContent.authed_content
                return navContent.unauthed_content
            }
        },
    }
</script>

<style lang="scss" scoped>
.nav-bar-container {
    background-color: #F4F4F4;
    height: 70px;
    position: sticky;
    top: 0;
    box-shadow: 1px 3px 2px rgba(0, 0, 0, 0.25);
}
.nav-bar {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
}
.title-container {
    display: flex;
    align-items: center;

    h1 {
        font-family: 'Roboto', sans-serif;
        padding-left: 20px;
    }
    .logo {
        width: 70px;
    }
}
.nav-content {
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
        list-style: none;
    }
}
.nav-text {
    font-family: 'Courgette', cursive;
    font-size: 20px;
}
.nav-btn {
    padding: 6px 5px;
    border-radius: 5px;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 18px;
    background-color: #F7B731;
    color: white;
}
</style>