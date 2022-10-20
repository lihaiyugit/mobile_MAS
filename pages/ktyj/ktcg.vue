<template>
  <div class="page-container">
    <Header />
    <div class="page-header">
      <div class="banner">
        <img src="@/static/images/ktyj/banner.png" alt="" />
      </div>
    </div>
    <div class="page-achievement">
      <div class="ktcg">
        <h2>课题成果</h2>
        <div class="tabs-box">
          <ul class="type-tabs">
            <li
              :class="current == index ? 'active' : ''"
              v-for="(item, index) in typeData"
              :key="index"
              @click="cutValue(index)"
            >
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="loading-more">
          <!-- 加载中 -->
          <div class="loading-box" v-if="listShowType == 0">
            <van-loading type="spinner" />
          </div>
          <!-- 有数据 -->
          <div class="tabs-content" v-if="listShowType == 1">
            <van-list
              v-model="loading"
              :finished="finished"
              loading-text="正在加载…"
              @load="onLoad"
            >
              <div class="item">
                <div class="item-l">
                  <img src="@/static/images/ktyj/cg_img.png" alt="" />
                </div>
                <div class="item-r">
                  <h5>数字智能时代中国企业财务共享的创新与升级调研报告</h5>
                  <p class="twoline">
                    课题成果介绍课题成果介绍课题成果介绍课题成果介绍课题成果介绍...
                  </p>
                  <div class="btn-box">
                    <button>试读</button>
                    <button>下载</button>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="item-l">
                  <img src="@/static/images/ktyj/cg_img.png" alt="" />
                </div>
                <div class="item-r">
                  <h5>数字智能时代中国企业财务共享的创新与升级调研报告</h5>
                  <p class="twoline">
                    课题成果介绍课题成果介绍课题成果介绍课题成果介绍课题成果介绍...
                  </p>
                  <div class="btn-box">
                    <button>试读</button>
                    <button>下载</button>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="item-l">
                  <img src="@/static/images/ktyj/cg_img.png" alt="" />
                </div>
                <div class="item-r">
                  <h5>数字智能时代中国企业财务共享的创新与升级调研报告</h5>
                  <p class="twoline">
                    课题成果介绍课题成果介绍课题成果介绍课题成果介绍课题成果介绍...
                  </p>
                  <div class="btn-box">
                    <button>试读</button>
                    <button>下载</button>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="item-l">
                  <img src="@/static/images/ktyj/cg_img.png" alt="" />
                </div>
                <div class="item-r">
                  <h5>数字智能时代中国企业财务共享的创新与升级调研报告</h5>
                  <p class="twoline">
                    课题成果介绍课题成果介绍课题成果介绍课题成果介绍课题成果介绍...
                  </p>
                  <div class="btn-box">
                    <button>试读</button>
                    <button>下载</button>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="item-l">
                  <img src="@/static/images/ktyj/cg_img.png" alt="" />
                </div>
                <div class="item-r">
                  <h5>数字智能时代中国企业财务共享的创新与升级调研报告</h5>
                  <p class="twoline">
                    课题成果介绍课题成果介绍课题成果介绍课题成果介绍课题成果介绍...
                  </p>
                  <div class="btn-box">
                    <button>试读</button>
                    <button>下载</button>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="item-l">
                  <img src="@/static/images/ktyj/cg_img.png" alt="" />
                </div>
                <div class="item-r">
                  <h5>数字智能时代中国企业财务共享的创新与升级调研报告</h5>
                  <p class="twoline">
                    课题成果介绍课题成果介绍课题成果介绍课题成果介绍课题成果介绍...
                  </p>
                  <div class="btn-box">
                    <button>试读</button>
                    <button>下载</button>
                  </div>
                </div>
              </div>
            </van-list>
            <div class="loading-more-btn" @click="onLoad" v-show="loading">
              {{ loadingText }}
            </div>
          </div>
          <!-- 无数据 -->
          <div class="no-data-box" v-if="listShowType == 2">
            <img src="@/static/images/no-data.png" alt="" />
            <div class="tip">目前还没有内容哦～</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "not",
  data() {
    return {
      typeData: ["全部", "数字化", "财务共享"], //课题成果类型
      current: "0", //下拉默认选中项
      listData: [], //总列表数据
      pageIndex: 1, //当前页
      pageSize: 6, //当前页
      total: "", //总条数
      finished: true, //数据是否加载完毕
      loading: false, //true 异步操作并更新数据 数据更新完毕后，将 loading 设置成 false 加载状态结束
      // moretype: "list", //加载更多 取值 ‘list’
      listShowType: 1, // 列表显示状态 0加载中 1有数据 2无数据
      loadingText: "查看更多",
    };
  },
  mounted() {
    // scroll事件并监听
    // window.addEventListener("scroll", this.dksScroll);
  },

  methods: {
    //scroll事件并监听
    // dksScroll() {
    //   //可视区域大小window.innerHeight
    //   var scrollTop =
    //     document.documentElement.scrollTop ||
    //     window.pageYOffset ||
    //     document.body.scrollTop; //滚动高度
    //     console.log(scrollTop)
    //   //"文档高度"document.body.offsetHeight 327底部高度
    //   //判断是否滚动到底部
    //   if (
    //     scrollTop + window.innerHeight>=
    //     document.body.offsetHeight
    //   ) {
    //     //327 表示距离底部多少的距离的开始触发loadmore效果
    //     console.log(scrollTop + window.innerHeight,'',document.body.offsetHeight)
    //     if (!this.loading && !this.finished) {
    //       //防止多次加载
    //       //  this.moretype = "list";
    //       this.onLoad();
    //     }
    //   }
    // },
    //点击课题成果列表
    cutValue(index) {
      this.current = index;
      // this.studyList = [];
      // this.getList(id);
    },
    //滑动加载
    onLoad() {

      let pageIndex = this.pageIndex + 1;
      // this.commonData(pageIndex);
      console.log(pageIndex);
    },
    //根据条件搜索
    getList() {
      this.commonData(this.pageIndex);
    },
    //公共请求接口
    async commonData(pageIndex) {
      console.log(pageIndex);
      this.loadingText = "正在加载…";
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
      //   this.loadingText='查看更多';
      // }
    },
  },
};
</script>
<style lang="less" scoped>
@import "./static/css/page-css/ktcg.less";
</style>
