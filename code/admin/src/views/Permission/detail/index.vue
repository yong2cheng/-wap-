<template>
    <el-dialog title="vip奖品详情" :visible.sync="dialogTableVisible" class="edit-wrapper" @close="close" width="50%" center>
        <el-form ref="form" label-width="100px" class="form">
            <el-form-item label="创建时间" prop="releaseTime" style="margin-bottom:10px">
                {{info.createDate}}
            </el-form-item>
            <el-form-item label="用户名称" prop="type" style="margin-bottom:10px">
                {{info.username}}
            </el-form-item>
            <el-form-item label="会员名称" prop="type" style="margin-bottom:10px">
                {{info.vipTypeName}}
            </el-form-item>
            <el-form-item label="真实姓名" prop="type" style="margin-bottom:10px">
                {{info.realName}}
            </el-form-item>
            <el-form-item label="收货人" prop="type" style="margin-bottom:10px">
                {{info.receiver}}
            </el-form-item>
            <el-form-item label="联系电话" prop="type" style="margin-bottom:10px">
                {{info.telphone}}
            </el-form-item>
            <el-form-item label="商品名称" prop="type" style="margin-bottom:10px">
                {{info.goodsName}}
            </el-form-item>
            <el-form-item label="商品积分" prop="source" style="margin-bottom:10px">
                {{info.goodsIntegral}}积分
            </el-form-item>
            <el-form-item label="商品图片" prop="isVisible" class="left-item">
                <img :src="'http://localhost:8080/api/'+info.goodsPic" alt="" style="width:100px;height:50px" @click="clickImg($event)">
            </el-form-item>
            <el-form-item label="状态" prop="album" style="margin-bottom:10px">
                {{info.statusName}}
            </el-form-item>
            <el-form-item label="收货地址" prop="title" style="margin-bottom:10px">
                {{info.address}}
            </el-form-item>
            <el-form-item label="支行名称" prop="desc" style="margin-bottom:10px">
                {{info.subBranchName}}
            </el-form-item>
            <el-form-item label="银行卡号" prop="desc" style="margin-bottom:10px">
                {{info.bankCard}}
            </el-form-item>
            <el-form-item label="支付宝账号" prop="desc" style="margin-bottom:10px">
                {{info.alipayCard}}
            </el-form-item>
            <el-form-item label="物流单号" prop="title" style="margin-bottom:10px">
                {{info.logisticsNo}}
            </el-form-item>
            <el-form-item label="支付交易号" prop="type" style="margin-bottom:10px">
                {{info.tradeNo}}
            </el-form-item>
            <!-- <el-form-item v-if="info.userTaskRelationStatus == 2">
                <el-button type="primary" @click="loading=true;submitForm(4)" :loading="loading">审核不通过</el-button>
                <el-button type="primary" @click="loading=true;submitForm(3)" :loading="loading">审核通过</el-button>
            </el-form-item> -->
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