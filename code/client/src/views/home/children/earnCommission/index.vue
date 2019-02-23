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
                    <img src="../../../../images/commission.jpg" alt=""/>
                </div>
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