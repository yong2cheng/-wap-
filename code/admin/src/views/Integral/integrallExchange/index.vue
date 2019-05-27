<template>
<article 
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
>
    <div class="search">
        <el-input placeholder="请输入用户名" prefix-icon="el-icon-search" v-model="keyword" @keydown.enter.native="exchangeShooppingList" style="width:150px"></el-input>
        <el-input placeholder="请输入真实姓名" prefix-icon="el-icon-search" v-model="keywordRealName" @keydown.enter.native="exchangeShooppingList" style="width:150px"></el-input>
        <el-select v-model="status" placeholder="请选择用户状态" class="block" style="width:150px;margin-bottom:5px;">
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
        <el-button type="primary" icon="el-icon-search" @click="pageindex=1;exchangeShooppingList()">搜索</el-button>
    </div>
    <div style="height:calc(100vh - 220px);">
        <el-table ref="multipleTable" :data="intergralList" tooltip-effect="dark" stripe border height="100%">
            <el-table-column type="index" width="55" align="center" header-align="center" :index="increment" label="序号"></el-table-column>

            <el-table-column show-overflow-tooltip v-if="!item.hidden" v-for="(item, index) in headerOptions" :key="index" :label="item.label" :prop="item.prop" :header-align="item.headerAlign" :align="item.align"  :min-width="item.minWidth || 150">
                <template slot-scope="scope">
                    <div v-if="scope.column.property === 'roles'">
                        <el-tag
                            class="tag"
                            type="primary"
                            close-transition 
                            v-for="(tag, index) in scope.row.roles" :key="index">{{tag}}</el-tag>
                    </div>
                    <div v-else-if="scope.column.property === 'avatar'"><img :src="scope.row[scope.column.property]" alt="" style="height: 40px;"></div>
                    <div v-else>{{scope.row[scope.column.property] || '无'}}</div>
                </template>
            </el-table-column>
            <el-table-column label="操作" header-align="center" align="center" width="135">
                <template slot-scope="scope">
                <!-- <el-button size="mini" @click="getDetail(scope)">详情</el-button> -->
                <el-button size="mini" @click="cash(scope)" v-if="scope.row.status===0">待处理</el-button>
                <el-button size="mini" v-if="scope.row.status==1">已处理</el-button>
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
        :total="intergralTotal">
    </el-pagination>
<Detail v-if="detailShow" :info="exchangeShooppingInfo" @close="close(1)"></Detail>
<el-dialog title="物流单号" :visible.sync="dialogFormVisible" width="50%" center>
    <el-form>
        <el-form-item label="物流单号" label-width="100px">
            <el-input v-model="logisticsNo"></el-input>
        </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirm">确 定</el-button>
    </div>
</el-dialog>
</article>
</template>
<script>
    import { mapGetters } from 'vuex'
    import Detail from '../detail/index'
    export default {
        components: {
            Detail
        },
        data() {
            return {
                proxyFlag:sessionStorage.getItem('proxyFlag'),
                logisticsNo:'',
                deliverInfo:{
                    status:'',
                    id:''
                },
                status:'',
                dateValue:'',
                keyword: '',
                keywordRealName:'',
                dialogFormVisible:false,
                detailShow:false,
                editShow: false,
                userInfo: {},
                loading: false,
                pageindex: 1,
                pagesize: 10,
                size_scoped: [10, 20, 30, 40],
                exchangeShooppingInfo:{},
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
                        width: ''                 
                    },
                    {
                        label: '真实姓名',
                        prop: 'realName',
                        hidden: false,
                        headerAlign: 'center',
                        align: 'center',
                        minWidth:80                
                    },
                    {
                        label: '提现金额',
                        prop: 'cashOutIntegral',
                        hidden: false,
                        headerAlign: 'center',
                        align: 'center',
                        width: '',
                        sort: true,
                        minWidth:100                  
                    },
                    {
                        label: '提现方式',
                        prop: 'cashOutWayName',
                        hidden: false,
                        headerAlign: 'center',
                        align: 'center',
                        width: '',
                        sort: true,
                        minWidth:100                  
                    },
                    {
                        label: '提现账号',
                        prop: 'cashOutCard',
                        hidden: false,
                        headerAlign: 'center',
                        align: 'center',
                        width: '',
                        sort: true,
                    },
                    {
                        label: '提现状态',
                        prop: 'statusName',
                        hidden: false,
                        headerAlign: 'center',
                        align: 'center',
                        width: '',
                        sort: true,     
                        minWidth:80             
                    },
                    {
                        label: '银行名称',
                        prop: 'subBranchName',
                        hidden: false,
                        headerAlign: 'center',
                        align: 'center',
                        width: '',
                        sort: true                  
                    },
                    {
                        label: '提现时间',
                        prop: 'createDate',
                        hidden: false,
                        headerAlign: 'center',
                        align: 'center',
                        width: '',
                        sort: true                  
                    }
                ],
                multipleSelection: [],
                userStatusArr:[
                {
                    name:'所有状态',
                    status:''
                },{
                    name:'待处理',
                    status:0
                },{
                    name:'已处理',
                    status:1
                }],
            }
        },
        mounted () {
            this.exchangeShooppingList()
        },

        methods: {
            increment (index) {
                return index+1+((this.pageindex-1)*this.pagesize)
            },
            handleSizeChange(val) {
                // console.log(`每页 ${val} 条`);
                this.pagesize = val;
                this.exchangeShooppingList()
            },
            handleCurrentChange(val) {
                // console.log(`当前页: ${val}`);
                this.pageindex = val;
                this.exchangeShooppingList()
            },
            async exchangeShooppingList () {
                let obj = {
                        current: this.pageindex,
                        size: this.pagesize,
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
                if(this.status || this.status===0) {
                    obj.status = this.status
                }
                this.loading = true;
                try {
                    await this.$store.dispatch('integralCashOutList', obj)
                    this.loading = false;
                }catch(e) {
                    this.loading = false;
                }
            },

            getDetail (scope) {
                this.detailShow = true;
                this.exchangeShooppingInfo = scope.row
            },

            close (type) {
                if(type == 1) {
                    this.detailShow = false;
                } else {
                    this.editShow = false
                    this.exchangeShooppingList()
                }
            },

            deliverGoods(scope) {
                this.dialogFormVisible=true
                this.deliverInfo.id = scope.row.id
                this.deliverInfo.status = 2
            },

            async refund(scope) {
                this.deliverInfo.id = scope.row.id
                this.deliverInfo.status = 4
                this.$confirm('是否申请退款', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true,
                    customClass:'message_width'
                }).then(async () => {
                    this.loading = true;
                    await this.$store.dispatch('updateIntegralConvert', this.deliverInfo)
                    this.$message({
                        message: '退款成功',
                        type: 'success',
                        duration:1500
                    });
                    this.exchangeShooppingList()
                })
            },

            async cash(scope) {
                this.$confirm('是否完成该账号的返现？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true,
                    customClass:'message_width'
                }).then(async () => {
                    this.loading = true;
                    await this.$store.dispatch('updateIntegralCashOut', {id:scope.row.id})
                    this.$message({
                        message: '返现成功',
                        type: 'success',
                        duration:1500
                    });
                    this.exchangeShooppingList()
                })
            },

            async confirm() {
                this.deliverInfo.logisticsNo = this.logisticsNo
                await this.$store.dispatch('updateIntegralConvert', this.deliverInfo)
                this.$message({
                    message: '发货成功',
                    type: 'success',
                    duration:1500
                });
                this.dialogFormVisible=false
                this.exchangeShooppingList()
            }
        },
        computed: {
            ...mapGetters([
                'intergralTotal',
                'intergralList'
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
