<template>
        <div class="container " style="">
            <div v-cloak v-if="addressList && addressList.length > 0" class="block-list address-list section section-first js-no-webview-block">
                <!--  -->
                <a :class="{'address-item-default': index === activeIndex}" v-for="(item,index) in addressList" :key="item.myid" class="block-item js-address-item address-item">
                    <span @click="changeDefaultAddress(index)" class="editAddress-check"></span>
                    <div class="address-title">{{ item.name }} {{ item.phone }}</div>
                    <p>{{ item.provinceStr + item.cityStr + item.districtStr + item.address }}</p>
                    <span @click="toEdit(item,index)" class="editAddress-btn">修改</span>
                </a>
            </div>
            <div class="block stick-bottom-row center">
                <router-link class="btn btn-blue js-no-webview-block js-add-address-btn"
                             :to="{name: 'addressForm', query: {type: 'add'},}">
                    新增地址
                </router-link>
                <router-link class="btn-blue btn btn-red js-no-webview-block js-add-address-btn"
                             to="/index-1">
                    返回
                </router-link>
            </div>
        </div>
</template>
<script>
    import leanCloudTool from "js/api.js";
    import { mapState } from 'vuex'
    export default {
        methods: {
            toEdit(item, index) {
                this.$router.push({name: "addressForm", query: {
                    type: "edit",
                    instance: item,
                    index,
                }})
            },
            changeDefaultAddress(index) {
                this.$store.dispatch("upDateDefaultAddress", index)
            }
        },
        computed: {
            ...mapState({
                addressList: 'lists',
                activeIndex: "activeIndex",
            })
        },

        created() {
            if (!this.addressList) {
                this.$store.dispatch("getLists")
            }
        }
    }
</script>
<style>
    @import "address_base.css";
    @import "address.css";
</style>