
import axios from "axios"


/*store/modules/home.js中的配置config,config是一个对象，对象中包括命名空间namespaced,
数据state,对数据进行获取/分拣/计算的getters,变更状态mutations,actions */

const config = {
  namespaced:true,//每个组件都有自己的命名空间
  state:{
    /*cityData:{}*/
    data:{}
  },
  getters:{
    //Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。就像计算属性一样，
    // getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
    // 获取/分拣/计算/ 组件需要的数据（方便组件使用store里面的数据）
    /*letters:state=>state.cityData.letters ||[],
    list:state=>state.cityData.list||{}*/
    listData:state=>state.data.listData||[]
  },
  mutations:{
    /*setCityData(state,payload){
      //修改数据，组件会自动接收
      state.cityData = payload.cityData
    }*/
    setListData(state,payload){
      state.data=payload.data
    }
  },
  actions:{
    /*getCityData(context,payload){
      //context代表store的上下文 context也可以当作store的别名
      //获取服务器数据
      //现在需要自己模拟数据  关键是怎么模拟  怎么从数据库中取到数据
      axios("/loho/store/clist").then(res=>{
        //提交数据给mutation
        context.commit("setCityData",{cityData:res.data.result})

      })
    }*/
    getListData(context,payload){
      axios("/loho").then(res=>{
        console.log(res)
        console.log(res.data)//{}
        console.log(res.data.listData)//[]
        context.commit("setListData",{data:res.data})
      })
    }
  }
}

export default config
