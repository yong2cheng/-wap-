<template>
    <div>
        <div class="integral_wrapper">
            <div class="new-header">
                <div class="container cl">
                    <img src="../../../../../images/back.png" style="float: left;" @click="$router.back(-1)"/>
                    <div class="container_detail">新增收货地址</div>
                </div>
            </div>
            <div class="wrapper_count password_count">
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
                                <el-option v-for="(item,index) in areaList" :key="index" :label="item.name" :value="item.code"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="详细地址">
                            <el-input type="textarea" v-model="info.detailAddress" placeholder="如道路，门牌号，小区，单元室等"></el-input>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
            <div class="password_but">
                <button @click="updataForm()" class="commom_button">新增</button>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    export default {
        data () {
            return {
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
                cityLists:[]
            }
        },
        components: {
        },
        created () {
            this.getProvinceCity({level:1})
        },
        mounted () {
        },
        computed: {
            ...mapGetters([
                'provinceList',
                'cityList',
                'areaList',
            ])
        },
        methods: {
            gettData(level) {
                if(level == 2) {
                    this.info.cCode =''
                    this.info.aCode =''
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

                this.$confirm('请确认所填信息，一经保存不可修改！！！', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true,
                    customClass:'message_width'
                }).then(async () => {
                    await this.$store.dispatch('addAddress', this.info);
                    this.$message({
                        message: '新增成功',
                        type: 'success',
                        duration:1500
                    });
                    this.info = {
                        receiver: '',
                        telphone: '',
                        pCode: '',
                        cCode: '',
                        aCode: '',
                        detailAddress:'',
                        mergeAddress:''
                    }
                    this.$router.back(-1)
                })
            }
            
        }
    }
</script>
<style lang="css" scoped>
.password_count {
    background: #fff
}
.password_form {
    width:80%;
    margin: 0 auto;
    padding:20px 0;
}
.password_but {
    width:80%;
    margin: 0 auto;
}
.password_but button{
    width:100%;
    background: #409EFF;
    color:#fff;
}
</style>