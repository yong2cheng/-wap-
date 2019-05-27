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
                    <video-player  class="video-player vjs-custom-skin"
                        ref="videoPlayer"
                        :playsinline="true"
                        :options="playerOptions"
                        @play="onPlayerPlay($event)"
                        @pause="onPlayerPause($event)"
                        @ended="onPlayerEnded($event)"
                        @loadeddata="onPlayerLoadeddata($event)"
                        @waiting="onPlayerWaiting($event)"
                        @playing="onPlayerPlaying($event)"
                        @timeupdate="onPlayerTimeupdate($event)"
                        @canplay="onPlayerCanplay($event)"
                        @canplaythrough="onPlayerCanplaythrough($event)"
                        @ready="playerReadied"
                        @statechanged="playerStateChanged($event)"
                    >
                    </video-player>
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
                playerOptions: {
                    //playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                    autoplay: false, //如果true,浏览器准备好时开始回放。
                    muted: false, // 默认情况下将会消除任何音频。
                    loop: false, // 导致视频一结束就重新开始。
                    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language: 'zh-CN',
                    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: [{
                        type: "",
                        src: "../../../../../../../static/check_product.mp4" //url地址
                    }],
                    poster: "", //你的封面地址
                    width: document.documentElement.clientWidth,
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    //  controlBar: {
                    //   timeDivider: true,
                    //   durationDisplay: true,
                    //   remainingTimeDisplay: false,
                    //   fullscreenToggle: true //全屏按钮
                    //  }
                }
            }
        },
        components: {
        },
        created () {
        },
        mounted () {
            
        },
        computed: {
            // videoPlayer
        },
        methods: {
            // listen event
            onPlayerPlay(player) {
                // console.log('player play!', player)
            },
            onPlayerPause(player) {
                // console.log('player pause!', player)
            },
            onPlayerEnded(player) {
                // console.log('player ended!', player)
            },
            onPlayerLoadeddata(player) {
                // console.log('player Loadeddata!', player)
            },
            onPlayerWaiting(player) {
                // console.log('player Waiting!', player)
            },
            onPlayerPlaying(player) {
                // console.log('player Playing!', player)
            },
            onPlayerTimeupdate(player) {
                // console.log('player Timeupdate!', player.currentTime())
            },
            onPlayerCanplay(player) {
                // console.log('player Canplay!', player)
            },
            onPlayerCanplaythrough(player) {
                // console.log('player Canplaythrough!', player)
            },
            // or listen state event
            playerStateChanged(playerCurrentState) {
                // console.log('player current update state', playerCurrentState)
            },
            // player is ready
            playerReadied(player) {
                // seek to 10s
                console.log('example player 1 readied', player)
                player.currentTime(10)
                // console.log('example 01: the player is readied', player)
            }
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