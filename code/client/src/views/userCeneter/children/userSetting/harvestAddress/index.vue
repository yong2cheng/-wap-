<template>
    <div>
        <div class="wrapper">
            <div class="new-header">
                <div class="container cl">
                    <img src="../../../../../images/back.png" style="float: left;" @click="$router.back(-1)"/>
                    <div class="container_detail">
                        我的收货地址
                        <span class="add_address" @click="getPath('/userSetting/harvestAddress/add')" v-if="!dataList">新增收货地址</span>
                    </div>
                </div>
            </div>
            <div class="wrapper_count" >
                <ul class="cf" v-if="dataList">
                    <li class="address_li">
                        <h4 class="address_detail"><span>{{dataList.receiver}}</span><em>{{dataList.telphone}}</em></h4>
                        <p class="address_name">{{dataList.mergeAddress}}</p>
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
            this.getAddress()
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
            async getAddress() {
                await this.$store.dispatch('getAddress');
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
    .address_detail {

    }

    .address_detail span{
        /* font-size: 0.35rem; */
        margin:0 15px 0 10px
    }

    .address_detail em{
        color: #8f8f94;
        /* font-size: 0.28rem */
    }
    .address_name{
        /* font-size: 0.32rem; */
        margin-left: 10px;
    }
</style>