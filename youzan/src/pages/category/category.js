import "css/common.css"
import "./category.css"

import Vue from "vue";
import axsios from "axios";
import url from "js/api.js";

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
            axsios.post(url.asideTitleList, {}).then(res => {
                this.asideList = res.data.list
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
    }
})