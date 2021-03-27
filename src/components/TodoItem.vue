<template>
    <div class="todo-container" @click="clickOnTodo()">
        <div class="todo-item">
            <h4> {{ todo.title }} </h4>
            <span class="due-time"> {{ todo.due_time }} </span>
            <div :class="'status-container ' + todo.status">
                <span class="status"> {{ todo.status }} </span>
            </div>
        </div>
        <div class="todo-details" v-if="detailsOpened">
            TODO DETAILS
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            todo: {
                type: Object,
                default: {}
            },
        },
        data() {
            return {
                detailsOpened: false
            }
        },
        methods: {
            clickOnTodo() {
                this.detailsOpened = !this.detailsOpened;
            }
        },
    }
</script>

<style lang="scss" scoped>
.todo-container {
    background-color: #F3F3F3;
    box-shadow: 1px 3px 2px rgba(0, 0, 0, 0.25);

     &:hover {
        background-color: rgb(223, 223, 223);
        transition-duration: 200ms;
    }
}
.todo-item {
    height: 70px;
    margin-top: 25px;
    display: grid;
    align-items: center;
    grid-template-columns: 2fr 2fr 1fr;
    border-bottom: 1px solid rgb(223, 223, 223);
    cursor: pointer;

    * {
        text-align: center;
    }
    h4 {
        font-size: 26px;
        color: #4B6584;
        font-family: 'Cabin', sans-serif;
        font-weight: 300;
    }
}
.due-time {
    font-family: 'Raleway', sans-serif;
    font-size: 22px;
}
.status-container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.status {
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    color: white;
}

.done {
    background-color: #20BF6B;
}
.doing {
    background-color: #F7B731;
}
.stopped {
    background-color: #EB3B5A;
}
</style>