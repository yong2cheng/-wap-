<template>
    <el-dialog title="任务奖励编辑" :visible.sync="dialogTableVisible" class="edit-wrapper" @close="close" width="360px" center>
        <el-form :model="info" ref="form" label-width="100px" class="form">
            <el-form-item label="任务类型名称">
                {{info.taskTypeName}}
            </el-form-item>
            <el-form-item label="一级奖励">
                <el-input  v-model="info.firstLevelReward"></el-input>
            </el-form-item>
            <el-form-item label="二级奖励">
                <el-input  v-model="info.secondLevelReward"></el-input>
            </el-form-item>
            <el-form-item label="三级奖励">
                <el-input  v-model="info.thirdLevelReward"></el-input>
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
            this.getGoodsList()
                
        },
        methods: {
            close() {
                this.$emit('close')
            },
            async getGoodsList() {
                await this.$store.dispatch('getGoodsList');
            },
            updataForm(formName) {
                this.loading = true;
                this.$refs[formName].validate( async (valid) => {
                    if (valid) {
                        try {
                            let obj={
                                id:this.info.id,
                                firstLevelReward:this.info.firstLevelReward,
                                secondLevelReward:this.info.secondLevelReward,
                                thirdLevelReward:this.info.thirdLevelReward,
                            }
                            await this.$store.dispatch('updatevTaskReward', obj);
                            if(this.sysStatus = 10000) {
                                this.$message({
                                    message: '修改成功',
                                    type: 'success'
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