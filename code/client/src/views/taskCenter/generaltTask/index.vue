<template>
    <div>
        <div class="task_generalt_wrapper">
            <div class="new-header">
                <div class="container cl">
                    <img src="../../../images/back.png" style="float: left;" @click="$router.back(-1)"/>
                    <div class="input-group">
                        <input type="text" placeholder="请输入任务关键词" v-model="keyword">
                        <img class="search-btn" src="../../../images/search.png" @click="pageindex=1;generaltTaskList()">
                    </div>
                </div>
            </div>
            <div class="task_generalt_count" >
                <ul class="cf" v-if="taskList.length > 0">
                    <li v-for="(item, index) in taskList" :key="index" @click="getTaskDetail(item)">
                        <p>
                            <span>{{item.taskName}}</span>
                            <em>{{item.taskReward}}积分</em>
                        </p>
                        <button :class="{color_green:item.userTaskRelationStatus == 0 || item.userTaskRelationStatus == -2,color_red:item.userTaskRelationStatus != 0 && item.userTaskRelationStatus!= -2}" @click.stop="applyTask(item)" class="commom_button">{{item.userTaskRelationStatusName}}</button>
                        <!-- <button class="color_red" v-else>{{item.userTaskRelationStatusName}}</button> -->
                    </li>
                </ul>
                <NoneData v-else></NoneData>
            </div>
        </div>
        <Loading v-show="taskLoadingMore"></Loading>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    export default {
        data () {
            return {
                pageindex:1,
                keyword:'',
                status:true,
            }
        },
        components: {
        },
        created () {
            this.generaltTaskList()
        },
        mounted () {
            window.addEventListener('scroll', () => {
                let distance = document.documentElement.scrollTop || document.body.scrollTop,
                    winH = document.documentElement.clientHeight || document.body.clientHeight,
                    scrollH = document.documentElement.scrollHeight || document.body.scrollHeight;
                if (distance+winH >= scrollH) {
                    if (this.taskLoadingBol) {
                        this.pageindex ++;
                        this.generaltTaskList()
                    }
                }
            })
        },
        computed: {
            ...mapGetters([
                'taskList',
                'taskLoadingMore',
                'taskLoadingBol'
            ])
        },
        methods: {
            // 得到任务列表
            async generaltTaskList() {
                let obj = {
                    taskType: this.$route.query.taskType,
                    current: this.pageindex
                }
                if(this.keyword) {
                    obj.taskName = this.keyword
                }
                await this.$store.dispatch('generaltTask',obj)
            },

            // 申请任务
            async applyTask(item) {
                if(item.userTaskRelationStatus === 0) {
                    await this.$store.dispatch('applyTask',{
                        taskId:item.id
                    })
                    item.userTaskRelationStatus = 1
                    item.userTaskRelationStatusName = '已申请'
                }
                if(item.userTaskRelationStatus === -2) {
                    this.$router.push({ 
                    name: 'becomeVip'
                })
                }
            },

            // 任务详情
            getTaskDetail(data) {
                this.$router.push({ 
                    name: 'taskDetail', 
                    query: data
                })
            }
        }
    }
</script>
<style lang="css" scoped>
.new-header {
    background: #FE4B1C;
    height: 60px;
    background-size: cover;
    overflow: hidden;
    box-sizing: border-box;
    padding-top: 15px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    padding-top: 12px;
}
.container {
    width: 96%;
    margin: 0 auto;
    padding: 0;
}
.input-group {
    width: 65%;
    position: relative;
    float: left;
    border-collapse: separate;
    margin-left: 0.5rem;
}
.input-group input {
    background: #fff;
    border-radius: 15px;
    border: none;
    height: 36px;
    width: 100%;
    text-indent: 20px;
    font-size: 14px;
}
.input-group img {
    position: absolute;
    top: 8px;
    right: 12px;
    cursor: pointer;
    width: 20px;
    height: 20px;
}
.task_generalt_count {
    width: 100%;
    margin-top: 60px;
}
.task_generalt_count ul li{
    background: #fff;
    float: left;
    width:100%;
    height: 70px;
    padding: 0 2%;
    box-sizing: border-box;
    border-bottom: 1px solid #e9e9e9;
}
.task_generalt_count ul li p{
    float: left;
    width:calc(96% - 80px);
    margin-top: 12px;
}
.task_generalt_count ul li p span{
    display: block;
    font-size: 0.35rem;
    font-weight: bold;
    /* 让超出的用...实现 */
    text-overflow:ellipsis;
    /* 禁止换行 */
    white-space:nowrap;
    /* 超出的隐藏 */
	overflow:hidden;
}
.task_generalt_count .color_green{
    float: right;
    color: #7caf0f;
}
.task_generalt_count .color_red{
    float: right;
    color: #e63512;
    background:#e9e9e9
}
</style>