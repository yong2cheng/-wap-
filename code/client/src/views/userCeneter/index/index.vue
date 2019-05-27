<template>
    <div>
        <div class="user_center_wrapper">
            <div class="site-header cf">
                <div class="user_img">
                    <!-- <router-link :to="{path:'/'}"><img src="../../../images/user.jpg" class="user_img"/></router-link> -->
                    <img src="../../../images/user.jpg"/>
                </div>
                <div class="user_info">
                    <p>{{userInfo.username}}【{{userInfo.vipTypeName}}】</p>
                    <span>推广人数：{{firstNumber}}人</span>
                    <!-- <p>编号：176</p> -->
                </div>
                <!-- <div class="member-intro">
                    <i class="level">V1</i>
                    <span>签到</span>
                </div> -->
                <!-- <router-link :to="{path:'/userCeneter/userSetting'}"><img src="../../../images/setting.png" class="setting_img"/></router-link> -->
            </div>
            <div class="middle_count">
                <ul class="cf">
                    <li class="cf">
                        <span style="margin-left:17px;color:#999">积分:<em style="font-size:0.4rem;color:#333;margin-left: 0.1rem;" >{{userInfo.integral}}</em></span>
                        <span style="float:right;margin-right:17px;border:1px solid #4781fe;padding: 0.1rem 0.2rem;margin-top: 18.5px;" @click="getPath('/userCeneter/cashWithdrawal')">提现</span>
                    </li>
                    <!-- <li style="height:90px;padding:20px 0;box-sizing:border-box">
                        <p>
                            <em>0</em><em>发布</em>
                        </p>
                        <p>
                            <em>0</em><em>发布</em>
                        </p>
                        <p>
                            <em>0</em><em>发布</em>
                        </p>
                        <p>
                            <em>0</em><em>发布</em>
                        </p>
                    </li> -->
                    <li @click="getPath('/userCeneter/integralRecord')"><img src="../../../images/userCeneterMenu/caiwu.png"/><span>积分记录</span><i></i></li>
                    <li @click="getPath('/onlineService')"><img src="../../../images/userCeneterMenu/lxkf.png"/><span>联系客服</span><i></i></li>
                    <!-- <li @click="getPath('/userCeneter/robotMall')"><img src="../../../images/homeMenu/icon08.jpg"/><span>AI机器人</span></li> -->
                    <!-- <li @click="getPath('/userCeneter/integralMall')"><img src="../../../images/userCeneterMenu/users_07.png"/><span>积分商城</span></li> -->
                    <li @click="getPath('/userCeneter/withdrawalsRecord')"><img src="../../../images/userCeneterMenu/txjl.png"/><span>提现记录</span><i></i></li>
                    <!-- <li @click="getPath('/userCeneter/integraExchangeHistory')"><img src="../../../images/userCeneterMenu/help.png"/><span>积分兑换记录</span></li> -->
                    <!-- <li @click="getPath('/userCeneter/vipAwards')"><img src="../../../images/userCeneterMenu/users_08.png"/><span>会员奖品</span></li> -->
                    <!-- <li @click="getPath('/userSetting/harvestAddress/index')"><img src="../../../images/userCeneterMenu/sz3.png"/><span>我的收货地址</span></li> -->
                    <li @click="getPath('/userSetting/myBankCard/index')"><img src="../../../images/userCeneterMenu/wdyhk.png"/><span>我的银行卡</span><i></i></li>
                    <li @click="getPath('/userSetting/alipay/index')"><img src="../../../images/userCeneterMenu/zfb.png"/><span>绑定支付宝</span><i></i></li>
                    <li @click="getPath('/userSetting/updataPassword/index')"><img src="../../../images/userCeneterMenu/xgmm.png"/><span>修改密码</span><i></i></li>
                    <!-- <li><img src="../../images/userCeneterMenu/help.png"/><span>新手引导</span></li> -->
                    <!-- <li><img src="../../images/userCeneterMenu/caiwu.png"/><span>财务管理</span></li>  -->
                </ul>
            </div>
            <div style="background:#fff"><button class="tc_login" @click="removeCookie">退出登陆</button></div>
            <div style="height:2rem"></div>
        </div>
        <footer-common></footer-common>
    </div>
</template>
<script>
    import footerCommon from '../../../components/footer/index'
    import { mapGetters } from 'vuex'
    export default {
        data () {
            return {
                firstNumber:'',
                secondNumber:''
            }
        },
        components: {
            footerCommon,
        },
        mounted () {
            // if(this.userInfo.userLevel<=2) {
                this.getStatistics()
            // }
        },
        computed: {
            ...mapGetters([
                'userInfo'
            ])
        },
        methods: {
            getStatistics() {
                this.axios.get('user/statistics').then( res => {
					this.firstNumber = res.data.first
                    this.secondNumber = res.data.second
				}).catch( err => {
					// console.log(err)
				})
            },
            getPath(path) {
                this.$router.push({ 
                    path: path, 
                })
            },
            removeCookie () {
                this.$store.dispatch('clearInfo')
                this.$router.push('/login')
            }
        }
    }
</script>
<style lang="css" scoped>
    .user_center_wrapper {

    }
    .user_center_wrapper .site-header {
        position: relative;
        height: 135px;
        box-sizing: border-box;
        padding: 35px 20px;
        background: #107cea;
        background-size: 100% 100%;
    }
    .user_center_wrapper .site-header .user_img {
        float: left;
    }
    .user_center_wrapper .site-header .user_img img{
        display: block;
        width: 64px;
        height: 64px;
        border-radius: 100%;
        border: 2px solid #5faaf7;
        margin: 0 auto;
    }
    .user_info {
        float: left;
        /* text-align: center; */
        margin: 0.1rem 0 0 0.3rem;
    }
    .user_info p {
        font-size: 0.3rem;
        color: #fff;
    }
    .user_info span {
        font-size: 0.3rem;
        color: #fff;
        padding: 0.05rem 0.1rem;
        border: 1px solid #fff;
    }
    .setting_img {
        position: absolute;
        width: 28px;
        height: 28px;
        right: 15px;
        top: 25px;
    }
    .user_center_wrapper .site-header .member-intro{
        position: absolute;
        right: 0;
        top: 90px;
        height: 36px;
        line-height: 36px;
        font-size: 14px;
        background-color: rgba(0, 0, 0, 0.2);
        border-top-left-radius: 28px;
        border-bottom-left-radius: 28px;
        text-align: left;
        padding-right: 10px;
    }
    .user_center_wrapper .site-header .member-intro .level{
        float: left;
        margin: 3px;
        height: 30px;
        width: 30px;
        box-sizing: border-box;
        line-height: 28px;
        background: #FFBB34;
        color: #fff;
        position: relative;
        border-radius: 100%;
        border: 2px solid #FFDA6F;
        padding: 0;
        text-align: center;
        font-size: 0.3rem;
    }
    .user_center_wrapper .site-header .member-intro span {
        color:#fff;
        font-size: 0.3rem;
    }
    .user_center_wrapper .middle_count ul {
        margin-top: 0.2rem;
    }
    .user_center_wrapper .middle_count ul li {
        float: left;
        width:100%;
        height: 70px;
        background: #fff;
        margin-bottom: 0.2rem;
    }
    .user_center_wrapper .middle_count ul li img{
        float: left;
        width: 26px;
        height: 22px;
        margin: 22px 17px;
    }
    .user_center_wrapper .middle_count ul li span{
        float: left;
        margin-top: 22.5px;
    }
    .user_center_wrapper .middle_count ul li i{
        float:right;
        width:13px;
        height:14px;
        background:url("../../../images/homeMenu/jt.png") no-repeat center;
        margin-right:17px;
        margin: 28px 17px;
    }
    .user_center_wrapper .middle_count ul li p{
        float: left;
        width:25%;
        text-align: center;
    }
    .user_center_wrapper .middle_count ul li p em{
        display: block;
        width:100%
    }
    .user_center_wrapper .middle_count ul li p em:nth-child(1) {
        color: #fd571d
    }
    .tc_login {
        width:90%;
        height: 50px;
        margin: 10px 5%;
        border-radius:5px;
        background: #4781fe; 
        /* font-size:0.35rem; */
        color:#fff
    }
</style>