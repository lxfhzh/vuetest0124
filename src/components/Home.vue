/* eslint-disable */
<template>
  <div>
    <m-header tit="首页"></m-header>
    <m-list></m-list>
    <m-content></m-content>
    <m-footer></m-footer>
  </div>
</template>
<script>
  import Header from './Header'
  export default {
    name:'home',
    data () {
      return {
        title:'home'
      }
    },
    components:{
      "m-header":Header,
      "m-list":{template:"<div>list</div>"},
      "m-content":{template:"<div><slot></slot></div>"},
      "m-footer":{template:"<div>footer</div>"}
    }
  }
</script>
<style scoped></style>
