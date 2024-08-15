<!--
 描述: 首页大屏
 作者: kayla wang
 日期: 2024-08-14
-->
<script setup lang="ts">
</script>

<template>
  <div class="home-container">
    <div class="header">
      <div class="weather"></div>
      <h2></h2>
      <div class="showTime"></div>
    </div>
    <div class="mainBox">
      <div class="item left">
      </div>
      <div class="item center">
      </div>
      <div class="item right">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-container{
  .header {
    height: 50px;
    border-bottom: 1px solid #ffffff;
  }
  .mainBox {
    display: flex;
    height: calc(100vh - 50px);
    .left {
      flex-grow:3;
      border-right: 1px solid  #ffffff;
    }
    .center {
      flex-grow:5;
      border-right: 1px solid  #ffffff;
    }
    .right {
      flex-grow:3;
    }
  }
}
</style>
