<template>
  <div class="page-search-list">
    <Header />
    <div class="search-list-header">
      <ul class="header-tabs">
        <li
          :class="current == index ? 'active' : ''"
          v-for="(item, index) in tabs"
          :key="index"
          @click="tabsFn(index)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="search-list-main">
      <div class="list-item">
        <div class="list-item-main">
          <img class="yh" src="../static/images/yh.png" alt="" />
          <h5 class="twoline">
            基于RPA技术的企业集团管理会计应用探索企业集团管理会计
          </h5>
          <span class="author">李晶晶 、黄静、 徐铭、 邬瑜骏</span>
          <div class="base">
            <div class="base-l twoline">
              本文聚焦探讨RPA机器人流程自动化技术在企业集团管理会计中拟…
            </div>
            <div class="base-r">
              <img src="../static/images/way/dks-img.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="list-item">
        <div class="list-item-main">
          <img class="yh" src="../static/images/yh.png" alt="" />
          <h5 class="twoline">
            基于RPA技术的企业集团管理会计应用探索企业集团管理会计
          </h5>
          <span class="author">李晶晶 、黄静、 徐铭、 邬瑜骏</span>
          <div class="base">
            <div class="base-l twoline">
              本文聚焦探讨RPA机器人流程自动化技术在企业集团管理会计中拟…
            </div>
            <div class="base-r">
              <img src="../static/images/way/dks-img.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="list-item">
        <div class="list-item-main">
          <img class="yh" src="../static/images/yh.png" alt="" />
          <h5 class="twoline">
            基于RPA技术的企业集团管理会计应用探索企业集团管理会计
          </h5>
          <span class="author">李晶晶 、黄静、 徐铭、 邬瑜骏</span>
          <div class="base">
            <div class="base-l twoline">
              本文聚焦探讨RPA机器人流程自动化技术在企业集团管理会计中拟…
            </div>
            <div class="base-r">
              <img src="../static/images/way/dks-img.png" alt="" />
            </div>
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
      current: 0, //tabs默认选中值
      tabs: ["全部", "找方法", "大咖说", "学案例", "淘资讯"],
    };
  },
  methods: {
    //点击tabs
    tabsFn(index) {
      this.current = index;
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/static/css/page-css/search-list.less";
</style>
