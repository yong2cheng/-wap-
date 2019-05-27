<template>
    <div>
        <div class="integral_wrapper">
            <div class="new-header">
                <div class="container cl">
                    <img src="../../../images/back.png" style="float: left;" @click="$router.back(-1)"/>
                    <div class="container_detail">会员奖品</div>
                </div>
            </div>
            <div class="shopping_count" >
                <ul class="cf" v-if="taskList.length > 0">
                    <li v-for="(item, index) in taskList" :key="index">
                        <div class="cf">
                            <p class="shopping_img"><img :src="'http://localhost:8080/api/'+item.goodsPic" alt=""></p>
                            <p class="shopping_img shopping_name cf"><span>{{item.goodsName}}</span><em>{{item.goodsIntegral}}积分</em></p>
                            <p class="shopping_oper"><span>{{item.statusName}}</span></p>
                        </div>
                        <p style="margin:10px 2.5%">收货地址：{{item.address}}</p>
                        <p style="margin:10px 2.5%">{{item.receiver}}   {{item.telphone}}</p>
                        <!-- <p class="opertion_but" v-if="item.status == 1"><button class="commom_button" @click.stop="exchange(item)">申请退款</button></p> -->
                    </li>
                </ul>
                <NoneData v-else></NoneData>
            </div>
        </div>
        <Loading v-show="taskLoadingMore"></Loading>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    export default {
        data () {
            return {
                pageindex:1,
                keyword:'',
            }
        },
        components: {
        },
        created () {
            this.getBecomeVIPAwardsList()
        },
        mounted () {
            window.addEventListener('scroll', () => {
                let distance = document.documentElement.scrollTop || document.body.scrollTop,
                    winH = document.documentElement.clientHeight || document.body.clientHeight,
                    scrollH = document.documentElement.scrollHeight || document.body.scrollHeight;
                if (distance+winH >= scrollH) {
                    if (this.taskLoadingBol) {
                        this.pageindex ++;
                        this.getBecomeVIPAwardsList()
                    }
                }
            })
        },
        computed: {
            ...mapGetters([
                'dataList',
                'taskList',
                'taskLoadingMore',
                'taskLoadingBol',
                'userInfo'
            ])
        },
        methods: {
            // 得到积分兑换列表
            async getBecomeVIPAwardsList() {
                let obj = {
                    current: this.pageindex,
                    vipType:this.userInfo.vipType
                }
                console.log(obj)
                await this.$store.dispatch('getBecomeVIPAwardsList',obj)
            },
        }
    }
</script>
<style lang="css" scoped>
.shopping_count {
    width: 100%;
    margin-top: 70px;
}
.shopping_count .shopping_img span{
    display: block;
    font-size: 0.35rem;
    font-weight: bold;
    /* 让超出的用...实现 */
    text-overflow:ellipsis;
    /* 禁止换行 */
    white-space:nowrap;
    /* 超出的隐藏 */
	overflow:hidden;
    margin: 10px 0;
}
.shopping_count ul li {
        background: #fff;
    margin: 10px 0;
}
.shopping_count .shopping_img em {
    color: #FE4B1C;
    font-size: 0.3rem;
}
.shopping_img  {
    width:50%;
    float: left;
}
.shopping_img img{
    width:90%;
    height: 80px;
    margin: 10px 5%;
}
.shopping_name {
    width:calc(50% - 60px)
}
.shopping_oper {
    float: right;
    width:50px;
    margin: 35px 5px;
}
.shopping_oper span{
    display: block;
}
.shopping_oper em{
    padding: 5px;
    border: 1px solid #FE4B1C;
    border-radius: 5px;
    background: #FE4B1C;
    color: #fff;
}
.opertion_but {
    padding-bottom:10px
}
.opertion_but button{
    display: block;margin:0 auto;
    background: #FE4B1C;
    border: 1px solid #FE4B1C;
    color: #fff;
}
</style>