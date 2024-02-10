<script setup>
const products = [
    {
        name: "DOVE HANDLE",
        details: "AB/AC 96mm, 4 colors",
        code: "317",
        images: [
            "https://m.media-amazon.com/images/I/71NE2EY7R3L._AC_UF1000,1000_QL80_.jpg",
            "https://m.media-amazon.com/images/I/71NE2EY7R3L._AC_UF1000,1000_QL80_.jpg",
        ]
    },
    {
        name: "Ream Drow Back Lock",
        details: "AB/AC 96mm, 4 colors",
        code: "317",
        images: [
            "https://m.media-amazon.com/images/I/61PutjqJLFL.jpg",
            "https://m.media-amazon.com/images/I/61PutjqJLFL.jpg"
        ]
    },
    {
        name: "Reducers & Adapters",
        details: "AB/AC 96mm, 4 colors",
        code: "317",
        images: [
            "https://i2.wp.com/thezhush.com/wp-content/uploads/2021/03/brass-front-door-knob-on-black-door.jpg",
            "https://i2.wp.com/thezhush.com/wp-content/uploads/2021/03/brass-front-door-knob-on-black-door.jpg"
        ]
    },
    {
        name: "Reducers & Adapters",
        details: "AB/AC 96mm, 4 colors",
        code: "317",
        images: [
            "https://www.jiomart.com/images/product/original/rv7wge6pn9/voltizi-antique-premium-mortise-door-lock-handle-set-1-pair-door-handle-1-bullet-door-lock-1-cylinder-3-keys-spindle-installation-screws-silver-stainless-steel-product-images-orv7wge6pn9-p594753248-0-202210212154.jpg?im=Resize=(420,420)",
            "https://www.jiomart.com/images/product/original/rv7wge6pn9/voltizi-antique-premium-mortise-door-lock-handle-set-1-pair-door-handle-1-bullet-door-lock-1-cylinder-3-keys-spindle-installation-screws-silver-stainless-steel-product-images-orv7wge6pn9-p594753248-0-202210212154.jpg?im=Resize=(420,420)"
        ]
    }
];
</script>

<template>
    <div class="container mx-auto bg-white">
        <div class="w-full h-auto pb-10">
            <div class="py-5 px-5 lg:mt-8 lg:ml-12 flex justify-center">
                <img src="../assets/UGL/Hi-Care_signature.png" class="h-20 w-64 bg-cover bg-no-repeat border-b-4 border-[#eb9843]" alt="">
            </div>

            <div class="grid lg:grid-cols-2 gap-4 lg:mt-10">
                <div class="mt-5 lg:mt-10 lg:w-11/12 w-4/5 mx-auto flex justify-center border rounded-3xl">
                <img src="../assets/image/HomePage-Product.webp" class="w-full lg:h-[895px] rounded-3xl drop-shadow-2xl" alt="">
                </div>

                <div class="mt-5">
                    <div class="card grid lg:grid-cols-2 grid-cols-1 grid-rows-2 gap-4">
                        <div v-for="(product, index) in products" :key="index" class="flex justify-center">
                            <div class="product-card w-72 rounded-2xl drop-shadow-2xl overflow-hidden cursor-pointer relative group border hover:shadow-2xl">
                                <img :src="product.images[0]" class="w-full h-80 rounded-t-2xl transition-transform duration-300 transform scale-100 group-hover:scale-105" alt="">
                                <img :src="product.images[1]" class="w-full h-80 rounded-t-2xl absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" alt="">
                                <div class="h-32 rounded-b-2xl drop-shadow-2xl border-2 border-[#f89b3b] bg-white text-[#f89b3b] transition duration-300 ease-in-out transform group-hover:text-[#eb9843]">
                                    <h2 class="text-center font-normal pt-5 text-2xl">{{ product.name }}</h2>
                                    <div class="text-center text-black pt-1">
                                        <p>{{ product.details }}</p>
                                        <p class="font-medium pt-1">Code: {{ product.code }}</p>
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