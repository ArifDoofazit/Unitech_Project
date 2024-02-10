<script setup>
const productCards = [
    {
        images: [
            "../src/assets/image/product/product-1.webp",
            "../src/assets/image/product/product-1.webp"
        ],
        productName: "DOVE HANDLE",
        productDetails: "AB/AC 96mm, 4 colors",
        productCode: "317"
    },
    {
        images: [
            "../src/assets/image/product/product-6.jpg",
            "../src/assets/image/product/product-6.jpg"
        ],
        productName: "DOVE HANDLE",
        productDetails: "AB/AC 96mm, 4 colors",
        productCode: "317"
    },
    {
        images: [
            "../src/assets/image/product/product-4.webp",
            "../src/assets/image/product/product-4.webp"
        ],
        productName: "DOVE HANDLE",
        productDetails: "AB/AC 96mm, 4 colors",
        productCode: "317"
    },
    {
        images: [
            "../src/assets/image/product/product-5.webp",
            "../src/assets/image/product/product-5.webp"
        ],
        productName: "DOVE HANDLE",
        productDetails: "AB/AC 96mm, 4 colors",
        productCode: "317"
    },
    {
        images: [
            "../src/assets/image/product/product-6.webp",
            "../src/assets/image/product/product-6.webp"
        ],
        productName: "DOVE HANDLE",
        productDetails: "AB/AC 96mm, 4 colors",
        productCode: "317"
    },
    {
        images: [
            "../src/assets/image/product/product-7.webp",
            "../src/assets/image/product/product-7.webp"
        ],
        productName: "DOVE HANDLE",
        productDetails: "AB/AC 96mm, 4 colors",
        productCode: "317"
    },
    {
        images: [
            "../src/assets/image/product/product-8.jpg",
            "../src/assets/image/product/product-8.jpg"
        ],
        productName: "DOVE HANDLE",
        productDetails: "AB/AC 96mm, 4 colors",
        productCode: "317"
    },
    {
        images: [
            "../src/assets/image/product/product-9.webp",
            "../src/assets/image/product/product-9.webp"
        ],
        productName: "DOVE HANDLE",
        productDetails: "AB/AC 96mm, 4 colors",
        productCode: "317"
    },
    {
        images: [
            "../src/assets/image/product/product-10.jpg",
            "../src/assets/image/product/product-10.jpg"
        ],
        productName: "DOVE HANDLE",
        productDetails: "AB/AC 96mm, 4 colors",
        productCode: "317"
    },
    {
        images: [
            "../src/assets/image/product/product-6.jpg",
            "../src/assets/image/product/product-6.jpg"
        ],
        productName: "DOVE HANDLE",
        productDetails: "AB/AC 96mm, 4 colors",
        productCode: "317"
    },
    {
        images: [
            "../src/assets/image/product/smart-door-lock.webp",
            "../src/assets/image/product/smart-door-lock.webp"
        ],
        productName: "DOVE HANDLE",
        productDetails: "AB/AC 96mm, 4 colors",
        productCode: "317"
    },
    {
        images: [
            "../src/assets/image/product/product-end.jpg",
            "../src/assets/image/product/product-end.jpg"
        ],
        productName: "DOVE HANDLE",
        productDetails: "AB/AC 96mm, 4 colors",
        productCode: "317"
    },
]
</script>

<template>
    <div class="container mx-auto pb-10">
        <div class="grid lg:grid-cols-4 gap-5 lg:grid-rows-3">

            <div v-for="(productCard , index) in productCards" :key="index" class="flex justify-center">
                <div class="product-card w-72 rounded-2xl drop-shadow-2xl overflow-hidden cursor-pointer relative group border hover:shadow-2xl">
                    <img :src="productCard.images[0]" class="w-full h-80 rounded-t-2xl transition-transform duration-300 transform scale-100 group-hover:scale-105" alt="">
                    <img :src="productCard.images[1]" class="w-full h-80 rounded-t-2xl absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" alt="">
                    <div class="h-32 rounded-b-2xl drop-shadow-2xl border-2 border-[#f89b3b] bg-white text-[#f89b3b] transition duration-300 ease-in-out transform group-hover:text-[#eb9843]">
                            <h2 class="text-center font-normal pt-5 text-2xl">{{ productCard.productName }}</h2>
                        <div class="text-center text-black pt-1">
                            <p>{{ productCard.productDetails }}</p>
                            <p class="font-medium pt-1">Code: {{ productCard.productCode }}</p>
                        </div>
                    </div>
                 </div>
            </div>

        </div>
    </div>
</template>