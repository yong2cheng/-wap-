<template>
    <el-dialog title="公告编辑" :visible.sync="dialogTableVisible" class="edit-wrapper" @close="close" width="360px" center>
        <el-form :model="info" ref="form" label-width="100px" class="form">
            <el-form-item label="公告内容">
                <el-input  
                    v-model="info.content" 
                    type="textarea"
                    :rows="2"
                    placeholder="请输入内容">
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="updataForm('form')" :loading="loading">修改</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>


<script>
import { mapGetters } from 'vuex'
    export default {
        components: {},
        props: ['info'],
        data() {
            return {
                dialogTableVisible: true,
                loading: false,
                taskTypeArr:[{
                    name:'普通任务',
                    taskType:1
                },{
                    name:'高级任务',
                    taskType:2
                }]
            }
        },
        created() {
                
        },
        methods: {
            close() {
                this.$emit('close')
            },
            updataForm(formName) {
                this.loading = true;
                this.$refs[formName].validate( async (valid) => {
                    if (valid) {
                        try {
                            let obj={
                                id:this.info.id,
                                content:this.info.content,
                            }
                            await this.$store.dispatch('updatevNotice', obj);
                            if(this.sysStatus = 10000) {
                                this.$message({
                                    message: '修改成功',
                                    type: 'success',
                                    duration:1500
                                });
                            }
                            this.loading = false
                            this.close()
                        }catch (e) {
                            this.loading = false;
                        }
                        

                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }

        },
        computed: {
            ...mapGetters([
                'sysStatus',
            ])
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
</style>