<template>
    <div class="text_scroll_wrap" id="text_scroll">
        <div class="notice_tip">
            <p class="notice_wrapper" style="margin:0;"><img class="notice_mark" src="../../images/homeMenu/icon11.png" />公告</p>
        </div>
        <div id="box">
            <div id="marquee" style="height:100%">{{text}}</div>
        </div>
        <div id="node">{{text}}</div>
    </div>
</template>
<script>
export default {
    props: ['lists'], // 父组件传入数据， 数组形式 [ ""，""]
    data () {
        return {
            text: '' // 数组文字转化后的字符串
        }
    },
    methods: {
        move () {
            // 获取文字text 的计算后宽度  （由于overflow的存在，直接获取不到，需要独立的node计算）
            let width = document.getElementById('node').getBoundingClientRect().width
            let width1 = document.getElementById('text_scroll').getBoundingClientRect().width
            let box = document.getElementById('box')
            let distance = 0 // 位移距离
            let that = this
            // 设置位移
            setInterval(function () {
                distance = distance - 1
                // 如果位移超过文字宽度，则回到起点
                if (-distance >= width) {
                distance =width1
                }
                box.style.transform = 'translateX(' + distance + 'px)'
            }, 30)
        }
    },
    // 把父组件传入的arr转化成字符串
    mounted: function () {
        // for (let i = 0; i < this.lists.length; i++) {
            // this.text += ' ' + this.lists[i]
            // this.text += ' ' + this.lists
        // }
        console.log(this.text)
    },
    watch: {
        lists:{
            handler(news) {
                this.text += ' ' + this.lists
            },
            deep:true
        }
    },
    // 更新的时候运动
    updated: function () {
        this.move()
    }
}
</script>
<style scoped>
  /*样式的话可以写*/
.text_scroll_wrap {
    overflow: hidden;
    float: left;
    width:calc(100% - 1.22rem);
    margin-left: 0.3rem;
}
.text_scroll_wrap #box {
    width: 1000000%;
    height:0.6rem;
    line-height: 0.6rem;
}
.text_scroll_wrap #node {
    position: absolute;
    z-index: -99;
    top: -99px;
}
.text_scroll_wrap .notice_tip{
    /* float: left; */
    width:calc(100% - 1.22rem);
    padding-top: 0.2rem;
    /* padding-left: 0.3rem; */
}
.text_scroll_wrap  .notice_tip .notice_wrapper {
    line-height: 0.4rem;
    font-size: .28rem;
}
.text_scroll_wrap .notice_tip .notice_wrapper .notice_mark{
    margin: 0 0.05rem 0.05rem;
    width: 0.15rem;
    height: 0.15rem;
}
.text_scroll_wrap .notice_tip .notice_content {
    line-height: 0.4rem;
    font-size: .28rem;
    color: #93969d;
}
</style>
