<template>
<article>
    <div class="search">
        <el-input placeholder="请输入用户名" prefix-icon="el-icon-search" v-model="keyword" @keydown.enter.native="getIntegralLogList" style="width:150px"></el-input>
        <el-input placeholder="请输入真实姓名" prefix-icon="el-icon-search" v-model="keywordRealName" @keydown.enter.native="getIntegralLogList" style="width:150px"></el-input>
        <el-date-picker
            v-model="dateValue"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd"
            >
            </el-date-picker>
        <el-button type="primary" icon="el-icon-search" :loading="loading" @click="getIntegralLogList">搜索</el-button>
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
            <!-- <el-table-column label="操作" header-align="center" align="center" width="250">
                <template slot-scope="scope">
                <el-button size="mini" @click="edit(scope)">编辑</el-button>
                <el-button size="mini" type="danger" @click="del(scope)">删除</el-button>
                </template>
            </el-table-column> -->
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

</article>
</template>
<script>
    import { mapGetters } from 'vuex'
    export default {
        components: {
        },
        data() {
            return {
                dateValue:'',
                keyword: '',
                keywordRealName:'',
                editShow: false,
                userInfo: {},
                loading: false,
                pageindex: 1,
                pagesize: 10,
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
                        label: '变动类型',
                        prop: 'changeTypeName',
                        hidden: false,
                        headerAlign: 'center',
                        align: 'center',
                        width: '',
                        sort: true,
                        minWidth:100                  
                    },
                    {
                        label: '变动积分',
                        prop: 'changeIntegral',
                        hidden: false,
                        headerAlign: 'center',
                        align: 'center',
                        width: '',
                        sort: true,
                        minWidth:80                  
                    },
                    {
                        label: '变动描述',
                        prop: 'changeDescribe',
                        hidden: false,
                        headerAlign: 'center',
                        align: 'center',
                        width: '',
                        sort: true                  
                    },
                    {
                        label: '当前积分',
                        prop: 'currentIntegral',
                        hidden: false,
                        headerAlign: 'center',
                        align: 'center',
                        width: '',
                        sort: true ,
                        minWidth:80                 
                    },
                    {
                        label: '创建时间',
                        prop: 'createDate',
                        hidden: false,
                        headerAlign: 'center',
                        align: 'center',
                        width: '',
                        sort: true                  
                    }
                ],
                multipleSelection: []
            }
        },
        mounted () {
            this.getIntegralLogList()
        },

        methods: {
            increment (index) {
                return index+1+((this.pageindex-1)*this.pagesize)
            },
            handleSizeChange(val) {
                // console.log(`每页 ${val} 条`);
                this.pagesize = val;
                this.getIntegralLogList()
            },
            handleCurrentChange(val) {
                // console.log(`当前页: ${val}`);
                this.pageindex = val;
                this.getIntegralLogList()
            },
            async getIntegralLogList () {
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
                this.loading = true;
                try {
                    await this.$store.dispatch('getIntegralLog', obj)
                    this.loading = false;
                }catch(e) {
                    this.loading = false;
                }
            },
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
