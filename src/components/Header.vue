<script setup>
document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  // Initially hide the mobile menu
  mobileMenu.classList.add('hidden');

  mobileMenuButton.addEventListener('click', function () {
    // Toggle the 'hidden' class to show/hide the mobile menu
    mobileMenu.classList.toggle('hidden');
  });
});
</script>

<template>
  <nav class="bg-[#fff] border-b-2">
    <div class="relative flex h-20 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button id="mobile-menu-button" type="button" class="relative inline-flex items-center justify-center rounded-md p-2 ml-3 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only">Open main menu</span>
          <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          -->
          <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>

          <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex flex-1 items-center justify-center sm:items-center lg:h-20 overflow-hidden">

        <div class="flex justify-center items-center w-auto h-20 lg:border-l-8 lg:border-[#eb9843] overflow-hidden lg:z-10">
          <a href="https://demo.unitechgloballtd.com">
            <div class="Header_icon"></div>
          </a>
        </div>

        <div class="hidden lg:ml-auto lg:w-3/6 sm:block rounded-l-3xl" style="background:#2c306b;">
          <div class="flex justify-center items-center space-x-3">

            <RouterLink to="/" class="text-white px-3 py-3 text-base font-medium hover:bg-[#fab915] hover:text-white transition-all">Home</RouterLink>
            <RouterLink to="/service" class="text-white px-3 py-3 text-base font-medium hover:bg-[#fab915] hover:text-white transition-all">Service</RouterLink>
            <RouterLink to="/about" class="text-white px-3 py-3 text-base font-medium hover:bg-[#fab915] hover:text-white transition-all">About</RouterLink>
            <RouterLink to="/products" class="text-white px-3 py-3 text-base font-medium hover:bg-[#fab915] hover:text-white transition-all">Product</RouterLink>
            <RouterLink to="/gallery" class="text-white px-3 py-3 text-base font-medium hover:bg-[#fab915] hover:text-white transition-all">Gallery</RouterLink>
            <RouterLink to="/contact" class="text-white px-3 py-3 text-base font-medium hover:bg-[#fab915] hover:text-white transition-all">Contact us</RouterLink>

            <a href="#" class="w-8 h-8 flex justify-center items-center bg-white rounded-full text-[#2c306b] hover:bg-[#fab915] hover:text-white transition-all">
              <i class="fa-solid fa-phone"></i>
            </a>

            <a href="#" class="w-8 h-8 flex justify-center items-center bg-white rounded-full text-[#2c306b] hover:bg-[#fab915] hover:text-white transition-all">
              <i class="fa-solid fa-location-dot"></i>
            </a>
                      
          </div>
        </div>
      </div>
    </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  <div class="sm:hidden bg-[#999999]" id="mobile-menu">
    <div class="space-y-1 px-2 pb-3 pt-2">
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
      <RouterLink to="/" class="hover:bg-gray-700 block rounded-md px-3 py-2 text-base font-medium border" aria-current="page">Home</RouterLink>
      <RouterLink to="/about" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium border">About</RouterLink>
      <RouterLink to="/service" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium border">Service</RouterLink>
      <RouterLink to="/products" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium border">Products</RouterLink>
      <RouterLink to="/gallery" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium border">Gallery</RouterLink>
      <RouterLink to="/contact" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium border">Contact us</RouterLink>
    </div>
  </div>
</nav>

</template>

<style scoped>
nav a.router-link-exact-active {
    color: #eb9843;
}
.Header_icon{
  width: 500px;
  height: 250px;
  background: url(/src/assets/image/UGL/Unitech-Logo-Animation.gif) no-repeat;
  background-size: cover;
  overflow: hidden;
  margin-top: -5px;
  margin-left: -65px;
  z-index: 1;
}
@media (max-width: 768px) {
  .Header_icon  {
    width: 300px;
    height: 200px;
    background: url(/src/assets/image/UGL/Unitech-Logo-Animation.gif) no-repeat;
    background-size: cover;
    overflow: hidden;
    margin-top: 20px;
    margin-left: 80px;
    z-index: 1;
  }
}

</style>