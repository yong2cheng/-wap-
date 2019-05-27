<template>
    <el-dialog title="修改支付宝账号" :visible.sync="dialogTableVisible" class="edit-wrapper" @close="close" width="80%" center>
        <div class="password_form">
            <el-form :model="info" ref="form" label-width="90px" class="form" >
                <el-form-item label="真实姓名" prop="realName">
                    <el-input v-model="info.realName"></el-input>
                </el-form-item>
                <el-form-item label="支付宝账号" prop="alipayCard">
                    <el-input v-model="info.alipayCard"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div class="password_but">
            <button @click="updataForm()" class="commom_button" :loading="loading">修改</button>
        </div>
    </el-dialog>
</template>


<script>
import { mapGetters } from 'vuex'
    export default {
        components: {},
        props: ['infotion'],
        data() {
            return {
                dialogTableVisible: true,
                loading: false,
                info: {
                    realName: '',
                    alipayCard: '',
                },
            }
        },
        created () {
            console.log(this.infotion)
            this.info = {
                realName: this.infotion.realName,
                alipayCard: this.infotion.alipayCard
            }
        },
        computed: {
            ...mapGetters([
                'userAddressList',
            ])
        },
        methods: {
            close() {
                this.$emit('close')
            },

            async updataForm() {
                if(!this.info.realName) {
                    this.$message({
                        message: '请填写真实姓名',
                        type: 'error',
                        duration:1500
                    });
                    return
                }
                if(!this.info.alipayCard) {
                    this.$message({
                        message: '请填写支付宝账号',
                        type: 'error',
                        duration:1500
                    });
                    return
                }
                this.info.id = this.infotion.id
                this.info.userId =  this.infotion.userId
                this.$confirm('是否修改支付宝账号？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true,
                    customClass:'message_width'
                }).then(async () => {
                    await this.$store.dispatch('updateUserDetail', this.info);
                    this.$message({
                        message: '修改成功',
                        type: 'success',
                        duration:1500
                    });
                    this.close()
                })
            }
            
        }
    }
</script>


<style lang="less" scoped>
    .edit-wrapper {
        .block {
            width: 100%;
            display: block;
        }
        .form {
            // width: 400px;
        }
        .submit {
            width: 100px;
        }
    }
    .password_form {
        width:80%;
        margin: 0 auto;
        // padding:20px 0;
    }
    .password_but {
        width:50%;
        margin: 0 auto;
    }
    .password_but button{
        width:100%;
        background: #FE4B1C;
        color:#fff;
        height: 36px;
        line-height: 36px;
        border-radius: 20px;
    }
</style>