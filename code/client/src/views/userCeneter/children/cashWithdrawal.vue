<template>
    <div>
        <div class="integral_wrapper">
            <div class="new-header">
                <div class="container cl">
                    <img src="../../../images/back.png" style="float: left;" @click="$router.back(-1)"/>
                    <div class="container_detail">提现</div>
                </div>
            </div>
            <div class="cash_withdrawal" >
                <el-form :model="ruleForm" ref="ruleForm" class="cash_withdrawal_form" label-width="80px">
                    <el-form-item label="提取金额">
                        <el-input type="number" v-model="ruleForm.cashOutIntegral" class="cash_input" :placeholder="cashMoney" @blur="getCashMoney" clearable></el-input>
                        <span style="display:inline-block;width:80px;color:#409EFF" @click="ruleForm.cashOutIntegral=userInfo.integral">全部提现</span>
                    </el-form-item>
                    <el-form-item label="提取方式" prop="cashOutWay">
                        <el-radio-group v-model="ruleForm.cashOutWay">
                            <div style="display:inline-block;margin-right:30px;"><el-radio label="1">支付宝</el-radio></div>
                            <div style="display:inline-block"><el-radio label="2">银行卡</el-radio></div>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item style="text-align: center;width:100%" label-width="0px">
                        <el-button type="primary" @click="submitForm" style="width:100%">立即提现</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    export default {
        data () {
            return {
                ruleForm: {
                    cashOutIntegral: null,
                    cashOutWay:'1',
                },
                cashMoney:'',
                radio:'3'
            }
        },
        components: {
        },
        created () {
            this.cashMoney = '可转出'+this.userInfo.integral+'积分'
        },
        mounted () {
            
        },
        computed: {
            ...mapGetters([
                'userInfo'
            ])
        },
        methods: {
            getCashMoney() {
                let money = this.ruleForm.cashOutIntegral
                if(money<=0) {
                    this.ruleForm.cashOutIntegral = null
                } else {
                    if(money>this.userInfo.integral) {
                        this.ruleForm.cashOutIntegral = this.userInfo.integral
                    } 
                }
            },
            submitForm() {
                if(!this.ruleForm.cashOutIntegral) {
                    this.$message({
                        message: '请先输入提现金额！',
                        type: 'error',
                        duration:1500
                    });

                    return 
                } 
                this.axios.get('integralCashOut/convert',this.ruleForm).then( res => {
					if(res.code = 10000) {
                        this.$message({
                            message: '提现成功',
                            type: 'success',
                            duration:1500
                        });
                        this.$router.push('/userCeneter/index')
                    }
				}).catch( err => {
					// console.log(err)
				})
            },
        }
    }
</script>
<style lang="css">
.cash_withdrawal {
    width: 100%;
    margin-top: 60px;
}
.cash_withdrawal_form {
    width:96%;
    margin:0 auto;
    padding-top: 36px;
}
.cash_input {
    width:calc(100% - 90px);
    margin-bottom:0
}
.cash_input .el-input__suffix {
    height:40px;
}

</style>