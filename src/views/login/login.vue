
<template>
    <div class="font-f  ">
        <div class="mt-2 font-bold text-0.37rem flex justify-between ">
            <span class="icon-xiangzuojiantou iconfont ml-1 flex-1"></span>
            <span class="mr-3">隐私</span>
            <span class="mr-2">遇到问题 ?</span>
        </div>
        
            <img class="w-10 h-10 center-x  mt-4" src="https://i.328888.xyz/2023/04/23/i5gr6d.png">

            <form class="">

                <div class="w-34  h-4.5 center-x border-b-1 text-0.48rem">
                    <input class="w-30  h-4 ml-32px none " 
                    type="text" 
                    placeholder="请输入账号"
                    v-model="state.name"
                    >
                </div>

                <div class="w-34  h-4.5 center-x border-b-1 flex items-center text-0.48rem">
                    <span class="icon-yanjing_bi iconfont" 
                    v-if = '!state.visibleType' 
                    @click="changevisible" ></span>
                    
                    <span  class="icon-yanjing iconfont"
                    @click="changevisible" 
                    v-else ></span>

                    <input class="flex-1  h-4 ml-16px none" 
                    :type="state.passwordType" 
                    placeholder="请输入密码"
                    v-model="state.password"
                    >

                    <span>忘记密码</span>
                </div>

                <div class="mt-3">登录查看更多权益</div>
                <button class="w-34 h-4 bg-yellow-300 rounded-lg center-x text-0.48rem ">登录</button>
                <button class="w-34 h-4  rounded-lg center-x text-0.48rem">注册</button>

            </form>


            <div>其他方式</div>
            <div>
                <span>淘宝</span>
                <span>支付宝</span>
                <span>验证码</span>
            </div>
        </div>
    
</template>

<script setup lang="ts">
import { reactive } from 'vue';
const state = reactive({
    visibleType:false,
    passwordType:'password',
    name:'',
    password:''
})

const changevisible = ()=> {
    state.visibleType =  !state.visibleType
    if( state.visibleType){
        state.passwordType ='text'
    }else{
        state.passwordType = 'password'
    }
}

</script>

<style scoped>
.font-f {
    font-family: '楷体';
    ;
}

.center-x {
    position: relative;
    left: 50%;
    translate: -50%;
}

.none {
    outline: none;
}
</style>