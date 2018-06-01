let mixin = {
    filters: {
        floatnum(value) {
            let strValue = String(value)
            if (strValue.indexOf(".") === -1) {
                return strValue + ".00"
            }
            else if (strValue.split(".")[1].length === 1) {
                return strValue + "0"
            }
            else {
                return strValue
            }
        }
    }
}

export default mixin