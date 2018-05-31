import "css/common.css"
import "./category.css"

import Vue from "vue";
import leanCloudTool from "js/api.js";

import footNav from "components/FootNav.vue"
import { Loadmore } from 'mint-ui';
import { Toast } from 'mint-ui';

Vue.component(Loadmore.name, Loadmore);

new Vue({
    el: "#app",
    data: {
        allLoaded: false,
        asideList: null,
        topId: "",
        activeIndex: 0,
        brandList: [],
        categoryList: [],
        hotGoods: [],
        hotKeywords: [],
        hotShop: [],
    },
    components: {
        "foot-nav": footNav,
    },
    computed: {},
    methods: {
        loadTop() {

        },
        loadBottom() {

        },
        bottomPull() {

        },
        getAsideTitleList() {
            leanCloudTool("AsideTitles").then(res => {
                this.asideList = res
            })
        },
        getSubList(id, index) {
            this.topId = id
            this.activeIndex = index
            if (id === "-1") {
                leanCloudTool("RankList").then(res => {
                    let data = res[0]
                    this.hotGoods = JSON.parse(data.hotGoods)
                    this.hotKeywords = JSON.parse(data.hotKeyWords)
                    this.hotShop = JSON.parse(data.hotShop)
                })
            } else {
                leanCloudTool("subTitles").then(res => {
                    let data = res[0]
                    this.brandList = JSON.parse(data.brandList)
                    this.categoryList = JSON.parse(data.categoryList)

                })
            }
        }
    },
    created() {
        this.getAsideTitleList()
        this.getSubList("-1",0)
    }
})