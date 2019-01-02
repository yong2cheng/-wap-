<template>
    <div>
        <div class="login_wrapper">
            <div class="site-header">
                <router-link :to="{path:'/'}"><img src="../../images/close.png" class="login_img"/></router-link>
            </div>
            <div class="middle_count">
                <ul class="cf">
                    <li :class="{current_select:currentView==1}" @click="currentView=1;getValidateCodeLogin()">登陆</li>
                    <li :class="{current_select:currentView==2}" @click="currentView=2;getValidateCodeRegister()">注册</li>
                </ul>
                <el-form :model="ruleForm1" status-icon  ref="ruleForm1" label-width="100px" class="login_ruleForm" v-if="currentView==1">
                    <el-input v-model="ruleForm1.username" placeholder="用户名/手机号" style="margin:10px 0"></el-input>
                    <el-input type="password" v-model="ruleForm1.password" autocomplete="off" placeholder="输入密码" style="margin-bottom:10px"></el-input>
                    <el-input v-model="ruleForm1.graphValidateCode" placeholder="输入验证码" style="display:inline-block;width:calc(100% - 100px)"></el-input>
                    <div class="number_code" @click.stop="getValidateCodeLogin"><img :src="codeImg1"/></div>
                    <el-button type="primary" @click.stop="userLogin('ruleForm1')" style="margin-top:30px;">登陆</el-button>
                </el-form>
                <el-form :model="ruleForm2" status-icon  ref="ruleForm2" label-width="100px" class="login_ruleForm" v-if="currentView==2">
                    <el-input v-model="ruleForm2.username" placeholder="输入手机号" style="margin:10px 0"></el-input>
                    <el-input type="password" v-model="ruleForm2.password" autocomplete="off" placeholder="输入密码" style="margin-bottom:10px"></el-input>
                    <el-input type="password" v-model="ruleForm2.confirmPassword" autocomplete="off" placeholder="输入确认密码" style="margin-bottom:10px"></el-input>
                    <el-input v-model="ruleForm2.graphValidateCode" placeholder="输入验证码" style="display:inline-block;width:calc(100% - 100px);margin-bottom:10px"></el-input>
                    <div class="number_code" style="margin-bottom:10px" @click.stop="getValidateCodeRegister"><img :src="codeImg2"/></div>
                    <el-input v-model="ruleForm2.mobileValidateCode" placeholder="请输入短信验证码" style="display:inline-block;width:calc(100% - 100px)"></el-input>
                    <div class="number_code send_message" @click.stop="getSendMessage"><button>{{messageTip}}</button></div>
                    <div v-if="$route.query.currentView==2" class="tjr_name">
                        推荐人手机号码:     {{$route.query.username}}
                    </div>
                    <el-button type="primary" @click.stop="registeredAccountNumber('ruleForm2')" style="margin-top:10px;">确认注册</el-button>
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
            console.log(this.$route)
            if(this.$route.query.currentView==2) {
                this.currentView = 2 
                this.getValidateCodeRegister()
            } else {
                this.getValidateCodeLogin()
            }
        },
        computed: {

        },
        methods: {
            // 获取登陆验证码
            getValidateCodeLogin() {
                this.codeImg1= "http://www.sai32m.cn:8080/api/validateCode?"+Math.random()
            },
            // 获取注册验证码
            getValidateCodeRegister() {
                this.codeImg2= "http://www.sai32m.cn:8080/api/validateCode?"+Math.random()
            },
            // 发送短信
            async getSendMessage() {
                if(!this.ruleForm2.username) {
                    this.$message({
                        message: '请先输入手机号码！',
                        type: 'error'
                    });

                    return
                }
                try {
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
                } catch (e) {
                    this.messageTip = '发送验证码'
                    console.log(e)
                }   
            },
            // 注册账号
            async registeredAccountNumber() {
                try {
                    if(this.$route.query.currentView == 2) {
                        this.ruleForm2.parentId = this.$route.query.parentId
                    }
                    console.log(this.ruleForm2)
                    await this.$store.dispatch('register', this.ruleForm2);
                    this.$message({
                        message: '注册成功',
                        type: 'success'
                    });
                    this.currentView = 1
                    this.getValidateCodeLogin()
                } catch (e) {
                    console.log(e)
                }   
            },
            // 用户登录
            async userLogin() {
                try {
                    await this.$store.dispatch('userLogin', this.ruleForm1);
                    this.getUserInfo()
                } catch (e) {
                    console.log(e)
                }   
            },
            // 用户登录
            async getUserInfo() {
                try {
                    await this.$store.dispatch('getUserInfo');
                    this.$message({
                        message: '登录成功',
                        type: 'success'
                    });
                    this.$router.push('/')
                } catch (e) {
                    console.log(e)
                }   
            },
        }
    }
</script>
<style lang="css" scoped>
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
        background: #fff
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
        height: 205px;
        box-sizing: border-box;
        padding: 36px 20px 0;
        background: #FE4B1C;
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