<template>
  <div>
    <lh-header tit="搜索"></lh-header> 
    <div class="footer"></div>
    <lh-content>
   
      <div class="index-wrap">
        <mt-index-list>
          <mt-index-section v-for="letter in letters" :index="letter">
            <div  v-for="city in list[letter]" :title="city.cityName">{{city.cityName}}</div>
          </mt-index-section>
        </mt-index-list>
      
      </div>
    </lh-content>
  </div>
</template>
<script>
import { mapGetters,mapActions } from 'vuex'
  export default {
    name: 'search',
    computed:{
      ...mapGetters([
        "letters","list"
      ])
    },
    methods:{
      //把store 里面的action 传递（绑定）给组件的 methods
      ...mapActions([
        "getCityData"
      ])
    },
    mounted(){
      //发起 获取服务器数据的 action
     // this.$store.dispatch("getCityData")
      this.getCityData()
    }
  }
</script>
<style scoped>
  .index-wrap { position:absolute; top:45px; bottom:0; width:100%; overflow:auto} 
</style>