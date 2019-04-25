<template>
<article 
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
>
    <div class="search">
        <el-input placeholder="请输入用户名" prefix-icon="el-icon-search" v-model="keyword" @keydown.enter.native="getUserList" style="width:150px;margin-bottom:5px;"></el-input>
        <el-input placeholder="请输入真实姓名" prefix-icon="el-icon-search" v-model="keywordRealName" @keydown.enter.native="getUserList" style="width:150px;margin-bottom:5px;"></el-input>
        <el-input placeholder="请输入注册多少天内" prefix-icon="el-icon-search" v-model="keywordDays" @keydown.enter.native="getUserList" style="width:180px;margin-bottom:5px;"></el-input>
        <el-input placeholder="请输入下线人数小于多少人" prefix-icon="el-icon-search" v-model="keywordChildCount" @keydown.enter.native="getUserList" style="width:215px;margin-bottom:5px;"></el-input>
        <el-select v-model="vipType" placeholder="请选择会员类型" class="block" style="width:150px;margin-bottom:5px;">
            <el-option v-for="(item,index) in vipTypeArr" :key="index" :label="item.name" :value="item.vipType"></el-option>
        </el-select>
        <el-select v-model="userStatus" placeholder="请选择用户状态" class="block" style="width:150px;margin-bottom:5px;">
            <el-option v-for="(item,index) in userStatusArr" :key="index" :label="item.name" :value="item.status"></el-option>
        </el-select>
        <el-date-picker
            v-model="dateValue"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd"
            >
            </el-date-picker>
        <el-button type="primary" icon="el-icon-search"  @click="pageindex=1;getUserList()">搜索</el-button>
    </div>
    <div style="height:calc(100vh - 270px);">
        <el-table ref="multipleTable" :data="userList" tooltip-effect="dark" stripe border height="100%"  @sort-change='tableChange'>
            <el-table-column type="index" width="55" align="center" header-align="center" :index="increment" label="序号"></el-table-column>

            <el-table-column show-overflow-tooltip v-if="!item.hidden" v-for="(item, index) in headerOptions" :key="index" :label="item.label" :prop="item.prop" :header-align="item.headerAlign" :align="item.align"  :sortable="item.sort?'custom':false" :min-width="item.minWidth">
                <template slot-scope="scope">
                    <div v-if="scope.column.property === 'avatar'"><img :src="scope.row[scope.column.property]" alt="" style="height: 40px;"></div>
                    <div v-else-if="scope.column.property === 'status'">{{scope.row.status ==1?'启用' : '禁用'}}</div>
                    <div v-else-if="scope.column.property === 'childCount'">{{scope.row[scope.column.property]}}</div>
                    <div v-else-if="scope.column.property === 'integral'">{{scope.row[scope.column.property]}}</div>
                    <div v-else>{{scope.row[scope.column.property] || '无'}}</div>
                </template>
            </el-table-column>
            <el-table-column label="操作" header-align="center" align="center" width="460" v-if="proxyFlag!=1">
                <template slot-scope="scope">
                <el-button size="mini" @click="changStatus(scope,0)" v-if="scope.row.status==1">禁用</el-button>
                <el-button size="mini" @click="changStatus(scope,1)" v-else>启用</el-button>
                <el-button size="mini" @click="changStatus(scope,'',1)" v-if="scope.row.userType==2">取消代理</el-button>
                <el-button size="mini" @click="changStatus(scope,'',2)" v-else>设为代理</el-button>
                <el-button size="mini" @click="changStatus(scope,2)">重置密码</el-button>
                <el-button size="mini" @click="updataBank(scope)">银行卡号</el-button>
                <el-button size="mini" @click="updataAddress(scope)">收货地址</el-button>
                <!-- <el-button size="mini" type="danger" @click="del(scope)">删除</el-button> -->
                </template>
            </el-table-column>
        </el-table>
    </div>
    <el-pagination
        class="pagination"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageindex"
        :page-sizes="size_scoped"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="userTotal">
    </el-pagination>
    <EditComponent v-if="editShow" :info="userInfo" @close="close"></EditComponent>
    <UpdataBankComponent v-if="updataBankShow" :infotion="userInfo" @close="close"></UpdataBankComponent>
    <UpdataAddressComponent v-if="updataAddressShow" :infotion="userInfo" @close="close"></UpdataAddressComponent>

</article>
</template>
<script>
    import { mapGetters } from 'vuex'
    import EditComponent from '../edit/index'
    import UpdataBankComponent from '../updataBank/index'
    import UpdataAddressComponent from '../updataAddress/index'
    export default {
        components: {
            EditComponent,
            UpdataBankComponent,
            UpdataAddressComponent
        },
        data() {
            return {
                proxyFlag:sessionStorage.getItem('proxyFlag'),
                dateValue:'',
                keyword: '',
                keywordRealName:'',
                keywordDays:14,
                keywordChildCount:'',
                editShow: false,
                updataBankShow:false,
                updataAddressShow:false,
                userInfo: {},
                loading: false,
                pageindex: 1,
                pagesize: 10,
                childCountOrder:'',
                size_scoped: [10, 20, 30, 40],
                headerOptions: [
                    {
                        label: 'id',
                        prop: '_id',
                        hidden: true,
                        headerAlign: 'center',
                        align: 'center',
                        width: ''
                    },
                    {
                        label: '用户名',
                        prop: 'username',
                        hidden: false,
                        headerAlign: 'center',
                        align: 'center',
                        minWidth:'100px'                 
                    },
                    {
                        label: '真实姓名',
                        prop: 'realName',
                        hidden: false,
                        headerAlign: 'center',
                        align: 'center',
                        width: '',
                        minWidth:'75px'                 
                    },
                    {
                        label: '会员类型名称',
                        prop: 'vipTypeName',
                        hidden: false,
                        headerAlign: 'center',
                        align: 'center',
                        width: '',
                        sort: false,
                        minWidth:'110px'                  
                    },
                    {
                        label: '用户状态',
                        prop: 'status',
                        hidden: false,
                        headerAlign: 'center',
                        align: 'center',
                        width: '',
                        sort: false,
                        minWidth:'75px'                  
                    },
                    {
                        label: '用户积分',
                        prop: 'integral',
                        hidden: false,
                        headerAlign: 'center',
                        align: 'center',
                        width: '',
                        sort: false ,
                        // minWidth:'75px'                  
                    },
                    {
                        label: '用户层级',
                        prop: 'userLevel',
                        hidden: false,
                        headerAlign: 'center',
                        align: 'center',
                        width: '',
                        sort: false ,
                        // minWidth:'75px'                  
                    },
                    {
                        label: '上级姓名',
                        prop: 'parentRealName',
                        hidden: false,
                        headerAlign: 'center',
                        align: 'center',
                        width: '',
                        sort: false,
                        minWidth:'75px'                   
                    },
                    {
                        label: '上级手机号',
                        prop: 'parentUsername',
                        hidden: false,
                        headerAlign: 'center',
                        align: 'center',
                        width: '',
                        sort: false,
                        minWidth:'100px'                  
                    },
                    {
                        label: '下线人数',
                        prop: 'childCount',
                        hidden: false,
                        headerAlign: 'center',
                        align: 'center',
                        width: '',
                        sort: true,
                        minWidth:'110px'                  
                    },
                    {
                        label: '注册时间',
                        prop: 'createDate',
                        hidden: false,
                        headerAlign: 'center',
                        align: 'center',
                        width: '',
                        sort: false ,
                        minWidth:'150px'               
                    }
                ],
                vipTypeArr:[
                {
                    name:'所有会员',
                    vipType:''
                },
                {
                    name:'非会员',
                    vipType:0
                },
                {
                    name:'普通会员',
                    vipType:1
                },{
                    name:'高级会员',
                    vipType:2
                },{
                    name:'体验会员',
                    vipType:3
                }],
                vipType:'',
                userStatusArr:[
                {
                    name:'所有状态',
                    status:''
                },{
                    name:'禁用',
                    status:0
                },{
                    name:'启用',
                    status:1
                }],
                userStatus:'',
                multipleSelection: []
            }
        },
        mounted () {
            this.getUserList()
        },

        methods: {
            tableChange({column,prop,order}) {
                console.log(order)
                this.orderColumn = prop
                if(order == 'descending') {
                    this.childCountOrder = 0
                } else if(order == 'ascending'){
                    this.childCountOrder = 1
                } else {
                    this.childCountOrder = ''
                }
                this.getUserList()
            },
            increment (index) {
                return index+1+((this.pageindex-1)*this.pagesize)
            },
            close () {
                this.editShow = false;
                this.updataBankShow = false;
                this.updataAddressShow = false;
                // this.getUserList()
            },
            handleSizeChange(val) {
                // console.log(`每页 ${val} 条`);
                this.pagesize = val;
                this.getUserList()
            },
            handleCurrentChange(val) {
                // console.log(`当前页: ${val}`);
                this.pageindex = val;
                this.getUserList()
            },
            async getUserList () {
                let obj = {
                        current: this.pageindex,
                        size: this.pagesize,
                }
                if(this.childCountOrder || this.childCountOrder===0) {
                    obj.childCountOrder = this.childCountOrder
                }
                if(this.dateValue) {
                    obj.beginDate = this.dateValue[0]
				    obj.endDate = this.dateValue[1]
                }
                if(this.keyword) {
                    obj.username = this.keyword
                }
                if(this.keywordRealName) {
                    obj.realName = this.keywordRealName
                }
                if(this.vipType || this.vipType===0) {
                    obj.vipType = this.vipType
                }
                if(this.userStatus || this.userStatus===0) {
                    obj.status = this.userStatus
                }
                if(this.keywordDays || this.keywordDays===0) {
                    obj.days = this.keywordDays
                }
                if(this.keywordChildCount || this.keywordChildCount===0) {
                    obj.childCount = this.keywordChildCount
                }
                this.loading = true;
                try {
                    await this.$store.dispatch('getUserList', obj)
                    this.loading = false;
                }catch(e) {
                    this.loading = false;
                }
            },
            async changStatus(scope,type,flag) {
                let str ='',successMes=''
                if(type == 1) {
                    str = '是否启用该用户？'
                    successMes = '启用成功'
                } else if(type == 2) {
                    str = '是否重置该用户密码？'
                    successMes = '重置密码成功'
                } else {
                    str = '是否禁用该用户'
                    successMes = '禁用成功'
                }
                if(flag == 1) {
                    str = '是否把该用户取消代理？'
                    successMes = '取消代理成功'
                } else if(flag == 2){
                    str = '是否把该用户设为代理'
                    successMes = '设为代理成功'
                }
                this.$confirm(str, '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true
                }).then(async () => {
                    let obj={
                        id: scope.row.id,
                    }
                    if(type === 2) {
                        await this.$store.dispatch('resetPassword', obj)
                    } else {
                        if(type === 1 || type === 0) {
                            obj.status  = type
                        }
                        if(flag) {
                            obj.userType  = flag
                        }
                        await this.$store.dispatch('updateStatus', obj)
                    }
                    
                    this.$message({
                        message: successMes,
                        type: 'success',
                        duration:1500
                    });
                    this.getUserList()
                })
            },
            // 修改银行卡号
            async updataBank (scope) {
                await this.$store.dispatch('getUserBank',{id:scope.row.id});
                this.userInfo = this.userBankList
                if(this.userInfo) {
                    this.updataBankShow = true;
                } else {
                    this.$message({
                        message: '该用户未绑定银行卡',
                        type: 'success',
                        duration:1500
                    });
                }
                console.log(this.userInfo)
            },
            // 修改地址
            async updataAddress (scope) {
                await this.$store.dispatch('getAddress',{id:scope.row.id});
                this.userInfo = this.userAddressList
                if(this.userInfo) {
                    this.userInfo.userId = scope.row.id
                    this.updataAddressShow = true;
                } else {
                    this.$message({
                        message: '该用户未填写收获地址',
                        type: 'success',
                        duration:1500
                    });
                }
                console.log(this.userInfo)
            },
        },
        computed: {
            ...mapGetters([
                'userList',
                'userTotal',
                'userBankList',
                'userAddressList'
            ])
        }
    }
</script>

<style lang="less" scoped>
    article {
        padding: 20px;
        .search {
            padding-bottom: 20px;
            .el-input {
                width: 300px;
            }
        }
        .pagination {
            text-align: right;
            padding: 20px 0;
        }
        .tag {
            margin: 0 10px;
        }
    }
</style>
