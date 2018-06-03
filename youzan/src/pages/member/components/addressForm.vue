<template>
    <div>
        <div class="container " style="min-height: 597px;">
            <div class="section section-first">
                <div class="block form js-form">
                    <input class="js-id" name="id" type="hidden" value="">
                    <div class="block-item" style="border-top:0;">
                        <label>收货人</label>
                        <input type="text" placeholder="请输入姓名" name="user_name" v-model="name" maxlength="20">
                    </div>
                    <div class="block-item">
                        <label>联系电话</label>
                        <input type="tel" placeholder="联系电话" name="tel" v-model="phone" maxlength="11">
                    </div>
                    <div class="block-item">
                        <label>选择地区</label>
                        <div class="select-group">
                            <select class="js-province-selector" v-model.number="provinceValue">
                                <option value="-1">选择省份</option>
                                <option v-for="item in addressList.list" :value="item.value">{{ item.label }}</option>
                            </select>
                            <select class="js-city-selector" v-model.number="cityValue">
                                <option value="-1">选择城市</option>
                                <option v-for="city in cityList" :value="city.value">{{ city.label }}</option>
                            </select>
                            <select class="js-county-selector" name="area_code" data-code="" v-model.number="districtValue">
                                <option value="-1">选择地区</option>
                                <option v-for="district in districtList" :value="district.value">{{ district.label }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="block-item">
                        <label>详细地址</label>
                        <input type="text" placeholder="街道门牌信息" name="address_detail" v-model="address" maxlength="100">
                    </div>
                </div>
            </div>
            <div class="block section js-save block-control-btn" @click="addNewAddress">
                <div class="block-item c-blue center">保存</div>
            </div>
            <div class="block section js-delete block-control-btn" v-show="type === 'edit'">
                <div class="block-item c-red center">删除</div>
            </div>
            <div class="block stick-bottom-row center js-save-default" v-show="type === 'edit'">
                <button class="btn btn-standard js-save-default-btn">设为默认收货地址</button>
            </div>
        </div>
        <a style="display: block;" href="https://pfmarket.youzan.com/market/home?m_alias=3nu78u467kddj" class="ft-copyright"></a>
    </div>
</template>
<script>
    import addressData from "js/address.json"
    import { Toast } from 'mint-ui';
    export default {
        data() {
            return {
                name: "",
                phone: "",
                provinceValue: -1,
                cityValue: -1,
                districtValue: -1,
                address: "",
                myid: "",
                type: "",
                instance: "",
                addressList: addressData,
                cityList: null,
                districtList: null,
                getEditDataDone: false,
            }
        },
        methods: {
            addNewAddress() {
//                if (this.type === "add") {
                this.$router.go(-1)
//                }
            }
        },
        created() {
            this.type = this.$route.query.type
            this.instance = this.$route.query.instance
            if (this.type === "edit") {
                let str = "name phone provinceValue address myid".split(" ")
                str.forEach(item => {
                    this[item] = this.instance[item]
                })
            }
        },
        watch: {
            provinceValue(val) {
                this.cityValue = -1
                if (val === -1) {
                    return
                }
                let list = this.addressList.list
                let index = list.findIndex(item => item.value === val)
                this.cityList = list[index].children
                if (!this.getEditDataDone) {
                    this.cityValue = this.instance.cityValue
                }
            },
            cityValue(val) {
                this.districtValue = -1
                if (val === -1) {
                    return
                }
                let list = this.cityList
                let index = list.findIndex(item => item.value === val)
                this.districtList = list[index].children
                if (!this.getEditDataDone) {
                    this.districtValue = this.instance.districtValue
                    this.getEditDataDone = true
                }
            }
        }
    }
</script>
<style>
    @import "address_base.css";
    @import "address.css";
</style>

