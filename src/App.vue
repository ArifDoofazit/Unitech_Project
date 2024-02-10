<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue';
import Preloader from './components/Preloader.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

const isLoading = ref(true); // Initially set to true to show the preloader

// Toggle isLoading after 3 seconds
setTimeout(() => {
  isLoading.value = false;
}, 10000);
</script>

<template>
  <Preloader v-if="isLoading" />
  <Header />
  <RouterView />
  <Footer />
</template>

<style scoped>

</style>