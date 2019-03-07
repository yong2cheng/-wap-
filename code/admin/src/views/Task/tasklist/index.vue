<template>
<article>
    <div class="search">
        <el-input placeholder="请输入任务名称" prefix-icon="el-icon-search" v-model="keyword" @keydown.enter.native="getTaskList" style="width:150px"></el-input>
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
        <el-button type="primary" icon="el-icon-search" :loading="loading" @click="pageindex=1;getTaskList()">搜索</el-button>
        <el-button type="primary" style="float: right;" @click="getPath('/task/add')">添加</el-button>
    </div>
    <div style="height:calc(100vh - 220px);">
        <el-table ref="multipleTable" :data="taskList" tooltip-effect="dark" stripe border height="100%">
            <el-table-column type="index" width="55" align="center" header-align="center" :index="increment" label="序号"></el-table-column>
    
            <el-table-column show-overflow-tooltip v-if="!item.hidden" v-for="(item, index) in headerOptions" :key="index" :label="item.label" :prop="item.prop" :header-align="item.headerAlign" :align="item.align" :sortable="item.sort"  :min-width="item.minWidth || 150">
                <template slot-scope="scope">
                    <div v-if="scope.column.property == 'taskPic'"><img :src="'http://vip.omx65.cn:8080/api/'+scope.row[scope.column.property]" style="width:80px;height:40px" @click="clickImg($event)"/></div>
                    <!-- <div v-else-if="scope.column.property == 'source'">{{scope.row[scope.column.property] === 1?'原创':scope.row[scope.column.property] === 2?'转载':'翻译'}}</div> -->
                    <!-- <div v-else-if="scope.column.property == 'releaseTime'">{{scope.row[scope.column.property] | parseTime('{y}-{m}-{d}')}}</div> -->
                    <div v-else>{{scope.row[scope.column.property] || '无'}}</div>
                </template>
            </el-table-column>
            <el-table-column label="操作" header-align="center" align="center" width="235">
                <template slot-scope="scope">
                <el-button size="mini" @click="getDetail(scope)">详情</el-button>
                <el-button size="mini" @click="edit(scope)" v-if="scope.row.status==1">编辑</el-button>
                <el-button size="mini" @click="releaseTask(scope,2)" v-if="scope.row.status==1">发布</el-button>
                <el-button size="mini" @click="releaseTask(scope,3)" v-if="scope.row.status==2">停止发布</el-button>
                <el-button size="mini" @click="del(scope)" v-if="scope.row.status==3">删除</el-button>
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
    <Detail v-if="detailShow" :info="taskInfo" @close="close(1)"></Detail>
    <EditComponent v-if="editShow" :info="taskInfo" @close="close(2)"></EditComponent>
</article>
</template>
<script>
    import { mapGetters } from 'vuex'
    import Detail from '../detail/index'
    import EditComponent from '../edit/index'
    export default {
        components: {
            EditComponent,Detail
        },
        data() {
            return {
                showImg:false,
　　　　　　      imgSrc: '',
                keyword: '',
                detailShow:false,
                editShow: false,
                blogInfo: {},
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
                        label: '任务名称',
                        prop: 'taskName',
                        hidden: false,
                        headerAlign: 'center',
                        align: 'center',
                    },
                    {
                        label: '任务类型名称',
                        prop: 'taskTypeName',
                        hidden: false,
                        headerAlign: 'center',
                        align: 'center',
                        minWidth: 100,
                    },
                    {
                        label: '任务状态',
                        prop: 'statusName',
                        hidden: false,
                        headerAlign: 'center',
                        align: 'center',
                        minWidth: 100,
                    },
                    {
                        label: '任务派发数量',
                        prop: 'taskDistributeCount',
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
                    name:'所有任务',
                    taskType:''
                },
                {
                    name:'普通任务',
                    taskType:1
                },{
                    name:'高级任务',
                    taskType:2
                }],
                taskType:'',
                taskStausArr:[
                {
                    name:'所有状态',
                    userTaskRelationStatus:''
                },
                {
                    name:'新建',
                    userTaskRelationStatus:1
                },{
                    name:'已发布',
                    userTaskRelationStatus:2
                },{
                    name:'停止发布',
                    userTaskRelationStatus:3
                }],
                taskStaus:'',
                taskInfo:''
            }
        },
        mounted () {
            this.getTaskList()
        },

        methods: {
            getPath(path) {
                this.$router.push({ 
                    path: path, 
                })
            },
            clickImg(e) {
    　　　　　　this.showImg = true;
    　　　　　　// 获取当前图片地址
    　　　　　　this.imgSrc = e.currentTarget.src;
    　　　　  },
            viewImg(){
    　　　　　　this.showImg = false;
    　　　　},
            increment (index) {
                return index+1+((this.pageindex-1)*this.pagesize)
            },
            close (type) {
                if(type == 1) {
                    this.detailShow = false;
                } else {
                    this.editShow = false
                    this.getTaskList()
                }
            },
            handleSizeChange(val) {
                // console.log(`每页 ${val} 条`);
                this.pagesize = val;
                this.getTaskList()
            },
            handleCurrentChange(val) {
                // console.log(`当前页: ${val}`);
                this.pageindex = val;
                this.getTaskList()
            },
            async getTaskList () {
                let obj = {
                        current: this.pageindex,
                        size: this.pagesize
                }
                if(this.keyword) {
                    obj.taskName = this.keyword
                }
                if(this.taskType) {
                    obj.taskType = this.taskType
                }
                if(this.dateValue) {
                    obj.beginDate = this.dateValue[0]
				    obj.endDate = this.dateValue[1]
                }
                if(this.taskStaus) {
                    obj.status = this.taskStaus
                }
                try {
                    await this.$store.dispatch('getTaskList', obj)
                    this.loading = false;
                }catch(e) {
                    this.loading = false;
                }
            },
            getDetail (scope) {
                this.detailShow = true;
                this.taskInfo = scope.row
                this.taskInfo.linkType = 1
            },
            edit (scope) {
                this.editShow = true;
                this.taskInfo = scope.row
                if(this.taskInfo.taskPicList) {
                    if(this.taskInfo.taskPicList.length>0) {
                        let picList = []
                        this.taskInfo.taskPicList.forEach(element => {
                            picList.push({
                                url:'http://vip.omx65.cn:8080/api'+element
                            })
                        });
                        this.taskInfo.picList = picList
                    }
                }
            },
            del (scope) {
                this.$confirm('是否删除？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true
                }).then(async () => {
                    let obj={
                        id:scope.row.id,
                    }
                    await this.$store.dispatch('deleteTask', obj);
                    if(this.opertionStatus = 10000) {
                        this.$message({
                            message: '删除成功',
                            type: 'success',
                            duration:1500
                        });
                    }
                    this.getTaskList()
                })
            },
            releaseTask (scope,type) {
                let str ='',successMes=''
                if(type == 2) {
                    str = '是否发布任务？'
                    successMes = '发布成功'
                } else {
                    str = '是否停止发布任务？'
                    successMes = '停止发布成功'
                }
                this.$confirm(str, '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true
                }).then(async () => {
                    let obj={
                        id:scope.row.id,
                        status:type
                    }
                    await this.$store.dispatch('updateTask', obj);
                    if(this.opertionStatus = 10000) {
                        this.$message({
                            message: successMes,
                            type: 'success',
                            duration:1500
                        });
                    }
                    this.close()
                })
            }
        },
        computed: {
            ...mapGetters([
                'taskList',
                'taskTotal',
                'opertionStatus'
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
