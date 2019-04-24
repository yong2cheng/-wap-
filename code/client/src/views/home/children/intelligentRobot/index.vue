<template>
    <div style="background:#fff">
        <div class="integral_wrapper">
            <div class="new-header">
                <div class="container cl">
                    <img src="../../../../images/back.png" style="float: left;" @click="$router.back(-1)"/>
                    <div class="container_detail">{{$route.query.name}}</div>
                </div>
            </div>
            <div class="notOpen_count wrapper_count" >
                <img src="../../../../images/robot1.jpg"/>
            </div>
            <div class="robot_content">
                <el-input-number v-model="paymentInfo.robotNum" :min="1" :max="10" placeholder="请输入购买数量" type="number"></el-input-number>
                <p>*购买数量为1～10范围内的整数</p>
                <el-button class="robot_button"  @click="robotShop()">点击购买</el-button>
            </div>
            <div class="notOpen_count">
                <img src="../../../../images/robot2.jpg"/>
            </div>
        </div>
        <payment v-if="paymentShow" :info="paymentInfo" @close="close"></payment>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    import payment from '../../../../components/payment/index'
    export default {
        data () {
            return {
                paymentInfo:{
                    isRobot:1,
                    robotNum:1
                },
                paymentShow:false
            }
        },
        components: {
            payment
        },
        created () {
        },
        mounted () {
        },
        computed: {
            
        },
        methods: {
            close (data) {
                this.paymentShow = false
                if(data == 1) {
                    console.log("支付成功")
                }
            },
            robotShop() {
                this.paymentShow = true
            }
        }
    }
</script>
<style lang="css" scoped>
.notOpen_count img{
    width: 100%;
    height: 200px;
}
.robot_content {
    text-align: center;
    margin: 20px 0;
}
.robot_input {
    width: 150px;
    text-align: center;
}
.robot_button {
    width: 135px;
    display: block;margin:0 auto;
    background: #FE4B1C;
    border: 1px solid #FE4B1C;
    color: #fff;
    font-size:0.3rem
}
.robot_content p {
    color:#FE4B1C
}
.content_title p {
    margin-top: 20px;
}
</style>