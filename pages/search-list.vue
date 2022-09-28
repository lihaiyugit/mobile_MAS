<template>
  <div class="page-search-list" :class="listShowType != 1 ? 'page-bg' : ''">
    <Header />
    <div class="search-list-header">
      <ul class="header-tabs">
        <li
          :class="current == index ? 'active' : ''"
          v-for="(item, index) in tabs"
          :key="index"
          @click="tabsFn(index)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <!-- 加载中 -->
    <div class="loading-box" v-if="listShowType == 0">
      <van-loading type="spinner" />
    </div>
    <!-- 有数据 -->
    <div class="search-list-main" v-if="listShowType == 1">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="已经到底啦！"
        @load="onLoad"
      >
        <div class="list-item">
          <div class="list-item-main">
            <img class="yh" src="../static/images/yh.png" alt="" />
            <h5 class="twoline">
              基于RPA技术的企业集团管理会计应用探索企业集团管理会计
            </h5>
            <span class="author">李晶晶 、黄静、 徐铭、 邬瑜骏</span>
            <div class="base">
              <div class="base-l twoline">
                本文聚焦探讨RPA机器人流程自动化技术在企业集团管理会计中拟…
              </div>
              <div class="base-r">
                <img src="../static/images/way/dks-img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="list-item">
          <div class="list-item-main">
            <img class="yh" src="../static/images/yh.png" alt="" />
            <h5 class="twoline">
              基于RPA技术的企业集团管理会计应用探索企业集团管理会计
            </h5>
            <span class="author">李晶晶 、黄静、 徐铭、 邬瑜骏</span>
            <div class="base">
              <div class="base-l twoline">
                本文聚焦探讨RPA机器人流程自动化技术在企业集团管理会计中拟…
              </div>
              <div class="base-r">
                <img src="../static/images/way/dks-img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="list-item">
          <div class="list-item-main">
            <img class="yh" src="../static/images/yh.png" alt="" />
            <h5 class="twoline">
              基于RPA技术的企业集团管理会计应用探索企业集团管理会计
            </h5>
            <span class="author">李晶晶 、黄静、 徐铭、 邬瑜骏</span>
            <div class="base">
              <div class="base-l twoline">
                本文聚焦探讨RPA机器人流程自动化技术在企业集团管理会计中拟…
              </div>
              <div class="base-r">
                <img src="../static/images/way/dks-img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </van-list>
    </div>
    <!-- 无数据 -->
    <div class="no-data-box" v-if="listShowType == 2">
      <img src="@/static/images/no-data.png" alt="" />
      <div class="tip">目前还没有内容哦～</div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "not",
  data() {
    return {
      current: 0, //tabs默认选中值
      tabs: ["全部", "找方法", "大咖说", "学案例", "淘资讯"],
      listData: [], //总列表数据
      pageIndex: 1, //当前页
      pageSize: 6, //当前页
      total: "", //总条数
      finished: false, //数据是否加载完毕
      loading: false, //true 异步操作并更新数据 数据更新完毕后，将 loading 设置成 false 加载状态结束
      tabsId: "", //tabsID
      moretype: "list", //加载更多 取值 ‘list’
      listShowType: 1, // 列表显示状态 0加载中 1有数据 2无数据
    };
  },
  async asyncData({ $axios, route, store, env, params, query, error }) {
    // let res = await $axios.notNeedlogin({
    //   data: {
    //     MenuId: query.menuId,
    //     page: 1,
    //     limit: 6,
    //   },
    //   className: "ArticleController",
    //   classMethod: "zff",
    // });
    // if (res.bol) {
    //   return {
    //     tabsType: res.data.articleType,
    //     major: res.data.tag,
    //     industryData: res.data.industry,
    //     listData: res.data.articleList.articleList,
    //     total: res.data.articleList.articleCount,
    //     // showlaoding: false,
    //     finished: res.data.articleList.articleCount > 6 ? false : true,
    //   };
    // }
  },
  methods: {
    //点击tabs
    tabsFn(index) {
      this.current = index;
      this.pageIndex = 1;
      this.listData = [];
      this.finished = false;
      this.listShowType = 0;
      this.getList();
    },
    //滑动加载
    onLoad() {
      let pageIndex = this.pageIndex + 1;
      this.commonData(pageIndex);
    },
    //根据条件搜索
    getList() {
      this.commonData(this.pageIndex);
    },
    //公共请求接口
    async commonData(pageIndex) {
      // let res = await this.$axios.notNeedlogin({
      //   data: {
      //     MenuId: this.$route.query.menuId,
      //     page: pageIndex,
      //     limit: this.pageSize,
      //     articleTypeId: this.articleTypeId,
      //     tagId: this.tagId,
      //     industryId: this.industryId,
      //     type: this.moretype,
      //   },
      //   className: "ArticleController",
      //   classMethod: "zff",
      // });
      // if (res.bol) {
      //   let articleArr = res.data.articleList;
      //   this.total = res.data.articleCount;
      //   this.listShowType = this.total ? 1 : 2;
      //   this.loading = false; // 加载状态结束
      //   if (this.total / this.pageSize > this.pageIndex) {
      //     this.pageIndex = pageIndex;
      //   } else {
      //     this.finished = true; // 数据全部加载完成
      //   }
      //   // 将新请求到的数据添加到之前的数据后
      //   console.log(this.pageIndex, "this.pageIndex");
      //   this.listData = this.listData.concat(articleArr);
      // }
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/static/css/page-css/search-list.less";
</style>
