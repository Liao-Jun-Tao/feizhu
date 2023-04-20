<template>
    <header>
        <search/>
    </header>
    <section class="bg-img-s ">
        <suggestion />
        
     </section>
        <ticket/>
     <navbar/>
</template>

<script setup lang="ts">
import search from './components/homeSerach.vue'
import suggestion from './components/SearchSuggestion.vue'
import ticket from './components/ticket.vue'
import navbar from '../../components/navbar.vue'
</script>

<style scoped>

.bg-img-s {
  background-image: url("@/assets/images/1681741392.webp");
  background-position: 0 0;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>