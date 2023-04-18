<template>
  <div class="w-screen h-18 bg-img">
    <!-- 搜索建议栏 -->
    <div class="flex overflow-x-auto scrollbar-hidden ml-1">
      <ul class="flex whitespace-nowrap mt-1 px-1 ">
        <li 
        class="bg-light-300  mx-0.5 px-1 leading-3 whitespace-nowrap rounded-4xl flex items-center justify-center"
        v-for="(item, index) in state.suggestion" :key="item.id">
          <span v-if="index === 2" class="mr-0.5">
            <svg t="1681847382951" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1505" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="14"><path d="M454.948864 51.2s307.44064 95.637504 239.4112 391.2448c0 0 34.015232-26.082304 68.02944-78.24896 0 0 153.066496 121.720832 153.066496 295.60832 0 121.720832-102.044672 226.052096-306.132992 312.99584H426.16832C253.476864 915.2 109.568 801.086464 109.568 627.2 109.568 302.261248 431.476736 356.523008 454.948864 51.2z m61.558784 460.8s-144.02048 69.943296-172.0064 200.24832c-15.023104 69.94944 3.391488 157.294592 95.47264 260.55168h144.5632c68.02944-98.535424 70.863872-179.683328 8.503296-243.441664C456.981504 598.943744 516.506624 512 516.506624 512z" fill="#FF4900" p-id="1506"></path></svg>
         </span>
          <span class="text-center text-current  font-semibold tracking-2px">{{ item.sug }}</span>
        </li>
      </ul>
    </div>
    <!-- 图标导航栏 -->
    <div class="bg-red-400 w-36 h-20 xcenter "></div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
const state = reactive({
  suggestion: [
    { id: 1, sug: "南昌" },
    { id: 2, sug: "南昌的景点" },
    { id: 3, sug: "澳门机票次卡320起" },
    { id: 4, sug: "江西南昌" },
    { id: 5, sug: "南昌美食" },
  ],
});
</script>

<style scoped>
.bg-img {
  background-image: url("@/assets/images/1681741392.webp");
  background-position: 0 0;
  background-size: cover;
  background-repeat: no-repeat;
}
/* 隐藏左右拖动的导航条 */
::-webkit-scrollbar {
  display: none;
}
.xcenter{
    position: relative;
    left: 50%;
    top: 15px;
    transform: translateX(-50%);  
}
</style>
