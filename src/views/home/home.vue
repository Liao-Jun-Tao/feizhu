<template>
   <div class="h-full scrollbar-hidden" style="overflow: auto; ">
        <search/>
        <suggestion />
        <ticket/>
        <discounts/>
        <navbar/>
        <Hot />
     </div>
</template>

<script setup lang="ts">
import search from './components/homeSerach.vue'
import suggestion from './components/SearchSuggestion.vue'
import ticket from './components/ticket.vue'
import navbar from '../../components/navbar.vue'
import discounts from './components/discounts.vue'
import Hot from './components/Hot.vue'
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}

</style>