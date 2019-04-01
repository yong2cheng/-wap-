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
                <el-form :model="ruleForm2"  label-width="100px" class="login_ruleForm">
                    <el-input v-model="ruleForm2.username" placeholder="输入手机号" style="margin:10px 0"></el-input>
                    <el-input type="password" v-model="ruleForm2.password" autocomplete="off" placeholder="输入密码" style="margin-bottom:10px"></el-input>
                    <el-input type="password" v-model="ruleForm2.confirmPassword" autocomplete="off" placeholder="输入确认密码" style="margin-bottom:10px"></el-input>
                    <el-input v-model="ruleForm2.graphValidateCode" placeholder="输入验证码" style="display:inline-block;width:calc(100% - 100px);margin-bottom:10px"></el-input>
                    <div class="number_code" style="margin-bottom:10px" @click.stop="getValidateCodeRegister"><img :src="codeImg2"/></div>
                    <el-input v-model="ruleForm2.mobileValidateCode" placeholder="请输入短信验证码" style="display:inline-block;width:calc(100% - 100px)"></el-input>
                    <div class="number_code send_message" @click="getSendMessage" style="font-size: 13px;">{{messageTip}}</div>
                    <div v-if="$route.query.parentId" class="tjr_name">
                        推荐人手机号码:     {{$route.query.username}}
                    </div>
                    <el-button type="primary" @click.stop="registeredAccountNumber()" style="margin:10px 0;">确认注册</el-button>
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
                currentView:2,
                ruleForm2: {
                    username: '',
                    password: '',
                    confirmPassword: '',
                    graphValidateCode: '',
                    mobileValidateCode:''
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
            this.getValidateCodeRegister()
        },
        computed: {

        },
        methods: {
            getValidateCodeLogin() {
                this.$router.push('/login')
            },
            // 获取注册验证码
            getValidateCodeRegister() {
                this.codeImg2= "http://vip.31d461.cn/api/validateCode?"+Math.random()
                // this.codeImg2= "http://2x3r233961.iask.in/api/validateCode?"+Math.random()
            },
            // 发送短信
            async getSendMessage() {
                if(!this.ruleForm2.username) {
                    this.$message({
                        message: '请先输入手机号码！',
                        type: 'error',
                        duration:1500
                    });
                } else {
                    if(this.messageTip == '发送验证码') {
                        this.intervalId = setInterval(() => {
                            this.timeIndex -=1
                            if(this.timeIndex == 0) {
                                clearInterval(this.intervalId)
                                this.messageTip = '发送验证码'
                            } else {
                                this.messageTip = this.timeIndex+'s后再发送'
                            }
                        }, 1000)
                        await this.$store.dispatch('sendMessage', this.ruleForm2.username);
                    }
                }
            },
            // 注册账号
            async registeredAccountNumber() {
                if(this.$route.query.parentId) {
                    this.ruleForm2.parentId = this.$route.query.parentId
                }
                console.log(this.ruleForm2)
                await this.$store.dispatch('register', this.ruleForm2);
                this.$message({
                    message: '注册成功',
                    type: 'success',
                    duration:1500
                });
                this.$router.push('/login')
            },
        }
    }
</script>
<style lang="css" scoped>
    .bannerImg {
        width: 100%;
        height: 5.9rem;
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
        background-size: 100% 100%;
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
        line-height: 40px;
    }
    .number_code img{
        width: 90px;
        height: 40px;
    }
    .send_message {
        text-align: center;
        background: #FE4B1C;
        color: #fff;
        border-radius: 3px;
    }
    .send_message button{
        display: block;
        width: 100%;
        height: 100%;
        font-size: .3rem;
        color: #fff;
        background: #fe4b1c;
        border-radius: 3px;
    }
    .tjr_name{
        height: 30px;
        line-height: 30px;
        font-size: 0.35rem;
        margin: 10px 0 0;
        color: #b4b5bd;
    }
</style>