<script setup>
import { ref } from 'vue';

const button1Color = ref('#eb9843');
const button2Color = ref('white');
const button1Text = ref('text-white');
const button2Text = ref('text-black');
const isButton1Active = ref(true);

const toggleButtons = () => {
    isButton1Active.value = !isButton1Active.value;
    button1Color.value = button1Color.value === '#eb9843' ? 'white' : '#eb9843';
    button2Color.value = button2Color.value === 'white' ? '#eb9843' : 'white';
    button1Text.value = button1Text.value === 'text-white' ? 'text-black' : 'text-white';
    button2Text.value = button2Text.value === 'text-black' ? 'text-white' : 'text-black';
};
</script>

<template>
    <div class="container mx-auto h-auto pb-10 sm:h-auto sm:pb-10">
        <div class="grid lg:grid-cols-3 gap-5">

            <div class="Menu pb-10 w-[350px] hidden lg:block">
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

            <div class="col-span-2 lg:w-full h-auto pb-10">

                <div class="grid lg:grid-cols-3 gap-0">
                    <div class="bg-[#0000000d] py-2 px-2 flex justify-center lg:justify-start">
                        <div class="icon rounded-2xl w-28 h-10 flex justify-center text-xl text-white border-slate-500">
                            <button @click="toggleButtons" class="w-11 h-10 text-xl rounded-3xl rounded-r-none border transition-all duration-300" :class="{ 'bg-[#eb9843] text-white': isButton1Active, 'bg-white text-black': !isButton1Active }">
                                <i class="fa-solid fa-grip-vertical"></i>
                            </button>
                            <button @click="toggleButtons" class="w-11 h-10 text-xl rounded-3xl rounded-l-none border transition-all duration-300" :class="{ 'bg-[#eb9843] text-white': !isButton1Active, 'bg-white text-black': isButton1Active }">
                                <i class="fa-solid fa-grip"></i>
                            </button>
                        </div>
                    </div>

                    <div class="flex justify-center bg-[#0000000d]">
                        <p class="flex items-center font-light">Paginate By </p>
                        
                        <select id="pageNumbers" class="mt-2 ml-2 cursor-pointer text-black w-20 h-10 bg-white-400 border border-gray-300 text-sm rounded-full focus:ring-[#eb9843] focus:border-[#eb9843] block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        </select>

                    </div>

                    <div class="flex lg:justify-end justify-center bg-[#0000000d]">
                        <p class="flex items-center font-light">Sort By </p>
                        
                        <select id="pageNumbers" class="mt-2 ml-2 cursor-pointer rounded-full text-black w-32 h-10 bg-white-400 border border-gray-300 text-sm focus:ring-[#eb9843] focus:border-[#eb9843] block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Featured</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        </select>

                    </div>
                </div>

                <div class="grid lg:grid-cols-2 lg:grid-rows-2 h-auto pb-10">
                    <div class="flex justify-center lg:mt-32 mt-16">
                        <div class="product-card lg:max-w-full max-w-[320px] rounded-t-2xl drop-shadow-2xl overflow-hidden cursor-pointer relative group">
                            <div class="w-full z-10 absolute top-[430px] text-center space-x-3 hidden transition-all group-hover:block">
                                <span class="py-2 px-2 rounded-sm bg-[#eb9843] text-white text-lg z-10 hover:bg-[#2c306b] transition-all">
                                    <i class="fa-solid fa-link"></i>
                                </span>
                                <span class="py-2 px-2 rounded-sm bg-[#eb9843] text-white text-lg z-10 hover:bg-[#2c306b] transition-all">
                                    <i class="fa-regular fa-copy"></i>
                                </span>
                                <span class="py-2 px-2 rounded-sm bg-[#eb9843] text-white text-lg z-10 hover:bg-[#2c306b] transition-all">
                                    <i class="fa-regular fa-heart"></i>
                                </span>
                                <span class="py-2 px-2 rounded-sm bg-[#eb9843] text-white text-lg z-10 hover:bg-[#2c306b] transition-all">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </span>
                            </div>
                            <img src="../assets/image/product2.webp" class="lg:w-full h-[480px] rounded-t-2xl transition-transform duration-300 transform scale-100 group-hover:scale-105" alt="">
                            <img src="../assets/image/product4.webp" class="lg:w-full h-[480px] rounded-t-2xl absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" alt="">
                            <div class="overflow-hidden h-32 rounded-b-2xl drop-shadow-2xl bg-[#eb9843] text-white transition duration-300 ease-in-out transform group-hover:bg-[#2c306b]  group-hover:text-[#eb9843]">
                                <h2 class="text-center font-normal py-5 text-2xl mt-2">Reducers & Adapters</h2>
                                <div class="text-center text-white">
                                    <p>$300.00 <strike class="ml-5 text-[#e4e4e4]">$500.00</strike></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-center lg:mt-32 mt-10">
                        <div class="product-card lg:max-w-full max-w-[320px] rounded-t-2xl drop-shadow-2xl overflow-hidden cursor-pointer relative group">
                            <div class="w-full z-10 absolute top-[430px] text-center space-x-3 hidden transition-all group-hover:block">
                                <span class="py-2 px-2 rounded-sm bg-[#eb9843] text-white text-lg z-10 hover:bg-[#2c306b] transition-all">
                                    <i class="fa-solid fa-link"></i>
                                </span>
                                <span class="py-2 px-2 rounded-sm bg-[#eb9843] text-white text-lg z-10 hover:bg-[#2c306b] transition-all">
                                    <i class="fa-regular fa-copy"></i>
                                </span>
                                <span class="py-2 px-2 rounded-sm bg-[#eb9843] text-white text-lg z-10 hover:bg-[#2c306b] transition-all">
                                    <i class="fa-regular fa-heart"></i>
                                </span>
                                <span class="py-2 px-2 rounded-sm bg-[#eb9843] text-white text-lg z-10 hover:bg-[#2c306b] transition-all">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </span>
                            </div>
                            <img src="../assets/image/product2.webp" class="lg:w-full h-[480px] rounded-t-2xl transition-transform duration-300 transform scale-100 group-hover:scale-105" alt="">
                            <img src="../assets/image/product4.webp" class="lg:w-full h-[480px] rounded-t-2xl absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" alt="">
                            <div class="overflow-hidden h-32 rounded-b-2xl drop-shadow-2xl bg-[#eb9843] text-white transition duration-300 ease-in-out transform group-hover:bg-[#2c306b]  group-hover:text-[#eb9843]">
                                <h2 class="text-center font-normal py-5 text-2xl mt-2">Reducers & Adapters</h2>
                                <div class="text-center text-white">
                                    <p>$300.00 <strike class="ml-5 text-[#e4e4e4]">$500.00</strike></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-center lg:mt-32 mt-10">
                        <div class="product-card lg:max-w-full max-w-[320px] rounded-t-2xl drop-shadow-2xl overflow-hidden cursor-pointer relative group">
                            <div class="w-full z-10 absolute top-[430px] text-center space-x-3 hidden transition-all group-hover:block">
                                <span class="py-2 px-2 rounded-sm bg-[#eb9843] text-white text-lg z-10 hover:bg-[#2c306b] transition-all">
                                    <i class="fa-solid fa-link"></i>
                                </span>
                                <span class="py-2 px-2 rounded-sm bg-[#eb9843] text-white text-lg z-10 hover:bg-[#2c306b] transition-all">
                                    <i class="fa-regular fa-copy"></i>
                                </span>
                                <span class="py-2 px-2 rounded-sm bg-[#eb9843] text-white text-lg z-10 hover:bg-[#2c306b] transition-all">
                                    <i class="fa-regular fa-heart"></i>
                                </span>
                                <span class="py-2 px-2 rounded-sm bg-[#eb9843] text-white text-lg z-10 hover:bg-[#2c306b] transition-all">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </span>
                            </div>
                            <img src="../assets/image/product2.webp" class="lg:w-full h-[480px] rounded-t-2xl transition-transform duration-300 transform scale-100 group-hover:scale-105" alt="">
                            <img src="../assets/image/product4.webp" class="lg:w-full h-[480px] rounded-t-2xl absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" alt="">
                            <div class="overflow-hidden h-32 rounded-b-2xl drop-shadow-2xl bg-[#eb9843] text-white transition duration-300 ease-in-out transform group-hover:bg-[#2c306b]  group-hover:text-[#eb9843]">
                                <h2 class="text-center font-normal py-5 text-2xl mt-2">Reducers & Adapters</h2>
                                <div class="text-center text-white">
                                    <p>$300.00 <strike class="ml-5 text-[#e4e4e4]">$500.00</strike></p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="flex justify-center lg:mt-32 mt-10">
                        <div class="product-card lg:max-w-full max-w-[320px] rounded-t-2xl drop-shadow-2xl overflow-hidden cursor-pointer relative group">
                            <div class="lg:w-full z-10 absolute top-[430px] text-center space-x-3 hidden transition-all group-hover:block">
                                <span class="py-2 px-2 rounded-sm bg-[#eb9843] text-white text-lg z-10 hover:bg-[#2c306b] transition-all">
                                    <i class="fa-solid fa-link"></i>
                                </span>
                                <span class="py-2 px-2 rounded-sm bg-[#eb9843] text-white text-lg z-10 hover:bg-[#2c306b] transition-all">
                                    <i class="fa-regular fa-copy"></i>
                                </span>
                                <span class="py-2 px-2 rounded-sm bg-[#eb9843] text-white text-lg z-10 hover:bg-[#2c306b] transition-all">
                                    <i class="fa-regular fa-heart"></i>
                                </span>
                                <span class="py-2 px-2 rounded-sm bg-[#eb9843] text-white text-lg z-10 hover:bg-[#2c306b] transition-all">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </span>
                            </div>
                            <img src="../assets/image/product2.webp" class="lg:w-full w-80 h-[480px] rounded-t-2xl transition-transform duration-300 transform scale-100 group-hover:scale-105" alt="">
                            <img src="../assets/image/product4.webp" class="lg:w-full w-80 h-[480px] rounded-t-2xl absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" alt="">
                            <div class="overflow-hidden h-32 rounded-b-2xl drop-shadow-2xl bg-[#eb9843] text-white transition duration-300 ease-in-out transform group-hover:bg-[#2c306b]  group-hover:text-[#eb9843]">
                                <h2 class="text-center font-normal py-5 text-2xl mt-2">Reducers & Adapters</h2>
                                <div class="text-center text-white">
                                    <p>$300.00 <strike class="ml-5 text-[#e4e4e4]">$500.00</strike></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>