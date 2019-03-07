<template>
    <el-dialog title="商品编辑" :visible.sync="dialogTableVisible" class="edit-wrapper" @close="close" width="80%" center>
        <el-form :model="info" ref="form" label-width="100px" class="form">
            <el-form-item label="商品名称">
                <el-input type="text" v-model="info.goodsName"></el-input>
            </el-form-item>
            <el-form-item label="商品积分">
                <el-input v-model="info.goodsIntegral"
                ></el-input>
            </el-form-item>
            <el-form-item label="商品图片">
                <el-upload
                class="upload_img"
                action='http://vip.omx65.cn/api/imgUpload/'
                list-type="picture-card"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
                :on-remove="handleRemove"
                :file-list="fileList"
                :limit="1"
                :on-exceed="handleExceed"
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
                <div style="color:#FE4B1C">*提示：上传商品图片时，宽高比例最好为2:1</div>
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
                dialogImageUrl: '',
                fileList:this.info.picList,
                imageUrlArr:[this.info.goodsPic],
                dialogVisible: false,
                imageUrl:'',
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
            handleExceed(files, fileList) {
                this.$message.error('只能传一张图片');
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
                                goodsName:this.info.goodsName,
                                goodsIntegral:this.info.goodsIntegral,
                                goodsPic:this.imageUrlArr.join()
                            }
                            await this.$store.dispatch('updateGoods', obj);
                            if(this.shoppingStatus = 10000) {
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
                'shoppingStatus',
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