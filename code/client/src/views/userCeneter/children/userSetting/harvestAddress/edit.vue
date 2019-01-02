<template>
    <div>
        <div class="integral_wrapper">
            <div class="new-header">
                <div class="container cl">
                    <img src="../../../../../images/back.png" style="float: left;" @click="$router.back(-1)"/>
                    <div class="container_detail">编辑收货地址</div>
                </div>
            </div>
            <div class="wrapper_count" >
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
            
        }
    }
</script>
<style lang="css" scoped>

</style>