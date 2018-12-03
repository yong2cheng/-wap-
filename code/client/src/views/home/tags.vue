<template>
    <div class="tags-wrapper">
        <ul class="cf">
            <li v-for="tag in blogTypes"><Tag :text="tag.name" :path="'/blog/'+tag.name"></Tag></li>
        </ul>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    export default {
        data () {
            return {

            }
        },
        methods: {

        },
        computed: {
            ...mapGetters([
                'blogTypes'
            ])
        }
    }
</script>
<style lang="less" scoped>
    .tags-wrapper {
        max-width: 7rem;
        margin: 20px 50PX;
    }
    .tags-wrapper .tag-wrapper {
        font-size: 16px;
        height: 30px;
        line-height: 30px;
        &:after {
            width: 6px;
            height: 6px;
            top: 12px;
            left: 2px;
        }
    }
    li {
        float: left;
        vertical-align: middle;
    }
</style>