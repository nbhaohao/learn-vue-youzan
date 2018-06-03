import "css/common.css";
import "./index.css";

import Vue from "vue";
import leanCloudTool from "js/api.js";
import { Toast } from 'mint-ui';
import { InfiniteScroll } from 'mint-ui';

Vue.use(InfiniteScroll);



import footNav from "components/FootNav.vue"
import topBanner from "components/Swiper.vue"
import mixin from "js/mixin.js"

new Vue({
    el: "#app",
    data: {
        hotList: {
            lists: [],
            loading: false,
            isUserScroll: false,
            isInitSuccess: false,
            isListDone: false,
            pageNum: 0,
        },
        bannerList: null,
        bannerSwiper: {
            options: {
                direction: 'horizontal',
                loop: true,
                pagination: {
                    el: '.index-swiper .swiper-pagination',
                },
                autoplay: true,
            },
            domSelector: ".index-swiper",
        },
    },
    components: {
        "foot-nav": footNav,
        "top-banner": topBanner,
    },
    methods: {
        loadMore() {
            if (!this.hotList.isUserScroll || !this.hotList.isInitSuccess || this.hotList.isListDone) {return}
            this.hotList.loading = true;
            setTimeout(() => {
                this.getNewData()
            }, 200);
        },
        getNewData(type) {
            leanCloudTool("HotList").then(res => {
                let i = 0
                let eventId = setInterval(() => {
                    if (!res[i]) {
                        this.hotList.loading = false
                        if (type === "first") {
                            this.hotList.isInitSuccess = true
                        }
                        this.hotList.pageNum += 1
                        if (this.hotList.pageNum === 6) {
                            this.hotList.isListDone = true
                        }
                        clearInterval(eventId)
                        return
                    } else {
                        this.hotList.lists.push(res[i])
                        i++
                    }
                }, 200)
            }, () => {
                Toast({
                    message: '网络异常',
                    position: 'bottom',
                    duration: 2500
                })
            })
        },
        listenToWindowScroll() {
            window.ontouchmove = (e) => {
                this.hotList.isUserScroll = true
                window.ontouchmove = null
            }

        },
        getBannerImg() {
            leanCloudTool("Banner").then(res => {
                this.bannerList = res
            })
        },
    },
    created() {
        this.getNewData("first")
        this.getBannerImg()
        this.listenToWindowScroll()
    },
    mixins: [mixin],
})
