<template>
    <div>
        <div class="integral_wrapper">
            <div class="new-header">
                <div class="container cl">
                    <img src="../../../../../images/back.png" style="float: left;" @click="$router.back(-1)"/>
                    <div class="container_detail" v-if="!userInfo.alipayCard">绑定支付宝</div>
                    <div class="container_detail" v-else>支付宝信息</div>
                </div>
            </div>
            <div v-if="!userInfo.alipayCard">
                <div class="wrapper_count password_count">
                    <div class="password_form">
                        <el-form :model="info" ref="form" label-width="80px" class="form">
                            <el-input v-model="info.alipayCard" style="margin-bottom:10px" placeholder="请输入支付宝账号"></el-input>
                            <el-input type="name" v-model="info.realName" placeholder="请输入真实姓名"></el-input>
                        </el-form>
                    </div>
                </div>
                <div class="password_but">
                    <button @click="updataForm()" :loading="loading" class="commom_button">确认绑定</button>
                </div>
            </div>
            <div class="wrapper_count" v-else>
                <el-form ref="form" label-width="100px" class="form" style="background:#fff">
                    <el-form-item label="姓名" prop="type" style="margin-bottom:1px;">
                        {{userInfo.realName}}
                    </el-form-item>
                    <el-form-item label="支付宝账号" prop="type" style="margin-bottom:10px">
                        {{userInfo.alipayCard}}
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
                info: {
                    alipayCard: '',
                    realName: ''
                },
            }
        },
        components: {
        },
        created () {
        },
        mounted () {
        },
        computed: {
            ...mapGetters([
                'userInfo'
            ])
        },
        methods: {
            async updataForm() {
                if(!this.info.alipayCard) {
                    this.$message({
                        message: '请输入支付宝账号',
                        type: 'error'
                    });
                    return
                }
                if(!this.info.realName) {
                    this.$message({
                        message: '请输入真实姓名',
                        type: 'error'
                    });
                    return
                }
                this.$confirm('请确认所填信息，一经保存不可修改！！！', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true,
                    customClass:'message_width'
                }).then(async () => {
                    this.loading = true;
                    await this.$store.dispatch('addAlialiCard', this.info);
                    this.$message({
                        message: '绑定成功',
                        type: 'success'
                    });
                    this.info = {
                        alipyCard: '',
                        realName: ''
                    }
                    this.loading = false
                    await this.$store.dispatch('getUserInfo');
                })
            }
            
        }
    }
</script>
<style lang="css" scoped>
.password_count {
    background: #fff
}
.password_form {
    width:80%;
    margin: 0 auto;
    padding:20px 0;
}
.password_but {
    width:80%;
    margin: 0 auto;
}
.password_but button{
    width:100%;
    background: #FE4B1C;
    color:#fff;
}

.alipayCard_li {
    background: #fff;
    padding:10px 0;
}

.alipayCard_detail span{
    font-size: 0.35rem;
    margin:0 15px 0 10px;
    float: left;
    line-height: 45px;
}

.alipayCard_detail em{
    font-size: 0.28rem
}
.address_name{
    font-size: 0.32rem;
    margin-left: 10px;
}
</style>