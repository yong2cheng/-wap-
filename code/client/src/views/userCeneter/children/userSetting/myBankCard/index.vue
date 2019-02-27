<template>
    <div>
        <div class="wrapper">
            <div class="new-header">
                <div class="container cl">
                    <img src="../../../../../images/back.png" style="float: left;" @click="$router.back(-1)"/>
                    <div class="container_detail">
                        我的银行卡
                        <span class="add_address" @click="getPath('/userSetting/myBankCard/add')" v-if="!dataList">新增银行卡</span>
                    </div>
                </div>
            </div>
            <div class="wrapper_count" >
                <ul class="cf" v-if="dataList">
                    <li class="address_li">
                        <div class="address_detail"><h4>{{dataList.realName}}</h4><em>{{dataList.subBranchName}}<br/>{{dataList.bankCard}}</em></div>
                        <!-- <p class="address_name">{{dataList.mergeAddress}}</p> -->
                    </li>
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
            this.getUserBank()
        },
        computed: {
            ...mapGetters([
                'dataList',
            ])
        },
        methods: {
            getPath(path) {
                this.$router.push({ 
                    path: path, 
                })
            },
            async getUserBank() {
                await this.$store.dispatch('getUserBank');
            }
        }
    }
</script>
<style lang="css" scoped>
    .add_address {
        float: right;
        /* font-size: 0.28rem */
    }

    .address_li {
        background: #fff;
        padding:10px 0;
    }
    /* .address_detail {

    } */

    .address_detail h4{
        /* font-size: 0.35rem; */
        margin:0 15px 0 10px;
        float: left;
        line-height: 45px;
    }

    .address_detail em{
        /* font-size: 0.28rem */
    }
    .address_name{
        font-size: 0.32rem;
        margin-left: 10px;
    }
</style>