<template>
  <div class="page-container">
    <Header />
    <div class="banner">
      <img src="@/static/images/zzfw/banner.png" alt="" />
    </div>
    <div class="introduction">
      <h2>MAS秉承专业、原创的方针</h2>
      <p>
        MAS秉承专业、原创的方针，依托《管理会计研究》智慧资源，立足新形式发展下对企业管理的要求，集中展现企业管理前沿理论，发掘支持企业转型的新方法与新技术，关注企业管理实践中的热点、难点问题，诚邀有经验的企业管理者，有行业研究的专家学者，有独到见解的青年才俊参与共创，为新形式下的企业管理共同献计献策。
      </p>
    </div>
    <div class="equity">
      <h2>作者权益</h2>
      <div class="equity-main">
        <dl>
          <dt>
            <img src="@/static/images/zzfw/qy1.png" alt="" />
          </dt>
          <dd>
            <h5>MAS平台最佳作者</h5>
            <p>
              年度受欢迎度前10的作者将荣获“MAS年度最佳作者”称号，并获得相应权益。
            </p>
          </dd>
        </dl>
        <dl>
          <dt>
            <img src="@/static/images/zzfw/qy2.png" alt="" />
          </dt>
          <dd>
            <h5>获得收益</h5>
            <p>
              作者可通过撰写收费文章或以授课的方式，按照平台分成标准赚取收益。
            </p>
          </dd>
        </dl>
        <dl>
          <dt>
            <img src="@/static/images/zzfw/qy3.png" alt="" />
          </dt>
          <dd>
            <h5>提速MAS会员升级</h5>
            <p>
              创造更多的优质内容，可快速提升MAS会员等级，从而获得更多优惠政策。
            </p>
          </dd>
        </dl>
        <dl>
          <dt>
            <img src="@/static/images/zzfw/qy4.png" alt="" />
          </dt>
          <dd>
            <h5>开辟个人专栏</h5>
            <p>成为作者将有机会在MAS平台开设个人专栏，分享个人观点及洞察。</p>
          </dd>
        </dl>
      </div>
    </div>
    <div class="upgrade">
      <h2>作者升级计划</h2>
      <div class="upgrade-main">
        <img src="@/static/images/zzfw/upgrade.png" alt="" />
      </div>
    </div>
    <div class="college">
      <h2>创作学院</h2>
      <div class="college-main">
        <dl>
          <dt>
            <video
              ref="movie"
              poster="https://www.chinamas.cn/upload/2021/01/14/16106158037960.jpg"
              src="https://cmas-wendao-out.oss-cn-hangzhou.aliyuncs.com/Act-ss-mp4-hd/65bbef8bc28f4f0aa7c93f0f43166c42/%E9%97%AE%E9%81%932%E6%9C%9F%E8%A1%A5%E6%8B%8D5.0.mp4"
              controls
            ></video>
            <img
              v-show="isplay"
              class="video-play"
              src="@/static/images/zzfw/play.png"
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
          </dt>
          <dd>
            <h6>会计学术研究文章写作与研究成果发表</h6>
            <p>
              课程大纲：<br />
              1.如何在国内和国外权威期刊发表会计学术文章；<br />
              2.管理会计文章写作要领和技巧。
            </p>
          </dd>
        </dl>
      </div>
    </div>
    <div class="create">
      <h2>去创作</h2>
      <div class="create-main">
        <div class="item img1">
          <span>网站投稿</span>
        </div>
        <div class="item img2">
          <span>杂志投稿</span>
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
      isplay: true, //是否播放视频
    };
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
@import "../static/css/page-css/zzfw.less";
</style>
