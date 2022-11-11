<template>
  <div class="common_mask">
    <div class="mask_box">
      <div class="top_content">
        <h2>课题合作（机构）</h2>
        <div class="person_form">
          <div class="item">
            <span>机构名称</span>
            <input
              type="text"
              placeholder="请输入"
              v-model="JGform.name"
              @blur="nameBlur()"
            />
          </div>
          <div class="item">
            <span>合作形式</span>
            <van-radio-group
              v-model="JGform.type"
              direction="horizontal"
              icon-size="14px"
            >
              <van-radio
                v-for="(it, idx) in cooperationForm"
                :key="idx"
                :name="it"
              >
                {{ it }}
                <template #icon="props">
                  <img
                    class="img-icon"
                    :src="
                      props.checked
                        ? require('@/static/images/ktyj/checked.png')
                        : require('@/static/images/ktyj/not-checked.png')
                    "
                  />
                </template>
              </van-radio>
            </van-radio-group>
          </div>
          <div class="select-group" v-closeType>
            <div class="item">
              <span>合作方式</span>
              <div class="input_box" @click="typeClick">
                <input
                  type="text"
                  placeholder="请选择"
                  v-model="JGform.direction"
                  readonly
                  @change="directionBlur()"
                />
                <img :class="typeShow ? 'select_img_rotate' : ''" src="@/static/images/ktyj/arrowright.png" alt="" />
              </div>
            </div>
            <ul class="select-item" v-show="typeShow">
              <li
                v-for="(item, index) in typeData"
                :key="index"
                :class="typeCurrent == index ? 'active' : ''"
                @click="typeFn(item.mas_tag_name, item.mas_tag_id, index)"
              >
                {{ item.mas_tag_name }}
              </li>
            </ul>
          </div>
          <div class="item">
            <span>联系方式</span>
            <input
              type="text"
              placeholder="请输入"
              v-model="JGform.contact"
              @blur="contactBlur()"
            />
          </div>
        </div>
        <div class="tip_box">
          感谢您的合作邀约，我们将在7个工作日内给您答复，或者您可以直接联系
        </div>
        <div class="btn_box" @click="JGVisibleForm()">提交</div>
      </div>
      <div class="close" @click="closeMask">
        <img src="@/static/images/ktyj/close.jpg" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      JGform: {
        name: "",
        type: "",
        direction: "",
        directionId: "",
        contact: "",
      }, //合作机构表单
      cooperationForm: [],
      typeData: [], //状态下拉菜单
      typeShow: false, //是否展示
      typeCurrent: "-1", //下拉默认选中项
    };
  },
  //点击空白处关闭下拉框
  directives: {
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
  created() {
    this.formFiltrate();
  },
  mounted() {},

  methods: {
    //表单筛选
    formFiltrate() {
      let _this = this;
      _this.$axios
        .notNeedlogin({
          className: "SpecialStudyController",
          classMethod: "getOption",
        })
        .then((res) => {
          if (res.bol) {
            _this.cooperationForm = res.data.xs;
            _this.typeData = res.data.tag;
            _this.JGform.type = _this.cooperationForm[0];
          } else {
            return Toast({ duration: 1000, message: res.msg });
          }
        });
    },
    //点击关闭按钮
    closeMask() {
      this.$emit("onClose", false);
    },
    //单选按钮
    checkedThis(name, obj) {
      this.JGform.type = name;
      console.log(name, obj);
    },
    //点击状态下拉框
    typeFn(item, id, index) {
      this.typeShow = false;
      this.JGform.direction = item;
      this.JGform.directionId = id;
      this.typeCurrent = index;
    },
    //状态
    typeClick() {
      this.typeShow = !this.typeShow; //点击显示或隐藏下拉框
    },
    //机构名称验证
    nameBlur() {
      if (this.JGform.name == "") {
        Toast({ duration: 1000, message: "请输入机构名称" });
        return false;
      } else {
        return true;
      }
    },
    //合作方向验证
    directionBlur() {
      if (this.JGform.direction == "") {
        Toast({ duration: 1000, message: "请选择合作方向" });
        return false;
      } else {
        return true;
      }
    },
    //联系方式验证
    contactBlur() {
      let regtel =
        /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/;
      if (this.JGform.contact == "") {
        Toast({ duration: 1000, message: "请输入联系方式" });
        return false;
      }
      // else if (regtel.test(this.JGform.contact) == false) {
      //   Toast({ duration: 1000, message: "请输入正确联系方式" });
      //   return false;
      // }
      else {
        return true;
      }
    },
    //点击合作机构提交按钮
    JGVisibleForm() {
      let _this = this;
      if (_this.nameBlur() && _this.directionBlur() && _this.contactBlur()) {
        _this.$axios
          .notNeedlogin({
            data: {
              tableType: 1,
              mas_company_name: _this.JGform.name,
              mas_company_hzxs: _this.JGform.type,
              mas_hz_tag: _this.JGform.directionId,
              mas_hz_contact: _this.JGform.contact,
            },
            className: "SpecialStudyController",
            classMethod: "insertTable",
          })
          .then((res) => {
            if (res.bol) {
              Toast({ duration: 2000, message: "提交成功" });
              _this.closeMask();
            } else {
              Toast({ duration: 2000, message: res.msg });
            }
          });
      }
    },
  },
};
</script>
<style lang="less" scoped>
.common_mask {
  transition: transform 0.3s ease-in-out;
  width: 100%;
  position: fixed;
  height: 100%;
  background: rgb(0 0 0 / 60%);
  top: 0px;
  z-index: 999;
  display: flex;
  align-items: center;
}
.mask_box {
  margin: 0 auto;
}
.top_content {
  width: 275px;
  height: 336px;
  padding: 25px 20px;
  background: #ffffff;
  border-radius: 8px;
  margin: 0 auto;
}

.top_content h2 {
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: #333333;
  line-height: 18px;
  padding-bottom: 16px;
}
.img-icon {
  padding-top: 1px;
}
.select_img_rotate {
  transform: rotate(180deg);
  transition: transform 0.25s,
  -webkit-transform 0.25s,
  -moz-transform 0.25s;
}
.select-group {
  height: 50px;
}
.select-group .select-item {
  position: relative;
  z-index: 997;
  width: 100%;
  height: 116px;
  background: #ffffff;
  border: 0.5px solid #e7e7e7;
  scrollbar-width: none; /// firefox /
  -ms-overflow-style: none; /// IE 10+ */
  overflow-x: hidden;
  overflow-y: auto;
  margin-top: 4px;
  li {
    width: auto;
    height: 26px;
    background-color: #fff;
    padding: 0px 7px 0px 12px;
    font-size: 14px;
    font-weight: 400;
    text-align: left;
    color: #333333;
    line-height: 26px;
  }
  li:hover {
    background-color: #edf4ff;
  }

  li.active {
    font-weight: 500;
    background: #f2f3f5;
  }
}
.person_form .item {
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: 0.5px solid #e7e7e7;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  color: #333333;
  line-height: 20px;
}
.person_form .item:last-child {
  border-bottom: none;
}

.person_form .item span {
  width: 26%;
  display: inline-block;
}
.person_form .item input {
  width: 74%;
  border: none;
}
.input_box {
  width: 74%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.input_box input {
  width: 90%;
}
.input_box img {
  width: 11px;
  height: 6px;
}
input:focus {
  outline: none;
  border: none;
  box-shadow: none;
}

input::-webkit-input-placeholder {
  /* WebKit browsers */
  font-size: 14px;
  font-weight: 400;
  color: #cccccc;
  line-height: 20px;
}

input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  font-size: 14px;
  font-weight: 400;
  color: #cccccc;
  line-height: 20px;
}

input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  font-size: 14px;
  font-weight: 400;
  color: #cccccc;
  line-height: 20px;
}

input:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  font-size: 14px;
  font-weight: 400;
  color: #cccccc;
  line-height: 20px;
}
.tip_box {
  width: 234px;
  height: 36px;
  padding: 8px 20px;
  background: #fff6f1;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  color: #fa6725;
  line-height: 17px;
}
.btn_box {
  width: 274px;
  height: 40px;
  background: linear-gradient(90deg, #ff4e5c 0%, #ff9261 82%, #fa6725 100%);
  border-radius: 80px;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  color: #ffffff;
  line-height: 40px;
  margin-top: 10px;
}
.close {
  width: 36px;
  height: 36px;
  margin: 0 auto;
  margin-top: 24px;
}
</style>
