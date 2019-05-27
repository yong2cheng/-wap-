<template>
<article>
    <h2>新增商品</h2>
    <div class="box">
        <el-form :model="info"  ref="form" label-width="100px" class="form">
            <el-form-item label="商品名称">
                <el-input type="text" v-model="info.goodsName"></el-input>
            </el-form-item>
            <el-form-item label="商品积分">
                <el-input type="textarea" v-model="info.goodsIntegral"></el-input>
            </el-form-item>
            <el-form-item label="商品图片">
                <el-upload
                class="upload_img"
                action='http://localhost:8080/api/imgUpload/'
                list-type="picture-card"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
                :on-remove="handleRemove"
                :limit="1"
                :on-exceed="handleExceed"
                >
                <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-form-item>
            <el-form-item>
                <div style="color:#FE4B1C">*提示：上传商品图片时，宽高比例最好为2:1</div>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('form')" :loading="loading">立即创建</el-button>
            </el-form-item>

        </el-form>
    </div>
</article>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        components: {},
        data() {
            return {
                info: {
                    goodsName: '',
                    goodsIntegral:'',
                    goodsPic: '',
                },
                fileList:[],
                loading: false,
                dialogImageUrl: '',
                dialogVisible: false,
                imageUrlArr:[],
            }
        },
        methods: {
            beforeAvatarUpload(file) {
                const isLt2M = file.size / 1024 / 1024 < 5;

                if (!isLt2M) {
                this.$message.error('上传图片大小不能超过 5MB!');
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
            handleExceed(files, fileList) {
                this.$message.error('只能传一张图片');
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
                            this.info.goodsPic = this.imageUrlArr.join()
                            await this.$store.dispatch('addGoods', this.info);
                            this.loading = false
                            this.$message({
                                message: '新增成功',
                                type: 'success',
                                duration:1500
                            });
                            this.$router.push('/shopping/list')
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