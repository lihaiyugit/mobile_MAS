<template>
  <div class="page-search">
    <div class="search-header">
      <van-search
        v-model="searchValue"
        show-action
        shape="round"
        autofocus
        placeholder="输入搜索的内容"
        @input="onSearch"
        @cancel="onCancel"
        left-icon=""
      />
      <img
        @click="onConfirmSearch"
        class="search-icon"
        src="../static/images/icons/search-icon.png"
        alt=""
      />
    </div>
    <div class="recommend-main" v-if="recommendList.length > 0">
      <ul class="recommend-list">
        <li
          class="oneline"
          v-for="(item, index) in recommendList"
          :key="index"
          @click="goDetails('dks', 601)"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
    <div class="search-main" v-else>
      <div class="search-history" v-if="historyList.length > 0">
        <div class="history-header">
          <div class="history-header-l">历史搜索</div>
          <div class="history-header-r">
            <img
              src="../static/images/icons/del.png"
              alt=""
              @click="handleDelete()"
            />
          </div>
        </div>
        <ul class="history-list" id="tagList">
          <li v-for="(item, index) in historyList" :key="index">{{ item }}</li>
          <li v-if="showBtnZK && showDivZK" @click="restoreTags">
            <img src="../static/images/icons/more.png" alt="" />
          </li>
          <li v-else @click="cuttingTags">
            <img class="rotate" src="../static/images/icons/more.png" alt="" />
          </li>
        </ul>
      </div>
      <div class="search-history">
        <div class="history-header">
          <div class="history-header-l">站内热词</div>
          <div class="history-header-r">
            <img src="../static/images/icons/update.png" alt="" />
          </div>
        </div>
        <ul class="history-list">
          <li v-for="(item, index) in hotList" :key="index">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { Dialog } from "vant";
import config from "@/config/index";
export default {
  layout: "not",
  data() {
    return {
      searchValue: "", //搜索词
      historyList: [
        "管理会计咨询",
        "数字化转型咨询",
        "预算管理",
        "财务数字化",
        "管理会计咨询",
        "数字化转型咨询",
        "财务共享",
        "预算管理",
        "财务数字化",
        "管理会计咨询",
        "数字化转型咨询",
        "财务共享",
      ], //历史搜索记录
      newHistoryList: [
        "管理会计咨询",
        "数字化转型咨询",
        "预算管理",
        "财务数字化",
        "管理会计咨询",
        "数字化转型咨询",
        "财务共享",
        "预算管理",
        "财务数字化",
        "管理会计咨询",
        "数字化转型咨询",
        "财务共享",
      ],
      hotList: [
        "预算管理",
        "财务数字化",
        "成本管理",
        "管理会计",
        "合并报表",
        "信息化",
        "财务管理",
      ], //站内热词列表
      showBtnZK: false,
      showDivZK: false,
      recommendList: [],
    };
  },
  created() {
    let historyList = this.$cookies.get("searchHistory");
    if (historyList) {
      this.newHistoryList = historyList;
      this.historyList = historyList;
    }
    let searchValue = this.$cookies.get("searchValue");
    if (searchValue) {
      this.searchValue = searchValue;
    }
  },
  mounted() {
    this.cuttingTags();
    this.focusEvent();
  },
  methods: {
    //解决van-search自动聚焦失效问题
    focusEvent() {
      this.$nextTick(() => {
        try {
          const input =
            document.getElementsByClassName("van-field__control")[0];
          input.focus();
        } catch (e) {}
      });
    },

    //实时搜索
    onSearch(val) {
      this.searchValue = val;
      if (val != "") {
        this.recommendList = [
          { id: "1", title: "中国国际管理会计产业发展大会MACC2019年…" },
          { id: "2", title: "践行管理会计 促进价值提升" },
          { id: "3", title: "2019中国管理会计全国公益高峰论坛安徽站在…" },
          { id: "4", title: "管理会计案例索引（十）" },
          { id: "5", title: "关于印发财政部第三届管理会计咨询专家名单…" },
          { id: "6", title: "管理会计案例索引（九）" },
          { id: "7", title: "管理会计案例索引（十）" },
          { id: "8", title: "中国国际管理会计产业发展大会MACC2019年…" },
          { id: "9", title: "中国国际管理会计产业发展大会MACC2019年…" },
          { id: "10", title: "关于印发《管理会计应用指引第204号——作业…" },
        ];
      } else {
        this.recommendList = [];
      }
    },
    //点击确认搜索
    onConfirmSearch() {
      console.log(this.searchValue, "999");
      this.$cookies.set("searchValue", this.searchValue, config.cookieConfig);
      //将搜索关键字添加到历史记录
      if (this.newHistoryList.indexOf(this.searchValue) !== -1) {
        // this.historyList.splice(this.historyList.indexOf(this.searchValue), 1);
      } else {
        this.newHistoryList.unshift(this.searchValue);
        console.log(this.newHistoryList, "this.historyList");
      }
      //存储到本地
      this.$cookies.set(
        "searchHistory",
        this.newHistoryList,
        config.cookieConfig
      );
      //  console.log(this.$cookies.get('searchHistory'),'999449')
      this.$router.push({
        name: "search-list",
      });
    },
    //取消搜索词
    onCancel() {
      console.log("取消");
    },
    // 恢复所有标签
    restoreTags() {
      this.historyList = this.newHistoryList;
      this.showBtnZK = false;
    },
    // 切割标签
    // 获取父容器所有的子节点,然后进行遍历操作，根据子节点的offsetLeft属性进行判断，
    // 因为最左边的那个节点的offsetLeft永远是0，所以可以判断出现了几行，超过2行截断数据。
    cuttingTags() {
      let idx = 0;
      let count = 0;
      let iIndex0 = 0;
      this.$nextTick(() => {
        // 获取所有标签节点
        let childTags = document.querySelector("#tagList").childNodes;
        childTags.forEach((item, index) => {
          // 把第一个标签的左偏移保存
          // if(index === 0){
          //   // console.log(3333333333333, item.offsetLeft);
          //   iIndex0 = item.offsetLeft
          // }
          // 把第一个标签的左偏移保存，且如果第一个没有值，取下一个
          iIndex0 = iIndex0 ? iIndex0 : item.offsetLeft;
          // 判断有几个标签在最左边，iIndex0判断第一个要不要作为标准来判断
          if (iIndex0 && item.offsetLeft === iIndex0) {
            count++;
            if (count === 3) {
              idx = index - 1;
              this.showDivZK = true;
              this.showBtnZK = true;
            }
          }
        });
        // 如果idx有值了，就对数组进行切割
        if (idx > 0) {
          this.historyList = [...new Set(this.historyList)].slice(0, idx);
        }
      });
    },
    //删除历史搜索记录
    handleDelete() {
      Dialog.confirm({
        title: "清空历史搜索",
        message: "确定清空全部历史搜索？",
        confirmButtonText: "清除",
      })
        .then(() => {
          this.historyList = [];
          this.$cookies.remove("searchHistory");
          // deleteLabel({
          //   id: id,
          // }).then((res) => {
          //   if (res.code == 200) {
          //     _this.$toast.success({ duration: 1000, message: "删除成功" });
          //     _this.getTagList();
          //   } else {
          //     _this.$toast.fail(res.msg);
          //   }
          // });
        })
        .catch(() => {});
    },
    //点击到详情
    goDetails(url, id) {
      this.$store.commit("setSubTabId", url);
      this.$router.push({
        path: `/${url}/${id}`,
      });
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/static/css/page-css/search.less";
</style>
