<template>
<article 
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
>
    <div class="search">
        <el-input placeholder="请输入任务名称" prefix-icon="el-icon-search" v-model="keyword" @keydown.enter.native="getTaskList" style="width:150px"></el-input>
        <el-input placeholder="请输入真实姓名" prefix-icon="el-icon-search" v-model="keywordRealName" @keydown.enter.native="getUserList" style="width:150px"></el-input>
        <el-select v-model="taskType" placeholder="请选择任务类型" class="block" style="width:120px">
            <el-option v-for="(item,index) in taskTypeArr" :key="index" :label="item.name" :value="item.taskType"></el-option>
        </el-select>
        <el-select v-model="taskStaus" placeholder="请选择任务状态" class="block" style="width:120px">
            <el-option v-for="(item,index) in taskStausArr" :key="index" :label="item.name" :value="item.userTaskRelationStatus"></el-option>
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
        <el-button type="primary" icon="el-icon-search"  @click="pageindex=1;getReviewedList()">搜索</el-button>
        <el-button type="primary" style="float: right;"  @click="batchAudit">批量审核</el-button>
    </div>
    <div style="height:calc(100vh - 220px);">
        <el-table ref="multipleTable" :data="taskList" tooltip-effect="dark" stripe border height="100%" @selection-change="handleSelectionChange">
            <el-table-column
                type="selection"
                align="center"
                :selectable="selectable"
                width="55">
            </el-table-column>
            <el-table-column type="index" width="55" align="center" header-align="center" :index="increment" label="序号"></el-table-column>
    
            <el-table-column show-overflow-tooltip v-if="!item.hidden" v-for="(item, index) in headerOptions" :key="index" :label="item.label" :prop="item.prop" :header-align="item.headerAlign" :align="item.align" :sortable="item.sort"  :min-width="item.minWidth || 150">
                <template slot-scope="scope">
                    <div v-if="scope.column.property == 'taskPic'"><img :src="'http://vip.yuziyule.cn/api/'+scope.row[scope.column.property]" style="width:80px;height:40px"/></div>
                    <div v-else-if="scope.column.property == 'taskReward'">{{scope.row[scope.column.property]}}积分</div>
                    <!-- <div v-else-if="scope.column.property == 'releaseTime'">{{scope.row[scope.column.property] | parseTime('{y}-{m}-{d}')}}</div> -->
                    <div v-else>{{scope.row[scope.column.property] || '无'}}</div>
                </template>
            </el-table-column>
            <el-table-column label="操作" header-align="center" align="center" width="150">
                <template slot-scope="scope">
                <el-button size="mini" @click="getDetail(scope)">详情</el-button>
                <el-button size="mini" @click="getDetail(scope)" v-if="scope.row.userTaskRelationStatus==2">审核</el-button>
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
        :total="taskTotal">
    </el-pagination>
    <Detail v-if="detailShow" :info="taskInfo" @close="close"></Detail>

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
                keyword: '',
                keywordRealName:'',
                detailShow: false,
                taskInfo: {},
                loading: false,
                pageindex: 1,
                pagesize: 10,
                size_scoped: [10, 20, 30, 40],
                headerOptions: [
                    {
                        label: '_id',
                        prop: '_id',
                        hidden: true,
                        headerAlign: 'center',
                        align: 'center',
                    },
                    {
                        label: '用户名称',
                        prop: 'username',
                        hidden: false,
                        headerAlign: 'center',
                        align: 'center',
                    },
                    {
                        label: '真实姓名',
                        prop: 'realName',
                        hidden: false,
                        headerAlign: 'center',
                        align: 'center',
                        minWidth: 100,                 
                    },
                    {
                        label: '任务名称',
                        prop: 'taskName',
                        hidden: false,
                        headerAlign: 'center',
                        align: 'center',
                        minWidth: 120,
                    },
                    {
                        label: '任务类型名称',
                        prop: 'taskTypeName',
                        hidden: false,
                        headerAlign: 'center',
                        align: 'center',
                        minWidth: 120,
                    },
                    {
                        label: '状态',
                        prop: 'userTaskRelationStatusName',
                        hidden: false,
                        headerAlign: 'center',
                        align: 'center',
                        minWidth: 100,
                    },
                    {
                        label: '奖励',
                        prop: 'taskReward',
                        hidden: false,
                        headerAlign: 'center',
                        align: 'center',
                        minWidth: 100,
                    },
                    {
                        label: '创建时间',
                        prop: 'createDate',
                        hidden: false,
                        headerAlign: 'center',
                        align: 'center',
                    },
                    
                ],
                multipleSelection: [],
                dateValue:'',
                taskTypeArr:[
                {
                    name:'所有类型',
                    taskType:''
                },
                {
                    name:'普通任务',
                    taskType:1
                },{
                    name:'高级任务',
                    taskType:2
                }],
                taskStausArr:[
                {
                    name:'所有状态',
                    userTaskRelationStatus:''
                },
                {
                    name:'已申请',
                    userTaskRelationStatus:1
                },{
                    name:'待审核',
                    userTaskRelationStatus:2
                },{
                    name:'审核通过',
                    userTaskRelationStatus:3
                },{
                    name:'审核不通过',
                    userTaskRelationStatus:4
                }],
                taskStaus:'',
                taskType:''
            }
        },
        mounted () {
            this.getReviewedList()
        },

        methods: {
            selectable(row,index) {
                if(row.userTaskRelationStatus==2) {
                    return true
                } else {
                    return false
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            increment (index) {
                return index+1+((this.pageindex-1)*this.pagesize)
            },
            close () {
                this.detailShow = false;
                this.getReviewedList()
            },
            handleSizeChange(val) {
                // console.log(`每页 ${val} 条`);
                this.pagesize = val;
                this.getReviewedList()
            },
            handleCurrentChange(val) {
                // console.log(`当前页: ${val}`);
                this.pageindex = val;
                this.getReviewedList()
            },
            async getReviewedList () {
                this.loading = true;
                let obj = {
                        current: this.pageindex,
                        size: this.pagesize
                }
                if(this.keyword) {
                    obj.taskName = this.keyword
                }
                if(this.keywordRealName) {
                    obj.realName = this.keywordRealName
                }
                if(this.taskType) {
                    obj.taskType = this.taskType
                }
                if(this.taskStaus) {
                    obj.userTaskRelationStatus = this.taskStaus
                }
                if(this.dateValue) {
                    obj.beginDate = this.dateValue[0]
				    obj.endDate = this.dateValue[1]
                }
                try {
                    await this.$store.dispatch('reviewedList', obj)
                    this.loading = false;
                }catch(e) {
                    this.loading = false;
                }
            },
            batchAudit() {
                if(this.multipleSelection&&this.multipleSelection.length>0) {
                    this.loading = true
                    let idArr = []
                    this.multipleSelection.forEach(element => {
                        idArr.push(element.id)
                    });
                    this.$confirm('是否审核通过', '提示', {
                        distinguishCancelAndClose: true,
                        confirmButtonText: '审核通过',
                        cancelButtonText: '审核不通过',
                        type: 'warning',
                        center: true,
                        customClass:'message_color'
                    }).then(async () => {
                        let obj={
                            ids:idArr.join(),
                            userTaskRelationStatus:3
                        }
                        await this.$store.dispatch('toExamineBatchUpdate', obj);
                        this.loading = false;
                        this.$message({
                            message: '审核通过成功',
                            type: 'success',
                            duration:1500
                        });
                        this.getReviewedList()
                    }).catch(async (action) => {
                        if(action === 'cancel') {
                            let obj={
                                ids:idArr.join(),
                                userTaskRelationStatus:4
                            }
                            await this.$store.dispatch('toExamineBatchUpdate', obj);
                            this.loading = false;
                            this.$message({
                                message: '审核不通过成功',
                                type: 'success',
                                duration:1500
                            });
                            this.getReviewedList()
                        } 
                    });
                } else {
                    this.$message({
                        message: '请勾选要审核的数据',
                        type: 'info',
                        duration:1500
                    });
                }
                
            },
            getDetail (scope) {
                this.detailShow = true;
                this.taskInfo = scope.row
            },
        },
        computed: {
            ...mapGetters([
                'taskList',
                'taskTotal'
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
            margin: 5px;
        }
    }
</style>
