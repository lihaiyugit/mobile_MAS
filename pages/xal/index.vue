<template>
  <div class="page-catalogue-id">
    <div class="page-header">
      <div class="select-box">
        <div class="select-group">
          <div class="input-group" @click="selectClick">
            <span class="title">{{ defaultValue }}</span>
            <svg
              t="1660016484804"
              :class="selectList ? 'select_img_rotate' : ''"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4028"
              width="16"
              height="16"
            >
              <path
                d="M940.032 455.049846a63.015385 63.015385 0 0 1 7.325538 80.423385l-7.325538 8.664615-356.430769 356.509539a63.015385 63.015385 0 0 1-80.344616 7.325538l-8.822153-7.325538L138.003692 544.295385a63.015385 63.015385 0 0 1 80.344616-96.413539l8.743384 7.246769 311.926154 311.926154 311.926154-311.926154a63.015385 63.015385 0 0 1 80.344615-7.246769l8.743385 7.246769z"
                fill="#333333"
                p-id="4029"
              ></path>
            </svg>
          </div>
          <ul class="select-item" v-show="selectList">
            <li
              v-for="(item, index) in major"
              @click="oNitem(index, item)"
              :key="index"
              :class="current == index ? 'active' : ''"
            >
              {{ item.mas_tag_name }}
            </li>
          </ul>
        </div>
        <div class="select-group">
          <div class="input-group" @click="industryClick">
            <span class="title">{{ industryValue }}</span>
            <svg
              t="1660016484804"
              :class="industryShow ? 'select_img_rotate' : ''"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4028"
              width="16"
              height="16"
            >
              <path
                d="M940.032 455.049846a63.015385 63.015385 0 0 1 7.325538 80.423385l-7.325538 8.664615-356.430769 356.509539a63.015385 63.015385 0 0 1-80.344616 7.325538l-8.822153-7.325538L138.003692 544.295385a63.015385 63.015385 0 0 1 80.344616-96.413539l8.743384 7.246769 311.926154 311.926154 311.926154-311.926154a63.015385 63.015385 0 0 1 80.344615-7.246769l8.743385 7.246769z"
                fill="#333333"
                p-id="4029"
              ></path>
            </svg>
          </div>
          <ul class="select-item" v-show="industryShow">
            <li
              v-for="(item, index) in industryData"
              :key="index"
              :class="industryCurrent == index ? 'active' : ''"
              @click="industryFn(index, item)"
            >
              {{ item.mas_industry_name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="way-content">
      <div class="way-content-main">
        <!-- ????????? -->
        <div class="loading-box" v-if="listShowType == 0">
          <van-loading type="spinner" />
        </div>
        <!-- ????????? -->
        <ul class="type-content" v-if="listShowType == 1">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="??????????????????"
            @load="onLoad"
          >
            <li
              class="type-item"
              v-for="(item, index) in listData"
              :key="index"
            >
              <nuxt-link :to="'/xal/' + item.mas_article_id">
                <img class="yh" src="@/static/images/yh.png" alt="" />
                <div class="type-item-main">
                  <h5 class="twoline">{{ item.mas_article_title }}</h5>
                  <span class="author">{{ item.mas_article_author }}</span>
                  <p class="describe threeline">
                    {{ item.mas_article_introduce }}
                  </p>
                </div>
              </nuxt-link>
            </li>
            <div
              class="more"
              @click="clickLoad"
              v-show="showlaoding && finished"
            >
              <span>????????????</span>
              <svg
                t="1660016701886"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4193"
                width="16"
                height="16"
              >
                <path
                  d="M350.354286 227.693714a47.542857 47.542857 0 0 1 60.708571-5.485714l6.582857 5.485714L686.592 496.64a47.542857 47.542857 0 0 1 5.485714 60.708571l-5.485714 6.582858-268.946286 268.946285a47.542857 47.542857 0 0 1-72.777143-60.708571l5.485715-6.582857L585.728 530.285714 350.354286 294.985143a47.542857 47.542857 0 0 1-5.485715-60.708572l5.485715-6.582857z"
                  fill="#DB6B3A"
                  p-id="4194"
                ></path>
              </svg>
            </div>
          </van-list>
        </ul>
        <!-- ????????? -->
        <div class="no-data-box" v-if="listShowType == 2">
          <img src="@/static/images/no-data.png" alt="" />
          <div class="tip">???????????????????????????</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      major: [], //??????
      current: 0, //??????????????????
      defaultValue: "??????",
      selectList: false, //?????????????????????
      industryShow: false, //??????
      industryValue: "??????",
      industryCurrent: 0, //??????????????????
      industryData: [], //??????????????????
      listData: [], //???????????????
      pageIndex: 1, //?????????
      pageSize: 6, //?????????
      total: "", //?????????
      finished: false, //????????????????????????
      loading: false, //true ??????????????????????????? ??????????????????????????? loading ????????? false ??????????????????
      tagId: "", //????????????
      industryId: "", //????????????
      moretype: "list", //???????????? ?????? ???list???
      listShowType: 0, // ?????????????????? 0????????? 1????????? 2?????????
      showlaoding: true, //????????????loading??????
    };
  },
  head() {
    return {
      title: "?????????_?????????????????????????????????-??????????????????",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
        },
      ],
    };
  },
  async asyncData({ $axios, route, store, env, params, query, error }) {
    let res = await $axios.notNeedlogin({
      data: {
        MenuId: query.menuId,
        page: 1,
        limit: 6,
      },
      className: "ArticleController",
      classMethod: "xal",
    });
    if (res.bol) {
      return {
        major: res.data.tag,
        industryData: res.data.industry,
        listData: res.data.articleList.articleList,
        total: res.data.articleList.articleCount,
        showlaoding: false,
        finished: res.data.articleList.articleCount > 6 ? false : true,
        listShowType: res.data.articleList.articleCount > 0 ? 1 : 2,
      };
    }
  },
  mounted() {},
  methods: {
    //????????????????????????????????????
    selectClick() {
      this.selectList = !this.selectList;
    },
    //?????????????????????
    oNitem(index, item) {
      this.selectList = false;
      this.defaultValue = item.mas_tag_name;
      this.current = index;
      this.tagId = item.mas_tag_id;
      this.pageIndex = 1;
      this.listData = [];
      this.finished = false;
      this.listShowType = 0;
      this.getList();
    },
    //??????
    industryClick() {
      this.industryShow = !this.industryShow; //??????????????????????????????
    },
    //?????????????????????
    industryFn(index, item) {
      this.industryShow = false;
      this.industryValue = item.mas_industry_name;
      this.industryCurrent = index;
      this.industryId = item.mas_industry_id;
      this.pageIndex = 1;
      this.listData = [];
      this.finished = false;
      this.listShowType = 0;
      this.getList();
    },

    //????????????
    onLoad() {
      let pageIndex = this.pageIndex + 1;
      this.commonData(pageIndex);
      // if (this.pageIndex >= 3) {
      //   this.finished = true;
      //   console.log(this.pageIndex, "000");
      // } else {
      //   this.commonData(pageIndex);
      //   console.log(this.pageIndex, "1111");
      // }
    },
    //????????????
    clickLoad() {
      let pageIndex = this.pageIndex + 1;
      this.commonData(pageIndex);
    },
    //??????????????????
    getList() {
      this.commonData(this.pageIndex);
    },
    //??????????????????
    async commonData(pageIndex) {
      this.showlaoding = true;
      let res = await this.$axios.notNeedlogin({
        data: {
          MenuId: this.$route.query.menuId,
          page: pageIndex,
          limit: this.pageSize,
          tagId: this.tagId,
          industryId: this.industryId,
          type: this.moretype,
        },
        className: "ArticleController",
        classMethod: "xal",
      });
      if (res.bol) {
        let articleArr = res.data.articleList;
        this.total = res.data.articleCount;
        this.listShowType = this.total ? 1 : 2;
        this.loading = false; // ??????????????????
        if (this.total / this.pageSize > this.pageIndex) {
          this.pageIndex = pageIndex;
        } else {
          this.finished = true; // ????????????????????????
          this.showlaoding = false;
        }

        // ???????????????????????????????????????????????????
        console.log(this.pageIndex, "this.pageIndex");
        this.listData = this.listData.concat(articleArr);
      }
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/static/css/page-css/catalogue/id.less";
.more {
  margin-top: 8px;
}
.no-data-box {
  margin-top: 0px;
}
</style>
