<script setup></script>

<template>
    <div class="container mx-auto h-auto pb-10">
        <div class="grid lg:grid-cols-3 gap-5">

            <div class="Menu pb-10 w-[350px]">
                <h3 class="lg:text-2xl font-normal text-start">Category Menu</h3>
                <hr class="mt-2">

                <div id="accordion-arrow-icon" data-accordion="open" class="pt-5">

                    <h2 id="accordion-arrow-icon-heading-2">
                        <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 gap-1 hover:text-[#eb9843] transition-all" data-accordion-target="#accordion-arrow-icon-body-2" aria-expanded="false" aria-controls="accordion-arrow-icon-body-2">
                        <span>Construction</span>
                        <i class="fa-solid fa-plus"></i>
                        </button>
                    </h2>
                    <div id="accordion-arrow-icon-body-2" class="hidden" aria-labelledby="accordion-arrow-icon-heading-2">
                        <div class="p-5 dark:border-gray-700">
                            <ul class="ps-5 text-black list-disc dark:text-gray-400">
                                <li>9 meter inch tap </li>
                            </ul>
                        </div>
                    </div>
                    <h2 id="accordion-arrow-icon-heading-1">
                        <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 gap-1 hover:text-[#eb9843]" data-accordion-target="#accordion-arrow-icon-body-1" aria-expanded="true" aria-controls="accordion-arrow-icon-body-1">
                            <span class="text-[#eb9843]">Hardware</span>
                            <i class="fa-solid fa-plus text-[#eb9843]"></i>
                        </button>
                    </h2>
                    <div id="accordion-arrow-icon-body-1" aria-labelledby="accordion-arrow-icon-heading-1">
                        <div class="p-5 dark:border-gray-700 dark:bg-gray-900">
                            <ul class="ps-5 text-black list-disc dark:text-gray-400">
                                <li>A pair of brushes</li>
                            </ul>
                        </div>
                    </div>
                    <h2 id="accordion-arrow-icon-heading-3">
                        <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 gap-1 hover:text-[#eb9843] transition-all" data-accordion-target="#accordion-arrow-icon-body-3" aria-expanded="false" aria-controls="accordion-arrow-icon-body-3">
                        <span>Plumber Tools</span>
                        <i class="fa-solid fa-plus"></i>
                        </button>
                    </h2>
                    <div id="accordion-arrow-icon-body-3" class="hidden" aria-labelledby="accordion-arrow-icon-heading-3">
                        <div class="p-5 dark:border-gray-700">
                            <ul class="ps-5 text-black list-disc dark:text-gray-400">
                                <li>Drilling Machine</li>
                            </ul>
                        </div>
                    </div>
                    <h2 id="accordion-arrow-icon-heading-4">
                        <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 gap-1 hover:text-[#eb9843] transition-all" data-accordion-target="#accordion-arrow-icon-body-4" aria-expanded="false" aria-controls="accordion-arrow-icon-body-4">
                        <span>Tools</span>
                        <i class="fa-solid fa-plus"></i>
                        </button>
                    </h2>
                    <div id="accordion-arrow-icon-body-4" class="hidden" aria-labelledby="accordion-arrow-icon-heading-4">
                        <div class="p-5 dark:border-gray-700">
                            <ul class="ps-5 text-black list-disc dark:text-gray-400">
                                <li>Spanner Set</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <h3 class="lg:text-2xl font-normal text-start pt-5">Availability</h3>
                <hr class="mt-2">

                <div class="flex items-center mb-4 mt-5">
                    <input id="default-checkbox" type="checkbox" value="" class="w-6 h-6 text-[#eb9843] border-[#eb9843] rounded-full focus:ring-transparent dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="default-checkbox" class="ms-2 text-lg font-normal text-gray-900 dark:text-gray-300">In stock (09)</label>
                </div>

                <div class="flex items-center mb-4 mt-5 cursor-not-allowed">
                    <input id="default-checkbox" type="checkbox" value="" class="w-6 h-6 text-[#eb9843] border-[#eb9843] opacity-50 rounded-full cursor-not-allowed focus:ring-transparent dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="default-checkbox" class="ms-2 text-lg font-normal cursor-not-allowed opacity-50 text-gray-900 dark:text-gray-300">Out of stock (0)</label>
                </div>

                <button class="bg-[#eb9843] text-white py-2 px-4 mt-3 rounded-3xl hover:bg-[#273270] transition-all ">Clear</button>
                <button class="bg-[#eb9843] text-white py-2 px-4 mt-3 rounded-3xl ml-3 hover:bg-[#273270] transition-all ">Apply</button>

                <h3 class="lg:text-2xl font-normal text-start mt-8">Price</h3>
                <hr class="mt-2">

                <p class="py-5">The Highest Price Start :</p>
                <form class="max-w-sm mx-auto">
                    <label for="number-input" class="block mb-2 text-sm font-medium text-black dark:text-white">From $</label>
                    <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-transparent focus:border-[#eb9843] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required>
        
                    <label for="number-input" class="block mb-2 mt-5 text-sm font-medium text-black dark:text-white">To $</label>
                    <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-transparent focus:border-[#eb9843] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="999.00" required>
                </form>

                <button class="bg-[#eb9843] text-white py-2 w-full mt-5 rounded-3xl hover:bg-[#273270] transition-all ">Clear</button>
            </div>


            <!-- List Image -->

            <div class="w-full h-14 bg-[#0000000d]">

                <div class="col-span-2">
                    <div class="icon">
                        <i class="fa-solid fa-grip-lines-vertical"></i>
                    </div>
                </div>

                    <div class="flex justify-center mt-32">
                        <div class="product-card w-full rounded-t-2xl drop-shadow-2xl overflow-hidden cursor-pointer relative group">
                            <img src="../assets/image/product2.webp" class="w-full h-96 rounded-t-2xl transition-transform duration-300 transform scale-100 group-hover:scale-105" alt="">
                            <img src="../assets/image/product4.webp" class="w-full h-96 rounded-t-2xl absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" alt="">
                            <div class="h-52 overflow-hidden rounded-b-2xl drop-shadow-2xl bg-[#eb9843] text-white transition duration-300 ease-in-out transform group-hover:bg-[#2c306b]  group-hover:text-[#eb9843]">
                                <h2 class="text-center font-normal py-5 text-2xl mt-12">Reducers & Adapters</h2>
                                <div class="text-center text-white">
                                    <p>$300.00 <strike class="ml-5 text-[#e4e4e4]">$500.00</strike></p>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>

            <div class="w-full h-14 bg-[#0000000d]">

                <div class="col-span-2">
                    <div class="icon">
                    </div>
                </div>

                    <div class="flex justify-center mt-32">
                        <div class="product-card w-full rounded-t-2xl drop-shadow-2xl overflow-hidden cursor-pointer relative group">
                            <img src="../assets/image/product1.webp" class="w-full h-96 rounded-t-2xl transition-transform duration-300 transform scale-100 group-hover:scale-105" alt="">
                            <img src="../assets/image/product3.webp" class="w-full h-96 rounded-t-2xl absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" alt="">
                            <div class="h-52 overflow-hidden rounded-b-2xl drop-shadow-2xl bg-[#eb9843] text-white transition duration-300 ease-in-out transform group-hover:bg-[#2c306b]  group-hover:text-[#eb9843]">
                                <h2 class="text-center font-normal py-5 text-2xl mt-12">The Vase</h2>
                                <div class="text-center text-white">
                                    <p>$300.00 <strike class="ml-5 text-[#e4e4e4]">$500.00</strike></p>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>

            

        </div>
    </div>
</template>