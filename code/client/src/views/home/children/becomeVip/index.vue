<template>
    <div>
        <div class="wrapper">
            <div class="new-header">
                <div class="container cl">
                    <img src="../../../../images/back.png" style="float: left;" @click="$router.back(-1)"/>
                    <div class="container_detail">成为VIP</div>
                </div>
            </div>
            <div class="shopping_count" v-if="!userInfo.vipType" >
                <ul class="cf" v-if="dataList.length > 0">
                    <li v-for="(item, index) in dataList" :key="index">
                        <div class="cf">
                            <p class="shopping_img"><img :src="'http://www.sai32m.cn:8080/api/'+item.goodsPic" alt=""></p>
                            <p class="shopping_img shopping_name cf"><span>{{item.goodsName}}</span><em>{{item.goodsIntegral}}积分</em></p>
                            <p class="shopping_oper"><span>{{item.vipTypeName}}</span></p>
                        </div>
                        <p class="opertion_but" v-if="item.vipType == 1"><el-button class="commom_button" :loading="loading1" @click="loading1=true;openMembership(item)">成为普通会员</el-button></p>
                        <p class="opertion_but" v-if="item.vipType == 2"><el-button class="commom_button" :loading="loading2" @click="loading2=true;openMembership(item)">成为高级会员</el-button></p>
                    </li>
                </ul>
                <NoneData v-else></NoneData>
            </div>

            <div class="wrapper_count have_vip_count"  v-else>
                <img src="../../../../images/VIP.jpg" alt="">
                <div class="have_vip_but">
                    <div class="color_org" >已成为{{userInfo.vipTypeName}}VIP</div>
                    <p style="font-size:0.28rem;color:#FE4B1C">有效期：{{userInfo.vipBeginDate.substring(0,10)}}至{{userInfo.vipEndDate.substring(0,10)}}</p>
                </div>
            </div>

            <!-- <el-dialog
                    class="task_dialog"
                    title="扫二维码付款"
                    :visible.sync="dialogVisible"
                    width="300px"
                    center
                    @close='closeDialog'>
                    <span style="margin-left: 25px;">
                        <img :src="codeImg" alt="">
                    </span>
            </el-dialog> -->
            <payment v-if="paymentShow" :info="paymentInfo" @close="close"></payment>
        </div>
    </div>
</template>
<script>
import payment from '../../../../components/payment/index'
    import { mapGetters } from 'vuex'
    export default {
        data () {
            return {
                codeImg:'',
                dialogVisible:false,
                intervalId:'',
                timeIndex:0,
                paymentShow:false,
                paymentInfo:{},
                loading1: false,
                loading2: false,
            }
        },
        components: {
            payment
        },
        created () {
            this.getVipCondition()
        },
        mounted () {

        },
        computed: {
            ...mapGetters([
                'dataList',
                'userInfo'
            ])
        },
        methods: {
            close (data) {
                this.loading1 = false
                this.loading2 = false
                this.paymentShow = false
                this.getUserInfo()
            },
            // closeDialog() {
            //     clearInterval(this.intervalId)
            //     this.dialogVisible = false
            //     this.timeIndex = 0
            //     this.codeImg = ''
            // },
            async getVipCondition () {
                await this.$store.dispatch('getVipCondition')
            },

            // async openMembership(data) {
            //     this.axios.get('address').then( res => {
			// 		if(res.code == 10000) {
            //             if(res.data) {
            //                 this.codeImg= "http://www.sai32m.cn:8080/api/becomeVIP?vipType="+data.vipType+'&goodsIntegral='+data.goodsIntegral+'&goodsId='+data.goodsId
            //                 this.dialogVisible = true
            //                 this.intervalId = setInterval(() => {
            //                     this.timeIndex +=1
            //                     this.getVIPpolling()
            //                 }, 1000)
            //             } else {
            //                 this.$message({
            //                     message: '请先在我的设置里新增收货地址！',
            //                     type: 'info'
            //                 });
            //             }
            //         }
			// 	}).catch( err => {
			// 		console.log(err)
			// 	})
            // },
            
            async openMembership(data) {
                this.paymentShow = true
                this.paymentInfo = data
                // this.intervalId = setInterval(() => {
                //     this.timeIndex +=1
                //     this.getVIPpolling()
                // }, 1000)
            },

            // async getVIPpolling() {
            //     if(this.timeIndex == 15) {
            //         this.$message({
            //             message: '时间等待过长，请及时支付！！！',
            //             type: 'info'
            //         });
            //         this.timeIndex = 0
            //     }
            //     await this.$store.dispatch('getVIPpolling')
            //     clearInterval(this.intervalId)
            //     this.dialogVisible = false
            //     this.timeIndex = 0
            //     this.codeImg = ''
            //     this.getUserInfo()
            // },

            async getUserInfo() {
                await this.$store.dispatch('getUserInfo')
            }
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
    width:calc(50% - 78px)
}
.shopping_oper {
    float: right;
    width:68px;
    margin: 35px 5px;
    color:#a98d1a;
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
    width: 135px;
    display: block;margin:0 auto;
    background: #FE4B1C;
    border: 1px solid #FE4B1C;
    color: #fff;
}
.vip_but button{
    background: #FE4B1C;
    color:#fff;
    width:96%;
    margin: 0 2%;
    border-radius: 5px;
    height: 50px;
    line-height: 50px;
    font-size:0.3rem
}
.vip_but .color_red{
    color: #fff;
    background:#FE4B1C
}

.have_vip_count {
    width: 100%;
    height: 300px;
    text-align: center;
}

.have_vip_count img {
    width: 90%;
    height: 200px;
    margin: 20px auto;
}
.have_vip_but {
    color: #fff;
    background:orange;
    width:96%;
    margin: 0 2%;
    border-radius: 5px;
    padding-bottom:0.2rem 
}
.have_vip_but .color_org{
    color:#fff;
    font-size:0.45rem;
    padding: 0.2rem 0;
}
</style>