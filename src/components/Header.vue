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
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex flex-shrink-0 items-center">
          <img class="h-10 lg:w-full lg:ml-5 ml-28" src="../assets/Capture.jpg" alt="Your Company">
        </div>
        <div class="hidden lg:ml-auto lg:w-5/12 sm:block rounded-3xl" style="background:#2c306b;">
          <div class="flex space-x-3">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->

            <RouterLink to="/" class="text-white  rounded-md px-3 py-2 text-sm font-medium">Home</RouterLink>
            <RouterLink to="/service" class="text-white  rounded-md px-3 py-2 text-sm font-medium">Service</RouterLink>
            <RouterLink to="/about" class="text-white  rounded-md px-3 py-2 text-sm font-medium">About</RouterLink>
            <RouterLink to="/products" class="text-white  rounded-md px-3 py-2 text-sm font-medium">Product</RouterLink>
            <RouterLink to="/gallery" class="text-white  rounded-md px-3 py-2 text-sm font-medium">Gallery</RouterLink>
            <a href="#" class="text-white rounded-md px-3 py-2 text-sm font-medium">Contact us</a>
            <a href="#" class="text-white rounded-md px-3 py-2 text-sm font-medium">Gallery</a>
            <RouterLink to="/contact" class="text-white  rounded-md px-3 py-2 text-sm font-medium">Contact us</RouterLink>

            <a href="#" class="bg-white rounded-3xl px-2 py-1 text-sm font-medium lg:h-7 lg:w-7 lg:mt-1" style="color: #2c306b;"> <i class="fa-solid fa-phone"></i> </a>
            <a href="#" class="bg-white rounded-3xl px-2 py-1 text-sm font-medium lg:h-7 lg:w-7 lg:mt-1 " style="color: #2c306b;"> <i class="fa-solid fa-location-dot"></i> </a>
                      
          </div>
        </div>
      </div>
    </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  <div class="sm:hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pb-3 pt-2">
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
      <RouterLink to="/" class="hover:bg-gray-700 block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</RouterLink>
      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">About</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Service</a>
      <RouterLink to="/products" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Products</RouterLink>
      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Products</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Gallery</a>
      <RouterLink to="/contact" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Contact us</RouterLink>
    </div>
  </div>
</nav>

</template>