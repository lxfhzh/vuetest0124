<template>
  <div id="class-page">
    <lh-header tit="详情">
      <button slot="right" @click="sheetVisible=true">底部弹窗</button>
    </lh-header> 
    <lh-content>
        <div class="swipe-wrapper">
          <mt-swipe :auto="4000">
            <mt-swipe-item v-for="ele in pics">
              <img class="pic" :src="'http://image.loho88.com/'+ele" alt="">
            </mt-swipe-item>
          </mt-swipe>
        </div>
    </lh-content>

    <mt-actionsheet
    :actions="actions"
    v-model="sheetVisible">
  </mt-actionsheet>
  </div>
</template>
<script>
  import {mapActions,mapGetters} from 'vuex'
  export default {
    name: 'search',
    data(){
      return {
        actions:[
          {name:"拍照",method(){console.log("拍照")}},
          {name:"选择",method(){console.log("选择")}}
        ],
        sheetVisible:false
      }
    },
    computed:{
      ...mapGetters("product",[
        "pics"
      ])
    },
    methods:{
      ...mapActions("product",[
        "getDetailData"
      ])
    },
    mounted(){
      const id = this.$route.params.id //路由参数
      this.getDetailData({id}) //调用 store里面的action方法
    }
  }
  // 需要给 load-more的父级设置高度，给父级的容器设置 overflow:auto
</script>
<style scoped>
.swipe-wrapper { height:200px;}
.pic { width:100%; height:auto}
</style>