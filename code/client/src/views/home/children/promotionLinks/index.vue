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
                <div class="inivteFriend">
                    <img src="../../../../images/friends.png" alt=""/>
                    <div class="myMoney">
                        <p>扫码注册赚奖励</p>
                        <!--<p>累计邀请返利</p>
                        <p><span class="money">0</span>元</p> -->
                    </div>
                </div>
                <div class="inivteFriend"><img :src="codeImg" alt=""/></div>
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
            this.codeImg= "http://vip.omx65.cn:8080/api/qrCode"
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
</style>