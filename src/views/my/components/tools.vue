<template>
    <div class="w-38 h-18 center rounded bg-white mt-1 font " >
        <div class="h-4 border-b ml-1 flex justify-between items-center">
            <span class="text font-bold " >我的工具</span>
        </div>
        <div class="flex items-center justify-around">
            <div class="flex flex-col text-center ">
                <span class="text font-bold text-red-400">0</span>
                <span class="font-bold">收藏夹</span>
            </div>
            <div class="flex flex-col text-center ">
                <span class="text font-bold text-red-400">0</span>
                <span class="font-bold">浏览历史</span>
            </div>
            <div class="flex flex-col text-center ">
                <span class="text font-bold text-red-400">1</span>
                <span class="font-bold">关注店铺</span>
            </div>
            <div class="flex flex-col text-center ">
                <span class="text font-bold text-red-400">0</span>
                <span class="font-bold">购物车</span>
            </div>
        </div>
        <div  class="flex items-center justify-around mt-2 ">
        <div class="flex flex-col text-center">
            <span class="icon-gerenxinxi iconfont text-red-300"></span>
            <span class="font-bold">常用信息</span>
        </div>

        <div class="flex flex-col text-center ">
            <span class="icon-drxx54 iconfont text-red-300"></span>
            <span class="font-bold">意见反馈</span>
        </div>
        <div class="flex flex-col text-center">
            <span class="icon-kefu iconfont text-red-300"></span>
            <span class="font-bold">我的客户</span>
        </div>
        <div class="flex flex-col text-center">
            <span class="icon-fenlei iconfont text-red-300"></span>
            <span class="font-bold">展开更多</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.center{
    position: relative;
    left: 50%;
    translate:-50%;
}
.font{
font-family: '楷体';
}
.text{
    font-size:.373333rem /* 14/37.5 */;
}
</style>