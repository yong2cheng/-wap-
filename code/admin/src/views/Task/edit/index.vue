<template>
    <el-dialog title="任务编辑" :visible.sync="dialogTableVisible" class="edit-wrapper" @close="close" width="80%" center>
        <el-form :model="info" ref="form" label-width="100px" class="form">
            <el-form-item label="任务名称">
                <el-input type="text" v-model="info.taskName"></el-input>
            </el-form-item>
            <el-form-item label="任务描述">
                <el-input type="textarea" v-model="info.taskDescribe"></el-input>
            </el-form-item>
            <el-form-item label="任务类型">
                <el-select v-model="info.taskType" placeholder="请选择任务类型" class="block">
                    <el-option v-for="(item,index) in taskTypeArr" :key="index" :label="item.name" :value="item.taskType"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="任务派发数量">
                <el-input v-model="info.taskDistributeCount"
                :rules="[
                    { required: true, message: '派发数量不能为空'},
                    { type: 'number', message: '派发数量必须为数字值且大于0'}
                ]"
                ></el-input>
            </el-form-item>
            <el-form-item label="任务图片">
                <el-upload
                action='http://vip.qicheshijia.com.cn/api/imgUpload/'
                list-type="picture-card"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
                :on-remove="handleRemove"
                :file-list="fileList"
                >
                <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-form-item>
            <!-- <el-form-item label="发布时间" prop="releaseTime">
                <el-date-picker class="block" v-model="info.releaseTime" type="date" placeholder="选择发布日期"></el-date-picker>
            </el-form-item> -->
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
                dialogImageUrl: '',
                fileList:this.info.picList,
                imageUrlArr:this.info.taskPicList,
                dialogVisible: false,
                imageUrl:'',
                taskTypeArr:[{
                    name:'普通任务',
                    taskType:1
                },{
                    name:'高级任务',
                    taskType:2
                }]
            }
        },
        methods: {
            beforeAvatarUpload(file) {
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isLt2M) {
                this.$message.error('上传图片大小不能超过 2MB!');
                }
                return isLt2M;
            },
            handleAvatarSuccess(res, fileList) {
                this.imageUrlArr.push(res.data)
            },
            handleRemove(res, fileList) {
                console.log(this.imageUrlArr)
                let str = res.response?res.response.data:res.url.substring(29)
                console.log(str);
                if(this.imageUrlArr.length<=1) {
                    this.imageUrlArr = []
                } else {
                    this.imageUrlArr.forEach((element,i) => {
                        if(element === str) {
                            this.imageUrlArr.splice(i, 1);
                        }
                    });
                }
                console.log(this.imageUrlArr)
            },
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
                                taskName:this.info.taskName,
                                taskDescribe:this.info.taskDescribe,
                                taskType:this.info.taskType,
                                taskDistributeCount:this.info.taskDistributeCount,
                                taskPic:this.imageUrlArr.join()
                            }
                            await this.$store.dispatch('updateTask', obj);
                            if(this.opertionStatus = 10000) {
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
                'opertionStatus',
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