<template>
    <div class="sign_out">
        <el-dropdown>
          <div class="el-dropdown-link">
                <Icon name="avatar" class="avatar"></Icon>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>{{userName}}</el-dropdown-item>
            <el-dropdown-item @click.native="centerDialogVisible=true">修改密码</el-dropdown-item>
            <el-dropdown-item @click.native="removeCookie">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <!-- <span>{{$store.state.user.name}}</span>
        <Icon name="tuichu" class="sign_out_icon"></Icon> -->
        <el-dialog
            title="密码修改"
            :visible.sync="centerDialogVisible"
            width="35%"
            center>
           <el-form :model="info" ref="form" label-width="100px" class="form">
            <el-form-item label="原密码">
                <el-input type="password" v-model="info.oldPassword"></el-input>
            </el-form-item>
            <el-form-item label="新密码">
                <el-input type="password" v-model="info.newPassword"></el-input>
            </el-form-item>
            <el-form-item label="确认密码">
                <el-input type="password" v-model="info.confirmPassword"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="centerDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="updataForm('form')" :loading="loading">修改</el-button>
            </el-form-item>
        </el-form>
        </el-dialog>
    </div>
</template>
<script>
    import { removeToken } from '../../utils/auth'
    import { mapGetters } from 'vuex'
    export default {
        data() {
            return {
                loading:false,
                centerDialogVisible: false,
                info: {
                    oldPassword: '',
                    newPassword: '',
                    confirmPassword: '',
                },
            };
        },
        methods: {
            removeCookie () {
                removeToken()
                this.$store.dispatch('clearInfo')
                this.$router.push('/login')
            },

            updataForm(formName) {
                this.loading = true;
                // if (!this.info.markdown) {
                //     this.$message.warn('请填写文章内容')
                //     return
                // }
                this.$refs[formName].validate( async (valid) => {
                    if (valid) {
                        try{
                            await this.$store.dispatch('updataPassword', this.info);
                            if(this.sysStatus = 10000) {
                                this.$message({
                                    message: '修改成功',
                                    type: 'success'
                                });
                                this.info = {
                                    oldPassword: '',
                                    newPassword: '',
                                    confirmPassword: '',
                                }
                            }
                            this.centerDialogVisible = false
                            this.loading = false
                        }catch(e) {
                            this.loading = false
                        }
                        

                        
                    } else {
                        console.log('error submit!!');
                        this.loading = false;
                        return false;
                    }
                });
            }
        },
        computed: {
            ...mapGetters(['userName','sysStatus'])
        }
    }
</script>
<style lang="less" scoped>
    .sign_out {
        float: right;
        margin-right: 20px;
        cursor: pointer;
        >*{
            display: inline-block;
            vertical-align: middle;
        }
        .avatar {
            font-size: 40px;
            margin-top: 5px;
            color: #4AB7BD;
        }
        img {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            margin-top: 5px;
        }
        .sign_out_icon {
            color: #5a5e66;
            font-size: 20px;
            cursor: pointer;
            &:hover {
                color: #aaa;
            }
        }
    }
</style>