<template>
  <div class="lh-pro-list">
        <ul class="lh-pro-ul">
          <li class="lh-pro-item" v-for="(ele,index) in listData" :key="ele.goodsId">
            <router-link :to="'/detail/'+ele.goodsId" >
              <img  v-lazy="'http://image.loho88.com/'+ele.img"  class='pic' alt="">
            </router-link>
            <p>{{ele.title}}</p>
          </li>
        </ul>
      </div>
</template>
<script>
  export default {
    name: 'lh-pro-list',
    props: {
      /* 那个地方调用ProList,则listData就从哪个地方传进来*/
      listData: {
        type: Array,
        default: ()=>[]
      }
    }
  }
</script>
<style scoped>
.lh-pro-list { color:red}
.pic { width:200px; height:200px;}
.pic[lazy=loading] {
  background:pink
}
</style>
