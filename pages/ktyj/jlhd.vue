<template>
  <div class="page-container">
    <Header />
    <div class="page-header">
      <div class="banner">
        <img src="@/static/images/ktyj/banner.png" alt="" />
      </div>
    </div>
    <div class="activity-container">
      <h2>交流活动</h2>
      <div class="filtrate-box">
        <div class="select-group" v-close>
          <div class="input-group" @click="selectClick">
            <span class="title">{{ defaultValue }}</span>
            <img
              :class="selectList ? 'select_img_rotate' : ''"
              src="https://b.yzcdn.cn/static/app-web/img/ying-yong-revision/arrow-down.png"
              alt=""
            />
          </div>
          <ul class="select-item" v-show="selectList">
            <li
              v-for="(item, index) in timeData"
              :key="index"
              :class="current == index ? 'active' : ''"
              @click="cutValue(item, index)"
            >
              {{ item.val }}
            </li>
          </ul>
        </div>
        <div class="select-group" v-closeType>
          <div class="input-group" @click="typeClick">
            <span class="title">{{ typeValue }}</span>
            <img
              :class="typeShow ? 'select_img_rotate' : ''"
              src="https://b.yzcdn.cn/static/app-web/img/ying-yong-revision/arrow-down.png"
              alt=""
            />
          </div>
          <ul class="select-item" v-show="typeShow">
            <li
              v-for="(item, index) in typeData"
              :key="index"
              :class="typeCurrent == index ? 'active' : ''"
              @click="typeFn(item, index)"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
      <div class="loading-more">
        <!-- 加载中 -->
        <div class="loading-box" v-if="listShowType == 0">
          <van-loading type="spinner" />
        </div>
        <!-- 有数据 -->
        <div class="hd-list" v-if="listShowType == 1">
          <van-list
            :finished="finished"
            finished-text="已经到底啦！"
            @load="onLoad"
          >
            <div class="item">
              <div class="item-l">
                <img src="@/static/images/ktyj/hd_img.png" alt="" />
                <div class="states states1"><span>报名中</span></div>
              </div>
              <div class="item-r">
                <h5 class="oneline">交流活动标题交流活动标题活动…</h5>
                <div class="apply">去报名</div>
              </div>
            </div>
            <div class="item">
              <div class="item-l">
                <img src="@/static/images/ktyj/hd_img.png" alt="" />
                <div class="states states1"><span>报名中</span></div>
              </div>
              <div class="item-r">
                <h5 class="oneline">交流活动标题交流活动标题活动…</h5>
                <div class="apply">去报名</div>
              </div>
            </div>
            <div class="item">
              <div class="item-l">
                <img src="@/static/images/ktyj/hd_img.png" alt="" />
                <div class="states states2"><span>已结束</span></div>
              </div>
              <div class="item-r">
                <h5 class="oneline">交流活动标题交流活动标题活动…</h5>
                <div class="finish">已结束</div>
              </div>
            </div>
          </van-list>
        </div>
        <!-- 无数据 -->
        <div class="no-data-box" v-if="listShowType == 2">
          <img src="@/static/images/no-data.png" alt="" />
          <div class="tip">目前还没有内容哦～</div>
        </div>
        <div class="loading-more-btn">{{loadingText}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "not",
  data() {
    return {
      timeData: [
        { val: "全部时间", type: 0 },
        { val: "本周", type: 2 },
        { val: "本月", type: 1 },
      ], //时间下拉菜单
      defaultValue: "", //时间默认值
      selectList: false, //先将下拉框隐藏
      current: "-1", //下拉默认选中项
      typeData: ["全部状态", "报名中", "活动中", "已结束"], //状态下拉菜单
      typeValue: "", //状态默认值
      typeShow: false, //是否展示
      typeCurrent: "-1", //下拉默认选中项
      listData: [], //总列表数据
      pageIndex: 1, //当前页
      pageSize: 6, //当前页
      total: "", //总条数
      finished: false, //数据是否加载完毕
      loading: false, //true 异步操作并更新数据 数据更新完毕后，将 loading 设置成 false 加载状态结束
      // moretype: "list", //加载更多 取值 ‘list’
      listShowType: 1, // 列表显示状态 0加载中 1有数据 2无数据
      loadingText:'查看更多',
    };
  },
  //点击空白处关闭下拉框
  directives: {
    close: {
      inserted(el, binding, vnode) {
        window.addEventListener("click", (e) => {
          if (!el.contains(e.target)) {
            vnode.context.selectList = false;
          }
        });
      },
    },
    closeType: {
      inserted(el, binding, vnode) {
        window.addEventListener("click", (e) => {
          if (!el.contains(e.target)) {
            vnode.context.typeShow = false;
          }
        });
      },
    },
  },
  mounted() {
    this.defaultValue = this.timeData[0].val;
    this.typeValue = this.typeData[0];
  },
  methods: {
    //时间类型下拉框
    selectClick() {
      this.selectList = !this.selectList; //点击显示或隐藏下拉框
    },
    //点击时间下拉框
    cutValue(item, index) {
      // this.pageIndex = 1;
      // this.listData = [];
      // this.moretype = "list";
      //       this.listShowType = 1;
      // this.finished = false;
      this.selectList = false;
      this.defaultValue = item.val;
      this.current = index;
      // this.timeType = item.type;
      // this.getList();
    },
    //状态
    typeClick() {
      this.typeShow = !this.typeShow; //点击显示或隐藏下拉框
    },
    //点击状态下拉框
    typeFn(item, index) {
      // this.pageIndex = 1;
      // this.listData = [];
      // this.moretype = "list";
      // this.listShowType = 1;
      // this.finished = false;
      this.typeShow = false;
      this.typeValue = item;
      this.typeCurrent = index;
      // this.getList();
    },
     //滑动加载
    onLoad() {
      let pageIndex = this.pageIndex + 1;
      // this.commonData(pageIndex);
    },
    //根据条件搜索
    getList() {
      this.commonData(this.pageIndex);
    },
    //公共请求接口
    async commonData(pageIndex) {
      console.log(pageIndex)
      this.loadingText='正在加载…';
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
@import "./static/css/page-css/jlhd.less";
</style>
