<template>
<article>
    <!-- <div class="search">
        <el-input placeholder="请输入任务名称" prefix-icon="el-icon-search" v-model="keyword" @keydown.enter.native="getTaskList" style="width:150px"></el-input>
        <el-select v-model="taskType" placeholder="请选择任务类型" class="block" style="width:120px">
            <el-option v-for="(item,index) in taskTypeArr" :key="index" :label="item.name" :value="item.taskType"></el-option>
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
        <el-button type="primary" icon="el-icon-search" :loading="loading" @click="getTaskList">搜索</el-button>
        <el-button type="primary" style="float: right;"><router-link :to="{path:'/task/add'}">添加</router-link></el-button>
    </div> -->
    <div style="height:calc(100vh - 220px);">
        <el-table ref="multipleTable" :data="noticelist" tooltip-effect="dark" stripe border height="100%">
            <el-table-column type="index" width="55" align="center" header-align="center" :index="increment" label="序号"></el-table-column>
    
            <el-table-column show-overflow-tooltip v-if="!item.hidden" v-for="(item, index) in headerOptions" :key="index" :label="item.label" :prop="item.prop" :header-align="item.headerAlign" :align="item.align" :sortable="item.sort"  :min-width="item.minWidth || 150">
                <template slot-scope="scope">
                    <div v-if="scope.column.property == 'taskPic'"><img :src="'http://vip.31d461.cn:8080/api/'+scope.row[scope.column.property]" style="width:80px;height:40px" @click="clickImg($event)"/></div>
                    <!-- <div v-else-if="scope.column.property == 'source'">{{scope.row[scope.column.property] === 1?'原创':scope.row[scope.column.property] === 2?'转载':'翻译'}}</div> -->
                    <!-- <div v-else-if="scope.column.property == 'releaseTime'">{{scope.row[scope.column.property] | parseTime('{y}-{m}-{d}')}}</div> -->
                    <div v-else>{{scope.row[scope.column.property] || '无'}}</div>
                </template>
            </el-table-column>
            <el-table-column label="操作" header-align="center" align="center" width="135">
                <template slot-scope="scope">
                <el-button size="mini" @click="edit(scope)">编辑</el-button>
                <!-- <el-button size="mini" type="danger" @click="del(scope)">删除</el-button> -->
                </template>
            </el-table-column>
        </el-table>
    </div>
    <el-pagination
        class="pagination"
        layout="total"
        :total="noticetotal">
    </el-pagination>
    <!-- <Detail v-if="detailShow" :info="vipInfo" @close="close(1)"></Detail> -->
    <EditComponent v-if="editShow" :info="vipInfo" @close="close(2)"></EditComponent>
</article>
</template>
<script>
    import { mapGetters } from 'vuex'
    import EditComponent from './edit'
    export default {
        components: {
            EditComponent
        },
        data() {
            return {
                showImg:false,
                detailShow:false,
                editShow: false,
                blogInfo: {},
                loading: false,
                headerOptions: [
                    {
                        label: '_id',
                        prop: '_id',
                        hidden: true,
                        headerAlign: 'center',
                        align: 'center',
                    },
                    {
                        label: '任务类型',
                        prop: 'taskTypeName',
                        hidden: true,
                        headerAlign: 'center',
                        align: 'center',
                    },
                    {
                        label: '公告名称',
                        prop: 'content',
                        hidden: false,
                        headerAlign: 'center',
                        align: 'center',
                        minWidth: 100,
                    },
                    {
                        label: '发布时间',
                        prop: 'createDate',
                        hidden: false,
                        headerAlign: 'center',
                        align: 'center',
                        minWidth: 100,
                    },
                    {
                        label: '三级奖励积分',
                        prop: 'thirdLevelReward',
                        hidden: true,
                        headerAlign: 'center',
                        align: 'center',
                    },
                ],
                vipInfo:''
            }
        },
        mounted () {
            this.getNotice()
        },

        methods: {
            increment (index) {
                return index+1
            },
            close (type) {
                if(type == 1) {
                    this.detailShow = false;
                } else {
                    this.editShow = false
                    this.getNotice()
                }
            },
            async getNotice () {
                this.loading = true;
                try {
                    await this.$store.dispatch('getNotice')
                    this.loading = false;
                }catch(e) {
                    this.loading = false;
                }
            },
            getDetail (scope) {
                this.detailShow = true;
                this.vipInfo = scope.row
            },
            edit (scope) {
                this.editShow = true;
                this.vipInfo = scope.row
            },
        },
        computed: {
            ...mapGetters([
                'noticelist',
                'noticetotal'
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
