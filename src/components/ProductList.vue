<script setup>

</script>

<template>
    <div class="container mx-auto h-auto sm:h-auto">
        <div class="grid lg:grid-cols-3 gap-1">

            <div class="Menu pb-10 w-[350px] hidden lg:block">
                <h3 class="lg:text-2xl font-normal text-start">Category Menu</h3>
                <hr class="mt-2">

                <div id="accordion-arrow-icon" data-accordion="open" class="pt-5">

                    <h2 id="accordion-arrow-icon-heading-2">
                        <button type="button" class="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-black dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 gap-1 hover:text-[#eb9843] transition-all" data-accordion-target="#accordion-arrow-icon-body-2" aria-expanded="false" aria-controls="accordion-arrow-icon-body-2">
                            <span> 
                                <i class="fa-solid fa-screwdriver-wrench pr-2"></i>      
                                Construction
                            </span>
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </h2>
                    <div id="accordion-arrow-icon-body-2" class="hidden" aria-labelledby="accordion-arrow-icon-heading-2">
                        <div class="p-3 dark:border-gray-700">
                            <ul class="ps-5 text-black list-disc dark:text-gray-400">
                                <li>9 meter inch tap </li>
                            </ul>
                        </div>
                    </div>
                    <h2 id="accordion-arrow-icon-heading-1">
                        <button type="button" class="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-black dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 gap-1 hover:text-[#eb9843]" data-accordion-target="#accordion-arrow-icon-body-1" aria-expanded="true" aria-controls="accordion-arrow-icon-body-1">
                            <span class="text-[#eb9843]">
                                <i class="fa-solid fa-toolbox pr-2"></i>
                                Hardware
                            </span>
                            <i class="fa-solid fa-plus text-[#eb9843]"></i>
                        </button>
                    </h2>
                    <div id="accordion-arrow-icon-body-1" aria-labelledby="accordion-arrow-icon-heading-1">
                        <div class="p-3 dark:border-gray-700 dark:bg-gray-900">
                            <ul class="ps-5 text-black list-disc dark:text-gray-400">
                                <li>A pair of brushes</li>
                            </ul>
                        </div>
                    </div>
                    <h2 id="accordion-arrow-icon-heading-3">
                        <button type="button" class="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-black dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 gap-1 hover:text-[#eb9843] transition-all" data-accordion-target="#accordion-arrow-icon-body-3" aria-expanded="false" aria-controls="accordion-arrow-icon-body-3">
                        <span>
                            <i class="fa-solid fa-gear pr-2"></i>
                            Plumber Tools
                        </span>
                        <i class="fa-solid fa-plus"></i>
                        </button>
                    </h2>
                    <div id="accordion-arrow-icon-body-3" class="hidden" aria-labelledby="accordion-arrow-icon-heading-3">
                        <div class="p-3 dark:border-gray-700">
                            <ul class="ps-5 text-black list-disc dark:text-gray-400">
                                <li>Drilling Machine</li>
                            </ul>
                        </div>
                    </div>
                    <h2 id="accordion-arrow-icon-heading-4">
                        <button type="button" class="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-black dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 gap-1 hover:text-[#eb9843] transition-all" data-accordion-target="#accordion-arrow-icon-body-4" aria-expanded="false" aria-controls="accordion-arrow-icon-body-4">
                        <span>
                            <i class="fa-solid fa-hammer pr-2"></i>
                            Tools
                        </span>
                        <i class="fa-solid fa-plus"></i>
                        </button>
                    </h2>
                    <div id="accordion-arrow-icon-body-4" class="hidden" aria-labelledby="accordion-arrow-icon-heading-4">
                        <div class="p-3 dark:border-gray-700">
                            <ul class="ps-5 text-black list-disc dark:text-gray-400">
                                <li>Spanner Set</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>


            <!-- List Image -->

            <div class="col-span-2 lg:w-full h-auto">

                <div class="grid lg:grid-cols-2 lg:grid-rows-2 h-auto lg:-mt-20 gap-5">

                    <RouterLink to="/product-details" aria-current="page">
                        <div class="flex justify-center lg:mt-32 mt-16">
                            <div class="product-card lg:max-w-full max-w-[320px] rounded-t-2xl drop-shadow-2xl overflow-hidden cursor-pointer relative border group">
                                <div class="z-20 overflow-hidden h-24 rounded-t-2xl drop-shadow-2xl bg-[#eb9843] text-white transition duration-300 ease-in-out transform group-hover:bg-[#2c306b]  group-hover:text-[#eb9843]">
                                    <h2 class="text-start font-normal py-5 pl-10 text-2xl mt-2">Fingerprint Door Lock</h2>
                                </div>
                                <div class="h-[420px]">
                                    <img src="../assets/image/product/product2.webp" class="lg:w-full h-[420px] transition-transform duration-300 transform scale-100 group-hover:scale-105" alt="">
                                    <img src="../assets/image/product/product3.webp" class="lg:w-full h-[420px] absolute top-20 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" alt="">
                                </div>
                                <div class="overflow-hidden h-40 rounded-b-2xl drop-shadow-2xl bg-[#eb9843] text-white transition duration-300 ease-in-out transform ">
                                    <h3 class="text-2xl w-20 border-b border-[#2c306b] font-medium ml-5 pt-5 text-[#2c306b]">Details</h3>
                                    <p class="font-normal pl-5 text-lg mt-1">Fingerprint Door Lock with Press Key Password Smart Lock IC Card Smart Door Lock for Home Hotel Wooden Door</p>
                                </div>
                            </div>
                        </div>
                    </RouterLink>
                    
                    <RouterLink to="/product-details" aria-current="page">
                        <div class="flex justify-center lg:mt-32 mt-10">
                            <div class="product-card lg:max-w-full max-w-[320px] rounded-t-2xl drop-shadow-2xl overflow-hidden cursor-pointer relative border group">
                                <div class="z-20 overflow-hidden h-24 rounded-t-2xl drop-shadow-2xl bg-[#eb9843] text-white transition duration-300 ease-in-out transform group-hover:bg-[#2c306b]  group-hover:text-[#eb9843]">
                                    <h2 class="text-start font-normal py-5 pl-10 text-2xl mt-2">Smart Door Lock</h2>
                                </div>
                                <div class="h-[420px]">
                                    <img src="../assets/image/product/product4.webp" class="lg:w-full h-[420px] transition-transform duration-300 transform scale-100 group-hover:scale-105" alt="">
                                    <img src="../assets/image/product/product5.webp" class="lg:w-full h-[420px] absolute top-20 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" alt="">
                                </div>
                                <div class="overflow-hidden h-40 rounded-b-2xl drop-shadow-2xl bg-[#eb9843] text-white transition duration-300 ease-in-out transform ">
                                    <h3 class="text-2xl w-20 border-b border-[#2c306b] font-medium ml-5 pt-5 text-[#2c306b]">Details</h3>
                                    <p class="font-normal pl-5 text-lg mt-1">Fingerprint Door Lock with Press Key Password Smart Lock IC Card Smart Door Lock for Home Hotel Wooden Door</p>
                                </div>
                            </div>
                        </div>
                    </RouterLink>
                    
                    <RouterLink to="/product-details" aria-current="page">
                        <div class="flex justify-center lg:mt-12 mt-5">
                            <div class="product-card lg:max-w-full max-w-[320px] lg:h-[680px] rounded-t-2xl drop-shadow-2xl overflow-hidden cursor-pointer relative border group">
                                <div class="z-20 overflow-hidden h-24 rounded-t-2xl drop-shadow-2xl bg-[#eb9843] text-white transition duration-300 ease-in-out transform group-hover:bg-[#2c306b]  group-hover:text-[#eb9843]">
                                    <h2 class="text-start font-normal py-5 pl-10 text-2xl mt-2">Card Door Lock</h2>
                                </div>
                                <div class="h-[420px]">
                                    <img src="../assets/image/product/smart-door-lock.webp" class="lg:w-full h-[420px] transition-transform duration-300 transform scale-100 group-hover:scale-105" alt="">
                                    <img src="../assets/image/product/product6.jpg" class="lg:w-full h-[420px] absolute top-20 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" alt="">
                                </div>
                                <div class="overflow-hidden h-40 rounded-b-2xl drop-shadow-2xl bg-[#eb9843] text-white transition duration-300 ease-in-out transform ">
                                    <h3 class="text-2xl w-20 border-b border-[#2c306b] font-medium ml-5 pt-5 text-[#2c306b]">Details</h3>
                                    <p class="font-normal pl-5 text-lg mt-1">Fingerprint Door Lock with Press Key Password Smart Lock IC Card Smart Door Lock for Home Hotel Wooden Door</p>
                                </div>
                            </div>
                        </div>
                    </RouterLink>

                    <RouterLink to="/product-details" aria-current="page">
                        <div class="flex justify-center lg:mt-12 mt-5">
                            <div class="product-card lg:max-w-full max-w-[320px] lg:h-[680px] rounded-t-2xl drop-shadow-2xl overflow-hidden cursor-pointer relative border group">
                                <div class="z-20 overflow-hidden h-24 rounded-t-2xl drop-shadow-2xl bg-[#eb9843] text-white transition duration-300 ease-in-out transform group-hover:bg-[#2c306b]  group-hover:text-[#eb9843]">
                                    <h2 class="text-start font-normal py-5 pl-10 text-2xl mt-2">FingerPrint & Smart Lock</h2>
                                </div>
                                <div class="h-[420px]">
                                    <img src="../assets/image/product/product9.webp" class="lg:w-full h-[420px] transition-transform duration-300 transform scale-100 group-hover:scale-105" alt="">
                                    <img src="../assets/image/product/product8.jpg" class="lg:w-full h-[420px] absolute top-20 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" alt="">
                                </div>
                                <div class="overflow-hidden h-40 rounded-b-2xl drop-shadow-2xl bg-[#eb9843] text-white transition duration-300 ease-in-out transform ">
                                    <h3 class="text-2xl w-20 border-b border-[#2c306b] font-medium ml-5 pt-5 text-[#2c306b]">Details</h3>
                                    <p class="font-normal pl-5 text-lg mt-1">Fingerprint Door Lock with Press Key Password Smart Lock IC Card Smart Door Lock for Home Hotel Wooden Door</p>
                                </div>
                            </div>
                        </div>
                    </RouterLink>
                    
                </div>

            </div>
        </div>
    </div>
</template>