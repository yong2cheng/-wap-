<template>
    <div>
        <div class="login_wrapper">
            <div class="site-header">
                <router-link :to="{path:'/'}"><img src="../../images/close.png" class="login_img"/></router-link>
                <img  src="../../images/banner.jpeg" class="bannerImg"/>
            </div>
            <div class="middle_count">
                <ul class="cf">
                    <li :class="{current_select:currentView==1}" @click="getValidateCodeLogin()">登陆</li>
                    <li :class="{current_select:currentView==2}" @click="getValidateCodeRegister()">注册</li>
                </ul>
                <el-form :model="ruleForm1" label-width="100px" class="login_ruleForm">
                    <el-input v-model="ruleForm1.username" placeholder="用户名/手机号" style="margin:10px 0"></el-input>
                    <el-input type="password" v-model="ruleForm1.password" autocomplete="off" placeholder="输入密码" style="margin-bottom:10px"></el-input>
                    <el-input v-model="ruleForm1.graphValidateCode" placeholder="输入验证码" style="display:inline-block;width:calc(100% - 100px)"></el-input>
                    <div class="number_code" @click.stop="getValidateCodeLogin"><img :src="codeImg1"/></div>
                    <el-button type="primary" @click.stop="userLogin()" style="margin-top:30px;">登录</el-button>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
    import footerCommon from '../../components/footer/index'
    export default {
        data () {
            return {
                messageTip:'发送验证码',
                currentView:1,
                ruleForm1: {
                    username: '',
                    password: '',
                    graphValidateCode: ''
                },
                codeImg1:'',
                codeImg2:'',
                intervalId:'',
                timeIndex:61
            }
        },
        components: {
            footerCommon,
        },
        mounted () {
            this.getValidateCodeLogin()
        },
        computed: {

        },
        methods: {
            // 获取登陆验证码
            getValidateCodeLogin() {
                this.codeImg1= "http://vip.xyxzw.cn/api/validateCode?"+Math.random()
                // this.codeImg1= "http://2x3r233961.iask.in/api/validateCode?"+Math.random()
            },
            getValidateCodeRegister() {
                this.$router.push('/register')
            },
            // 用户登录
            async userLogin() {
                await this.$store.dispatch('userLogin', this.ruleForm1);
                this.getUserInfo()
            },
            // 用户登录
            async getUserInfo() {
                await this.$store.dispatch('getUserInfo');
                this.$message({
                    message: '登录成功',
                    type: 'success',
                    duration:1500
                });
                this.getOpenId()
                // this.$router.push('/')
            },
            getOpenId() {
                let ua = navigator.userAgent.toLowerCase();//获取判断用的对象
                if (ua.match(/MicroMessenger/i) == "micromessenger") { //在微信中打开
                    let url="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxed39f9ff11a48cf0&redirect_uri=http://vip.xyxzw.cn/api/wechat/get/callback&response_type=code&scope=snsapi_base&state=STATE&connect_redirect=1#wechat_redirect";
                    window.location.replace(url);
                } else {
                    this.$router.push('/')
                }
            }
        }
    }
</script>
<style lang="css" scoped>
    .bannerImg {
        width: 100%;
        height: 5.9rem;
    }
    .login_wrapper {
        position: relative;
    }
    .login_wrapper .middle_count ul li{
        float: left;
        width:50%;
        height: 40px;
        line-height: 40px;
        background: #fff;
        text-align: center;
        font-size:0.3rem
    }
    .login_wrapper .middle_count .current_select{
        color: #FF471B;
        border-bottom: 2px solid #FF471B; 
    }
    .login_wrapper .middle_count {
        position: relative;
        margin: -1.125rem 0.2rem 0.2rem;
        padding: .3rem 0rem;
        background: #fff;
        border-radius: 5px;
        box-shadow: 0px 3px 10px #ccc;
    }
    .el-input__inner{
        border:0 !important; 
    }
    .login_wrapper .middle_count .login_ruleForm {
        padding: 0 10px;
    }
    .login_wrapper .login_ruleForm .el-button--primary{
        background-color: #FE4B1C;
        border-color:#FE4B1C;
        width: 100%;
        border-radius: 3px;
    }
    .login_wrapper .site-header {
        position: relative;
        height: 5.9rem;
        box-sizing: border-box;
        background: #FE4B1C;
        background-size: 100% 100%;
    }
    .login_wrapper .site-header h3 {
        text-align: center;
        color: #fff;
        line-height: 169px;
    }

    .login_wrapper .site-header .login_img {
        position: absolute;
        width: 16px;
        height: 16px;
        top: 20px;
        left: 25px;
    }
    .number_code {
        display: inline-block;
        width: 90px;
        height: 40px;
        position: absolute;
        margin-left: 5px;
    }
    .number_code img{
        width: 90px;
        height: 40px;
    }
    .send_message {
        text-align: center;
        border-radius: 3px;
        background: #FE4B1C
    }
    .send_message button{
        font-size:0.3rem;
        margin-top: 9.5px;
        color: #fff;
        background: #FE4B1C;
    }
    .tjr_name{
        height: 30px;
        line-height: 30px;
        font-size: 0.35rem;
        margin: 10px 0;
        color: #b4b5bd;
    }
</style>