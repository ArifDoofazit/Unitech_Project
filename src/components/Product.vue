<script setup></script>

<template>
    <div class="container mx-auto bg-white">
        <div class="w-full h-auto pb-10">
            <div class="py-5 px-5 lg:mt-24 lg:ml-12">
                <h2 class="text-center font-medium uppercase text-2xl lg:text-3xl text-[#eb9843]">Featured Products</h2>
            </div>

            <div class="grid lg:grid-cols-2 gap-4 lg:mt-10">
                <div class="mt-5 lg:mt-10 lg:w-11/12 w-4/5 mx-auto flex justify-center">
                    <img src="../assets/image/produc_470x.webp" class="w-full lg:h-[880px] rounded-3xl drop-shadow-2xl" alt="">
                </div>

                <div class="mt-5">
                    <div class="card grid lg:grid-cols-2 grid-cols-1 grid-rows-2 gap-4">
                        <div class="flex justify-center">
                            <div class="product-card w-72 rounded-t-2xl drop-shadow-2xl overflow-hidden cursor-pointer relative group">
                                <img src="../assets/image/product1.webp" class="w-full h-80 rounded-t-2xl transition-transform duration-300 transform scale-100 group-hover:scale-105" alt="">
                                <img src="../assets/image/product2.webp" class="w-full h-80 rounded-t-2xl absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" alt="">
                                <div class="h-32 rounded-b-2xl drop-shadow-2xl bg-[#eb9843] text-white transition duration-300 ease-in-out transform group-hover:bg-[#2c306b]  group-hover:text-[#eb9843]">
                                    <h2 class="text-center font-normal py-5 text-2xl">Reducers & Adapters</h2>
                                    <div class="text-center text-white">
                                        <p>$300.00 <strike class="ml-5 text-[#e4e4e4]">$500.00</strike></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex justify-center">
                            <div class="product-card w-72 rounded-t-2xl drop-shadow-2xl overflow-hidden cursor-pointer relative group">
                                <img src="../assets/image/product3.webp" class="w-full h-80 rounded-t-2xl transition-transform duration-300 transform scale-100 group-hover:scale-105" alt="">
                                <img src="../assets/image/product4.webp" class="w-full h-80 rounded-t-2xl absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" alt="">
                                <div class="h-32 rounded-b-2xl drop-shadow-2xl bg-[#eb9843] text-white transition duration-300 ease-in-out transform group-hover:bg-[#2c306b]  group-hover:text-[#eb9843]">
                                    <h2 class="text-center font-normal py-5 text-2xl">The Vise</h2>
                                    <div class="text-center text-white">
                                        <p>$753.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex justify-center">
                            <div class="product-card w-72 rounded-t-2xl drop-shadow-2xl overflow-hidden cursor-pointer relative group">
                                <img src="../assets/image/product5.webp" class="w-full h-80 rounded-t-2xl transition-transform duration-300 transform scale-100 group-hover:scale-105" alt="">
                                <img src="../assets/image/product7.webp" class="w-full h-80 rounded-t-2xl absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" alt="">
                                <div class="h-32 rounded-b-2xl drop-shadow-2xl bg-[#eb9843] text-white transition duration-300 ease-in-out transform group-hover:bg-[#2c306b]  group-hover:text-[#eb9843]">
                                    <h2 class="text-center font-normal py-5 text-2xl">Spanner Set</h2>
                                    <div class="text-center text-white">
                                        <p>$753.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex justify-center">
                            <div class="product-card w-72 rounded-t-2xl drop-shadow-2xl overflow-hidden cursor-pointer relative group">
                                <img src="../assets/image/product6.webp" class="w-full h-80 rounded-t-2xl transition-transform duration-300 transform scale-100 group-hover:scale-105" alt="">
                                <img src="../assets/image/product8.webp" class="w-full h-80 rounded-t-2xl absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" alt="">
                                <div class="h-32 rounded-b-2xl drop-shadow-2xl bg-[#eb9843] text-white transition duration-300 ease-in-out transform group-hover:bg-[#2c306b]  group-hover:text-[#eb9843]">
                                    <h2 class="text-center font-normal py-5 text-2xl">Masonry equipments</h2>
                                    <div class="text-center text-white">
                                        <p>$753.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>