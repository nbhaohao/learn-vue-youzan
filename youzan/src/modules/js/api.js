import AV from "leancloud-storage"
import "js/avInit.js"

import { Toast } from 'mint-ui';

export default function(objName){
    var query = new AV.Query(objName)
    return query.find().then(data => {
        return data.map(item => {return {...item.attributes}})
    },() => {
        Toast({
            message: '网络异常',
            position: 'bottom',
            duration: 2500
        })
    })
}
