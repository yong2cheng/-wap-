<template>
    <div>
        <div class="task_generalt_wrapper">
            <div class="new-header">
                <div class="container cl">
                    <img src="../../../images/back.png" style="float: left;" @click="$router.back(-1)"/>
                    <div class="input-group">
                        <input type="text" placeholder="请输入任务关键词" v-model="keyword">
                        <img class="search-btn" src="../../../images/search.png" @click="pageindex=1;myTaskList()">
                    </div>
                </div>
            </div>
            <div class="task_generalt_count" >
                <ul class="cf" v-if="taskList.length > 0">
                    <li v-for="(item, index) in taskList" :key="index" @click="getTaskDetail(item)">
                        <p>
                            <span>{{item.taskName}}</span>
                            <em>{{item.taskReward}}积分</em>
                        </p>
                        <button :class="{color_green:item.userTaskRelationStatus == 1,color_red:item.userTaskRelationStatus != 1}" @click.stop="applyTask(item)" class="commom_button">{{item.userTaskRelationStatus == 1?'提交审核':item.userTaskRelationStatusName}}</button>
                    </li>
                </ul>
                <NoneData v-else></NoneData>
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
                        action='http://vip.yuziyule.cn/api/imgUpload/'
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
        <Loading v-show="taskLoadingMore"></Loading>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    export default {
        data () {
            return {
                pageindex:1,
                keyword:'',
                status:true,
                dialogVisible:false,
                dialogImageUrl:'',
                applyPic:'',
                seleteData:'',
                imageUrlArr:[],
            }
        },
        components: {
        },
        created () {
            this.myTaskList()
        },
        mounted () {
            window.addEventListener('scroll', () => {
                let distance = document.documentElement.scrollTop || document.body.scrollTop,
                    winH = document.documentElement.clientHeight || document.body.clientHeight,
                    scrollH = document.documentElement.scrollHeight || document.body.scrollHeight;
                if (distance+winH >= scrollH) {
                    if (this.taskLoadingBol) {
                        this.pageindex ++;
                        this.myTaskList()
                    }
                }
            })
        },
        computed: {
            ...mapGetters([
                'taskList',
                'taskLoadingMore',
                'taskLoadingBol'
            ])
        },
        methods: {
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
            // 得到任务列表
            async myTaskList() {
                let obj = {
                    taskType: this.$route.params.taskType,
                    current: this.pageindex
                }
                if(this.keyword) {
                    obj.taskName = this.keyword
                }
                await this.$store.dispatch('myTaskList',obj)
            },

            // 任务详情
            getTaskDetail(data) {
                data.sourePath=1
                this.$router.push({ 
                    name: 'taskDetail', 
                    query: data
                })
            },

            // 提交任务
            async applyTask(data) {
                this.seleteData = data
                if(data.userTaskRelationStatus==1) {
                    this.dialogVisible = true
                }
            },
            async confirm() {
                this.dialogVisible = false
                let obj={
                    id:this.seleteData.id
                }
                if(this.imageUrlArr) {
                    obj.applyPic = this.imageUrlArr.join()
                }
                console.log(obj)
                await this.$store.dispatch('submitTask',obj)
                this.$message({
                    message: '提交成功',
                    type: 'success',
                    duration:1500
                });
                this.seleteData.userTaskRelationStatus = 2
                this.seleteData.userTaskRelationStatusName = '待审核'
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
.container {
    width: 96%;
    margin: 0 auto;
    padding: 0;
}
.input-group {
    width: 65%;
    position: relative;
    float: left;
    border-collapse: separate;
    margin-left: 0.5rem;
}
.input-group input {
    background: #fff;
    border-radius: 15px;
    border: none;
    height: 36px;
    width: 100%;
    text-indent: 20px;
    font-size: 14px;
}
.input-group img {
    position: absolute;
    top: 8px;
    right: 12px;
    cursor: pointer;
    width: 20px;
    height: 20px;
}
.task_generalt_count {
    width: 100%;
    margin-top: 60px;
}
.task_generalt_count ul li{
    background: #fff;
    float: left;
    width:100%;
    height: 70px;
    padding: 0 2%;
    box-sizing: border-box;
    border-bottom: 1px solid #e9e9e9;
}
.task_generalt_count ul li p{
    float: left;
    width:calc(96% - 80px);
    margin-top: 12px;
}
.task_generalt_count ul li p span{
    display: block;
    /* font-size: 0.35rem; */
    font-weight: bold;
    /* 让超出的用...实现 */
    text-overflow:ellipsis;
    /* 禁止换行 */
    white-space:nowrap;
    /* 超出的隐藏 */
	overflow:hidden;
}
.task_generalt_count .color_green{
    float: right;
    color: #7caf0f;
}
.task_generalt_count .color_red{
    float: right;
    color: #e63512;
    /* background:#e9e9e9 */
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