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
            <span class="description"> {{ todo.description }} </span>
            <div class="actions">
                <span @mouseover="editHover()" @mouseleave="editHover()">
                    <img v-if="!isEditHover" src="@/assets/edit.png" alt="">
                    <img  v-else src="@/assets/edit-hover.png" alt="">
                </span>
                <span @mouseover="deleteHover()"  @mouseleave="deleteHover()">
                    <img v-if="!isDeleteHover" src="@/assets/delete.png" alt="">
                    <img  v-else src="@/assets/delete-hover.png" alt="">
                </span>
            </div>
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
                detailsOpened: false,
                isEditHover: false,
                isDeleteHover: false
            }
        },
        methods: {
            clickOnTodo() {
                this.detailsOpened = !this.detailsOpened
            },
            editHover() {
                this.isEditHover = !this.isEditHover
            },
            deleteHover() {
                this.isDeleteHover = !this.isDeleteHover
            }
        },
    }
</script>

<style lang="scss" scoped>
.todo-container {
    background-color: #F3F3F3;
    box-shadow: 1px 3px 2px rgba(0, 0, 0, 0.25);

    &:hover {
        box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.25);
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
.todo-details {
    padding: 20px 0px;
    display: grid;
    grid-template-columns: 4fr 1fr;
    align-items: center;
}
.description {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    text-align: center;
}
.actions {
    display: flex;
    justify-content: space-around;
    img {
        height: 30px;
        cursor: pointer;
    }
}
</style>