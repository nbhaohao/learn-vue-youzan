import "css/common.css"
import "./search.css"

import Vue from "vue"
import leanCloudTool from "js/api.js"
import qs from "qs"
import mixin from "js/mixin.js"
import { InfiniteScroll } from 'mint-ui';
import Velocity from 'velocity-animate'

Vue.use(InfiniteScroll);

new Vue({
    el: "#app",
    data: {
        searchWord: "",
        isJumpToBtnShow: false,
        goodList: {
            lists: null,
            loading: false,
            isUserScroll: false,
            isInitSuccess: false,
            isListDone: false,
            pageNum: 0,
        },
    },
    methods: {
        loadMore() {
            if (!this.goodList.isUserScroll || !this.goodList.isInitSuccess || this.goodList.isListDone) {return}
            this.goodList.loading = true
            setTimeout(() => {
                this.getGoodList()
            }, 200);
        },
        listenToWindowScroll() {
            window.ontouchmove = (e) => {
                this.goodList.isUserScroll = true
                window.ontouchmove = null
            }
        },
        getGoodList(type) {
            leanCloudTool("searchList").then(res => {
                let i = 0
                if (!this.goodList.lists) {this.goodList.lists = []}
                let eventId = setInterval(() => {
                    if (!res[i]) {
                        this.goodList.loading = false
                        if (type === "first") {
                            this.goodList.isInitSuccess = true
                        }
                        this.goodList.pageNum += 1
                        if (this.goodList.pageNum === 6) {
                            this.goodList.isListDone = true
                        }
                        clearInterval(eventId)
                        return
                    } else {
                        this.goodList.lists.push(res[i])
                        i++
                    }
                }, 200)
            })
        },
        move() {
            this.isJumpToBtnShow = document.documentElement.scrollTop > 100
        },
        goToTop() {
            Velocity(document.body, "scroll", {duration: 300})
            this.isJumpToBtnShow = false
        }
    },
    created() {
        this.getGoodList("first")
        this.searchWord = qs.parse(window.location.href.split("?")[1]).keyword
        this.listenToWindowScroll()
    },
    mixins: [mixin],
})