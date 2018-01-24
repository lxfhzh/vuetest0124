<template>
  <!--<div>
    <lh-header tit="宝贝探索"></lh-header>
    <div class="footer"></div>-->
    <!--<lh-content>-->
      <!--<div class="index-wrap">-->
        <!--<mt-index-list>-->
          <!--<mt-index-section v-for="letter in letters" :index="letter">
            <div  v-for="city in list[letter]" :title="city.cityName">{{city.cityName}}</div>
          </mt-index-section>-->
          <!--<mt-index-section>-->

            <!--<div v-for="(item,index) in listData" >
              {{index}} - {{item.pid}}
            </div>-->

          <!--</mt-index-section>-->
        <!--</mt-index-list>-->
      <!--</div>&lt;!&ndash;&ndash;&gt;-->
    <!--</lh-content>-->
  <!--</div>-->

  <!--<ul id="app">
    <li v-for="(item, index) in listData">
      {{ index }} - {{ item.pid }}
    </li>
  </ul>-->
  <!--review.review_list.length > 0-->
  <div>
    <lh-header></lh-header>
    <div class="footer"></div>
    <lh-content>
      <!--轮播图,太棒了 后端已经可以从mysql中获取到轮播数据了  现在的关键是怎么将它显示在前端页面上-->
        <ul  v-if="listData.length>0">
          <li class="souyeli1" v-for="(item, index) in listData">
            <a href="#" class="souyea1"><img :src='item["img_url"]' alt="" class="souyeimg1"></a>
            {{index}} - {{item["p_name"]}}
          </li>
        </ul>
    </lh-content>
  </div>
</template>
<script>
import { mapGetters,mapActions } from 'vuex'
  export default {
    name: 'souye',
    computed:{
      //mapGetters工具函数会将store中的getter映射到局部计算属性中。//使用对象扩展操作符把getter混入到computed中
      //在home.js的getters中写了什么，mapGetters下面就写什么
      ...mapGetters("home",[
        /*"letters","list"*/
        "listData"
      ])
    },
    methods:{
      //把store 里面的action 传递（绑定）给组件的 methods
      ...mapActions("home",[
        /*"getCityData"*/
        "getListData"
      ])
    },
    mounted(){
      //发起 获取服务器数据的 action
      // this.$store.dispatch("getCityData")
      this.getListData()

    }

    //太棒了 你今天的成绩特别优秀 你已经拿到数据了  加油 努力  一个人又怎样 我一个人只要静下心来照样什么都可以做，太棒了，一定要养成自己解决问题的能力
    /*mounted(){
      axios.get("/loho").then(res=>{
        console.log(res)
      })
    }*/
  }
</script>
<style scoped>
  .souyeli1{display:flex}
  .souyea1 .souyeimg1{width:50%;height:50%}
  .index-wrap { position:absolute; top:45px; bottom:0; width:100%; overflow:auto}
</style>
