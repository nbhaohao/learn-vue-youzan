webpackJsonp([4],{"035s":function(t,o){},"0mhr":function(t,o){},"34+y":function(t,o){},"97Sy":function(t,o){},TFhR:function(t,o,i){"use strict";i("34+y");var n=i("X+yh"),s=i.n(n),e=i("Dd8w"),u=i.n(e),r=i("JnRc"),c=i.n(r);c.a.init({appId:"IOdBWAtbQXIu491P7ldb0gB6-gzGzoHsz",appKey:"qlHMaucWHOv4mW5yejNzJf6V"});o.a=function(t){return new c.a.Query(t).find().then(function(t){return t.map(function(t){return u()({},t.attributes)})},function(){s()({message:"网络异常",position:"bottom",duration:2500})})}},"U/rD":function(t,o,i){"use strict";var n={filters:{floatnum:function(t){var o=String(t);return-1===o.indexOf(".")?o+".00":1===o.split(".")[1].length?o+"0":o}}};o.a=n},sSMw:function(t,o,i){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=i("97Sy"),s=(i.n(n),i("bCKv")),e=i.n(s),u=i("035s"),r=(i.n(u),i("0mhr")),c=(i.n(r),i("7+uW")),a=i("TFhR"),d=i("mw3O"),l=i.n(d),f=i("U/rD"),h=i("9qgI"),g=i.n(h);c.default.use(e.a),new c.default({el:"#app",data:{searchWord:"",isJumpToBtnShow:!1,goodList:{lists:null,loading:!1,isUserScroll:!1,isInitSuccess:!1,isListDone:!1,pageNum:0}},methods:{loadMore:function(){var t=this;this.goodList.isUserScroll&&this.goodList.isInitSuccess&&!this.goodList.isListDone&&(this.goodList.loading=!0,setTimeout(function(){t.getGoodList()},200))},listenToWindowScroll:function(){var t=this;window.ontouchmove=function(o){t.goodList.isUserScroll=!0,window.ontouchmove=null}},getGoodList:function(t){var o=this;Object(a.a)("searchList").then(function(i){var n=0;o.goodList.lists||(o.goodList.lists=[]);var s=setInterval(function(){if(!i[n])return o.goodList.loading=!1,"first"===t&&(o.goodList.isInitSuccess=!0),o.goodList.pageNum+=1,6===o.goodList.pageNum&&(o.goodList.isListDone=!0),void clearInterval(s);o.goodList.lists.push(i[n]),n++},200)})},move:function(){this.isJumpToBtnShow=document.documentElement.scrollTop>100},goToTop:function(){g()(document.body,"scroll",{duration:300}),this.isJumpToBtnShow=!1}},created:function(){this.getGoodList("first"),this.searchWord=l.a.parse(window.location.href.split("?")[1]).keyword,this.listenToWindowScroll()},mixins:[f.a]})}},["sSMw"]);
//# sourceMappingURL=search.ace8d9c1a2b7bc9fb8cb.js.map