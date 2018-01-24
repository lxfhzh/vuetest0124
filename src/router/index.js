import Vue from 'vue'
import Router from 'vue-router'

/*import SelectCity from "@/modules/Home/SelectCity"
import Class from "@/modules/Product/Class"
import Detail from "@/modules/Product/Detail"*/
import SouYe from "@/modules/Home/SouYe"
Vue.use(Router)

export default new Router({
  routes: [
    /*{
      path: '/selectCity',
      name: 'selectCity',
      component: SelectCity
    },
     {
      path: '/class',
      name: 'class',
      component: Class
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },*/
    {
      path:'/souYe',
      name:'souYe',
      component:SouYe
    },
    {
      path: '*',
      component: {template:"<div>404</div>"}
    }
  ]
})
