<template>
<article>
    <h2>新建任务</h2>
    <div class="box">
        <el-form :model="info"  ref="form" label-width="100px" class="form">
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
                action='http://vip.omx65.cn:8080/api/imgUpload/'
                list-type="picture-card"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
                :on-remove="handleRemove"
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
                <el-button type="primary" @click="submitForm('form')" :loading="loading">立即创建</el-button>
            </el-form-item>

        </el-form>
    </div>
</article>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Markdown from 'components/Markdown'
    export default {
        components: { Markdown },
        data() {
            return {
                info: {
                    taskName: '',
                    taskDescribe: '',
                    taskType: '',
                    taskDistributeCount:'',
                    taskPic: '',
                    // releaseTime: new Date()
                },
                fileList:[],
                loading: false,
                dialogImageUrl: '',
                dialogVisible: false,
                imageUrlArr:[],
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
            handleAvatarSuccess(res, file) {
                this.imageUrlArr.push(res.data)
            },
            handleRemove(res, fileList) {
                let str = res.response.data
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
            submitForm(formName) {
                this.loading = true;
                // if (!this.info.markdown) {
                //     this.$message.warn('请填写文章内容')
                //     return
                // }
                this.$refs[formName].validate( async (valid) => {
                    if (valid) {
                        try{
                            console.log(this.info)
                            this.info.taskPic = this.imageUrlArr.join()
                            await this.$store.dispatch('addTask', this.info);
                            this.loading = false
                            this.$message({
                                message: '新增成功',
                                type: 'success',
                                duration:1500
                            });
                            this.$router.push('/task/list')
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
            ...mapGetters([
                'blogTypes',
                'sources'
            ])
        }
    }
</script>


<style lang="less" scoped>
    article {
        text-align: center;
        padding: 0 100px;
        h2 {
            text-align: center;
            line-height: 80px;
            color: #666;
        }
        .block {
            width: 100%;
            display: block;
        }
        .left-item {
            text-align: left;
        }
        .form {
        }
        .submit {
            width: 100px;
        }
    }
</style>