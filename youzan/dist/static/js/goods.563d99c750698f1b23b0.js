webpackJsonp([1],{"1w35":function(t,i){},"34+y":function(t,i){},AeEs:function(t,i){},AnIW:function(t,i){},"Do/K":function(t,i){},HFfA:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=n("AeEs"),s=(n.n(e),n("JWK+")),o=(n.n(s),n("pI1A")),u=(n.n(o),n("d7BR")),a=(n.n(u),n("Do/K")),r=(n.n(a),n("wI1h")),c=(n.n(r),n("AnIW")),l=(n.n(c),n("7+uW")),d=n("TFhR"),h=n("U/rD"),f=n("mw3O"),p=(n.n(f),n("NydE"));new l.default({el:"#app",data:{details:{goodHTML:"",identification:null,imagesArr:null,originalPrice:0,postage:"",price:0,remain:0,sales:0,skuList:null,storeName:"",title:""},detailTab:["商品详情","本店成交"],skuType:1,showSku:!1,showCartBtn:!1,dealList:null,activeBtnIndex:0,bannerSwiper:{options:{direction:"horizontal",loop:!0,pagination:{el:".index-swiper .swiper-pagination"},autoplay:!0},domSelector:".index-swiper"},buyNum:1,numReg:/^[1-9]\d*$/},computed:{isbuyMinusVaild:function(){return!!(this.buyNum&&this.buyNum>1)},isbuyAddVaild:function(){return!(this.remainNum<=0)},remainNum:function(){var t=this.details.remain-this.buyNum;return t>=0?t:0}},methods:{addBuyNum:function(){this.isbuyAddVaild&&(this.numReg.test(String(this.buyNum))?this.buyNum+=1:this.buyNum=1)},minusBuNum:function(){this.isbuyMinusVaild&&(this.buyNum-=1)},getGoodDetail:function(){var t=this;Object(d.a)("ShopDetail").then(function(i){var n=i[0];for(var e in n)null===t.details[e]?t.details[e]=JSON.parse(n[e]):t.details[e]=n[e]})},getDealList:function(){var t=this;Object(d.a)("shopDealRecord").then(function(i){t.dealList=i})},toggleTabBtn:function(t){this.activeBtnIndex=t,1===t&&this.getDealList()},chooseSku:function(t){this.showSku=!0,this.skuType=t},hidePop:function(){this.showSku=!1},addToCart:function(){this.hidePop(),this.showCartBtn=!0}},components:{"top-banner":p.a},watch:{showSku:function(t,i){var n=t?"hidden":"auto",e=t?"100%":"auto";document.body.style.overflow=n,document.querySelector("html").style.overflow=n,document.body.style.height=e,document.querySelector("html").style.height=e}},created:function(){this.getGoodDetail()},mixins:[h.a]})},"JWK+":function(t,i){},NydE:function(t,i,n){"use strict";var e=n("DNVT"),s=(n("mgS3"),{props:["slideList","swiperOptions","domSelector"],data:function(){return{swiperInstance:null}},mounted:function(){},watch:{slideList:function(t){t&&this.$nextTick(function(){this.swiperInstance=new e.a(this.domSelector,this.swiperOptions)})}}}),o={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"index-swiper swiper-container"},[i("div",{staticClass:"swiper-wrapper"},this._l(this.slideList,function(t,n){return i("div",{key:n,staticClass:"swp-page swiper-slide"},[i("a",{staticClass:"js-no-follow",attrs:{href:t.clickUrl}},[i("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:t.image}})])])})),this._v(" "),this.swiperOptions.pagination?i("div",{staticClass:"swiper-pagination"}):this._e()])},staticRenderFns:[]};var u=n("VU/8")(s,o,!1,function(t){n("1w35")},null,null);i.a=u.exports},TFhR:function(t,i,n){"use strict";n("34+y");var e=n("X+yh"),s=n.n(e),o=n("Dd8w"),u=n.n(o),a=n("JnRc"),r=n.n(a);r.a.init({appId:"IOdBWAtbQXIu491P7ldb0gB6-gzGzoHsz",appKey:"qlHMaucWHOv4mW5yejNzJf6V"});i.a=function(t){return new r.a.Query(t).find().then(function(t){return t.map(function(t){return u()({},t.attributes)})},function(){s()({message:"网络异常",position:"bottom",duration:2500})})}},"U/rD":function(t,i,n){"use strict";var e={filters:{floatnum:function(t){var i=String(t);return-1===i.indexOf(".")?i+".00":1===i.split(".")[1].length?i+"0":i}}};i.a=e},d7BR:function(t,i){},mgS3:function(t,i){},pI1A:function(t,i){},wI1h:function(t,i){}},["HFfA"]);
//# sourceMappingURL=goods.563d99c750698f1b23b0.js.map