<template>
    <div class="login">
       <h1>我是登陆页面</h1>
       <input type="text" v-model="username">
       <br>
       <input type="password" v-model="password">
       <button @click="handleSubmit">点击注册</button>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name:login,
        data(){
            return{
                username:"",
                password:"",
            }
        },
        methods:{
            handleSubmit(){
               axios.post('http://localhost:3000/login').then(res=>{
                   if(res.data.code == 200){
                       alert("success")
                       this.$router.push('/')
                   }else{
                       alert('000000')
                   }
               })
            }
        }
    }
</script>

<style scoped>
.login{
    margin: 300px 400px;
}
</style>