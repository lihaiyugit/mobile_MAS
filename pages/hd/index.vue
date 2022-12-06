<template>
  <div class="page-container">
    <Header />
    <div class="video-box">
      <video
        ref="movie"
        poster="https://www.chinamas.cn/upload/2021/01/14/16106158037960.jpg"
        src="https://cmas-wendao-out.oss-cn-hangzhou.aliyuncs.com/Act-ss-mp4-hd/65bbef8bc28f4f0aa7c93f0f43166c42/%E9%97%AE%E9%81%932%E6%9C%9F%E8%A1%A5%E6%8B%8D5.0.mp4"
      ></video>
      <img
        v-show="isplay"
        class="video-play"
        src="@/static/images/hd/play.png"
        alt=""
        @click="handlePlay"
      />
      <img
        v-show="!isplay"
        class="video-pause"
        src="@/static/images/zzfw/play.png"
        alt=""
        @click="handlePause"
      />
    </div>
    <div class="page-content">
      <div class="title-box">
        <div class="title-l">
          <h2>财务共享服务中心，开启智慧财务转型之路拥有国的专家委员</h2>
          <div class="base">
            <div class="base-l">线下：深圳 2021-07-10 14:00:00</div>
            <div class="base-r">人数：<span>限100人</span></div>
          </div>
        </div>
        <div class="title-r">
          <img src="" alt="" />
          <span>分享</span>
        </div>
      </div>
      <div class="introduce">
        <div class="title">
          <span></span>
          <h3>活动介绍</h3>
        </div>
        <div class="introduce-main">
          <img src="" alt="" />
          <p>
            新冠肺炎疫情作为一场重大的公共卫生安全事件，对当前中国乃至世界的社会生活和经济运行造成了重大影响，它的出现像一颗重型炸弹，让很多企业还没来得及准备和思考，就陷入到经营困局中，甚至有些企业不得不面临生存危机。“新冠”这只黑天鹅对企业，尤其是中小企业打击最大的，便是企业现金流的问题。
          </p>
          <p>
            面对疫情的不确定性给企业所带来的的考验，企业该如何进行现金流管理，在疫情中进行自救，实现逆境“突围”？<br />
            在CMAS大讲堂第15讲中，河南豫能控股股份有限公司总会计师肖合燕围绕这一主题，进行了精彩论述。
          </p>
        </div>
      </div>
      <div class="sponsor">
        <div class="title">
          <span></span>
          <h3>活动主办</h3>
        </div>
        <div class="sponsor-main">
          <div class="headline">
            <span>主办：管理会计研究院</span>
            <span>协办：元年研究院</span>
          </div>
          <div class="content">
            <div class="content-main">
              <h6>主办方介绍</h6>
              <p>
                《管理会计研究》是国内权威的管理会计高端学术期刊，拥有国内同类媒体中超豪华的专家委员会阵容，聚集了超过40名国内外管理会计知名教授、中央企业和国内知名企业的总会计师和财务总监，被誉为我国管理会计进步的重要平台和桥梁。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="location">
        <div class="title">
          <span></span>
          <h3>活动地点</h3>
        </div>
        <div class="location-main"></div>
      </div>
      <div class="other">
        <div class="title">
          <span></span>
          <h3>其他活动</h3>
        </div>
        <div class="other-main">
          <swiper :options="swiperOption" ref="mySwiper" class="swiper-wrapper">
            <swiper-slide>
              <dl>
                <dt>
                  <img src="" alt="" />
                </dt>
                <dd>
                  <h6>财务共享服务中心开启智慧财务转型之路</h6>
                  <p>线上：2021-07-10 14:00:00</p>
                </dd>
              </dl>
            </swiper-slide>
            <swiper-slide>
              <dl>
                <dt>
                  <img src="" alt="" />
                </dt>
                <dd>
                  <h6>财务共享服务中心开启智慧财务转型之路</h6>
                  <p>线上：2021-07-10 14:00:00</p>
                </dd>
              </dl>
            </swiper-slide>
          </swiper>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="article">
        <div class="title">
          <span></span>
          <h3>相关文章</h3>
        </div>
        <div class="article-main">
          <dl>
            <dt>
              <h6>建筑企业财务智能共享平台的构建研究———基于5W2H法则…</h6>
              <p><span>元年研究院干货</span> <span>2022-11-16</span></p>
            </dt>
            <dd>
              <img src="" alt="">
            </dd>
          </dl>
          <dl>
            <dt>
              <h6>建筑企业财务智能共享平台的构建研究———基于5W2H法则…</h6>
              <p><span>元年研究院干货</span> <span>2022-11-16</span></p>
            </dt>
            <dd>
              <img src="" alt="">
            </dd>
          </dl>
          <dl>
            <dt>
              <h6>建筑企业财务智能共享平台的构建研究———基于5W2H法则…</h6>
              <p><span>元年研究院干货</span> <span>2022-11-16</span></p>
            </dt>
            <dd>
              <img src="" alt="">
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  layout: "not",
  data() {
    return {
      isplay: true, //是否播放视频
      swiperOption: {
        loop: false, // 无限循环
        autoplay: false, //可选选项，自动滑动
        speed: 1000,
        // slidesPerView: 1, // 设置slider容器能够同时显示的slides数量(轮播模式)
        spaceBetween: 15, // 在slide之间设置距离
        // slidesPerGroup: 1, // 在轮播模式下定义slides的数量多少为一组。
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true, // 允许点击小圆点跳转
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {
    this.$refs.movie.addEventListener("play", this.handlePlay);
    this.$refs.movie.addEventListener("pause", this.handlePause);
  },
  methods: {
    //点击视频播放按钮
    handlePlay() {
      this.$refs.movie.play();
      this.isplay = false;
    },
    //点击视频暂停按钮
    handlePause() {
      this.$refs.movie.pause();
      this.isplay = true;
    },
  },
};
</script>
<style lang="less" scoped>
@import "./static/css/page-css/hd/index.less";
</style>
