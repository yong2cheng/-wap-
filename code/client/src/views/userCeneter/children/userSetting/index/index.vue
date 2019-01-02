<template>
    <div>
        <div class="integral_wrapper">
            <div class="new-header">
                <div class="container cl">
                    <img src="../../../../../images/back.png" style="float: left;" @click="$router.back(-1)"/>
                    <div class="container_detail">设置</div>
                </div>
            </div>
            <div class="wrapper_count setting_count" >
                <ul>
                    <li @click="getPath('/userSetting/harvestAddress/index')"><span>我的收货地址</span><i></i></li>
                    <li @click="getPath('/userSetting/myBankCard/index')"><span>我的银行卡</span><i></i></li>
                    <li @click="getPath('/userSetting/alipay/index')"><span>绑定支付宝</span><i></i></li>
                    <li @click="getPath('/userSetting/updataPassword/index')"><span>修改密码</span><i></i></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    export default {
        data () {
            return {
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
            getPath(path) {
                this.$router.push({ 
                    path: path, 
                })
            },
        }
    }
</script>
<style lang="css" scoped>
.setting_count ul li {
    float: left;
    width:100%;
    height: 50px;
    line-height:50px;
    border-bottom: 1px solid #e9e9e9;
    background: #fff
}
.setting_count ul li span {
    margin-left: 10px
}
.setting_count ul li i {
    float:right;
    width: 10px;
    height: 16px;
    background: url(../../../../../images/ard.png) no-repeat;
    background-size: 10px 16px;
    margin: 17px 10px;
}
</style>