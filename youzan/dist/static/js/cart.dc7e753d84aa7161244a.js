webpackJsonp([5],{"0C+S":function(t,e){},"34+y":function(t,e){},NW8W:function(t,e){},TFhR:function(t,e,i){"use strict";i("34+y");var s=i("X+yh"),n=i.n(s),o=i("Dd8w"),c=i.n(o),r=i("JnRc"),a=i.n(r);a.a.init({appId:"IOdBWAtbQXIu491P7ldb0gB6-gzGzoHsz",appKey:"qlHMaucWHOv4mW5yejNzJf6V"});e.a=function(t){return new a.a.Query(t).find().then(function(t){return t.map(function(t){return c()({},t.attributes)})},function(){n()({message:"网络异常",position:"bottom",duration:2500})})}},"U/rD":function(t,e,i){"use strict";var s={filters:{floatnum:function(t){var e=String(t);return-1===e.indexOf(".")?e+".00":1===e.split(".")[1].length?e+"0":e}}};e.a=s},eC21:function(t,e){},gWPi:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("NW8W"),n=(i.n(s),i("0C+S")),o=(i.n(n),i("eC21")),c=(i.n(o),i("7+uW")),r=i("TFhR"),a=i("U/rD"),h=i("rxKx"),u=i.n(h);new c.default({el:"#app",data:{cartList:null,total:0,selectsList:[],status:"view",editIndex:0,removeList:[],removeNum:0,numReg:/^[1-9]\d*$/,isMessageDialogShow:!1,delInfo:[],isEmpty:!1},components:{},computed:{allPick:{get:function(){if(this.cartList&&this.cartList.length)return this.cartList.every(function(t){return t.checked})},set:function(t){this.cartList.forEach(function(e){e.checked=t,e.goodList.forEach(function(e){e.checked=t})});for(var e=0;e<this.cartList.length;e++)c.default.set(this.cartList,e,this.cartList[e])}},allremovePick:{get:function(){if(this.cartList&&this.cartList.length)return this.cartList.every(function(t){return t.removeChecked})},set:function(t){this.cartList.forEach(function(e){e.removeChecked=t,e.goodList.forEach(function(e){e.removeChecked=t})});for(var e=0;e<this.cartList.length;e++)c.default.set(this.cartList,e,this.cartList[e])}},delInfoMessage:function(){var t=this.removeList.length;return 1===t||0===t?"确定要删除该件商品吗?":"确定要删除这"+t+"件商品吗?"}},watch:{cartList:function(){var t=0,e=0,i=[],s=[],n=!0;this.cartList&&this.cartList.length&&this.cartList.forEach(function(o){o.goodList.length>0&&(n=!1),o.goodList.forEach(function(n){n.checked&&(t+=n.price*n.number,i.push(n)),n.removeChecked&&(e+=1,s.push(n))})}),this.removeNum=e,this.removeList=s,this.total=t,this.selectsList=i,this.isEmpty=n}},methods:{getCartList:function(){var t=this;Object(r.a)("Cart").then(function(e){var i=JSON.parse(e[0].cartList).cartList;i.forEach(function(t){t.checked=!1,t.removeChecked=!1,t.editing=!1,t.statusMessage="编辑",t.goodList.forEach(function(t){t.checked=!1,t.removeChecked=!1,t.touchLeftStart=!1,t.startX=0,t.endX=0,t.isShow=!1,t.offset=0})}),t.cartList=i})},selectGood:function(t,e,i,s){var n="view"===this.status?"checked":"removeChecked";e[n]=!e[n],c.default.set(this.cartList,i,this.cartList[i]),t[n]=t.goodList.every(function(t){return t[n]})},selectShop:function(t,e){var i="view"===this.status?"checked":"removeChecked";t[i]=!t[i],c.default.set(this.cartList,e,this.cartList[e]),t.goodList.forEach(function(e){e[i]=t[i]})},toggleItemStatus:function(t,e){t.editing=!t.editing,t.editing?(this.editIndex=e,t.statusMessage="完成",this.status="write"):(t.statusMessage="编辑",this.status="view",t.goodList.forEach(function(t){t.offset=0}),c.default.set(this.cartList,e,t))},toggleAllPick:function(){var t="view"===this.status?"allPick":"allremovePick";this[t]=!this[t]},addNum:function(t,e){t.number<=0||(this.numReg.test(String(t.number))?t.number+=1:t.number=1,c.default.set(this.cartList,e,this.cartList[e]))},minusNum:function(t,e){t.number&&t.number>1&&(t.number-=1),c.default.set(this.cartList,e,this.cartList[e])},showDelDialog:function(){this.isMessageDialogShow=!0},delSingleItem:function(t,e,i,s){this.delInfo=[],this.delInfo.push({shop:t,shopIndex:e,good:i,goodIndex:s}),this.showDelDialog()},confirmDel:function(){var t=this,e={};if(0===this.delInfo.length)this.cartList.forEach(function(i,s){i.goodList.forEach(function(n,o){n.removeChecked&&(t.delInfo.push({shop:i,shopIndex:s,good:n,goodIndex:o}),void 0===e[s]?e[s]=[o]:e[s].push(o))})});else{var i=this.delInfo[0].shopIndex,s=this.delInfo[0].goodIndex;e[i]=[s]}for(var n=0;n<this.delInfo.length;n++){for(var o=this.delInfo[n].shop,r=[],a=e[this.delInfo[n].shopIndex],h=0;h<o.goodList.length;h++)a.includes(h)||r.push(o.goodList[h]);o.goodList=r,0===o.goodList.length&&(o.editing=!1,o.statusMessage="编辑"),c.default.set(this.cartList,this.delInfo[n].shopIndex,o)}this.isMessageDialogShow=!1,this.delInfo=[],this.status="view"}},created:function(){this.getCartList()},updated:function(){this.$nextTick(function(){for(var t=this,e=document.querySelectorAll("[data-shop]"),i=function(i){var s=e[i],n=new u.a(s),o=s.dataset.shop,r=s.dataset.good,a=t.cartList[o],h=a.goodList[r];n.on("panleft",function(e){a.editing&&!h.isShow&&(h.touchLeftStart||(h.touchLeftStart=!0,h.startX=e.center.x),h.isShow||(e.center.x-h.startX<-40?(h.isShow=!0,h.offset=-60):h.offset=e.center.x-h.startX),e.isFinal&&(h.endX=e.center.x,h.touchLeftStart=!1),c.default.set(t.cartList,t.cartList[o],t.cartList[o]))}),n.on("panright",function(e){a.editing&&h.isShow&&(h.offset=0,h.isShow=!1,c.default.set(t.cartList,t.cartList[o],t.cartList[o]))})},s=0;s<e.length;s++)i(s)})},mixins:[a.a]})}},["gWPi"]);
//# sourceMappingURL=cart.dc7e753d84aa7161244a.js.map