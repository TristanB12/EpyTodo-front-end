<template>
    <div class="home">
        <div class="home-header">
            <h2>My Todos</h2>
            <img class="add-todo" src="@/assets/add-todo.png" alt="">
        </div>
        <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo"/>
    </div>
</template>

<script>
import mock from "@/datas/mockHomePage.js"
import TodoItem from '@/components/TodoItem.vue';
    export default {
        components: {
            TodoItem,
        },
        data() {
            return {
                todos: mock.todos
            }
        },
    }
</script>

<style lang="scss" scoped>
.home {
    width: 50%;
    margin: auto;
    margin-top: 50px;
}
.home-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
        font-family: 'Raleway', sans-serif;
        font-size: 48px;
        font-weight: 300;
    }
}
.add-todo {
    height: 50px;
    cursor: pointer;

    &:hover {
        height: 52px;
        transition-duration: 200ms;
    }
}
</style>