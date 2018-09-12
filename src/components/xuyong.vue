<template>
  <div class="hello">
         <h1>这是详情页002</h1>
         <p>我是动态路由参数 {{$route.params.id}}</p>
         <p>{{xinxi}}</p>
          <ul>
           <li>
             <router-link to="/">to首页</router-link>
           </li>
         </ul>
  </div>
</template>

<script>
export default {
  name: 'xuyong',
  data () {
    return {
      xinxi: 'Welcome to 详情页'
    }
  },
  created(){
    console.log(this.$route.params.id)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello h1{
  background: skyblue
}
</style>
