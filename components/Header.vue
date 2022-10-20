<template>
  <div class="header">
    <nuxt-link to="/">
      <img class="logo" src="../static/images/logo.png" alt="" />
    </nuxt-link>
    <div class="search-box" @click="onSearch">
      <van-search
        v-model="searchValue"
        :placeholder="defaultValue"
        shape="round"
        @search="onSearch"
        left-icon=""
        readonly
      >
      </van-search>
      <svg
        @click="onSearch"
        t="1660024471536"
        class="icon icon-icon-sousuo"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="6067"
        width="24"
        height="24"
      >
        <path
          d="M495.537231 763.273846a267.736615 267.736615 0 1 0 0-535.473231 267.736615 267.736615 0 0 0 0 535.512616z m0-48.64a219.057231 219.057231 0 1 1 0-438.153846 219.057231 219.057231 0 0 1 0 438.153846z"
          fill="#999999"
          p-id="6068"
        ></path>
        <path
          d="M645.789538 670.129231a24.339692 24.339692 0 0 1 34.422154 0l103.266462 103.266461a24.339692 24.339692 0 1 1-34.422154 34.422154l-103.266462-103.266461a24.339692 24.339692 0 0 1 0-34.422154z m34.422154 34.422154a24.339692 24.339692 0 0 0 0-34.422154l103.266462 103.266461a24.339692 24.339692 0 1 0-34.422154 34.422154l-103.266462-103.266461a24.339692 24.339692 0 0 0 34.422154 0z"
          fill="#999999"
          p-id="6069"
        ></path>
      </svg>
    </div>
    <!-- 未登录 -->
    <span
      class="login"
      @click="loginShow = true"
      v-if="
        $store.state.token == '' ||
        $store.state.token == undefined ||
        $store.state.userInfo == ''
      "
      >登录</span
    >
    <!-- 登录成功 -->
    <img
      class="photo"
      :src="$store.state.userInfo.mas_user_header_img"
      alt=""
      v-else
    />
    <svg
      t="1660024181940"
      class="icon"
      @click="showPopup"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="5563"
      width="36"
      height="36"
    >
      <path
        d="M284.444444 483.555556h455.111112a28.444444 28.444444 0 0 1 0 56.888888H284.444444a28.444444 28.444444 0 0 1 0-56.888888z m0 170.666666h455.111112a28.444444 28.444444 0 0 1 0 56.888889H284.444444a28.444444 28.444444 0 0 1 0-56.888889z m0-341.333333h455.111112a28.444444 28.444444 0 0 1 0 56.888889H284.444444a28.444444 28.444444 0 0 1 0-56.888889z"
        fill="#333333"
        p-id="5564"
      ></path>
    </svg>
    <!-- 首页列表 -->
    <van-popup v-model="show" position="right" :style="{ height: '100%' }">
      <div class="popup-index">
        <div class="header">
          <nuxt-link to="/">
            <img class="logo" src="../static/images/logo.png" alt="" />
          </nuxt-link>
          <div class="search-box">
            <van-search
              v-model="searchValue"
              :placeholder="defaultValue"
              shape="round"
              @input="onSearch"
              left-icon=""
            >
              <!-- <div slot="right-icon" @click="onSearch"> -->
              <!-- <van-icon name="search" size="20" /> -->
              <!-- <i class="iconfont icon-icon-sousuo"></i> -->
              <!-- </div> -->
            </van-search>
            <svg
              @click="onSearch"
              t="1660024471536"
              class="icon icon-icon-sousuo"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="6067"
              width="24"
              height="24"
            >
              <path
                d="M495.537231 763.273846a267.736615 267.736615 0 1 0 0-535.473231 267.736615 267.736615 0 0 0 0 535.512616z m0-48.64a219.057231 219.057231 0 1 1 0-438.153846 219.057231 219.057231 0 0 1 0 438.153846z"
                fill="#999999"
                p-id="6068"
              ></path>
              <path
                d="M645.789538 670.129231a24.339692 24.339692 0 0 1 34.422154 0l103.266462 103.266461a24.339692 24.339692 0 1 1-34.422154 34.422154l-103.266462-103.266461a24.339692 24.339692 0 0 1 0-34.422154z m34.422154 34.422154a24.339692 24.339692 0 0 0 0-34.422154l103.266462 103.266461a24.339692 24.339692 0 1 0-34.422154 34.422154l-103.266462-103.266461a24.339692 24.339692 0 0 0 34.422154 0z"
                fill="#999999"
                p-id="6069"
              ></path>
            </svg>
          </div>
          <!-- 未登录 -->
          <span
            class="login"
            @click="loginShow = true"
            v-if="
              $store.state.token == '' ||
              $store.state.token == undefined ||
              $store.state.userInfo == ''
            "
            >登录</span
          >
          <!-- 登录成功 -->
          <img
            class="photo"
            :src="$store.state.userInfo.mas_user_header_img"
            alt=""
            v-else
          />
          <svg
            @click="show = !show"
            t="1660024260031"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5731"
            width="36"
            height="36"
          >
            <path
              d="M361.443556 321.223111l160.910222 160.881778 160.910222-160.881778a28.444444 28.444444 0 0 1 37.546667-2.360889l2.673777 2.360889a28.444444 28.444444 0 0 1 0 40.220445l-160.881777 160.910222 160.881777 160.910222a28.444444 28.444444 0 1 1-40.220444 40.220444l-160.910222-160.881777-160.910222 160.881777a28.444444 28.444444 0 0 1-37.546667 2.360889l-2.673778-2.360889a28.444444 28.444444 0 0 1 0-40.220444l160.881778-160.910222-160.881778-160.910222a28.444444 28.444444 0 0 1 40.220445-40.220445z"
              fill="#333333"
              p-id="5732"
            ></path>
          </svg>
        </div>
        <div class="channel-module">
          <div class="title">热门频道</div>
          <div class="content">
            <dl class="item">
              <dt>
                <img src="../static/images/qyfw.png" alt="" />
              </dt>
              <dd>企业服务</dd>
            </dl>
            <dl class="item">
              <dt>
                <img src="../static/images/dy.png" alt="" />
              </dt>
              <dd>订阅</dd>
            </dl>
            <dl class="item">
              <nuxt-link to="/ktyj">
                <dt>
                  <img src="../static/images/ktyj.png" alt="" />
                </dt>
                <dd>课题研究</dd>
              </nuxt-link>
            </dl>
            <dl class="item">
              <dt>
                <img src="../static/images/hyfw.png" alt="" />
              </dt>
              <dd>会员服务</dd>
            </dl>
            <dl class="item">
              <dt>
                <img src="../static/images/tzfw.png" alt="" />
              </dt>
              <dd>作者服务</dd>
            </dl>
            <dl class="item">
              <dt>
                <img src="../static/images/hd.png" alt="" />
              </dt>
              <dd>活动</dd>
            </dl>
          </div>
        </div>
        <div class="channel-module two">
          <div class="title">热门频道</div>
          <div class="content">
            <dl
              class="item"
              v-for="(item, index) in tabList"
              :key="index"
              @click="oNitem(index, item)"
            >
              <dt>
                <img
                  v-if="item.mas_menu_name == '找方法'"
                  src="../static/images/zff.png"
                  alt=""
                />
                <img
                  v-else-if="item.mas_menu_name == '大咖说'"
                  src="../static/images/kzt.png"
                  alt=""
                />
                <img
                  v-else-if="item.mas_menu_name == '读杂志'"
                  src="../static/images/dzz.png"
                  alt=""
                />
                <img
                  v-else-if="item.mas_menu_name == '逛书店'"
                  src="../static/images/gsd.png"
                  alt=""
                />
                <img
                  v-else-if="item.mas_menu_name == '见大咖'"
                  src="../static/images/jdk.png"
                  alt=""
                />
                <img
                  v-else-if="item.mas_menu_name == '学案例'"
                  src="../static/images/xal.png"
                  alt=""
                />
                <img
                  v-else-if="item.mas_menu_name == '淘资讯'"
                  src="../static/images/tzx.png"
                  alt=""
                />
                <img v-else src="../static/images/kzt.png" alt="" />
              </dt>
              <dd>{{ item.mas_menu_name }}</dd>
            </dl>
            <!-- <dl class="item">
              <dt>
                <img src="../static/images/xal.png" alt="" />
              </dt>
              <dd>学案例</dd>
            </dl>
            <dl class="item">
              <dt>
                <img src="../static/images/zff.png" alt="" />
              </dt>
              <dd>找方法</dd>
            </dl>
            <dl class="item">
              <dt>
                <img src="../static/images/jdk.png" alt="" />
              </dt>
              <dd>见大咖</dd>
            </dl>
            <dl class="item">
              <dt>
                <img src="../static/images/dzz.png" alt="" />
              </dt>
              <dd>读杂志</dd>
            </dl>
            <dl class="item">
              <dt>
                <img src="../static/images/tzx.png" alt="" />
              </dt>
              <dd>淘资讯</dd>
            </dl>
            <dl class="item">
              <dt>
                <img src="../static/images/gsd.png" alt="" />
              </dt>
              <dd>逛书店</dd>
            </dl>
            <dl class="item">
              <dt>
                <img src="../static/images/kzt.png" alt="" />
              </dt>
              <dd>看专题</dd>
            </dl> -->
          </div>
        </div>
      </div>
    </van-popup>
    <!--手机号登录弹框  -->
    <van-popup
      v-model="loginShow"
      position="right"
      :style="{ height: '100%', width: '100vw' }"
    >
      <div class="login-container">
        <div class="img-right">
          <img src="../static/images/login/login-r.png" alt="" />
        </div>
        <div class="change-tip" v-if="changeTip">
          <img src="../static/images/login/check.png" alt="" />
          <span>修改成功</span>
        </div>
        <div class="login-top">
          <div class="login-top-l" @click="loginShowFn">
            <img src="../static/images/login/goback.png" alt="" />
          </div>
          <div
            class="login-top-r"
            v-if="loginType == 0"
            @click="changeLogin('1')"
          >
            密码登录
          </div>
          <div
            class="login-top-r"
            v-if="loginType == 1 || loginType == 2"
            @click="changeLogin('0')"
          >
            手机号登录
          </div>
        </div>
        <div class="login-form" v-if="loginType == 0">
          <div class="title">手机登录</div>
          <div class="form-main">
            <div class="form-item">
              <input
                type="text"
                placeholder="请输入手机号"
                maxlength="11"
                v-model="tel"
                @blur="telBlur()"
              />
            </div>
            <div class="form-item">
              <input
                type="text"
                maxlength="6"
                placeholder="请输入验证码"
                v-model="code"
                @blur="codeBlur()"
              />
              <div
                v-show="sendState == 0"
                class="get-code"
                @click="loginGetCode()"
              >
                获取验证码
              </div>
              <!-- <div v-show="sendState == 1" class="get-code">发送中…</div> -->
              <div v-show="sendState == 2" class="get-code">
                {{ this.countDown.count }}后重新获取
              </div>
              <div
                v-show="sendState == 3"
                class="get-code"
                @click="loginGetCode()"
              >
                重新获取
              </div>
            </div>
            <div class="error-tips">{{ errTips }}</div>
            <div class="confirm">未注册用户手机验证后自动登录</div>
            <div class="login-btn" @click="loginTel()">登录</div>
          </div>
        </div>
        <div class="login-form" v-if="loginType == 1">
          <div class="title">密码登录</div>
          <div class="form-main">
            <div class="form-item">
              <input
                type="text"
                placeholder="请输入手机号"
                maxlength="11"
                v-model="tel"
                @blur="telBlur()"
              />
            </div>
            <div class="form-item">
              <input
                type="password"
                placeholder="请输入密码"
                v-model="password"
                @blur="passwordBlur()"
              />
              <div class="get-code" @click="changeLogin('2')">忘记密码</div>
            </div>
            <div class="error-tips">{{ errTips }}</div>
            <div class="confirm">未注册用户手机验证后自动登录</div>
            <div class="login-btn" @click="loginPwd()">登录</div>
          </div>
        </div>
        <div class="login-form" v-if="loginType == 2">
          <div class="title">重置密码</div>
          <div class="form-main">
            <div class="form-item">
              <input
                type="text"
                placeholder="请输入手机号"
                maxlength="11"
                v-model="tel"
                @blur="telBlur()"
              />
            </div>
            <div class="form-item">
              <input
                type="password"
                placeholder="请输入新密码"
                v-model="newPassword"
                @blur="newPasswordBlur()"
              />
            </div>
            <div class="form-item">
              <input
                type="password"
                placeholder="密码确认"
                v-model="confirmPassword"
                @blur="confirmPasswordBlur()"
              />
            </div>
            <div class="form-item">
              <input
                type="text"
                maxlength="6"
                placeholder="请输入验证码"
                v-model="code"
              />
              <div
                v-show="sendState == 0"
                class="get-code"
                @click="loginGetCode()"
              >
                获取验证码
              </div>
              <div v-show="sendState == 2" class="get-code">
                {{ this.countDown.count }}后重新获取
              </div>
              <div
                v-show="sendState == 3"
                class="get-code"
                @click="loginGetCode()"
              >
                重新获取
              </div>
            </div>
            <div class="error-tips">{{ errTips }}</div>
            <div class="login-btn" @click="signupSms()">提交</div>
          </div>
        </div>
        <div class="copyright">版权所有2022 MAS 京ICP备17056011号-2</div>
        <div class="account-protocol">
          <van-checkbox
            v-model="checked"
            shape="square"
            class="checkbox-icon"
          ></van-checkbox>
          <div class="protocol">登录即同意《服务协议》</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import { Toast } from "vant";
import config from "@/config/index";
export default {
  props: {
    islogin: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      searchValue: "",
      defaultValue: "输入搜索的内容",
      show: false, //是否展示首页列表弹框
      tabList: [], //导航栏列表
      loginShow: false, //手机号登录弹框是否展示
      loginType: 0, //0手机号登录1密码登录2找回密码
      tel: "", //手机号
      code: "", //验证码
      password: "", //密码
      checked: false, //隐私协议
      errTips: "", //错误提示
      newPassword: "", //新密码
      confirmPassword: "", //确认密码
      countDown: {
        show: true,
        count: "",
        timer: null,
      }, //倒计时
      sendState: 0, // '验证码发送'按钮的状态 0待发送 1发送中 2倒数时中 3重新发送
      changeTip: false, //是否展示修改成功弹框
    };
  },
  // async fetch() {
  //   let res = await this.$axios.notNeedlogin({
  //     className: "NavigationController",
  //     classMethod: "getLeftNavigation",
  //   });
  //   if (res.bol) {
  //     this.tabList = res.data;
  //   }
  // },
  async fetch() {
    if (
      this.$store.state.tabList == undefined ||
      this.$store.state.tabList == ""
    ) {
      let res = await this.$axios.notNeedlogin({
        className: "NavigationController",
        classMethod: "getLeftNavigation",
      });
      if (res.bol) {
        this.$store.commit("setTabList", res.data);
        return (this.tabList = res.data);
      }
    } else {
      this.tabList = this.$store.state.tabList;
    }

  },
  watch: {
    islogin: { //登录框是否展示
      handler(value) {
        if (value) {
          this.loginShow = value;
        }
      },
      deep: true,
    },
  },
  created() {
    // console.log(this.$store.state.userInfo, "$store.state.userInfo");
    let searchValue = this.$cookies.get("searchValue");
    if (searchValue) {
      this.defaultValue = searchValue;
    }
  },
  mounted() {
  },

  methods: {
    ...mapMutations(["setToken", "setUserInfo"]),
    //点击搜索
    onSearch() {
      this.$router.push({
        name: "search",
      });
    },
    //首页列表弹框
    showPopup() {
      this.show = true;
    },
    //关闭手机号绑定弹框
    loginShowFn() {
      this.loginType = 0;
      this.loginShow = false;
      this.tel = ""; //手机号
      this.code = ""; //验证码
      this.password = ""; //密码
      this.checked = false; //隐私协议
      this.errTips = ""; //错误提示
      this.newPassword = ""; //新密码
      this.confirmPassWord = ""; //确认密码
      this.$emit('onClose', false);
    },
    //点击每一个栏目
    oNitem(index, item) {
      this.show = false;
      document.body.scrollTop = 0;
      this.$store.commit("setSubTabId", item.mas_menu_url);
      this.$router.push({
        name: item.mas_menu_url,
        query: {
          menuId: item.mas_menu_id,
        },
      });
    },
    //手机号验证
    telBlur() {
      let regtel =
        /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/;
      if (this.tel == "") {
        this.errTips = "请输入手机号";
        return false;
      } else if (regtel.test(this.tel) == false) {
        this.errTips = "请输入正确手机号";
        return false;
      } else {
        this.errTips = "";
        return true;
      }
    },
    //验证手机号
    codeBlur() {
      if (this.code == "") {
        this.errTips = "请输入验证码";
        return false;
      } else if (/^\d{6}$/.test(this.code) == false) {
        this.errTips = "请输入正确的验证码";
        return false;
      } else {
        this.errTips = "";
        return true;
      }
    },
    //密码验证
    passwordBlur() {
      if (this.confirmPassWord == "") {
        this.errTips = "密码不能为空";
        return false;
      }
      // else if (
      //   /(?![A-Z]*$)(?![a-z]*$)(?![0-9]*$)(?![^a-zA-Z0-9]*$)/.test(this.code) ==
      //   false
      // ) {
      //   this.errTips =
      //     "密码必须由大写字母、小写字母、数字、特殊符号中的2种及以上类型组成!";
      //   return false;
      // }
      else {
        this.errTips = "";
        return true;
      }
    },
    newPasswordBlur() {
      if (this.newPassword == "" || this.confirmPassWord == "") {
        this.errTips = "新密码不能为空";
        return false;
      }
      // else if (
      //   /(?![A-Z]*$)(?![a-z]*$)(?![0-9]*$)(?![^a-zA-Z0-9]*$)/.test(this.code) ==
      //   false
      // ) {
      //   this.errTips =
      //     "密码必须由大写字母、小写字母、数字、特殊符号中的2种及以上类型组成!";
      //   return false;
      // }
      else {
        this.errTips = "";
        return true;
      }
    },
    confirmPasswordBlur() {
      if (this.confirmPassWord == "") {
        this.errTips = "确认密码不能为空";
        return false;
      }
      // else if (
      //   /(?![A-Z]*$)(?![a-z]*$)(?![0-9]*$)(?![^a-zA-Z0-9]*$)/.test(this.code) ==
      //   false
      // ) {
      //   this.errTips =
      //     "密码必须由大写字母、小写字母、数字、特殊符号中的2种及以上类型组成!";
      //   return false;
      // }
      else {
        this.errTips = "";
        return true;
      }
    },
    //点击登录方式切换
    changeLogin(type) {
      this.loginType = type;
      this.errTips = "";
    },
    //手机号验证码登录验证码接口
    loginGetCode() {
      console.log("9999");
      let _this = this;
      if (_this.telBlur()) {
        _this.CaptchaAppId();
      }
    },
    //获取图形验证码CaptchaAppId
    CaptchaAppId() {
      let _this = this;
      _this.$axios
        .notNeedlogin({
          className: "SendCode",
          classMethod: "getCaptchaAppId",
        })
        .then((res) => {
          if (res.bol) {
            _this.verificationCode(res.data);
          } else {
            return Toast({ duration: 1000, message: res.msg });
          }
        });
    },
    //手机号注册腾讯滑块验证
    verificationCode(val) {
      console.log(val, "getCaptchaAppId");
      let _this = this;
      // let langtion = 'zh-hk';
      let captchaId = val.toString(); //腾讯滑块验证码appid
      //生成一个滑块验证码对象
      var captcha = new TencentCaptcha(captchaId, function (res) {
        if (res.ret === 0) {
          // 记得把验证成功的票据和随机字符带到自己接口中去腾讯验证票据的真实性
          _this.getCommonCode(res.ticket, res.randstr);
        } else {
          return false;
        }
      });
      //  滑块多语言调用
      // captcha.initOpts.forceLang = langtion;
      captcha.langFun();
      // 滑块显示
      captcha.show();
    },
    //获取验证码
    getCommonCode(ticket, randstr) {
      let _this = this;
      // _this.sendState = 1;
      _this.$axios
        .notNeedlogin({
          data: {
            phone: _this.tel,
            Ticket: ticket,
            Randstr: randstr,
          },
          className: "SendCode",
          classMethod: "sendCode",
        })
        .then((res) => {
          if (res.bol) {
            _this.sendState = 2;
            _this.countDownFn();
          } else {
            _this.sendState = 3;
            Toast({ duration: 1000, message: res.msg });
          }
        });
    },
    // 倒计时
    countDownFn() {
      let _this = this;
      const TIME_COUNT = 60;
      _this.countDown.count = TIME_COUNT;
      _this.countDown.show = false;
      _this.countDown.timer = setInterval(() => {
        if (_this.countDown.count > 0 && _this.countDown.count <= TIME_COUNT) {
          _this.countDown.count--;
        } else {
          _this.countDown.show = true;
          clearInterval(_this.countDown.timer);
          this.sendState = 3;
          _this.countDown.timer = null;
        }
      }, 1000);
    },
    //手机号登录
    loginTel() {
      let _this = this;
      console.log("手机号登录");
      if (_this.telBlur() && _this.codeBlur()) {
        // if (!_this.checked) {
        //   return Toast({ duration: 1000, message: "请阅读并同意服务协议" });
        // }
        let params = {
          type: "",
          phone: _this.tel,
          code: _this.code,
          loginType: "mobileClient",
        };
        _this.publicLogin(params);
      }
    },
    //账号密码登录
    loginPwd() {
      let _this = this;
      console.log("密码登录");
      if (_this.telBlur() && _this.passwordBlur()) {
        let params = {
          type: 1,
          phone: _this.tel,
          password: _this.password,
          loginType: "mobileClient",
        };
        _this.publicLogin(params);
      }
    },
    //账号密码公共的登录方法
    publicLogin(val) {
      let _this = this;
      _this.$axios
        .notNeedlogin({
          data: val,
          className: "UserController",
          classMethod: "login",
        })
        .then((res) => {
          if (res.bol) {
            _this.setToken(res.data.token);
            _this.$cookies.set("token", res.data.token, config.cookieConfig);
            _this.setUserInfo(res.data);
            _this.$cookies.set("userInfo", res.data, config.cookieConfig);
            _this.loginShowFn();
            return Toast({ duration: 1000, message: res.msg });
            //fullPath为登录前的地址，登录成功后跳转到登录前的浏览地址
            //fullPath可以从nuxt的asyncData的from参数中获取
            //  let path = _self.fullPath || '/';
            //  _self.$router.push({ path: path.indexOf('/verify') === 0 ? '/' : path });
            // if (_this.isClose) {
            //   _this.$emit("getCloseData", false);
            // } else {
            //   let path = _this.$route.query.path || "/";
            //   _this.$router.push({
            //     path: _this.$route.query.path ? path : "/",
            //   });
            // }
          } else {
            return Toast({ duration: 1000, message: res.msg });
          }
        });
    },
    // 找回密码
    signupSms() {
      let _this = this;
      console.log("忘记密码");
      if (
        _this.telBlur() &&
        _this.newPasswordBlur() &&
        _this.confirmPasswordBlur() &&
        _this.codeBlur()
      ) {
        if (_this.newPassword != _this.confirmPassword) {
          return Toast({ duration: 1000, message: "两次密码输入不一致" });
        }
        _this.$axios
          .notNeedlogin({
            data: {
              phone: _this.tel,
              code: _this.code,
              password: _this.confirmPassword,
              // token: _this.$store.state.token,
            },
            className: "UserController",
            classMethod: "setPassword",
          })
          .then((res) => {
            if (res.bol) {
              _this.changeTip = true;
              setTimeout(() => {
                _this.sendState = 0;
                _this.loginType = 1;
                _this.changeTip = false;
              }, 3000);
            } else {
              Toast({ duration: 1000, message: res.msg });
            }
          });
      }
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/static/css/page-css/header.less";
</style>

