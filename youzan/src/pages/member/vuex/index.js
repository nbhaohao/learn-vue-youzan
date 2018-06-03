import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)

import leanCloudTool from "js/api.js"

const store = new Vuex.Store({
    state: {
        lists: null,
        activeIndex: 0,
    },
    mutations: {
        init(state, lists) {
            state.lists = lists
        },
        addNewAddress(state, item) {
            state.lists.push(item)
        },
        editAddress(state, item) {
            Vue.set(state.lists, item.index, item)
        },
        delAddress(state, index) {
            state.lists.splice(index, 1)
        },
        upDateDefaultAddress(state, index) {
            state.activeIndex = index
        }
    },
    actions: {
        getLists(context) {
            leanCloudTool("addressList").then(res => {
                context.commit("init", res)
            })
        },
        addNewAddress(context, item) {
            context.commit("addNewAddress", item)
        },
        editAddress(context, item) {
            context.commit("editAddress", item)
        },
        delAddress(context, index) {
            context.commit("delAddress", index)
        },
        upDateDefaultAddress(context, index) {
            context.commit("upDateDefaultAddress", index)
        }
    }
})

export default store