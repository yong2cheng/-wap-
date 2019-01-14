<template>
    <div>
        <div class="integral_wrapper">
            <div class="new-header">
                <div class="container cl">
                    <img src="../../../../../images/back.png" style="float: left;" @click="$router.back(-1)"/>
                    <div class="container_detail">密码修改</div>
                </div>
            </div>
            <div class="wrapper_count password_count">
                <div class="password_form">
                    <el-form :model="info" ref="form" label-width="80px" class="form">
                        <el-form-item label="原密码">
                            <el-input type="password" v-model="info.oldPassword"></el-input>
                        </el-form-item>
                        <el-form-item label="新密码">
                            <el-input type="password" v-model="info.newPassword"></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" style="margin:0">
                            <el-input type="password" v-model="info.confirmPassword"></el-input>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
            <div class="password_but">
                <button @click="updataForm()" class="commom_button">确认修改</button>
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
                    oldPassword: '',
                    newPassword: '',
                    confirmPassword: '',
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
            
        },
        methods: {
            async updataForm() {
                await this.$store.dispatch('updataPassword', this.info);
                this.$message({
                    message: '修改成功',
                    type: 'success',
                    duration:1500
                });
                this.info = {
                    oldPassword: '',
                    newPassword: '',
                    confirmPassword: '',
                }
                this.$router.back(-1)
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
</style>