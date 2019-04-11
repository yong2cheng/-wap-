<template>
    <div>
        <div class="wrapper">
            <div class="new-header">
                <div class="container cl">
                    <img src="../../../../images/back.png" style="float: left;" @click="$router.back(-1)"/>
                    <div class="container_detail">{{$route.query.name}}</div>
                </div>
            </div>
            <div class="wrapper_count" >
                <div class="inivteFriend" style="padding:10px">
                    <img src="../../../../images/join.jpg" alt="" @click="clickTip"/>
                </div>
                <div class="rg_kf">城主加盟</div>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    export default {
        data () {
            return {
                codeImg:'',
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
            clickTip() {
                this.$message({
                    message: '长按图片保存本地并且可以识别二维码!',
                    type: 'info',
                    duration:1500
                });
            },
        }
    }
</script>
<style lang="css" scoped>
.inivteFriend{
    text-align: center;
    padding: 0;
    overflow: hidden;
    position: relative;
    background: #fff;
}

.inivteFriend img{
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    border: 0;
}

.inivteFriend .myMoney {
    position: absolute;
    bottom: 25%;
    left: 0;
    width: 100%;
    font-size: 0.3rem;
}

.inivteFriend .myMoney .money {
    color: red;
    font-size: 14px;
}

.rg_kf {
    width:100%;
    padding-bottom:10px;
    background: #fff;
    text-align: center; 
}
</style>