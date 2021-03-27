<template>
    <div class="sign-in">
        <h3>Name</h3>
        <input type="text"  placeholder="Your mail adress here..">
        <h3>Password</h3>
        <input type="password" placeholder="Your password here..">
        <button>Sign in</button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.sign-in {
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