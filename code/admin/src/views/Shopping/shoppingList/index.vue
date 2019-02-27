<template>
<article>
    <div class="search">
        <el-input placeholder="请输入任务名称" prefix-icon="el-icon-search" v-model="keyword" @keydown.enter.native="getGoodsList" style="width:150px"></el-input>
        <el-date-picker
            v-model="dateValue"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd"
            >
        </el-date-picker>
        <el-button type="primary" icon="el-icon-search" :loading="loading" @click="pageindex=1;getGoodsList()">搜索</el-button>
        <el-button type="primary" style="float: right;" @click="getPath('/shopping/add')">添加</el-button>
    </div>
    <div style="height:calc(100vh - 220px);">
        <el-table ref="multipleTable" :data="shoppingList" tooltip-effect="dark" stripe border height="100%">
            <el-table-column type="index" width="55" align="center" header-align="center" :index="increment" label="序号"></el-table-column>
    
            <el-table-column show-overflow-tooltip v-if="!item.hidden" v-for="(item, index) in headerOptions" :key="index" :label="item.label" :prop="item.prop" :header-align="item.headerAlign" :align="item.align" :sortable="item.sort"  :min-width="item.minWidth || 150">
                <template slot-scope="scope">
                    <div v-if="scope.column.property == 'goodsPic'"><img :src="'http://www.sai32m.cn:8080/api/'+scope.row[scope.column.property]" style="width:80px;height:40px" @click="clickImg($event)"/></div>
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
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageindex"
        :page-sizes="size_scoped"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="shoppingTotal">
    </el-pagination>
    <!-- 放大图片 -->
　　<BigImg v-if="showImg" @clickit="viewImg" :imgSrc="imgSrc"></BigImg>
    <!-- <Detail v-if="detailShow" :info="shoppingInfo" @close="close(1)"></Detail> -->
    <EditComponent v-if="editShow" :info="shoppingInfo" @close="close(2)"></EditComponent>
</article>
</template>
<script>
    import { mapGetters } from 'vuex'
    import BigImg from '../../../components/BigImg/index.vue';
    // import Detail from '../detail/index'
    import EditComponent from '../edit/index'
    export default {
        components: {
            BigImg ,EditComponent// ,Detail
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
                        label: '商品名称',
                        prop: 'goodsName',
                        hidden: false,
                        headerAlign: 'center',
                        align: 'center',
                    },
                    {
                        label: '商品积分',
                        prop: 'goodsIntegral',
                        hidden: false,
                        headerAlign: 'center',
                        align: 'center',
                        minWidth: 100,
                    },
                    {
                        label: '商品图片',
                        prop: 'goodsPic',
                        hidden: false,
                        headerAlign: 'center',
                        align: 'center',
                        minWidth: 100,
                    },
                    {
                        label: '创建日期',
                        prop: 'createDate',
                        hidden: false,
                        headerAlign: 'center',
                        align: 'center',
                        minWidth: 100,
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
                shoppingInfo:''
            }
        },
        mounted () {
            this.getGoodsList()
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
                    this.getGoodsList()
                }
            },
            handleSizeChange(val) {
                // console.log(`每页 ${val} 条`);
                this.pagesize = val;
                this.getGoodsList()
            },
            handleCurrentChange(val) {
                // console.log(`当前页: ${val}`);
                this.pageindex = val;
                this.getGoodsList()
            },
            async getGoodsList () {
                let obj = {
                        current: this.pageindex,
                        size: this.pagesize
                }
                if(this.keyword) {
                    obj.goodsName = this.keyword
                }
                if(this.dateValue) {
                    obj.beginDate = this.dateValue[0]
				    obj.endDate = this.dateValue[1]
                }
                try {
                    await this.$store.dispatch('getGoodsList', obj)
                    this.loading = false;
                }catch(e) {
                    this.loading = false;
                }
            },
            getDetail (scope) {
                this.detailShow = true;
                this.shoppingInfo = scope.row
            },
            edit (scope) {
                this.editShow = true;
                this.shoppingInfo = scope.row
                if(this.shoppingInfo.goodsPic) {
                    // if(this.shoppingInfo.taskPicList.length>0) {
                        let picList = []
                        // this.shoppingInfo.taskPicList.forEach(element => {
                            picList.push({
                                url:'http://www.sai32m.cn:8080/api'+this.shoppingInfo.goodsPic
                            })
                        // });
                        this.shoppingInfo.picList = picList
                    // }
                }
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
                    if(this.shoppingStatus = 10000) {
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
                'shoppingList',
                'shoppingTotal',
                'shoppingStatus'
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
