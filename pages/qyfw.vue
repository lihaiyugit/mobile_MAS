<template>
  <div class="page-container">
    <Header />
    <div class="page-header">
      <div class="banner">
        <img src="@/static/images/qyfw/banner.png" alt="" />
      </div>
      <h2>MAS企业服务致力于多领域</h2>
      <p class="introduce">
        MAS企业会员服务致⼒于为企业、机构，提供品牌宣传、知识学习、⼈脉链接、资源合作、行业咨询等服务，以打破认知和资源的不对称，共同构筑中国数字产业化、产业数字化之融合⾼地。
        为各领域⾼价值企业、机构打造，通过丰富的会员增值服务使企业间、行业领域、企业与机构间的链接更加紧密、为企业的服务更加定制化，做最懂市场与⾏业需求的会员制度。
      </p>
    </div>
    <div class="advantage">
      <h2>优势</h2>
      <div class="advantage-main">
        <div class="item">
          <div class="item-l">
            <img src="@/static/images/qyfw/ys1.png" alt="" />
          </div>
          <div class="item-r">
            <h5>强展示</h5>
            <p>将MAS全媒体平台作为企业的流量⼊⼝，实现扩⼤宣传</p>
          </div>
        </div>
        <div class="item">
          <div class="item-l">
            <img src="@/static/images/qyfw/ys2.png" alt="" />
          </div>
          <div class="item-r">
            <h5>精链接</h5>
            <p>MAS组局⾏业领袖人物，根据会员需求创造链接</p>
          </div>
        </div>
        <div class="item">
          <div class="item-l">
            <img src="@/static/images/qyfw/ys3.png" alt="" />
          </div>
          <div class="item-r">
            <h5>价值内容配合发布</h5>
            <p>发挥管理会计研究媒体属性，为会员内容传播搭建平台</p>
          </div>
        </div>
        <div class="item">
          <div class="item-l">
            <img src="@/static/images/qyfw/ys4.png" alt="" />
          </div>
          <div class="item-r">
            <h5>市场活动</h5>
            <p>以不同类型活动构建高质量强互动的精准资源对接体系</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flow">
      <h2>MAS企业会员服务图谱</h2>
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
      <div class="flow-content"></div>
    </div>
    <div class="qyfw">
      <img src="@/static/images/qyfw/qy-img.png" alt="">
    </div>
    <div class="discount">
      <div class="item">
        <div class="tip">
          <img src="@/static/images/qyfw/hot.png" alt="">
          <span>内容类</span>
        </div>
        <div class="title">
          <h5>深度、有价值稿件转发</h5>
          <span>（新媒体端）</span>
        </div>
        <p>MAS对企业及机构具有传播需求，并且有高度有深度的稿件进行转载宣发</p>
        <div class="price-box">
          <span class="price">¥20000</span>
          <span class="text">/次</span>
        </div>
        <div class="img-r">
          <img src="@/static/images/qyfw/discount1.png" alt="">
        </div>
      </div>
      <div class="item">
        <div class="tip">
          <img src="@/static/images/qyfw/hot.png" alt="">
          <span>内容类</span>
        </div>
        <div class="title">
          <h5>企业专访稿件</h5>
          <span>（服务号/公众号）</span>
        </div>
        <p>从企业视角出发，以采访、对话形式对产品业务、行业趋势、企业实践案例进行解析</p>
        <div class="price-box">
          <span class="price">¥20000</span>
          <span class="text">/次</span>
        </div>
        <div class="img-r">
          <img src="@/static/images/qyfw/discount2.png" alt="">
        </div>
      </div>
      <div class="item">
        <div class="tip">
          <img src="@/static/images/qyfw/hot.png" alt="">
          <span>内容类</span>
        </div>
        <div class="title">
          <h5>原创稿件</h5>
          <span>（杂志媒体/服务号、公众号）</span>
        </div>
        <p>《管理会计研究》杂志：“观察”栏目，企业总会计师、财务总监等高管前沿观点文章；“企业巡展”栏目，企业数字化转型图文形式软文宣传</p>
        <div class="price-box">
          <span class="price">¥20000</span>
          <span class="text">/次</span>
        </div>
        <div class="img-r">
          <img src="@/static/images/qyfw/discount3.png" alt="">
        </div>
      </div>
      <div class="item item2">
        <div class="tip tip2">
          <img src="@/static/images/qyfw/hot.png" alt="">
          <span>活动类</span>
        </div>
        <div class="title">
          <h5>MAS主办系列活动门票</h5>
        </div>
        <p>MAS平台主办的所有系列活动入场券（商务休闲活动除外，如高尔夫、品酒等活动）</p>
        <div class="price-box">
          <span class="price">¥20000</span>
          <span class="text">/次</span>
        </div>
        <div class="img-r">
          <img src="@/static/images/qyfw/discount4.png" alt="">
        </div>
      </div>
      <div class="item item2">
        <div class="tip tip2">
          <img src="@/static/images/qyfw/hot.png" alt="">
          <span>活动类</span>
        </div>
        <div class="title">
          <h5>业界合作活动邀请</h5>
        </div>
        <p>推荐可以参加业界与MAS合作的活动（评选类活动参选除外）</p>
        <div class="price-box">
          <span class="price">¥20000</span>
          <span class="text">/次</span>
        </div>
        <div class="img-r">
          <img src="@/static/images/qyfw/discount5.png" alt="">
        </div>
      </div>
    </div>
    <div class="service">
      <h2>企业用户服务咨询</h2>
      <div class="service-mian">
        <div class="item">
          <div class="item-l">
            <img src="@/static/images/qyfw/tel.png" alt="">
          </div>
          <div class="item-r">
            <h5>13910957544</h5>
            <p><span>(手机号同微信，添加请备注“公司+姓名”)</span></p>
          </div>
        </div>
         <div class="item">
          <div class="item-l">
            <img src="@/static/images/qyfw/mail.png" alt="">
          </div>
          <div class="item-r">
            <h5>yangww@chinamas.cn</h5>
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
      typeData: ["媒体资源", "活动资源", "培训资源", "智库资源"], //课题成果类型
      current: "0", //下拉默认选中项
    };
  },
  methods: {
    //点击服务图谱
    cutValue(index) {
      this.current = index;
    },
  },
};
</script>
<style lang="less" scoped>
@import "../static/css/page-css/qyfw.less";
</style>
