<template>
    <el-dialog title="任务详情" :visible.sync="dialogTableVisible" class="edit-wrapper" @close="close" width="50%" center>
        <el-form ref="form" label-width="100px" class="form">
            <el-form-item label="用户名称" prop="type" style="margin-bottom:10px">
                {{info.username}}
            </el-form-item>
            <el-form-item label="任务名称" prop="type" style="margin-bottom:10px">
                {{info.taskName}}
            </el-form-item>
            <el-form-item label="任务奖励" prop="source" style="margin-bottom:10px">
                {{info.taskReward}}积分
            </el-form-item>
            <el-form-item label="创建时间" prop="releaseTime" style="margin-bottom:10px">
                {{info.createDate}}
            </el-form-item>
            <el-form-item label="任务类型" prop="title" style="margin-bottom:10px">
                {{info.taskTypeName}}
            </el-form-item>
            <el-form-item label="任务描述" prop="desc" style="margin-bottom:10px">
                {{info.taskDescribe}}
            </el-form-item>
            <el-form-item label="任务状态" prop="album" style="margin-bottom:10px">
                {{info.statusName?info.statusName:info.userTaskRelationStatusName}}
            </el-form-item>
            <el-form-item label="任务图片" prop="isVisible" class="left-item">
                <img :src="'http://vip.qicheshijia.com.cn/api/'+item" alt="" style="width:100px;height:50px;margin-right:5px" @click="clickImg($event)" v-for="(item, index) in info.taskPicList" :key="index" v-if="info.taskPicList">
            </el-form-item>
            <el-form-item label="用户上传图片" prop="isVisible" class="left-item" v-if="info.linkType != 1">
                <img :src="'http://vip.qicheshijia.com.cn/api/'+item" alt="" style="width:100px;height:50px;margin-right:5px" @click="clickImg($event)" v-for="(item, index) in info.applyPicList" :key="index" v-if="info.applyPicList">
            </el-form-item>
            <el-form-item v-if="info.userTaskRelationStatus == 2">
                <el-button type="primary" @click="loading=true;submitForm(4)" :loading="loading">审核不通过</el-button>
                <el-button type="primary" @click="loading=true;submitForm(3)" :loading="loading">审核通过</el-button>
            </el-form-item>
        </el-form>
        <!-- 放大图片 -->
　　<BigImg v-if="showImg" @clickit="viewImg" :imgSrc="imgSrc"></BigImg>
    </el-dialog>
</template>


<script>
import BigImg from '../../../components/BigImg/index.vue';
    export default {
        props: ['info'],
        data() {
            return {
                dialogTableVisible: true,
                showImg:false,
　　　　　　      imgSrc: '',
                loading: false,
            }
        },
        components: {
            BigImg
        },
        methods: {
            clickImg(e) {
    　　　　　　this.showImg = true;
    　　　　　　// 获取当前图片地址
    　　　　　　this.imgSrc = e.currentTarget.src;
    　　　　  },
            viewImg(){
    　　　　　　this.showImg = false;
    　　　　},
            close() {
                this.$emit('close')
            },
            async submitForm(status) {
                await this.$store.dispatch('toExamine', {id:this.info.id,userTaskRelationStatus:status});
                this.loading = false;
                this.close()
                    
            }

        },
        computed: {
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