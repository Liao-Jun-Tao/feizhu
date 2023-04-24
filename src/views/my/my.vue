<template>
    <main class="bg-light-500 h-full" style="overflow: auto; ">
    <Header/>
    <packet/>
    <wallet/>
    <activity/>
    <order/>
    <memory/>
    <tools/>
    <equity/>
    <navbar/>
    </main>
</template>

<script setup lang="ts">
import navbar from '../../components/navbar.vue'
import Header from './components/header.vue'
import wallet from './components/wallet.vue'
import order from './components/order.vue' 
import activity from './components/activity.vue'
import packet from './components/packet.vue'
import memory from './components/memory.vue'
import tools from './components/tools.vue'
import equity from './components/equity.vue'

</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}

</style>
