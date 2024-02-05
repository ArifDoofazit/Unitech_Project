<script setup>
import '../../node_modules/flowbite/dist/flowbite'
</script>

<template>

    <div id="default-carousel" class="relative w-full" data-carousel="slide">
        <!-- Carousel wrapper -->
        <div class="relative h-80 overflow-hidden lg:h-[650px] md:h-96">
             <!-- Item 1 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <div class="absolute z-10 lg:mt-64 p-8">
                    <h2 class="text-2xl lg:text-6xl text-[#eb9843] font-normal mt-24 lg:mt-0">The Best Hardware Tools</h2>
                    <p class="text-sm lg:text-xl lg:leading-8 text-black font-medium py-4">We only provide hardware that meets ANSI/BHMA <br class="hidden lg:block"> Grade-1 and Grade-2 standards</p>
                </div>
                <img src="../assets/image/Slider-Two.webp" class="absolute block w-full h-80 lg:h-[650px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            </div>
            <!-- Item 2 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="../assets/image/Slider1.jpeg" class="absolute block w-full h-80 lg:h-[650px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            </div>
            <!-- Item 3 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="../assets/image/Slider-Four.jpeg" class="absolute block w-full h-80 lg:h-[650px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            </div>
        </div>
        <!-- Slider indicators -->
        <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        </div>
    </div>

</template>

<style scoped>

</style>