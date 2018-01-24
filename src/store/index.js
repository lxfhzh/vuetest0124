import Vuex from "vuex"
import Vue from "vue"

/* 导入store下面的modules文件夹下面的home.js */
import home from "./modules/home"
/* 导入store下面的modules文件夹下面的product.js */
import product from "./modules/product"
Vue.use(Vuex)

const store = new Vuex.Store({
  modules:{
    home,product
  }
})

export default store
