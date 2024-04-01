<script setup>
import { onMounted , ref } from 'vue';
import { useRoute, RouterLink } from 'vue-router';

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};


// Define navLogo with separate properties for large and small screen logos
// const navLogo = [
//   {
//     largeScreenLogo: "/assets/UGL-AND-Hi_Care-logo-of-web-desktop-o90Bn3SL.png",
//     smallScreenLogo: "/assets/UGL-AND-Hi_Care-logo-of-web-mobile-gg24XQuN.png",
//     preloader: "../assets/image/UGL/Unitech-Logo-Animation.gif",
//     logoLink: "#"
//   }
// ];

import axios from 'axios';
import { BASE_URL } from '../assets/apiConfig';
import { IMG } from '../assets/imageUrl';

const data = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get(`${BASE_URL}items`);
    data.value = response.data;
    console.log('Data fetched successfully:', data.value);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

const items = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get(`${BASE_URL}menuItem`);
    items.value = response.data;
    console.log('Data fetched successfully:', items.value);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

</script>

<template>
  <nav class="bg-[#fff] border-b-2 fixed w-full z-40 top-0 start-0 transition-all">
    <div class="relative flex h-20 items-center justify-between">
      <!-- Mobile menu button -->
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden z-20">
        <button @click="toggleMobileMenu" type="button"
          class="relative inline-flex items-center justify-center rounded-md p-2 ml-3 border text-[#232270] hover:bg-[#2c306b] hover:text-[#f8944e] focus:outline-none focus:text-[#f8944e] focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu" aria-expanded="false">
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only">Open main menu</span>
          <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          -->
          <svg class="block h-7 w-7" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>

          <svg class="hidden h-7 w-7" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Logo -->
      <div v-if="data && data">
        <div v-for="( header, index) in data.data" :key="index"
          class="flex justify-end items-center w-full lg:w-auto h-14 overflow-hidden lg:z-10 lg:ml-0">
          <a :href="header.logoLink">
            <div>
              <img :src="IMG + header.largeScreenLogo" class="Header_icon lg:block xl:block md:hidden hidden" alt="">
              <img :src="IMG + header.smallScreenLogo" class="Header_icon_M lg:hidden md:hidden xl:hidden block" alt="">
            </div>
          </a>
        </div>
      </div>

      <!-- Mobile menu links -->
      <div class="hidden lg:mr-0 xl:w-3/6 lg:w-[55%] sm:block rounded-l-3xl" style="background:#2c306b;">
        <div class="flex justify-center items-center space-x-3 lg:mr-8 px-3 lg:py-[7px]">
          <!-- Loop through menu items -->
          <div v-if="items && items">
            <RouterLink v-for="(item, index) in items.data" :key="index" @click="closeMobileMenu" :to="item.menuLink"
              class="text-white px-3 py-3 text-base font-medium hover:bg-[#f89b3b] hover:text-white transition-all nav-link">
              {{ item.menuName }}
            </RouterLink>
          </div>

          <!-- Additional links -->
          <RouterLink to="/contact"
            class="w-7 h-7 flex justify-center items-center bg-white rounded-full text-[#2c306b] hover:bg-[#f89b3b] hover:text-white transition-all">
            <i class="fa-solid fa-phone"></i>
          </RouterLink>

          <RouterLink to="/contact"
            class="w-7 h-7 flex justify-center items-center bg-white rounded-full text-[#2c306b] hover:bg-[#f89b3b] hover:text-white transition-all">
            <i class="fa-solid fa-location-dot"></i>
          </RouterLink>
        </div>
      </div>
    </div>
    <!-- Mobile menu, show/hide based on menu state -->
    <div v-show="isMobileMenuOpen" @click.away="closeMobileMenu" class="sm:hidden bg-gray-300 bg-opacity-50"
      id="mobile-menu">
      <div class="space-y-1 px-2 pb-3 pt-2 z-30">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <RouterLink to="/" class="bg-[#2c306b] block rounded-md px-3 py-2 text-base font-medium border"
          aria-current="page">Home</RouterLink>
        <RouterLink to="/service"
          class="text-gray-300 bg-[#2c306b] hover:text-white block rounded-md px-3 py-2 text-base font-medium border">
          Service</RouterLink>
        <RouterLink to="/about"
          class="text-gray-300 bg-[#2c306b] hover:text-white block rounded-md px-3 py-2 text-base font-medium border">
          About</RouterLink>
        <RouterLink to="/products"
          class="text-gray-300 bg-[#2c306b] hover:text-white block rounded-md px-3 py-2 text-base font-medium border">
          Products</RouterLink>
        <RouterLink to="/gallery"
          class="text-gray-300 bg-[#2c306b] hover:text-white block rounded-md px-3 py-2 text-base font-medium border">
          Gallery</RouterLink>
        <RouterLink to="/contact"
          class="text-gray-300 bg-[#2c306b] hover:text-white block rounded-md px-3 py-2 text-base font-medium border">
          Contact us</RouterLink>
      </div>
    </div>
  </nav>

</template>

<style scoped>
nav a.router-link-exact-active {
  color: #f89b3b;
}
nav a.router-link-exact-active:hover {
  color: #2c306b;
}
.Header_icon{
  width: 380px;
  height: 50px;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  margin-top: 0px;
  z-index: 1;
}
  .Header_icon_M  {
    width: 240px;
    height: 30px;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    position: sticky;
    margin-left: 110px;
    z-index: 1;
  }

</style>