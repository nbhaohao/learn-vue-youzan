webpackJsonp([1],{"035s":function(t,i){},"1w35":function(t,i){},"34+y":function(t,i){},"4hSB":function(t,i){},"97Sy":function(t,i){},TFhR:function(t,i,s){"use strict";s("34+y");var n=s("X+yh"),e=s.n(n),a=s("Dd8w"),o=s.n(a),r=s("JnRc"),c=s.n(r);c.a.init({appId:"IOdBWAtbQXIu491P7ldb0gB6-gzGzoHsz",appKey:"qlHMaucWHOv4mW5yejNzJf6V"});i.a=function(t){return new c.a.Query(t).find().then(function(t){return t.map(function(t){return o()({},t.attributes)})},function(){e()({message:"网络异常",position:"bottom",duration:2500})})}},U67u:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});s("34+y");var n=s("X+yh"),e=s.n(n),a=(s("97Sy"),s("bCKv")),o=s.n(a),r=(s("035s"),s("eChN"),s("7+uW")),c=s("TFhR"),l=s("n7YN"),u=s("DNVT"),h=(s("mgS3"),{props:["slideList","swiperOptions","domSelector"],data:function(){return{swiperInstance:null}},mounted:function(){},watch:{slideList:function(t){t&&this.$nextTick(function(){this.swiperInstance=new u.a(this.domSelector,this.swiperOptions)})}}}),f={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"index-swiper swiper-container"},[i("div",{staticClass:"swiper-wrapper"},this._l(this.slideList,function(t,s){return i("div",{key:s,staticClass:"swp-page swiper-slide"},[i("a",{staticClass:"js-no-follow",attrs:{href:t.clickUrl}},[i("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:t.image}})])])})),this._v(" "),this.swiperOptions.pagination?i("div",{staticClass:"swiper-pagination"}):this._e()])},staticRenderFns:[]};var p=s("VU/8")(h,f,!1,function(t){s("1w35")},null,null).exports;r.default.use(o.a),new r.default({el:"#app",data:{hotList:{lists:[],loading:!1,isUserScroll:!1,isInitSuccess:!1,isListDone:!1,pageNum:0},bannerList:null,bannerSwiper:{options:{direction:"horizontal",loop:!0,pagination:{el:".index-swiper .swiper-pagination"},autoplay:!0},domSelector:".js-image-swiper .index-swiper"}},components:{"foot-nav":l.a,"top-banner":p},methods:{loadMore:function(){var t=this;this.hotList.isUserScroll&&this.hotList.isInitSuccess&&!this.hotList.isListDone&&(this.hotList.loading=!0,setTimeout(function(){t.getNewData()},200))},getNewData:function(t){var i=this;Object(c.a)("HotList").then(function(s){var n=0,e=setInterval(function(){if(!s[n])return i.hotList.loading=!1,"first"===t&&(i.hotList.isInitSuccess=!0),i.hotList.pageNum+=1,6===i.hotList.pageNum&&(i.hotList.isListDone=!0),void clearInterval(e);i.hotList.lists.push(s[n]),n++},200)},function(){e()({message:"网络异常",position:"bottom",duration:2500})})},listenToWindowScroll:function(){var t=this;window.ontouchmove=function(i){t.hotList.isUserScroll=!0,window.ontouchmove=null}},getBannerImg:function(){var t=this;Object(c.a)("Banner").then(function(i){t.bannerList=i},function(){e()({message:"网络异常",position:"bottom",duration:2500})})}},created:function(){this.getNewData("first"),this.getBannerImg(),this.listenToWindowScroll()}})},eChN:function(t,i){},mgS3:function(t,i){},n7YN:function(t,i,s){"use strict";var n={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"bottom-nav"},[s("ul",[s("li",{class:{active:"index"===t.activeClass}},[t._m(0)]),t._v(" "),s("li",{class:{active:"category"===t.activeClass}},[t._m(1)]),t._v(" "),s("li",{class:{active:"default"===t.activeClass}},[t._m(2)]),t._v(" "),s("li",{class:{active:"default"===t.activeClass}},[t._m(3)])])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("a",{attrs:{href:"index.html"}},[i("i",{staticClass:"icon-home"}),i("div",[this._v("有赞")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("a",{attrs:{href:"category.html"}},[i("i",{staticClass:"icon-category"}),i("div",[this._v("分类")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("a",{attrs:{href:"https://h5.youzan.com/v2/trade/cart?f_platform=yzapp&source=yzapp"}},[i("i",{staticClass:"icon-cart"}),i("div",[this._v("购物车")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("a",{attrs:{href:"https://h5.youzan.com/v2/buyer/member"}},[i("i",{staticClass:"icon-user"}),i("div",[this._v("我")])])}]};var e=s("VU/8")({props:["activeClass"],data:function(){return{}}},n,!1,function(t){s("4hSB")},null,null);i.a=e.exports}},["U67u"]);
//# sourceMappingURL=index.b5a05dce8554e24a14e5.js.map