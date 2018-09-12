<template>
  <div class="hello">
         <h1>这是首页001</h1>
         <p>{{msg}}</p>
         <ul>
           <li>
             <router-link to="/xuyong/223">to详情页</router-link>
           </li>
         </ul>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to 首页'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello h1{
  background:red
}
</style>
