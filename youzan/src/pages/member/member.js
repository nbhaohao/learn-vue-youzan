import "./components/member_base.css"

import Vue from "vue";
import router from "./router/index.js"
import routerTransitionMixin from "js/routerTransition.js"
import store from "./vuex/index.js"

const app = new Vue({
    el: "#app",
    router,
    store,
    data: {
        transitionName: "",
    },
    mixins: [routerTransitionMixin],
})