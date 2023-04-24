<template>
    <div class="w-38 h-13 center rounded bg-white mt-1 font ">

        <div class="h-4 border-b ml-1 flex justify-between items-center">
            <span class="text font-bold " >我的旅行回忆</span>
            <span class="mr-4 font-bold text-red-400">进入回忆<i class="icon-xiangyoujiantou iconfont "></i></span>
        </div>

        <div class="flex">
        <div class="relative">
            <img class="w-12 ml-1 rounded mt-0.5" src="https://i.328888.xyz/2023/04/23/i5XqbU.jpeg" alt="">
            <span class="absolute bottom-6 left-1.5 font-700 text-current">江西</span>
            <span class="absolute bottom-5 left-1.5 font-700 text-current">2021年去过</span>
        </div>
            <div class="flex items-center justify-around flex-1 text-center"> 
                <div class="flex flex-col">
                    <span class=" text-xs">1</span>
                    <span>国家</span>
                </div>
                <div class="flex flex-col">
                    <span class=" text-xs">1</span>
                    <span>城市</span>
                </div>
                <div class="flex flex-col">
                    <span class="text-xs">0</span>
                    <span>成就</span>
                </div>
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