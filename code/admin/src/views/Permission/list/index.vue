<template>
<article>
    <div class="search">
        <el-input placeholder="请输入用户名" prefix-icon="el-icon-search" v-model="keyword" @keydown.enter.native="getUserList" style="width:150px"></el-input>
        <el-input placeholder="请输入真实姓名" prefix-icon="el-icon-search" v-model="keywordRealName" @keydown.enter.native="getUserList" style="width:150px"></el-input>
        <el-date-picker
            v-model="dateValue"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd"
            >
            </el-date-picker>
        <el-button type="primary" icon="el-icon-search" :loading="loading" @click="getUserList">搜索</el-button>
    </div>
    <div style="height:calc(100vh - 220px);">
        <el-table ref="multipleTable" :data="userList" tooltip-effect="dark" stripe border height="100%">
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
        :total="userTotal">
    </el-pagination>
    <EditComponent v-if="editShow" :info="userInfo" @close="close"></EditComponent>

</article>
</template>
<script>
    import { mapGetters } from 'vuex'
    import EditComponent from '../edit/index'
    export default {
        components: {
            EditComponent
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
                        width: ''                 
                    },
                    {
                        label: '会员类型名称',
                        prop: 'vipTypeName',
                        hidden: false,
                        headerAlign: 'center',
                        align: 'center',
                        width: '',
                        sort: true                  
                    },
                    {
                        label: '用户层级',
                        prop: 'userLevel',
                        hidden: false,
                        headerAlign: 'center',
                        align: 'center',
                        width: '',
                        sort: true                  
                    },
                    {
                        label: '上级姓名',
                        prop: 'parentRealName',
                        hidden: false,
                        headerAlign: 'center',
                        align: 'center',
                        width: '',
                        sort: true                  
                    },
                    {
                        label: '上级手机号',
                        prop: 'parentUsername',
                        hidden: false,
                        headerAlign: 'center',
                        align: 'center',
                        width: '',
                        sort: true                  
                    },
                    {
                        label: '注册时间',
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
            this.getUserList()
        },

        methods: {
            increment (index) {
                return index+1+((this.pageindex-1)*this.pagesize)
            },
            close () {
                this.editShow = false;
                this.getUserList()
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
                        pageindex: this.pageindex,
                        pagesize: this.pagesize,
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
                    await this.$store.dispatch('getUserList', obj)
                    this.loading = false;
                }catch(e) {
                    this.loading = false;
                }
            },
        },
        computed: {
            ...mapGetters([
                'userList',
                'userTotal'
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
