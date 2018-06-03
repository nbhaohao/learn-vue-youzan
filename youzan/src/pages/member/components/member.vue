<template>
    <div class="container">
        <div class="content">
            <div class="user-infos">
                <div class="pull-left avatar">
                    <div class="img" style="background-image: url(https://dummyimage.com/60x60/c579f2);"></div>
                </div>
                <div class="pull-left desc">
                    <p>tonyfree</p>
                </div>
            </div>
            <div class="order-related">
                <div class="block block-list list-vertical">
                    <router-link class="block-item link clearfix ico-setting js-login" to="address-2">
                        <p class="title-info c-black font-size-14">收货地址管理</p>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="backBtnWrapper" @click="backToIndex">
            返回
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            backToIndex() {
                window.location.href = 'index.html'
            }
        }
    }

</script>

<style scoped>
    @import "./member_base.css";
    @import "./member.css";
</style>