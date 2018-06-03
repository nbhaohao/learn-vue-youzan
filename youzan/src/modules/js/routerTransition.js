export default {
    watch: {
        '$route' (to, from) {
            let toArr = to.path.split("-")
            let fromArr = from.path.split("-")
            const toDepth = Number(toArr[toArr.length - 1])
            const fromDepth = Number(fromArr[fromArr.length - 1])
            this.transitionName = toDepth < fromDepth ? 'slide-back' : 'slide-forward'
        }
    }
}