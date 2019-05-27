<template>
    <div>
        <div class="integral_wrapper">
            <div class="new-header">
                <div class="container cl">
                    <img src="../../../images/back.png" style="float: left;" @click="$router.back(-1)"/>
                    <div class="container_detail">提现记录</div>
                </div>
            </div>
            <div class="integral_count" >
                <!-- <ul class="cf" v-if="taskList.length > 0">
                    <li v-for="(item, index) in taskList" :key="index">
                        <p class="integral_describe cf"><span>{{item.changeTypeName}}</span><em>{{item.changeIntegral>0?'+'+item.changeIntegral:'-'+item.changeIntegral}}积分</em></p>
                        <div style="float:right;color:#ada8a8">
                            <span>{{item.createDate}}</span>
                        </div>
                    </li>
                </ul> -->
                <el-collapse accordion v-if="taskList.length > 0">
                    <el-collapse-item v-for="(item, index) in taskList" :key="index" class="integral_list">
                        <template slot="title">
                            <div>
                                <p class="integral_changeTypeName cf">
                                    <span class="change_Name"> <i>提现金额：</i>{{item.cashOutIntegral}}积分</span>
                                    <!-- <span style="font-size:12px">{{item.createDate}}</span> -->
                                    <em>{{item.statusName}}</em>
                                </p>
                            </div>
                        </template>
                        <div class="integral_describe cf"> <span><i>提现方式：</i>{{item.cashOutWayName}}</span> <span><i>提现时间：</i>{{item.createDate}}</span></div>
                    </el-collapse-item>
                </el-collapse>
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
            }
        },
        components: {
        },
        created () {
            this.integralCashOut()
        },
        mounted () {
            window.addEventListener('scroll', () => {
                let distance = document.documentElement.scrollTop || document.body.scrollTop,
                    winH = document.documentElement.clientHeight || document.body.clientHeight,
                    scrollH = document.documentElement.scrollHeight || document.body.scrollHeight;
                if (distance+winH >= scrollH) {
                    if (this.taskLoadingBol) {
                        this.pageindex ++;
                        this.integralCashOut()
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
            // 得到积分列表
            async integralCashOut() {
                let obj = {
                    current: this.pageindex
                }
                await this.$store.dispatch('integralCashOut',obj)
            },
        }
    }
</script>
<style lang="css" scoped>
.integral_count {
    width: 100%;
    margin-top: 60px;
}
.integral_list .integral_changeTypeName{
    /* height: 30px; */
    /* line-height: 30px */
}
.change_Name{
    float: left;
    /* font-size: 0.35rem; */
    font-weight: bold;
    width:200px;
    /* 让超出的用...实现 */
    text-overflow:ellipsis;
    /* 禁止换行 */
    white-space:nowrap;
    /* 超出的隐藏 */
	overflow:hidden;
    margin: 0 5px
}
.change_Name i {
    color:#333;
}
.integral_count .integral_changeTypeName em {
    float: right;
    color: #409EFF;
    /* font-size: 0.3rem; */
}

.integral_describe {
    margin:0 5px;
    color: #8f8f94;
}
.integral_describe span i {
    color: #333;
}
.integral_describe span:nth-child(1){
    float:left;
}
.integral_describe span:nth-child(2){
    float:right;
}
</style>