<script setup>
const galleryCard = [
    {
        images: "../src/assets/image/product/product-5.webp",
        cardTitle: "DOVE HANDLE"
    },
    {
        images: "../src/assets/image/product/product-5.webp",
        cardTitle: "DOVE HANDLE"
    },
    {
        images: "../src/assets/image/product/product-5.webp",
        cardTitle: "DOVE HANDLE"
    },
    {
        images: "../src/assets/image/product/product-5.webp",
        cardTitle: "DOVE HANDLE"
    },
    {
        images: "../src/assets/image/product/product-5.webp",
        cardTitle: "DOVE HANDLE"
    },
    {
        images: "../src/assets/image/product/product-5.webp",
        cardTitle: "DOVE HANDLE"
    },
    {
        images: "../src/assets/image/product/product-5.webp",
        cardTitle: "DOVE HANDLE"
    },
    {
        images: "../src/assets/image/product/product-5.webp",
        cardTitle: "DOVE HANDLE"
    },
    {
        images: "../src/assets/image/product/product-5.webp",
        cardTitle: "DOVE HANDLE"
    },
    {
        images: "../src/assets/image/product/product-5.webp",
        cardTitle: "DOVE HANDLE"
    },
    {
        images: "../src/assets/image/product/product-5.webp",
        cardTitle: "DOVE HANDLE"
    },
    {
        images: "../src/assets/image/product/product-5.webp",
        cardTitle: "DOVE HANDLE"
    },
]
</script>

<template>
    <div class="container mx-auto pb-10">
        <div class="grid lg:grid-cols-4 gap-5 lg:grid-rows-3">

            <a v-for="(gallery, index) in galleryCard" :key="index" href="https://www.facebook.com/hicare11">
                <div class="flex justify-center">
                    <div  class="product-card w-72 rounded-2xl drop-shadow-2xl overflow-hidden cursor-pointer relative group">
                        <div class="flex justify-center">
                            <div class="icon absolute text-6xl text-gray-400 z-10 lg:mt-32">
                                <i class="fa-regular fa-circle-play"></i>
                            </div>
                        </div>
                        <img :src="gallery.images"
                            class="w-full h-80 rounded-2xl transition-transform duration-300 transform scale-100 group-hover:scale-105"
                            alt="">
                        <div class="h-32 rounded-b-2xl text-[#f89b3b] transition duration-300 ease-in-out transform">
                            <h2 class="text-center font-normal pt-5 text-2xl">{{ gallery.cardTitle }}</h2>
                        </div>
                    </div>
                </div>
            </a>

        </div>
    </div>
</template>