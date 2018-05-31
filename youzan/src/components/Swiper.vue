<template>
    <div class="index-swiper swiper-container">
        <div class="swiper-wrapper">
            <div class="swp-page swiper-slide" v-for="(item, index) in slideList" :key="index">
                <a class="js-no-follow" :href="item.clickUrl">
                    <img class="goods-main-photo fadeIn" :src="item.image">
                </a>
            </div>
        </div>
        <div v-if="swiperOptions.pagination" class="swiper-pagination"></div>
    </div>
</template>

<script>
    import Swiper from "swiper"
    import "swiper/dist/css/swiper.min.css"
    export default {
        props: ["slideList", "swiperOptions", "domSelector"],
        data() {
            return {
                swiperInstance: null,
            }
        },
        mounted() {
        },
        watch: {
            slideList: function(newValue) {
                if (newValue) {
                    this.$nextTick(function() {
                        this.swiperInstance = new Swiper (this.domSelector, this.swiperOptions)
                    })
                }
            }
        },
    }
</script>

<style>
    .swiper-slide img {
        width: 100%;
        height: 100%;
    }
    /*.swp .swiper-wrapper,*/
    /*.swp .swp-page {*/
        /*overflow: hidden*/
    /*}*/

    /*.swp .swp-page {*/
        /*display: none;*/
        /*width: 100%;*/
        /*height: 100%;*/
        /*text-align: center*/
    /*}*/

    /*.swp .swp-page img {*/
        /*max-width: 100%;*/
        /*max-height: 100%*/
    /*}*/

    /*.swp .swp-page:first-child {*/
        /*display: block*/
    /*}*/
    /*.custom-image-swiper a[href="javascript:;"],*/
    /*.custom-image-swiper a[href="javascript:void(0);"] {*/
        /*cursor: default*/
    /*}*/

    /*.custom-image-swiper .swp-page {*/
        /*position: absolute;*/
        /*top: 0;*/
        /*left: 0;*/
        /*text-align: center*/
    /*}*/

    /*.custom-image-swiper .swp-page img {*/
        /*max-width: 100%;*/
        /*max-height: 100%;*/
        /*width: 100%*/
    /*}*/

    /*.custom-image-swiper .swiper-slide a {*/
        /*display: block;*/
        /*position: relative;*/
        /*text-align: center;*/
        /*width: 320px*/
    /*}*/

    /*.custom-image-swiper .swiper-slide a img {*/
        /*max-width: 100%;*/
        /*height: auto*/
    /*}*/

    /*.custom-image-swiper-single .swiper-wrapper {*/
        /*position: relative*/
    /*}*/

    /*.custom-image-swiper-single .swiper-wrapper:after {*/
        /*content: " ";*/
        /*display: block;*/
        /*padding-top: 0*/
    /*}*/

    /*.custom-image-swiper-single .swp-page {*/
        /*position: static*/
    /*}*/

    /*.custom-image-swiper-single .swiper-slide {*/
        /*float: none*/
    /*}*/
</style>