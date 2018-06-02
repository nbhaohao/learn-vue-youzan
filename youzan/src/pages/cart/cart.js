import "./cart_base.css"
import "./cart_trade.css"
import "./cart.css"

import Vue from "vue";
import leanCloudTool from "js/api.js";
import priceMixin from "js/mixin.js"
import Hammer from "hammerjs"

new Vue({
    el: "#app",
    data: {
        cartList: null,
        total: 0,
        selectsList: [],
        status: "view",
        editIndex: 0,
        removeList: [],
        removeNum: 0,
        numReg: /^[1-9]\d*$/,
        isMessageDialogShow: false,
        delInfo: [],
        isEmpty: false,
    },
    components: {},
    computed: {
        allPick: {
            get() {
                if (this.cartList&&this.cartList.length) {
                    return this.cartList.every(item => item.checked)
                }
            },
            set(value) {
                this.cartList.forEach(shop => {
                    shop.checked = value
                    shop.goodList.forEach(good => {
                        good.checked = value
                    })
                })
                for (let i = 0; i < this.cartList.length; i++) {
                    Vue.set(this.cartList, i, this.cartList[i])
                }
            },
        },
        allremovePick: {
            get() {
                if (this.cartList&&this.cartList.length) {
                    return this.cartList.every(item => item.removeChecked)
                }
            },
            set(value) {
                this.cartList.forEach(shop => {
                    shop.removeChecked = value
                    shop.goodList.forEach(good => {
                        good.removeChecked = value
                    })
                })
                for (let i = 0; i < this.cartList.length; i++) {
                    Vue.set(this.cartList, i, this.cartList[i])
                }
            },
        },
        delInfoMessage() {
            let len = this.removeList.length
            if (len === 1 || len === 0) {
                return "确定要删除该件商品吗?"
            } else {
                return `确定要删除这${len}件商品吗?`
            }
        }
    },
    watch:{
        cartList: function() {
            let valueTotal = 0
            let removeTotal = 0
            let payArr = []
            let removeArr = []
            let flag = true
            if (this.cartList&&this.cartList.length) {
                this.cartList.forEach(shop => {
                    if (shop.goodList.length > 0) {flag = false}
                    shop.goodList.forEach(good => {
                        if (good.checked) {
                            valueTotal += good.price * good.number
                            payArr.push(good)
                        }
                        if (good.removeChecked) {
                            removeTotal += 1
                            removeArr.push(good)
                        }
                    })
                })
            }
            this.removeNum = removeTotal
            this.removeList = removeArr
            this.total = valueTotal
            this.selectsList = payArr
            this.isEmpty = flag
        }
    },
    methods: {
        getCartList() {
            leanCloudTool("Cart").then(res => {
                let originList = JSON.parse(res[0].cartList).cartList
                originList.forEach(shop => {
                    shop.checked = false
                    shop.removeChecked = false
                    shop.editing = false
                    shop.statusMessage = "编辑"
                    shop.goodList.forEach(good => {
                        good.checked = false
                        good.removeChecked = false
                        good.touchLeftStart = false
                        good.startX = 0
                        good.endX = 0
                        good.isShow = false
                        good.offset = 0
                    })
                })
                this.cartList = originList
            })
        },
        selectGood(shop, good, shopIndex, goodIndex) {
            let name = this.status === "view" ? 'checked' : 'removeChecked'
            good[name] = !good[name]
            Vue.set(this.cartList, shopIndex, this.cartList[shopIndex])
            shop[name] = shop.goodList.every(good => {
                return good[name]
            })
        },
        selectShop(shop,shopIndex) {
            let name = this.status === "view" ? 'checked' : 'removeChecked'
            shop[name] = !shop[name]
            Vue.set(this.cartList, shopIndex, this.cartList[shopIndex])
            shop.goodList.forEach(good => {
                good[name] = shop[name]
            })
        },
        toggleItemStatus(shop, shopIndex) {
            shop.editing = !shop.editing
            if (shop.editing) {
                this.editIndex = shopIndex
                shop.statusMessage = "完成"
                this.status = "write"
            } else {
                shop.statusMessage = "编辑"
                this.status = "view"
                shop.goodList.forEach(item => {item.offset = 0})
                Vue.set(this.cartList, shopIndex,shop)
            }
        },
        toggleAllPick() {
            let name = this.status === "view" ? 'allPick' : 'allremovePick'
            this[name] = !this[name]
        },
        addNum(good, shopIndex) {
            if (good.number <= 0) {return}
            if (this.numReg.test(String(good.number))) {
                good.number += 1
            } else {
                good.number = 1
            }
            Vue.set(this.cartList, shopIndex, this.cartList[shopIndex])
        },
        minusNum(good, shopIndex) {
            if (good.number && good.number > 1) {
                good.number -= 1
            }
            Vue.set(this.cartList, shopIndex, this.cartList[shopIndex])
        },
        showDelDialog() {
            this.isMessageDialogShow = true
        },
        delSingleItem(shop, shopIndex, good, goodIndex) {
            this.delInfo = []
            this.delInfo.push({shop, shopIndex, good, goodIndex})
            this.showDelDialog()
        },
        confirmDel() {
            let shopIndexObj = {}
            if (this.delInfo.length === 0) {
                this.cartList.forEach((shop, shopIndex) => {
                    shop.goodList.forEach((good, goodIndex) => {
                        if (good.removeChecked) {
                            this.delInfo.push({shop, shopIndex, good, goodIndex})
                            if (shopIndexObj[shopIndex] === undefined) {
                                shopIndexObj[shopIndex] = [goodIndex]
                            } else {
                                shopIndexObj[shopIndex].push(goodIndex)
                            }
                        }
                    })
                })
            } else {
                let shopIndex = this.delInfo[0].shopIndex
                let goodIndex = this.delInfo[0].goodIndex
                shopIndexObj[shopIndex] = [goodIndex]
            }
            for (let i = 0; i < this.delInfo.length; i++) {
                let item = this.delInfo[i].shop
                let newChildArr = []
                let wanToDelArr = shopIndexObj[this.delInfo[i].shopIndex]
                for (let j = 0; j < item.goodList.length; j++) {
                    if (wanToDelArr.includes(j)) {
                        continue
                    } else {
                        newChildArr.push(item.goodList[j])
                    }
                }
                item.goodList = newChildArr
                if (item.goodList.length === 0) {
                    item.editing = false
                    item.statusMessage = "编辑"
                }
                Vue.set(this.cartList, this.delInfo[i].shopIndex, item)
            }
            this.isMessageDialogShow = false
            this.delInfo = []
            this.status = "view"
        }
    },
    created() {
        this.getCartList()
    },
    updated() {
        this.$nextTick(function() {
            let allLis = document.querySelectorAll("[data-shop]")
            for (let i = 0; i < allLis.length; i++) {
                let item = allLis[i]
                let hammer = new Hammer(item)

                let shopIndex = item.dataset.shop
                let goodIndex = item.dataset.good
                let shopItem = this.cartList[shopIndex]
                let goodItem = shopItem.goodList[goodIndex]

                hammer.on('panleft', (e) => {
                    if (!shopItem.editing || goodItem.isShow ) {
                        return
                    }
                    if (!goodItem.touchLeftStart) {
                        goodItem.touchLeftStart = true
                        goodItem.startX = e.center.x
                    }
                    if (!goodItem.isShow) {
                        if (e.center.x - goodItem.startX < -40) {
                            goodItem.isShow = true
                            goodItem.offset = -60
                        } else {
                            goodItem.offset = e.center.x - goodItem.startX
                        }
                    }
                    if (e.isFinal) {
                        goodItem.endX = e.center.x
                        goodItem.touchLeftStart = false
                    }
                    Vue.set(this.cartList, this.cartList[shopIndex], this.cartList[shopIndex])
                })
                hammer.on('panright', (e) => {
                    if (!shopItem.editing || !goodItem.isShow ) {
                        return
                    }
                    goodItem.offset = 0
                    goodItem.isShow = false
                    Vue.set(this.cartList, this.cartList[shopIndex], this.cartList[shopIndex])
                })
            }
        })

    },
    mixins: [priceMixin],
})