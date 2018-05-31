import "css/common.css";
import "./index.css";

import Vue from "vue";
import axsios from "axios";
import url from "js/api.js";
import { Toast } from 'mint-ui';
import { InfiniteScroll } from 'mint-ui';

Vue.use(InfiniteScroll);

import footNav from "components/FootNav.vue"
import topBanner from "components/Swiper.vue"

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
            domSelector: ".js-image-swiper .index-swiper",
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
            axsios.post(url.hotLists, {
                pageNum: this.hotList.pageNum,
                pageSize: 6,
            }).then(res => {
                let i = 0
                let eventId = setInterval(() => {
                    if (!res.data.lists[i]) {
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
                        this.hotList.lists.push(res.data.lists[i])
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
            axsios.post(url.indexBanner, {}).then(res => {
                this.bannerList = res.data.lists
            }, () => {
                Toast({
                    message: '网络异常',
                    position: 'bottom',
                    duration: 2500
                })
            })
        },
    },
    created() {
        this.getNewData("first")
        this.getBannerImg()
        this.listenToWindowScroll()
    }
})
