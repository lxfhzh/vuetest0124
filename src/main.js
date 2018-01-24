// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//导入vue
import Vue from 'vue'
//导入同目录下的App.vue,因为App.vue中暴露出来的名字是App  所以
import App from './App'
//导入同目录下的router文件夹下的index.js
import router from './router'
//导入同目录下的store文件夹下的index.js
import store from "./store"
/*import './assets/iconfont/iconfont.css'*/
/* 全局引入插件 */
import axios from 'axios'
/* 导入公用组件 */
/* 导入公用的头部,在其他组件中只需要<lh-Header></lh-Header> */
import lhHeader from '@/components/Header'
import lhContent from '@/components/Content'
import lhProList from '@/components/ProList'


import {Button,Loadmore,Lazyload,Swipe, SwipeItem ,actionsheet} from "mint-ui"
import { TabContainer, TabContainerItem } from 'mint-ui';
import { Cell } from 'mint-ui';
import { Tabbar, TabItem } from 'mint-ui';
import { IndexList, IndexSection } from 'mint-ui';

Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection)
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Cell.name, Cell);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);


Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(actionsheet.name,actionsheet)
Vue.use(Lazyload); //使用插件
Vue.component(Loadmore.name, Loadmore);
Vue.component(Button.name,Button)

/* 全局注册公用组件 */
Vue.component("lh-header",lhHeader)
Vue.component("lh-content",lhContent)
Vue.component("lh-pro-list",lhProList)

/* 全局设置插件 ,给Vue原型添加属性 */
Vue.prototype.axios = axios
Vue.config.productionTip = false
/* productionTip */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


/*import Vue from 'vue'
//导入同目录下的App.vue,因为App.vue中暴露出来的名字是App  所以
import App from './App'
//导入同目录下的router文件夹下的index.js
import router from './router'
//导入同目录下的store文件夹下的index.js
import store from "./store"

import axios from 'axios'
Vue.prototype.axios = axios
Vue.config.productionTip = false

new Vue({
  el:"#app",
  data:{
    listData:[]
  },
  mounted(){
    // this.$http.get("http://alimam.duapp.com/product/getList?linenumber=20&pageNum=2").then(res=>{
    //   //res.data 获取后端数据
    //   console.log(res.data.resultsArr)
    //   this.listData = res.data.resultsArr

    // })
    /!*this.$http.jsonp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=12",{
      jsonp:"cb"
    }).then(res=>{
      //res.data 获取后端数据
      console.log(res)
  })*!/
    axios.get("/loho").then(res=>{
      console.log(res)
  })
  }

})*/

