<template>
    <el-dialog title="修改银行卡号" :visible.sync="dialogTableVisible" class="edit-wrapper" @close="close" width="80%" center>
        <div class="password_form">
            <el-form :model="info" ref="form" label-width="80px" class="form" >
                <el-form-item label="姓名" prop="realName">
                    <el-input v-model="info.realName"></el-input>
                </el-form-item>
                <el-form-item label="开户行" prop="bankCode">
                    <el-select v-model="info.bankCode" placeholder="请选择银行" class="block" @change="gettData(1)">
                        <el-option v-for="(item,index) in bankList" :key="index" :label="item.bankName" :value="item.bankCode"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="省" prop="pCode">
                    <el-select v-model="info.pCode" placeholder="请选择所在省份" class="block" @change="gettData(2)">
                        <el-option v-for="(item,index) in provinceLists" :key="index" :label="item.name" :value="item.code"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="市" prop="cCode">
                    <el-select v-model="info.cCode" placeholder="请选择所在市" class="block" @change="gettData(3)">
                        <el-option v-for="(item,index) in cityLists" :key="index" :label="item.name" :value="item.code"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="所属支行" prop="subBranchCode">
                    <el-select v-model="info.subBranchCode" placeholder="请选择所在支行" class="block">
                        <el-option v-for="(item,index) in subBankLists" :key="index" :label="item.subBranchName" :value="item.subBranchCode"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="卡号" prop="bankCard">
                    <el-input  v-model="info.bankCard" placeholder="请输入卡号"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div class="password_but">
            <button @click="updataForm()" class="commom_button" :loading="loading">修改</button>
        </div>
    </el-dialog>
</template>


<script>
import { mapGetters } from 'vuex'
    export default {
        components: {},
        props: ['infotion'],
        data() {
            return {
                dialogTableVisible: true,
                loading: false,
                info: {
                    realName: '',
                    bankCode: '',
                    pCode: '',
                    cCode: '',
                    subBranchCode: '',
                    bankCard:''
                },
                provinceLists:[],
                cityLists:[],
                subBankLists:[]
            }
        },
        created () {
            this.info = {
                realName: this.infotion.realName,
                bankCode: this.infotion.bankCode,
                pCode: this.infotion.pcode,
                cCode: this.infotion.ccode,
                subBranchCode: this.infotion.subBranchCode,
                bankCard: this.infotion.bankCard,
            },
            this.getEdiInfo()
        },
        computed: {
            ...mapGetters([
                'provinceList',
                'cityList',
                'bankList',
                'subBankList',
                'userBankList',
            ])
        },
        methods: {
            close() {
                this.$emit('close')
            },
            async getEdiInfo() {
                console.log(this.info)
                await this.getBankList()
                await this.getProvinceCity({level:1})
                await this.getProvinceCity({level:2,code:this.info.pCode})
                await this.getBankSubList({subBranchCode:this.info.bankCode + this.info.pCode + this.info.cCode})
            },
            gettData(level) {
                if(level == 1) {
                    this.info.subBranchCode =''
                    this.info.cCode =''
                    this.subBankLists = []
                    this.getProvinceCity({level:1})
                }
                if(level == 2) {
                    this.info.subBranchCode =''
                    this.info.cCode =''
                    this.subBankLists = []
                    this.getProvinceCity({level:2,code:this.info.pCode})
                }
                if(level == 3) {
                    let obj =  {subBranchCode:this.info.bankCode + this.info.pCode + this.info.cCode}
                    this.getBankSubList(obj)
                }
            },

            async getBankList() {
                await this.$store.dispatch('getBankList');
            },

            async getBankSubList(obj) {
                await this.$store.dispatch('getBankSubList',obj);
                this.subBankLists = this.subBankList
            },

            async getProvinceCity(obj) {
                await this.$store.dispatch('getProvinceCity', obj);
                if(obj.level == 1) {
                    this.provinceLists = this.provinceList
                } else if(obj.level == 2) {
                    this.cityLists = this.cityList
                }
            },

            async updataForm() {
                if(!this.info.realName) {
                    this.$message({
                        message: '请填写姓名',
                        type: 'error',
                        duration:1500
                    });
                    return
                }
                if(!this.info.bankCode) {
                    this.$message({
                        message: '请选择银行',
                        type: 'error',
                        duration:1500
                    });
                    return
                }
                if(!this.info.pCode) {
                    this.$message({
                        message: '请选择所在省份',
                        type: 'error',
                        duration:1500
                    });
                    return
                }
                if(!this.info.cCode) {
                    this.$message({
                        message: '请填选择所在市',
                        type: 'error',
                        duration:1500
                    });
                    return
                }
                if(!this.info.subBranchCode) {
                    this.$message({
                        message: '请选择所在支行',
                        type: 'error',
                        duration:1500
                    });
                    return
                }
                if(!this.info.bankCard) {
                    this.$message({
                        message: '请输入卡号',
                        type: 'error',
                        duration:1500
                    });
                    return
                }

                this.subBankList.forEach(element => {
                    if(this.info.subBranchCode == element.subBranchCode) {
                        this.info.subBranchName = element.subBranchName
                    }
                    
                });
                this.info.id = this.infotion.id
                this.info.userId =  this.infotion.userId
                this.$confirm('是否修改银行卡号！！！', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true,
                    customClass:'message_width'
                }).then(async () => {
                    await this.$store.dispatch('updateUserBank', this.info);
                    this.$message({
                        message: '修改成功',
                        type: 'success',
                        duration:1500
                    });
                    this.close()
                })
            }
            
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
    .password_form {
        width:80%;
        margin: 0 auto;
        // padding:20px 0;
    }
    .password_but {
        width:50%;
        margin: 0 auto;
    }
    .password_but button{
        width:100%;
        background: #FE4B1C;
        color:#fff;
        height: 36px;
        line-height: 36px;
        border-radius: 20px;
    }
</style>