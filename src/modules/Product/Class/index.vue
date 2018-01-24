<template>
  <div id="class-page">
    <lh-header tit="商品分类"></lh-header> 
    <lh-content>
      <div class="load-wrap">
        <mt-loadmore 
          :auto-fill="false"
          :top-method="loadTop"
          :bottom-method="loadBottom"
          :bottom-all-loaded="listAllLoaded"
          ref="loadmore">
          <lh-pro-list 
            :list-data="listData"
          >
          </lh-pro-list>
        </mt-loadmore>
      </div>
    </lh-content>
  </div>
</template>
<script>
  import {mapGetters,mapActions} from 'vuex'
  export default {
    name: 'search',
    data(){
      return {
        page:1
      }
    },
    computed:{
      ...mapGetters("product",[
        "listData","listAllLoaded"
      ])
    },
    methods:{
      ...mapActions("product",["getListData"]),
      loadTop(){
        console.log("下拉刷新")
        this.page =1;
        this.getListData({
          page:this.page,
          callback:()=>{
            this.$refs.loadmore.onTopLoaded(); //设置回调，请求完成结束 加载更多
          }
        })
      },
      loadBottom(){
        console.log("上拉加载")
        this.page++;
        this.getListData({
          page:this.page,
          callback:()=>{
            this.$refs.loadmore.onBottomLoaded(); //设置回调，请求完成结束 加载更多
          }
        })
      }
      
    },
    mounted(){
      //直接调用action方法
      this.getListData({page:this.page})
    }
  }
  // 需要给 load-more的父级设置高度，给父级的容器设置 overflow:auto
</script>
<style>
  .load-wrap { height:80vh;  }
  .content{ overflow:auto}
</style>