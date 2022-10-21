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
      <div class="flow-content">
        <div class="style-one" v-if="current==0">
          <div class="item">
            <img src="@/static/images/qyfw/mt1.png" alt="" />
            <h5>《管理会计研究》杂志</h5>
            <ul>
              <li>• “观察”栏目</li>
              <li>• “企业数字化转型巡展”栏目</li>
              <li>• 学术文章投稿</li>
            </ul>
          </div>
          <div class="item">
            <img src="@/static/images/qyfw/mt2.png" alt="" />
            <h5>MAS公众号</h5>
            <ul>
              <li>• 深度解读</li>
              <li>• 实战案例</li>
              <li>• 决策内参</li>
            </ul>
          </div>
          <div class="item">
            <img src="@/static/images/qyfw/mt3.png" alt="" />
            <h5>MAS视频号</h5>
            <ul>
              <li>• 布局</li>
              <li>• MAS会客厅</li>
            </ul>
          </div>
          <div class="item">
            <img src="@/static/images/qyfw/mt4.png" alt="" />
            <h5>MAS网站</h5>
            <ul>
              <li>• 网站广告</li>
              <li>• 栏目冠名</li>
              <li>• 文章连载</li>
            </ul>
          </div>
          <div class="item">
            <img src="@/static/images/qyfw/mt5.png" alt="" />
            <h5>社群运营</h5>
            <ul>
              <li>• 粉丝活动</li>
              <li>• 扩展流量/平台转发</li>
            </ul>
          </div>
        </div>
        <div class="style-one style-two" v-else-if="current==1">
          <ul >
            <li style="background-image: url(../../images/qyfw/hd1.png)"><span>品牌活动</span></li>
            <li style="background-image: url(../../images/qyfw/hd2.png)"><span>闭门研讨会</span></li>
            <li style="background-image: url(../../images/qyfw/hd3.png)"><span>行业峰会</span></li>
            <li style="background-image: url(../../images/qyfw/hd4.png)"><span>MAS思宴</span></li>
            <li style="background-image: url(../../images/qyfw/hd5.png)"><span>线上直播大讲堂</span></li>
            <li style="background-image: url(../../images/qyfw/hd6.png)"><span>定制化活动</span></li>
          </ul>
        </div>
         <div class="style-one style-two" v-else-if="current==2">
          <ul >
            <li style="background-image: url(../../images/qyfw/px1.png)"><span>独家数字化转型实践课程</span></li>
            <li style="background-image: url(../../images/qyfw/px2.png)"><span>全球化高端财会人才培养项目</span></li>
            <li style="background-image: url(../../images/qyfw/px3.png)"><span>企业实战内训</span></li>
            <li style="background-image: url(../../images/qyfw/px4.png)"><span>沉浸式游学</span></li>
            <li style="background-image: url(../../images/qyfw/px5.png)"><span>师资培训班</span></li>
            <li style="background-image: url(../../images/qyfw/px6.png)"><span>论文辅导班</span></li>
          </ul>
        </div>
        <div class="style-one" v-else>
          <div class="item">
            <img src="@/static/images/qyfw/mt1.png" alt="" />
            <h5>研究报告</h5>
            <ul>
              <li>• 数字化趋势报告</li>
              <li>• 行业研究报告</li>
              <li>• 企业研究报告</li>
              <li>• 课题研究报告</li>
              <li>• 企业/机构榜单</li>
            </ul>
          </div>
          <div class="item">
            <img src="@/static/images/qyfw/zk1.png" alt="" />
            <h5>MAS公众号</h5>
            <ul>
              <li><span>• 大咖对面咨询</span><span>• 人才招聘</span></li>
              <li><span>• 企业诊断</span><span>• 产业升级</span></li>
              <li><span>• 项目对接</span></li>
              <li><span>• 完整解决方案</span></li>
              <li><span>• 企业战略规划</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="qyfw">
      <img src="@/static/images/qyfw/qy-img.png" alt="" />
    </div>
    <div class="discount">
      <div class="item">
        <div class="tip">
          <img src="@/static/images/qyfw/hot.png" alt="" />
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
          <img src="@/static/images/qyfw/discount1.png" alt="" />
        </div>
      </div>
      <div class="item">
        <div class="tip">
          <img src="@/static/images/qyfw/hot.png" alt="" />
          <span>内容类</span>
        </div>
        <div class="title">
          <h5>企业专访稿件</h5>
          <span>（服务号/公众号）</span>
        </div>
        <p>
          从企业视角出发，以采访、对话形式对产品业务、行业趋势、企业实践案例进行解析
        </p>
        <div class="price-box">
          <span class="price">¥20000</span>
          <span class="text">/次</span>
        </div>
        <div class="img-r">
          <img src="@/static/images/qyfw/discount2.png" alt="" />
        </div>
      </div>
      <div class="item">
        <div class="tip">
          <img src="@/static/images/qyfw/hot.png" alt="" />
          <span>内容类</span>
        </div>
        <div class="title">
          <h5>原创稿件</h5>
          <span>（杂志媒体/服务号、公众号）</span>
        </div>
        <p>
          《管理会计研究》杂志：“观察”栏目，企业总会计师、财务总监等高管前沿观点文章；“企业巡展”栏目，企业数字化转型图文形式软文宣传
        </p>
        <div class="price-box">
          <span class="price">¥20000</span>
          <span class="text">/次</span>
        </div>
        <div class="img-r">
          <img src="@/static/images/qyfw/discount3.png" alt="" />
        </div>
      </div>
      <div class="item item2">
        <div class="tip tip2">
          <img src="@/static/images/qyfw/hot.png" alt="" />
          <span>活动类</span>
        </div>
        <div class="title">
          <h5>MAS主办系列活动门票</h5>
        </div>
        <p>
          MAS平台主办的所有系列活动入场券（商务休闲活动除外，如高尔夫、品酒等活动）
        </p>
        <div class="price-box">
          <span class="price">¥20000</span>
          <span class="text">/次</span>
        </div>
        <div class="img-r">
          <img src="@/static/images/qyfw/discount4.png" alt="" />
        </div>
      </div>
      <div class="item item2">
        <div class="tip tip2">
          <img src="@/static/images/qyfw/hot.png" alt="" />
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
          <img src="@/static/images/qyfw/discount5.png" alt="" />
        </div>
      </div>
    </div>
    <div class="service">
      <h2>企业用户服务咨询</h2>
      <div class="service-mian">
        <div class="item">
          <div class="item-l">
            <img src="@/static/images/qyfw/tel.png" alt="" />
          </div>
          <div class="item-r">
            <h5>13910957544</h5>
            <p><span>(手机号同微信，添加请备注“公司+姓名”)</span></p>
          </div>
        </div>
        <div class="item">
          <div class="item-l">
            <img src="@/static/images/qyfw/mail.png" alt="" />
          </div>
          <div class="item-r">
            <h5 class="style">yangww@chinamas.cn</h5>
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
