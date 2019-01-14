<template>
    <el-dialog title="会员条件编辑" :visible.sync="dialogTableVisible" class="edit-wrapper" @close="close" width="60%" center>
        <el-form :model="info" ref="form" label-width="100px" class="form">
            <el-form-item label="会员类型名称">
                {{info.vipTypeName}}
            </el-form-item>
            <el-form-item label="商品选择">
                <el-select v-model="info.goodsId" placeholder="请选择商品" class="block" @change="getShoppingDetail">
                    <el-option v-for="(item,index) in goodsList" :key="index" :label="item.goodsName" :value="item.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="商品图片">
                <img :src="'http://www.sai32m.cn:8080/api/'+info.goodsPic" alt="" style="width:100px;height:50px" @click="clickImg($event)">
            </el-form-item>
            <el-form-item label="商品积分">
                {{info.goodsIntegral}}
            </el-form-item>
            <el-form-item label="任务申请上限">
                <el-input  v-model="info.applyTaskLimitCount"></el-input>
            </el-form-item>
            <el-form-item label="一级奖励">
                <el-input  v-model="info.secondLevelReward"></el-input>
            </el-form-item>
            <el-form-item label="二级奖励">
                <el-input  v-model="info.thirdLevelReward"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="updataForm('form')" :loading="loading">修改</el-button>
            </el-form-item>
        </el-form>
        <!-- 放大图片 -->
　　<BigImg v-if="showImg" @clickit="viewImg" :imgSrc="imgSrc"></BigImg>
    </el-dialog>
</template>


<script>
import { mapGetters } from 'vuex'
import BigImg from '../../../components/BigImg/index.vue';
    export default {
        components: {BigImg},
        props: ['info'],
        data() {
            return {
                dialogTableVisible: true,
                loading: false,
                showImg:false,
　　　　　　      imgSrc: '',
            }
        },
        created() {
            this.getGoodsList()
        },
        methods: {
            getShoppingDetail(data){
                this.goodsList.forEach(element => {
                    if(element.id == data) {
                        this.info.goodsPic = element.goodsPic
                        this.info.goodsIntegral = element.goodsIntegral
                    }
                });
            },
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
            async getGoodsList() {
                await this.$store.dispatch('getGoodsLists');
            },
            updataForm(formName) {
                this.loading = true;
                this.$refs[formName].validate( async (valid) => {
                    if (valid) {
                        try {
                            let obj={
                                id:this.info.id,
                                goodsId:this.info.goodsId,
                                applyTaskLimitCount:this.info.applyTaskLimitCount,
                                secondLevelReward:this.info.secondLevelReward,
                                thirdLevelReward:this.info.thirdLevelReward,
                            }
                            await this.$store.dispatch('updatevVipCondition', obj);
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
                'goodsList',
                'sysStatus'
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