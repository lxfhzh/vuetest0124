<template>
    <div class='home-prolist'>
        <mt-loadmore 
        :auto-fill="false"
        :top-method="loadTop"
        :bottom-method="loadBottom"
        :bottom-all-loaded="allLoaded"
        ref="loadmore">
            <ul class='prolist-ul'>
                <li v-for='ele in listData'>
                    <p class='pro-list-img-box'><img :src='"http://image.loho88.com/"+ele.img' class='pro-list-img'></p>
                    <p >{{ele.title}}</p>
                    <p><span></span><span></span></p>
                </li>
            </ul>    
        </mt-loadmore>
        
    </div>
</template>

<script>
    export default {
        data () {
            return{
                allLoaded: false,
                listData: [],
                page: 1,
            }
        },
        methods: {
            loadTop () {
                this.page = 1;
                this.allLoaded = false;
                this.getProductData(() => {
                    this.$refs.loadmore.onTopLoaded();
                })
            },
            loadBottom () {
                this.page++;
                this.getProductData(() => {
                     this.$refs.loadmore.onBottomLoaded();
                })
            },
            getProductData (callBack) {
                this.axios.get('/loho/search/?e=222&page=' + this.page).then (res => {
                    const count = res.data.result.count
                    if(this.page * 20 >= count){
                        this.allLoaded = true;
                    }
                    if(this.page === 1){
                        this.listData = res.data.result.data;
                    }else{
                        this.listData = this.listData.concat(res.data.result.data);
                    }

                    callBack&&callBack();
                })
            },
        },
        mounted () {
            this.getProductData ()
        },
    }
</script>

<style scoped>
    .home-prolist {
        max-width: 750px;
        margin: 0 auto;
        font-size: 12px;
        background: #e1e1e1;
    }
    .prolist-ul {
        overflow: hidden;
        width: 100%;
    }
    .prolist-ul li{
        background: #fff;
    }
    .prolist-ul li:nth-of-type(odd) {
        margin: 3px;
        margin-left: none;
        height: 253px;
        float: left;
        width: 48%;
        padding: 12px;
    }
    .prolist-ul li:nth-of-type(even) {
        margin: 3px;
        margin-right: none;
        height: 253px;
        float: right;
        width: 48%;
        padding: 12px;
    }
    .pro-list-img-box {
        height: 144px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .pro-list-img {
        width: 160px;
        height: 64px;
    }
</style>

