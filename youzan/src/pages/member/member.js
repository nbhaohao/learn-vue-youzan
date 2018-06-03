import "./components/member_base.css"

import Vue from "vue";
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import memberVue from "./components/member.vue"
import addressVue from "./components/address.vue"
import allAddressVue from "./components/all.vue"
import formAddressVue from "./components/addressForm.vue"

import routerTransitionMixin from "js/routerTransition.js"

let routes = [
    {path: "/", redirect: "/index-1"},
    {path: "/index-1", component: memberVue},
    {path: "/address-2", component: addressVue,
    children: [
        {path: "/", redirect: "all-3"},
        {path: "all-3",component: allAddressVue},
        {name: "addressForm" ,path: "form-4",component: formAddressVue,},
    ],},
]

let router = new VueRouter({
    routes
})

const app = new Vue({
    el: "#app",
    router,
    data: {
        transitionName: "",
    },
    mixins: [routerTransitionMixin],
})