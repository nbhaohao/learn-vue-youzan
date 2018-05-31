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
        topId: "-1",
        activeIndex: 0,
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
            }, () => {
                Toast({
                    message: '网络异常',
                    position: 'bottom',
                    duration: 2500
                })
            })
        },
        getSubList(id, index) {
            this.topId = id
            this.activeIndex = index
        }
    },
    created() {
        this.getAsideTitleList()
        // leanCloudTool("subTitles").then(res => {
        //     let data = res[0]
        //     console.log("brand", JSON.parse(data.brandList))
        //     console.log("categoryList", JSON.parse(data.categoryList))
        //
        // }, () => {
        //     Toast({
        //         message: '网络异常',
        //         position: 'bottom',
        //         duration: 2500
        //     })
        // })
    }
})