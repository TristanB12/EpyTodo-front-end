<template>
    <div class="sign-up">
        <h3>Name</h3>
        <input type="text" placeholder="Your name here.." v-model="name">
        <h3>Firstname</h3>
        <input type="text" placeholder="Your first name here.." v-model=firstname>
        <h3>Email</h3>
        <input type="text"  placeholder="Your mail adress here.." v-model="email">
        <h3>Password</h3>
        <input type="password" placeholder="Your strong password here.." v-model="password">
        <button @click="signUp()">Sign up</button>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                name: '',
                firstname: '',
                email: '',
                password: '',
                error: ''
            }
        },
        methods: {
            signUp() {
                if (this.name != '' && this.firstname != '' &&
                    this.email != '' && this.password != '')
                axios.post("http://localhost:8080/register", {
                    email: this.email,
                    name: this.name,
                    firstname: this.firstname,
                    password: this.password
                })
                .then(response => {
                    this.$store.dispatch('setToken', response.data.token)
                    this.$router.push({name: 'HomePage'})
                })
                .catch(err => {
                    this.error = err.response.data.msg
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
.sign-up {
    width: 20%;
    margin-top: 50px;
}
h3 {
    margin-top: 20px;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 20px;
}
input {
    width: 100%;
    padding: 10px 5px;
    font-size: 18px;
    background-color: #ECECEC;
    border: none;
    border-bottom: 2px solid #989898;
    outline: none;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;

    &::placeholder {
        color: rgb(185, 185, 185);
    }
}
button {
    width: 100%;
    margin-top: 20px;
    padding: 10px 7px;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 500;
    color: white;
    background-color: #F7B731;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: rgb(240, 170, 18);
    }
}
</style>