let url = {
    hotLists: "/index/hotLists",
    indexBanner: "/index/banner",
    asideTitleList: "/category/topList",
}

let host = "http://rap2api.taobao.org/app/mock/14835/"

for (let key in url) {
  url[key] = host + url[key]
}

export default url
