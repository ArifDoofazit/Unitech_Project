<script setup>
const galleryCard = [
    {
        images: "https://m.media-amazon.com/images/I/61PutjqJLFL.jpg",
        cardTitle: "DOVE HANDLE"
    },
    {
        images: "https://www.plantex.in/cdn/shop/products/81NXVeS3vBL_4ddf2b74-9ec0-4f06-87a6-c76e5d7b5484.jpg?v=1690692488",
        cardTitle: "DOVE HANDLE"
    },
    {
        images: "https://m.media-amazon.com/images/I/71GV627s4YL._AC_UF1000,1000_QL80_.jpg",
        cardTitle: "DOVE HANDLE"
    },
    {
        images: "https://www.jiomart.com/images/product/original/rvegn1pyt6/screwtight-heavy-duty-mortise-handle-door-locks-for-main-door-bullet-door-lock-body-with-3-key-double-action-mortise-lock-for-door-door-locks-for-home-azmph-001-ky-bs-product-images-orvegn1pyt6-p605635730-0-202310141507.jpg?im=Resize=(420,420)",
        cardTitle: "DOVE HANDLE"
    },
    {
        images: "https://m.media-amazon.com/images/I/61PutjqJLFL.jpg",
        cardTitle: "DOVE HANDLE"
    },
    {
        images: "https://www.plantex.in/cdn/shop/products/81NXVeS3vBL_4ddf2b74-9ec0-4f06-87a6-c76e5d7b5484.jpg?v=1690692488",
        cardTitle: "DOVE HANDLE"
    },
    {
        images: "https://www.jiomart.com/images/product/original/rvegn1pyt6/screwtight-heavy-duty-mortise-handle-door-locks-for-main-door-bullet-door-lock-body-with-3-key-double-action-mortise-lock-for-door-door-locks-for-home-azmph-001-ky-bs-product-images-orvegn1pyt6-p605635730-0-202310141507.jpg?im=Resize=(420,420)",
        cardTitle: "DOVE HANDLE"
    },
    {
        images: "https://m.media-amazon.com/images/I/71GV627s4YL._AC_UF1000,1000_QL80_.jpg",
        cardTitle: "DOVE HANDLE"
    },
    {
        images: "https://www.plantex.in/cdn/shop/products/81NXVeS3vBL_4ddf2b74-9ec0-4f06-87a6-c76e5d7b5484.jpg?v=1690692488",
        cardTitle: "DOVE HANDLE"
    },
    {
        images: "https://www.jiomart.com/images/product/original/rvegn1pyt6/screwtight-heavy-duty-mortise-handle-door-locks-for-main-door-bullet-door-lock-body-with-3-key-double-action-mortise-lock-for-door-door-locks-for-home-azmph-001-ky-bs-product-images-orvegn1pyt6-p605635730-0-202310141507.jpg?im=Resize=(420,420)",
        cardTitle: "DOVE HANDLE"
    },
    {
        images: "https://m.media-amazon.com/images/I/71GV627s4YL._AC_UF1000,1000_QL80_.jpg",
        cardTitle: "DOVE HANDLE"
    },
    {
        images: "https://www.plantex.in/cdn/shop/products/81NXVeS3vBL_4ddf2b74-9ec0-4f06-87a6-c76e5d7b5484.jpg?v=1690692488",
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
                            <div class="icon absolute text-6xl text-gray-400 z-10 lg:mt-32 mt-32">
                                <i class="fa-regular fa-circle-play"></i>
                            </div>
                        </div>
                        <img :src="gallery.images"
                            class="w-full h-80 rounded-2xl transition-transform duration-300 transform scale-100 group-hover:scale-105"
                            alt="">
                        <div class="lg:h-32 h-14 rounded-b-2xl text-[#f89b3b] transition duration-300 ease-in-out transform">
                            <h2 class="font-semibold pt-5 text-xl">
                                {{ gallery.cardTitle }} 
                                <span class="px-1 text-[#524c4c]">|</span>
                                <span class="font-normal text-lg text-black">Promotion mp4 </span>
                            </h2>
                        </div>
                    </div>
                </div>
            </a>

        </div>
    </div>
</template>