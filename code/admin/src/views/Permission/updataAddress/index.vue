<template>
    <el-dialog title="修改地址" :visible.sync="dialogTableVisible" class="edit-wrapper" @close="close" width="80%" center>
        <div class="password_form">
            <el-form :model="info" ref="form" label-width="80px" class="form" >
                <el-form-item label="收货人" prop="receiver">
                    <el-input v-model="info.receiver"></el-input>
                </el-form-item>
                <el-form-item label="手机号" prop="telphone">
                    <el-input v-model="info.telphone"></el-input>
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
                <el-form-item label="区" prop="aCode">
                    <el-select v-model="info.aCode" placeholder="请选择所在区" class="block">
                        <el-option v-for="(item,index) in areaLists" :key="index" :label="item.name" :value="item.code"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="详细地址">
                    <el-input type="textarea" v-model="info.detailAddress" placeholder="如道路，门牌号，小区，单元室等"></el-input>
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
                    receiver: '',
                    telphone: '',
                    pCode: '',
                    cCode: '',
                    aCode: '',
                    detailAddress:'',
                    mergeAddress:''
                },
                provinceLists:[],
                cityLists:[],
                areaLists:[]
            }
        },
        created () {
            console.log(this.infotion)
            this.info = {
                receiver: this.infotion.receiver,
                telphone: this.infotion.telphone,
                pCode: this.infotion.pcode,
                cCode: this.infotion.ccode,
                aCode: this.infotion.acode,
                detailAddress:this.infotion.detailAddress,
                mergeAddress:this.infotion.mergeAddress,
            },
            this.getEdiInfo()
        },
        computed: {
            ...mapGetters([
                'provinceList',
                'cityList',
                'areaList',
                'userAddressList',
            ])
        },
        methods: {
            close() {
                this.$emit('close')
            },
            async getEdiInfo() {
                console.log(this.info)
                await this.getProvinceCity({level:1})
                await this.getProvinceCity({level:2,code:this.info.pCode})
                await this.getProvinceCity({level:3,code:this.info.cCode})
            },
            gettData(level) {
                if(level == 2) {
                    this.info.cCode =''
                    this.info.aCode =''
                    this.areaLists = []
                    this.getProvinceCity({level:2,code:this.info.pCode})
                }
                if(level == 3) {
                    this.info.aCode =''
                    this.getProvinceCity({level:3,code:this.info.cCode})
                }
            },

            async getProvinceCity(obj) {
                await this.$store.dispatch('getProvinceCity', obj);
                if(obj.level == 1) {
                    this.provinceLists = this.provinceList
                } else if(obj.level == 2) {
                    this.cityLists = this.cityList
                } else if(obj.level == 3){
                    this.areaLists = this.areaList
                }
            },

            async updataForm() {
                if(!this.info.receiver) {
                    this.$message({
                        message: '请填写收货人',
                        type: 'error',
                        duration:1500
                    });
                    return
                }
                if(!this.info.telphone) {
                    this.$message({
                        message: '请填写电话号码',
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
                if(!this.info.aCode) {
                    this.$message({
                        message: '请选择所在区',
                        type: 'error'
                    });
                    return
                }
                if(!this.info.detailAddress) {
                    this.$message({
                        message: '请填写详细地址',
                        type: 'error',
                        duration:1500
                    });
                    return
                }
                let pName = '',cName='',aName=''
                this.provinceList.forEach(element => {
                    if(this.info.pCode == element.code) {
                        pName = element.name
                    }
                });
                this.cityList.forEach(element => {
                    if(this.info.cCode == element.code) {
                        cName = element.name
                    }
                    
                });
                this.areaList.forEach(element => {
                    if(this.info.aCode == element.code) {
                        aName = element.name
                    }
                    
                });

                if(pName&&cName&&aName) {
                    this.info.mergeAddress = pName + cName + aName + this.info.detailAddress
                }
                this.info.id = this.infotion.id
                this.info.userId =  this.infotion.userId
                this.$confirm('是否修改地址？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true,
                    customClass:'message_width'
                }).then(async () => {
                    await this.$store.dispatch('updateUserAddress', this.info);
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