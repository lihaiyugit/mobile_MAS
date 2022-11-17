<template>
  <div class="page-container">
    <Header />
    <div
      class="page-header"
      :style="{
        backgroundImage:
          memberType == 2
            ? 'url(' + require('@/static/images/hyfw/banner.png') + ')'
            : 'url(' + require('@/static/images/hyfw/article_bg.png') + ')',
      }"
    >
      <div class="user-info">
        <div class="left">
          <img src="@/static/images/hyfw/head.png" alt="" />
        </div>
        <div class="right">
          <h6 class="light">吹口琴的秃子</h6>
          <p>申请成为会员，您可以畅游MAS平台</p>
          <p class="time" style="display: none">2023.11.07到期</p>
          <div class="member">
            <div class="type">
              <img src="@/static/images/hyfw/vip.png" alt="" />
              <span>PLUS会员</span>
            </div>
            <div class="type">
              <img src="@/static/images/hyfw/wz.png" alt="" />
              <span>文章会员</span>
            </div>
          </div>
        </div>
      </div>
      <ul class="tabs">
        <li @click="typeFn(2)" :class="memberType == 2 ? 'active' : ''">
          <span>PLUS会员</span>
        </li>
        <li @click="typeFn(1)" :class="memberType == 1 ? 'articleActive' : ''">
          <span>文章会员</span>
        </li>
      </ul>
    </div>
    <div class="page-content">
      <div class="vip_container">
        <p class="info">
          PLUS会员可以畅游管理会计研究网全站专业文章、视频课程、电子刊等内容。
        </p>
        <div class="vip-type" v-if="memberType == 2">
          <!-- <dl>
            <dt>
              <img class="mark" src="@/static/images/hyfw/plus.png" alt="" />
              <span class="month">1个月</span>
              <div class="price">
                <span class="icon">¥</span>
                <span class="num">30</span>
              </div>
            </dt>
            <dd><span>MAS PLUS会员</span></dd>
          </dl>
          <dl>
            <dt>
              <img class="mark" src="@/static/images/hyfw/plus.png" alt="" />
              <span class="month">6个月</span>
              <div class="price">
                <span class="icon">¥</span>
                <span class="num">180</span>
              </div>
            </dt>
            <dd><span>MAS PLUS会员</span></dd>
          </dl> -->
          <dl
            v-for="(item, index) in memberList"
            :key="index"
            :class="vipType == item.id ? 'plus-checked' : ''"
            @click="vipTypeFn(item.id, item.price)"
          >
            <div class="tj" v-if="index == 2"><span>推荐订阅</span></div>
            <dt>
              <img class="mark" src="@/static/images/hyfw/plus.png" alt="" />
              <span class="month">{{ item.month }}个月</span>
              <div class="price">
                <span class="icon">¥</span>
                <span class="num">{{ item.price }}</span>
              </div>
            </dt>
            <dd><span>MAS PLUS会员</span></dd>
          </dl>
        </div>
        <div class="vip-type article-type" v-else>
          <!-- <dl>
            <dt>
              <img
                class="mark"
                src="@/static/images/hyfw/article_vip.png"
                alt=""
              />
              <span class="month">1个月</span>
              <div class="price">
                <span class="icon">¥</span>
                <span class="num">30</span>
              </div>
            </dt>
            <dd><span>MAS PLUS会员</span></dd>
          </dl>
          <dl>
            <dt>
              <img
                class="mark"
                src="@/static/images/hyfw/article_vip.png"
                alt=""
              />
              <span class="month">6个月</span>
              <div class="price">
                <span class="icon">¥</span>
                <span class="num">180</span>
              </div>
            </dt>
            <dd><span>MAS PLUS会员</span></dd>
          </dl> -->
          <dl
            v-for="(item, index) in acticleList"
            :key="index"
            :class="vipType == item.id ? 'article-checked' : ''"
            @click="vipTypeFn(item.id, item.price)"
          >
            <div class="tj" v-if="index == 2"><span>推荐订阅</span></div>
            <dt>
              <img
                class="mark"
                src="@/static/images/hyfw/article_vip.png"
                alt=""
              />
              <span class="month">{{ item.month }}个月</span>
              <div class="price">
                <span class="icon">¥</span>
                <span class="num">{{ item.price }}</span>
              </div>
            </dt>
            <dd><span>MAS PLUS会员</span></dd>
          </dl>
        </div>
      </div>
      <div class="pay-type">
        <div class="title">支付方式</div>
        <ul class="type-box">
          <li>
            <img src="@/static/images/hyfw/money.png" alt="" />
            <div class="right-box">
              <div class="right-l">余额抵扣</div>
              <div class="right-r">暂未开通</div>
            </div>
          </li>
          <li>
            <img src="@/static/images/hyfw/wx.png" alt="" />
            <div class="right-box">
              <div class="right-l">微信</div>
              <van-radio-group v-model="radio">
                <van-radio name="1"></van-radio>
              </van-radio-group>
            </div>
          </li>
        </ul>
      </div>
      <div class="title-bg">MAS用户尊享</div>
      <div class="equity">
        <h2>用户权益</h2>
        <ul class="equity-main">
          <li>
            <div class="li-l">
              <img src="@/static/images/hyfw/qy1.png" alt="" />
            </div>
            <div class="li-r">
              <h6>通用权益</h6>
              <p>免费文章阅读权/投稿<br />点亮等级徽章</p>
            </div>
          </li>
          <li>
            <div class="li-l">
              <img src="@/static/images/hyfw/qy2.png" alt="" />
            </div>
            <div class="li-r">
              <h6>增值服务</h6>
              <p>申请成为讲师<br />不定期增值服务</p>
            </div>
          </li>
          <li>
            <div class="li-l">
              <img src="@/static/images/hyfw/qy3.png" alt="" />
            </div>
            <div class="li-r">
              <h6>培训课及课程会员</h6>
              <p>课程购买享折扣</p>
            </div>
          </li>
          <li>
            <div class="li-l">
              <img src="@/static/images/hyfw/qy4.png" alt="" />
            </div>
            <div class="li-r">
              <h6>订阅&会员</h6>
              <p>VIP购买享折扣</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="grade">
        <h2>权益等级</h2>
        <div class="grade-main">
          <div class="title">
            <h6>贡献值</h6>
            <span>消费及投稿等动作均能提升贡献值</span>
          </div>
          <div class="grade-main-mian">
            <table border="0" cellspacing="0" cellpadding="0" class="table">
              <thead class="thead">
                <tr>
                  <th>条件</th>
                  <th>积分条件</th>
                  <th>贡献值</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src="@/static/images/hyfw/dj1.png" alt="" />
                    <span>童生</span>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <img src="@/static/images/hyfw/dj2.png" alt="" />
                    <span>秀才</span>
                  </td>
                  <td>500</td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <img src="@/static/images/hyfw/dj3.png" alt="" />
                    <span>举人</span>
                  </td>
                  <td>1000</td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <img src="@/static/images/hyfw/dj4.png" alt="" />
                    <span>贡士</span>
                  </td>
                  <td>3000</td>
                  <td>50</td>
                </tr>
                <tr>
                  <td>
                    <img src="@/static/images/hyfw/dj5.png" alt="" />
                    <span>进士</span>
                  </td>
                  <td>6000</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>
                    <img src="@/static/images/hyfw/dj6.png" alt="" />
                    <span>探花</span>
                  </td>
                  <td>10000</td>
                  <td>300</td>
                </tr>
                <tr>
                  <td>
                    <img src="@/static/images/hyfw/dj7.png" alt="" />
                    <span>榜眼</span>
                  </td>
                  <td>30000</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>
                    <img src="@/static/images/hyfw/dj8.png" alt="" />
                    <span>状元</span>
                  </td>
                  <td>60000</td>
                  <td>1000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="value-added">
        <h2>增值权益</h2>
        <div class="added-main">
          <ul class="added-type">
            <li>
              <img src="@/static/images/hyfw/jf.png" alt="" />
              <p>送积分</p>
            </li>
            <li>
              <img src="@/static/images/hyfw/jb.png" alt="" />
              <p>赚金币</p>
            </li>
            <li>
              <img src="@/static/images/hyfw/zk.png" alt="" />
              <p>享折扣</p>
            </li>
          </ul>
          <div class="info-box">
            <p>
              送积分：MAS用户均可通过学习、互动、参与等形式获得不同数额积分，随着积分数量的升高，用户可以获得不同等级的权益。
            </p>
            <p>
              赚金币：MAS用户亦可通过学习、互动、参与等形式获得不同数额金币，可用金币换购任一付费内容。
            </p>
            <p>
              享折扣：MAS用户对着积分以及购买服务的累计，可以升级到不同等级，点亮等级会长，享受该等级不同权益。
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="base-popup">
      <div class="popup-main">
        <div class="left">
          <div class="price">
            <span class="icon">¥</span>
            <span class="num">{{ memberprice }}</span>
          </div>
          <div class="details" @click="detailShowPopup">
            <span>查看明细</span>
            <img src="@/static/images/hyfw/down.png" alt="" />
          </div>
        </div>
        <div class="right">
          <div class="open">立即开通</div>
          <p @click="equityShowPopup">查看<span>《PLUS会员权益》</span></p>
        </div>
      </div>
    </div>
    <!-- 支付明细 -->
    <van-popup
      v-model="detailShow"
      position="bottom"
      closeable
      round
      :style="{ height: '42%' }"
    >
      <div class="detail-pay-box">
        <div class="title">支付明细</div>
        <ul class="pay-info">
          <li>
            <div class="headline">商品价</div>
            <div class="price"><span>¥</span>360.00</div>
          </li>
          <li>
            <div class="headline">余额抵扣</div>
            <div class="price">-<span>¥</span>0.00</div>
          </li>
          <li>
            <div class="headline">合计</div>
            <div class="price"><span>¥</span>360.00</div>
          </li>
        </ul>
      </div>
    </van-popup>
    <!-- 会员权益弹框 -->
    <van-popup
      v-model="equityShow"
      position="bottom"
      closeable
      round
      :style="{ height: '46%' }"
    >
      <div class="equity-container">
        <div class="header-box">
          <div class="header-mian">
            <div
              class="text"
              :style="{
                backgroundImage:
                  memberType == 2
                    ? 'url(' + require('@/static/images/hyfw/tq_vip.png') + ')'
                    : 'url(' +
                      require('@/static/images/hyfw/wz_icon.png') +
                      ')',
              }"
            >
              <span class="text-tip"
                >{{ memberType == 2 ? "PLUS会员特权" : "文章会员特权" }}
              </span>
              <span class="line"></span>
            </div>
          </div>
        </div>
        <ul class="member" v-if="memberType == 2">
          <li>
            <span></span>
            <p>赠阅《管理会计研究》创刊以来所有电子刊</p>
          </li>
          <li>
            <span></span>
            <p>畅读管理会计研究网付费文章</p>
          </li>
          <li>
            <span></span>
            <p>观看全年《MAS大讲堂》课程直播及回看</p>
          </li>
          <li>
            <span></span>
            <p>观看全年《MAS对话》高端访谈栏目</p>
          </li>
          <li>
            <span></span>
            <p>观看全年“走进名企”实务直播栏目</p>
          </li>
          <li>
            <span></span>
            <p>优先受邀参加主题沙龙、年度峰会等线下活动</p>
          </li>
        </ul>
        <ul class="article" v-else>
          <li>
            <img src="@/static/images/hyfw/zff.png" alt="" />
            <div class="topic">
              <h6>找方法</h6>
              <p>前沿理论 · 管理洞见 · 工具方法 · 技术应用</p>
            </div>
          </li>
          <li>
            <img src="@/static/images/hyfw/xal.png" alt="" />
            <div class="topic">
              <h6>学案例</h6>
              <p>探企业实践，览成功秘诀</p>
            </div>
          </li>
          <li>
            <img src="@/static/images/hyfw/tzx.png" alt="" />
            <div class="topic">
              <h6>淘资讯</h6>
              <p>新鲜掌握热点，精准洞悉趋势</p>
            </div>
          </li>
          <li>
            <img src="@/static/images/hyfw/dks.png" alt="" />
            <div class="topic">
              <h6>大咖说</h6>
              <p>前沿理论、热点荐读、大咖观点一网打尽</p>
            </div>
          </li>
        </ul>
      </div>
    </van-popup>
    <!-- 支付确认弹框 -->
    <van-popup v-model="confirmShow" class="confirm-popup">
      <div class="confirm-main">
        <h6>支付确认</h6>
        <p>如支付遇到问题或长时间未跳转， 建议您选择其他支付方式</p>
        <div class="btn-box">
          <div class="btn" @click="onCancel">取消支付</div>
          <div class="btn" @click="onComplete">已完成支付</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  layout: "not",
  data() {
    return {
      radio: "1",
      detailShow: false, //是否展示支付明细弹框
      equityShow: false, //是否展示会员权益弹框
      confirmShow: false, //是否展示支付确认弹框
      memberType: 2, //会员类型 2 mas会员 1文章
      vipType: 3, //mas会员价格id
      memberList: [
        { id: 1, money: 1, price: 30 },
        { id: 2, money: 6, price: 180 },
        { id: 3, money: 12, price: 360 },
      ], //会员列表
      acticleList: [
        { id: 4, money: 1, price: 30 },
        { id: 5, money: 6, price: 180 },
        { id: 6, money: 12, price: 360 },
      ], //文章列表
      memberprice: "", //会员选中价格
    };
  },
  mounted() {
    this.memberprice = this.memberList[2].price;
  },
  methods: {
    // 点击支付明细
    detailShowPopup() {
      this.detailShow = true;
    },
    //点击查看会员权益
    equityShowPopup() {
      this.equityShow = true;
    },
    //点击取消支付
    onCancel() {
      this.confirmShow = false;
    },
    //点击已完成支付
    onComplete() {
      this.confirmShow = false;
    },
    //会员类型
    typeFn(num) {
      this.memberType = num;
      if (num == 1) {
        this.vipType = 6;
        this.memberprice = this.acticleList[2].price;
      } else {
        this.vipType = 3;
        this.memberprice = this.memberList[2].price;
      }
      console.log(this.vipType);
    },
    //mas 会员价格类型
    vipTypeFn(type, price) {
      this.vipType = type;
      this.memberprice = price;
    },
  },
};
</script>

<style lang="less" scoped>
@import "../static/css/page-css/hyfw.less";
</style>
