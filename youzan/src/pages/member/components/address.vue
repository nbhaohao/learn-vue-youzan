<template>
    <div class="child">
        <transition :name="transitionName">
            <router-view class="child-view"></router-view>
        </transition>
    </div>
</template>
<script>
    import routerTransitionMixin from "js/routerTransition.js"

    export default {
        data() {
            return {transitionName: "",}
        },
        mixins: [routerTransitionMixin],
    }
</script>
<style scoped>
    @import "address_base.css";
    @import "address.css";
</style>
