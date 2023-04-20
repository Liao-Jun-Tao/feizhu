<template>
    <div class="bg-red-500 border-red-600 border   rounded w-36 h-19 xcenter mt-1">
    <div class="bg-light-50 border-red-600 border   rounded ">
        <div class="font-bold flex justify-around items-center h-5 fontsize">
            <div>北京市</div>
            <div class="iconfont icon-zhuanhuan"></div>
            <div>上海市</div>
        </div>
        <!-- 分割线 -->
        <div class="w-26 h-0.1 bg-gray-200 xcenter"></div>
        <div class="h-5 flex items-center ">
            <span class="fontsize-1 font-bold ml-3">05月03日</span>
            <span>今日开售5月4日火车票</span>
        </div>
        <div class="w-26 h-0.1 bg-gray-200 xcenter"></div>
        <div class="flex items-center justify-around h-5">
            <div class="bg-yellow-300 bor h-3 w-12 rounded-lg text-center">搜索机票</div>
            <div  class="bg-yellow-300 h-3 w-12 text-center rounded-lg">搜火车票</div>
        </div>
    </div>
    <div class="text-light-50">
        <span class="iconfont icon-naozhong text-yellow-200"></span>
        <span>全球特价机票, 低至1折起!</span>
        <span>查询底价>></span>
        <span class="iconfont icon-you "></span>
    </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.xcenter{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);  
}
.fontsize{
    font-size:20px;
}
.fontsize-1{
    font-size: 18px;
}
</style>
