<template>
    <div>
        <div class="integral_wrapper">
            <div class="new-header">
                <div class="container cl">
                    <img src="../../../images/back.png" style="float: left;" @click="$router.back(-1)"/>
                    <div class="container_detail">{{$route.query.name}}</div>
                </div>
            </div>
            <div class="notOpen_count wrapper_count" >
                <img src="../../../images/notOpen.jpg"/>
            </div>
            <div class="content_title">
                <p>即将上线&nbsp;&nbsp;&nbsp;敬请期待</p>
                <p>Look forward to the coming online</p>
            </div>
        </div>
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
        },
        mounted () {
        },
        computed: {
            
        },
        methods: {
            
        }
    }
</script>
<style lang="css" scoped>
.notOpen_count img{
    width: 100%;
    height: 200px;
}
.content_title {
    text-align: center;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    font-family: "微软雅黑";
}

.content_title p {
    margin-top: 20px;
}
</style>