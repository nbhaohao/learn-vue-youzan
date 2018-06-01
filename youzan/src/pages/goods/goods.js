import "./goods.css"
import "./goods_common.css"
import "./goods_custom.css"
import "./goods_mars.css"
import "./goods_sku.css"
import "./goods_base.css"
import "./goods_theme.css"

import Vue from "vue"
import leanCloudTool from "js/api.js";
import { Toast } from 'mint-ui';
import mixin from "js/mixin.js"
import qs from "qs"
import topBanner from "components/Swiper.vue"

let detailTab = ["商品详情", "本店成交"]

new Vue({
    el: "#app",
    data: {
        details:{
            goodHTML: "",
            identification: null,
            imagesArr: null,
            originalPrice: 0,
            postage: "",
            price: 0,
            remain:0,
            sales: 0,
            skuList: null,
            storeName: "",
            title: "",
        },
        detailTab,
        skuType: 1,
        showSku: false,
        dealList:null,
        activeBtnIndex: 0,
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
    methods: {
        getGoodDetail() {
            leanCloudTool("ShopDetail").then(res => {
                let data = res[0]
                for (let key in data) {
                    if (this.details[key] === null) {
                        this.details[key] = JSON.parse(data[key])
                    } else {
                        this.details[key] = data[key]
                    }
                }
            })
        },
        getDealList() {
            leanCloudTool("shopDealRecord").then(res => {
                this.dealList = res
            })
        },
        toggleTabBtn(index) {
            this.activeBtnIndex = index
            if (index === 1) {
                this.getDealList()
            }
        },
        chooseSku(type) {
            this.showSku = true
            this.skuType = type
        },
        hidePop() {
            this.showSku = false
        }
    },
    components: {
        "top-banner": topBanner,
    },
    watch: {
        showSku(value, oldValue) {
            let styValue = value ? "hidden": "auto"
            document.body.style.overflow = styValue
            document.querySelector("html").style.overflow = styValue
        }
    },
    created() {
        this.getGoodDetail()
    },
    mixins: [mixin],
})