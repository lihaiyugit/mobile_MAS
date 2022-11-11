<template>
  <div class="page-container">
    <Header :islogin="islogin" @onClose="onClose" />
    <div class="page-header">
      <div class="banner">
        <img :src="bannerArr[0].mas_banner_img" alt="" />
      </div>
      <h2>MAS课题</h2>
      <p class="introduce">
        管理会计创新研究平台设CMAS研究中心，深度致力于以数据驱动为主线的企业管理创新应用研究，将广泛连接各界优势资源，开展数字化管理、业财融合、管理会计、数据分析、财务共享、新技术融合等领域的课题研究和智慧传承工作，助力我国数字化管理的理论创新和企事业单位的管理进步。
      </p>
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
              @click="cutValue(index, item.mas_special_study_type_id)"
            >
              {{ item.mas_special_study_type_name }}
            </li>
          </ul>
          <nuxt-link class="more" to="/ktyj/ktcg"
            >查看更多
            <svg
              t="1660023589319"
              class="icon arrow-icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="5059"
              width="16"
              height="16"
            >
              <path
                d="M588.8 252.342857a46.592 46.592 0 0 1 59.392-5.412571l6.436571 5.412571 263.314286 263.314286c16.091429 16.091429 17.92 41.252571 5.412572 59.392l-5.412572 6.436571-263.314286 263.314286a46.518857 46.518857 0 0 1-71.241142-59.392l5.412571-6.436571L819.2 548.571429 588.8 318.171429a46.592 46.592 0 0 1-5.412571-59.392l5.412571-6.436572z"
                fill="#e56c39"
                p-id="5060"
              ></path>
            </svg>
          </nuxt-link>
        </div>
        <div
          class="tabs-content"
          v-for="(itStudy, inStudy) in studyList"
          :key="inStudy"
        >
          <div class="tabs-content-l">
            <img :src="itStudy.mas_special_study_img" alt="" />
          </div>
          <div class="tabs-content-r">
            <h5>{{ itStudy.mas_special_study_title }}</h5>
            <p class="twoline">{{ itStudy.mas_special_study_describe }}</p>
            <div class="btn-box">
              <button @click="tryRead(itStudy.mas_special_study_id)">
                试读
              </button>
              <button @click="download(itStudy.mas_special_study_id)">
                下载
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="kthz">
        <h2>课题合作</h2>
        <div class="kthz-main">
          <img
            src="@/static/images/ktyj/jghz.png"
            @click="jgShowPopup"
            alt=""
          />
          <img src="@/static/images/ktyj/grhz.png" @click="personShowPopup" alt="" />
        </div>
      </div>
    </div>
    <div class="hd-box">
      <div class="hd-title">
        <h2>近期交流活动</h2>
        <nuxt-link to="/ktyj/jlhd"
          >查看更多
          <svg
            t="1660023589319"
            class="icon arrow-icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5059"
            width="16"
            height="16"
          >
            <path
              d="M588.8 252.342857a46.592 46.592 0 0 1 59.392-5.412571l6.436571 5.412571 263.314286 263.314286c16.091429 16.091429 17.92 41.252571 5.412572 59.392l-5.412572 6.436571-263.314286 263.314286a46.518857 46.518857 0 0 1-71.241142-59.392l5.412571-6.436571L819.2 548.571429 588.8 318.171429a46.592 46.592 0 0 1-5.412571-59.392l5.412571-6.436572z"
              fill="#e56c39"
              p-id="5060"
            ></path>
          </svg>
        </nuxt-link>
      </div>
      <div class="hd-list">
        <div
          class="item"
          v-for="(itXs, inXs) in xsjlList"
          :key="inXs"
          @click="activityDetails(itXs.mas_activity_id)"
        >
          <div class="item-l">
            <img :src="itXs.mas_activity_img" alt="" />
            <div
              class="states states2"
              v-if="itXs.mas_activity_status == '已结束'"
            >
              <span>已结束</span>
            </div>
            <div class="states states1" v-else><span>报名中</span></div>
          </div>
          <div class="item-r">
            <h5 class="oneline">{{ itXs.mas_activity_title }}</h5>
            <div class="finish" v-if="itXs.mas_activity_status == '已结束'">
              已结束
            </div>
            <div class="apply" v-else>去报名</div>
          </div>
        </div>
        <!-- <div class="item">
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
        </div> -->
      </div>
    </div>
    <!-- 课题合作（机构） -->
    <jgPopup v-if="jgShow" @onClose="onClose"/>
    <!-- 课题合作（个人）-->
    <personalPopup v-if="personShow" @onPersonClose="onPersonClose"/>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  layout: "not",
  data() {
    return {
      typeData: [], //课题成果类型
      current: "0", //下拉默认选中项
      bannerArr: [], //banner图
      studyList: [], //课题研究列表
      xsjlList: [], //学术研究活动列表
      islogin: false, //是否需要登录
      jgShow: false, //机构弹框
      personShow:false,//个人弹框
    };
  },
  //请求数据
  async asyncData({ $axios, route, store, env, params, query, error }) {
    let res = await $axios.notNeedlogin({
      data: {
        MenuId: 7,
      },
      className: "SpecialStudyController",
      classMethod: "ktyj",
    });
    if (res.bol) {
      return {
        bannerArr: res.data.bannerImg,
        typeData: res.data.specialStudyType,
        studyList: res.data.specialStudy.slice(0, 1),
        xsjlList: res.data.xsjlList,
      };
    }
  },
  mounted() {},
  methods: {
    //点击课题成果列表
    cutValue(index, id) {
      this.current = index;
      this.studyList = [];
      this.getList(id);
    },

    //根据条件筛选
    async getList(id) {
      let res = await this.$axios.notNeedlogin({
        data: {
          MenuId: 7,
          studyTypeId: id,
        },
        className: "SpecialStudyController",
        classMethod: "ktyj",
      });
      if (res.bol) {
        this.studyList = res.data;
      }
    },
    //点击试读
    tryRead(id) {
      // this.$router.push({
      //   name: "journal-course",
      //   query: { id: id },
      // });
    },
    //点击下载
    download(pdfId) {
      let portUrl = "https://admin_test.chinamas.cn/specialStudyDown";
      if (
        this.$store.state.token == null ||
        this.$store.state.token == undefined
      ) {
        Toast({ duration: 3000, message: "登陆后可下载,请点击页面登录按钮！" });
        this.islogin = true;
      } else {
        location.href = portUrl + "?mas_special_study_id=" + pdfId;
      }
    },
    //关闭登录框
    onClose(value) {
      this.islogin = value;
    },
    //机构弹框展示
    jgShowPopup() {
      this.jgShow = true;
    },
    //关闭机构弹框
    onClose(val){
      console.log(val)
      this.jgShow=val;
    },
    // 个人弹框展示
    personShowPopup(){
      this.personShow = true;
    },
    // 关闭个人弹框
    onPersonClose(val){
      this.personShow = val;
    }
  },
};
</script>
<style lang="less" scoped>
@import "./static/css/page-css/ktyj.less";
</style>
