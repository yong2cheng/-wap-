<template>
    <div>
        <div class="integral_wrapper">
            <div class="new-header">
                <div class="container cl">
                    <img src="../../../images/back.png" style="float: left;" @click="$router.back(-1)"/>
                    <div class="container_detail">积分商城</div>
                </div>
            </div>
            <!-- <div class="shopping_count" >
                <ul class="cf" v-if="taskList.length > 0">
                    <li v-for="(item, index) in taskList" :key="index" class="cf">
                        <p class="shopping_img"><img :src="'http://vip.31d461.cn/api/'+item.goodsPic" alt=""></p>
                        <p class="shopping_img shopping_name cf"><span>{{item.goodsName}}</span><em>{{item.goodsIntegral}}积分</em></p>
                        <p class="shopping_oper" @click="exchange(item)">兑换</p>
                    </li>
                </ul>
                <NoneData v-else></NoneData>
            </div> -->
            <div class="shopping_count1" >
                <ul class="cf" v-if="taskList.length > 0">
                    <li v-for="(item, index) in taskList" :key="index" class="cf">
                        <p class="shopping_img1"><img :src="'http://vip.31d461.cn/api/'+item.goodsPic" alt=""></p>
                        <div class="shopping_img1 shopping_name1 cf"><h4>{{item.goodsName}}</h4><em>{{item.goodsIntegral}}积分</em></div>
                        <p class="shopping_img1" @click="exchange(item)"><button class="commom_button inter_button">兑换</button></p>
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
            this.getGoodsList()
        },
        mounted () {
            window.addEventListener('scroll', () => {
                let distance = document.documentElement.scrollTop || document.body.scrollTop,
                    winH = document.documentElement.clientHeight || document.body.clientHeight,
                    scrollH = document.documentElement.scrollHeight || document.body.scrollHeight;
                if (distance+winH >= scrollH) {
                    if (this.taskLoadingBol) {
                        this.pageindex ++;
                        this.getGoodsList()
                    }
                }
            })
        },
        computed: {
            ...mapGetters([
                'dataList',
                'taskList',
                'taskLoadingMore',
                'taskLoadingBol'
            ])
        },
        methods: {
            // 得到积分兑换列表
            async getGoodsList() {
                let obj = {
                    current: this.pageindex
                }
                await this.$store.dispatch('getGoodsList',obj)
            },

            async exchange(item) {
                await this.$store.dispatch('getAddress');
                if(this.dataList) {
                    this.exchangeShoopping(item)
                } else {
                    this.$message({
                        message: '请先收获新增地址！！！',
                        type: 'info',
                        duration:1500
                    });
                }
            },

            // 兑换商品
            exchangeShoopping (item) {
                this.$confirm('*退货按照商品等价金额打款至收款账户，需扣除2元每笔服务费', '提示', {
                    distinguishCancelAndClose: true,
                    confirmButtonText: '提货',
                    cancelButtonText: '退货',
                    type: 'warning',
                    center: true,
                    customClass:'message_width message_color'
                }).then(async () => {
                    await this.$store.dispatch('exchangeShoopping',{
                        goodsId:item.id,
                        status:1
                    })
                    this.$message({
                        message: '提货成功',
                        type: 'success',
                        duration:1500
                    });
                    this.getGoodsList()
                }).catch(async (action) => {
                    if(action === 'cancel') {
                        await this.$store.dispatch('exchangeShoopping',{
                            goodsId:item.id,
                            status:3
                        })
                        this.$message({
                            message: '退货成功',
                            type: 'success',
                            duration:1500
                        });
                    } 
                });
            },
        }
    }
</script>
<style lang="css" scoped>
/* .shopping_count {
    width: 100%;
    margin-top: 70px;
} */
.shopping_count .shopping_img span{
    /* display: block; */
    /* font-size: 0.35rem; */
    /* font-weight: bold; */
    /* 让超出的用...实现 */
    /* text-overflow:ellipsis; */
    /* 禁止换行 */
    /* white-space:nowrap; */
    /* 超出的隐藏 */
	/* overflow:hidden; */
    /* margin: 10px 0; */
}
/* .shopping_count ul li {
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
    width:36px;
    padding: 5px;
    margin: 35px 5px;
    border: 1px solid #FE4B1C;
    border-radius: 5px;
    background: #FE4B1C;
    color: #fff;
} */
.shopping_count1 {
    width: 100%;
    margin-top: 60px;
}
.shopping_count1 .shopping_img1 h4{
    display: block;
    /* font-size: 0.35rem; */
    font-weight: bold;
    /* 让超出的用...实现 */
    text-overflow:ellipsis;
    /* 禁止换行 */
    white-space:nowrap;
    /* 超出的隐藏 */
	overflow:hidden;
}
.shopping_count1 ul li {
    float: left;
    width:50%;
    background: #fff;
}
.shopping_count1 .shopping_img1 em {
    color: #FE4B1C;
    /* font-size: 0.3rem; */
}
.shopping_img1  {
    width:100%;
    float: left;
}
.shopping_img1 img{
    display: block;
    width: 180px;
    height: 90px;
    margin: 10px auto;
}
.shopping_name1 {
    text-align: center;
}
.shopping_img1  .inter_button {
    display: block;
    margin: 5px auto;
    background: #FE4B1C;
    color: #fff;
}
</style>