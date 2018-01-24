import axios from "axios"
export default {
  namespaced:true,
  state:{
    listData:[],
    listPage:1,
    listCount:9999,
    detailData:{
      info:{
        pics:[]
      }
    }
  },
  getters:{
    //辅助组件获取数据
    listData:state=>state.listData,
    listAllLoaded:state=>{
      //state.listCount //总数据 数量
      //console.log(state.listPage*20,state.listCount)
      if(state.listPage*20>=state.listCount){
        return true
      }else {
        return false
      }
    },
   // listAllLoaded:state=>(state.page*20>=state.listCount),
    pics:state=>state.detailData.info.pics,

  },
  mutations:{
    //修改数据
    setListData(state,{listData,count,page}){
      state.listCount = count //把总数据 条目保存起来
      state.listPage = page //把页面保存起来
      if(page===1){ //第一页就直接赋值
        state.listData = listData
      }else{//更多数据需要 和之前的数据拼接
        state.listData = state.listData.concat(listData)
      }
    },
    setDetailData(state,{detailData}){
      //设置详情数据
      state.detailData = detailData
    }
  },
  actions:{
    getListData(context,{page,callback}){
      //获取 数据
      axios.get("/loho/search/?e=222&page="+page).then(res=>{
        console.log(res.data, res.data.result.data)
        let result = res.data.result
        // 把数据提交个mutation修改
        context.commit("setListData",{
          listData:result.data,
          count:result.count,
          page
        })
        callback && callback()
      })
    },
    getDetailData({commit},{id}){
      //获取详情数据
      axios("/loho/goods/"+id).then(res=>{
        // res.data.result
        //提交数据给mutation
        commit("setDetailData",{
          detailData:res.data.result
        })
      })
    }
  }
}