<template>
    <div>
       <h1>我是祖册页面</h1>
       <input type="text" v-model="username">
       <br>
       <input type="password" v-model="password">
       <button @click="handleClick">点击注册</button>
    </div>
</template>

<script>
    export default {
        name:login,
        data(){
            return{
                username:"",
                password:"",
            }
        },
        methods:{
            handleClick(){

            }
        }
    }
</script>

<style scoped>

</style>