<template>
    <div>
        <div class="task_detail_wrapper">
            <div class="new-header">
                <div class="container cl">
                    <img src="../../../images/back.png" style="float: left;" @click="$router.back(-1)"/>
                    <div class="task_detail">任务详情</div>
                </div>
            </div>
            <div class="task_detail_count" >
                <div class="task_detail_name">
                    <p>{{this.detailData.taskName}}</p>
                    <span>{{this.detailData.taskReward}}积分</span>
                </div>
                <div class="task_detail_derc">
                    <div class="cf task_derc_name" style="border-bottom: 1px solid #e9e9e9;padding: 5px 0;"><h3 style="float:left">任务描述</h3><p style="margin:0;color:#fff" ref="copy" data-clipboard-action="copy" data-clipboard-target="#success_form_input" @click="copyLink">一键复制描述</p></div>
                    <p id="success_form_input">{{this.detailData.taskDescribe}}</p>
                    <img :src="'http://www.sai32m.cn:8080/api/'+item" alt="" style="width:96%;height:175px" v-for="(item,index) in this.detailData.taskPicList" :key="index" @click="clickTip"/>
                </div>
                <div class="task_detail_derc" v-if="this.detailData.applyPicList&&this.detailData.applyPicList.length>0">
                    <h3>完成任务上传图片</h3>
                    <img :src="'http://www.sai32m.cn:8080/api/'+item" alt="" style="width:96%;height:175px" v-for="(item,index) in this.detailData.applyPicList" :key="index" @click="clickTip"/>
                </div>
                <div class="task_detail_but">
                    <button @click="applyTask()" :class="{color_red:(this.detailData.sourePath != 1&&(this.detailData.userTaskRelationStatus != 0 && this.detailData.userTaskRelationStatus != -2)) || (this.detailData.sourePath == 1 && this.detailData.userTaskRelationStatus!=1)}" class="commom_button">{{this.detailData.sourePath == 1?this.detailData.userTaskRelationStatus==1?'提交审核':this.detailData.userTaskRelationStatusName:this.detailData.userTaskRelationStatusName}}</button>
                </div>
                <div style="margin-top:10px">
                    <!-- <h3>完成任务上传图片</h3> -->
                    <img src='../../../images/regular.jpg' alt="" style="width:100%;"/>
                </div>
                <el-dialog
                    class="task_dialog"
                    title="请选取图片"
                    :visible.sync="dialogVisible"
                    width="90%"
                    center>
                    <span>
                        <el-upload
                            class="upload_img"
                            action='http://www.sai32m.cn:8080/api/imgUpload/'
                            list-type="picture-card"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload"
                            :on-remove="handleRemove"
                            >
                            <i class="el-icon-plus"></i>
                        </el-upload>
                    </span>
                    <span slot="footer" class="dialog-footer">
                        <el-button type="primary" @click="confirm">确 定</el-button>
                    </span>
                </el-dialog>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
    export default {
        data () {
            return {
                detailData:this.$route.query,
                dialogVisible:false,
                dialogImageUrl:'',
                applyPic:'',
                imageUrlArr:[],
                oInput:'',
                copyBtn: null //存储初始化复制按钮事件
            }
        },
        components: {
        },
        created () {
            if(this.detailData.taskPic.indexOf(',')<0) {
                this.detailData.taskPicList = [this.detailData.taskPic]
            }
            if(this.detailData.applyPicList&&this.detailData.applyPicList.length>0) {
                if(this.detailData.applyPic.indexOf(',')<0) {
                    this.detailData.applyPicList = [this.detailData.applyPic]
                }
            }
            console.log(this.detailData)
        },
        mounted () {
            this.copyBtn = new this.clipboard(this.$refs.copy);
        },
        computed: {
        },
        methods: {
            clickTip() {
                this.$message({
                    message: '长按图片保存本地!',
                    type: 'info',
                    duration:1500
                });
            },
            copyLink(){
                // if(this.oInput) {
                //     document.body.removeChild(this.oInput)
                // }
                // let url = document.querySelector('#copyObj').innerText;
                // this.oInput = document.createElement('input');
                // this.oInput.value = url;
                // document.body.appendChild(this.oInput);
                // this.oInput.select();
                // document.execCommand("Copy"); 
                // this.$message({
                //     message: '一键复制成功!',
                //     type: 'success',
                //     duration:1500
                // });
                // this.oInput.className = 'oInput';
                // this.oInput.style.display = 'none';
                let _this = this;
                let clipboard = _this.copyBtn;
                clipboard.on('success', function() {
                    _this.$message({ /*这是使用了element-UI的信息弹框*/
                        message: '复制成功！',
                        type: 'success',
                        duration:1500
                    });
                });
                clipboard.on('error', function() {
                    _this.$message({
                        message: '复制失败，请手动选择复制！',
                        type: 'error',
                        duration:1500
                    });
                });
            },
            beforeAvatarUpload(file) {
                const isLt2M = file.size / 1024 / 1024 < 10;

                if (!isLt2M) {
                    this.$message({
                        message: '上传图片大小不能超过 10MB!',
                        type: 'error',
                        duration:1500
                    });
                }
                return isLt2M;
            },
            handleAvatarSuccess(res, file) {
                this.imageUrlArr.push(res.data)
            },
            handleRemove(res, fileList) {
                let str = res.response.data
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
            // 申请任务
            async applyTask() {
                if(this.detailData.sourePath !=1&&this.detailData.userTaskRelationStatus === 0) {
                    await this.$store.dispatch('applyTask',{
                        taskId:this.detailData.id
                    })
                    this.$router.back(-1)
                }

                if(this.detailData.sourePath !=1&&this.detailData.userTaskRelationStatus === -2) {
                    this.$router.push({ 
                        name: 'becomeVip', 
                        query: {
                            name:'成为VIP'
                        } 
                    })
                }

                if(this.detailData.sourePath ==1&&this.detailData.userTaskRelationStatus==1) {
                    this.dialogVisible = true
                }
            },

            async confirm() {
                this.dialogVisible = false
                let obj={
                    id:this.detailData.id
                }
                if(this.imageUrlArr) {
                    obj.applyPic = this.imageUrlArr.join()
                }
                await this.$store.dispatch('submitTask',obj)
                this.$message({
                    message: '提交成功',
                    type: 'success',
                    duration:1500
                });
                this.$router.back(-1)
            }
        }
    }
</script>
<style lang="css" scoped>
.new-header {
    background: #FE4B1C;
    height: 60px;
    background-size: cover;
    overflow: hidden;
    box-sizing: border-box;
    padding-top: 15px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    padding-top: 12px;
}
.task_detail {
    text-align: center;
    font-size: 20px;
    line-height: 36px;
    height: 36px;
    color:#fff
}
.container {
    width: 96%;
    margin: 0 auto;
    padding: 0;
}
.task_detail_count {
    width: 96%;
    margin-top: 60px;
    background: #fff;
    padding: 0 2% 30px;
}
.task_detail_name {
    height: 60px;
    padding: 10px 0;
}
.task_detail_name p{
    font-size: 0.35rem;
    font-weight: bold;
}
.task_detail_name span{
    
}
.task_detail_derc h3{
    color:#FE4B1C;
}
.task_detail_derc p {
    margin:10px 0
}

.task_derc_name {
    border-bottom: 1px solid rgb(233, 233, 233);
    padding: 5px 0;
}
.task_derc_name h3{
    float:left
}
.task_derc_name p{
    float:right;
    height:20px;
    padding: 5px 10px;
    background:#FE4B1C;
    border-radius:5px;
}
.task_detail_but button{
    background: #FE4B1C;
    color:#fff;
    width:100%
}
.task_detail_but .color_red{
    color: #e63512;
    background:#e9e9e9
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}
.avatar-uploader-icon {
    border: 1px dashed #d9d9d9;
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
}
.avatar {
    width: 100px;
    height: 100px;
    display: block;
}
</style>