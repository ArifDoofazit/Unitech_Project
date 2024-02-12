<script setup>
const productCards = [
    {
        images: [
            "https://m.media-amazon.com/images/I/61PutjqJLFL.jpg",
            "https://m.media-amazon.com/images/I/61PutjqJLFL.jpg"
        ],
        productName: "DOVE HANDLE",
        productDetails: "AB/AC 96mm, 4 colors",
        productCode: "317"
    },
    {
        images: [
            "https://www.jiomart.com/images/product/original/rvegn1pyt6/screwtight-heavy-duty-mortise-handle-door-locks-for-main-door-bullet-door-lock-body-with-3-key-double-action-mortise-lock-for-door-door-locks-for-home-azmph-001-ky-bs-product-images-orvegn1pyt6-p605635730-0-202310141507.jpg?im=Resize=(420,420)",
            "https://www.jiomart.com/images/product/original/rvegn1pyt6/screwtight-heavy-duty-mortise-handle-door-locks-for-main-door-bullet-door-lock-body-with-3-key-double-action-mortise-lock-for-door-door-locks-for-home-azmph-001-ky-bs-product-images-orvegn1pyt6-p605635730-0-202310141507.jpg?im=Resize=(420,420)"
        ],
        productName: "DOVE HANDLE",
        productDetails: "AB/AC 96mm, 4 colors",
        productCode: "317"
    },
    {
        images: [
            "https://www.plantex.in/cdn/shop/products/81NXVeS3vBL_4ddf2b74-9ec0-4f06-87a6-c76e5d7b5484.jpg?v=1690692488",
            "https://www.plantex.in/cdn/shop/products/81NXVeS3vBL_4ddf2b74-9ec0-4f06-87a6-c76e5d7b5484.jpg?v=1690692488"
        ],
        productName: "DOVE HANDLE",
        productDetails: "AB/AC 96mm, 4 colors",
        productCode: "317"
    },
    {
        images: [
            "https://www.jiomart.com/images/product/original/rvegn1pyt6/screwtight-heavy-duty-mortise-handle-door-locks-for-main-door-bullet-door-lock-body-with-3-key-double-action-mortise-lock-for-door-door-locks-for-home-azmph-001-ky-bs-product-images-orvegn1pyt6-p605635730-0-202310141507.jpg?im=Resize=(420,420)",
            "https://www.jiomart.com/images/product/original/rvegn1pyt6/screwtight-heavy-duty-mortise-handle-door-locks-for-main-door-bullet-door-lock-body-with-3-key-double-action-mortise-lock-for-door-door-locks-for-home-azmph-001-ky-bs-product-images-orvegn1pyt6-p605635730-0-202310141507.jpg?im=Resize=(420,420)"
        ],
        productName: "DOVE HANDLE",
        productDetails: "AB/AC 96mm, 4 colors",
        productCode: "317"
    },
    {
        images: [
            "https://www.plantex.in/cdn/shop/products/81NXVeS3vBL_4ddf2b74-9ec0-4f06-87a6-c76e5d7b5484.jpg?v=1690692488",
            "https://www.plantex.in/cdn/shop/products/81NXVeS3vBL_4ddf2b74-9ec0-4f06-87a6-c76e5d7b5484.jpg?v=1690692488"
        ],
        productName: "DOVE HANDLE",
        productDetails: "AB/AC 96mm, 4 colors",
        productCode: "317"
    },
    {
        images: [
            "https://m.media-amazon.com/images/I/61PutjqJLFL.jpg",
            "https://m.media-amazon.com/images/I/61PutjqJLFL.jpg"
        ],
        productName: "DOVE HANDLE",
        productDetails: "AB/AC 96mm, 4 colors",
        productCode: "317"
    },
    {
        images: [
            "https://m.media-amazon.com/images/I/71GV627s4YL._AC_UF1000,1000_QL80_.jpg",
            "https://m.media-amazon.com/images/I/71GV627s4YL._AC_UF1000,1000_QL80_.jpg"
        ],
        productName: "DOVE HANDLE",
        productDetails: "AB/AC 96mm, 4 colors",
        productCode: "317"
    },
    {
        images: [
            "https://www.jiomart.com/images/product/original/rvegn1pyt6/screwtight-heavy-duty-mortise-handle-door-locks-for-main-door-bullet-door-lock-body-with-3-key-double-action-mortise-lock-for-door-door-locks-for-home-azmph-001-ky-bs-product-images-orvegn1pyt6-p605635730-0-202310141507.jpg?im=Resize=(420,420)",
            "https://www.jiomart.com/images/product/original/rvegn1pyt6/screwtight-heavy-duty-mortise-handle-door-locks-for-main-door-bullet-door-lock-body-with-3-key-double-action-mortise-lock-for-door-door-locks-for-home-azmph-001-ky-bs-product-images-orvegn1pyt6-p605635730-0-202310141507.jpg?im=Resize=(420,420)"
        ],
        productName: "DOVE HANDLE",
        productDetails: "AB/AC 96mm, 4 colors",
        productCode: "317"
    },
    {
        images: [
            "https://www.plantex.in/cdn/shop/products/81NXVeS3vBL_4ddf2b74-9ec0-4f06-87a6-c76e5d7b5484.jpg?v=1690692488",
            "https://www.plantex.in/cdn/shop/products/81NXVeS3vBL_4ddf2b74-9ec0-4f06-87a6-c76e5d7b5484.jpg?v=1690692488"
        ],
        productName: "DOVE HANDLE",
        productDetails: "AB/AC 96mm, 4 colors",
        productCode: "317"
    },
    {
        images: [
            "https://m.media-amazon.com/images/I/71GV627s4YL._AC_UF1000,1000_QL80_.jpg",
            "https://m.media-amazon.com/images/I/71GV627s4YL._AC_UF1000,1000_QL80_.jpg"
        ],
        productName: "DOVE HANDLE",
        productDetails: "AB/AC 96mm, 4 colors",
        productCode: "317"
    },
    {
        images: [
            "https://www.jiomart.com/images/product/original/rvegn1pyt6/screwtight-heavy-duty-mortise-handle-door-locks-for-main-door-bullet-door-lock-body-with-3-key-double-action-mortise-lock-for-door-door-locks-for-home-azmph-001-ky-bs-product-images-orvegn1pyt6-p605635730-0-202310141507.jpg?im=Resize=(420,420)",
            "https://www.jiomart.com/images/product/original/rvegn1pyt6/screwtight-heavy-duty-mortise-handle-door-locks-for-main-door-bullet-door-lock-body-with-3-key-double-action-mortise-lock-for-door-door-locks-for-home-azmph-001-ky-bs-product-images-orvegn1pyt6-p605635730-0-202310141507.jpg?im=Resize=(420,420)"
        ],
        productName: "DOVE HANDLE",
        productDetails: "AB/AC 96mm, 4 colors",
        productCode: "317"
    },
    {
        images: [
            "https://www.plantex.in/cdn/shop/products/81NXVeS3vBL_4ddf2b74-9ec0-4f06-87a6-c76e5d7b5484.jpg?v=1690692488",
            "https://www.plantex.in/cdn/shop/products/81NXVeS3vBL_4ddf2b74-9ec0-4f06-87a6-c76e5d7b5484.jpg?v=1690692488"
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

            <RouterLink v-for="(productCard, index) in productCards" :key="index" to="/product-details">
                <div class="flex justify-center">
                    <div class="product-card w-72 rounded-lg drop-shadow-2xl overflow-hidden cursor-pointer relative group border hover:shadow-2xl">
                        <img :src="productCard.images[0]" class="w-full h-[270px] rounded-lg " alt="">
                        <img :src="productCard.images[1]" class="w-full h-[270px] rounded-lg absolute top-0 left-0 opacity-0 " alt="">
                        <div class="lg:h-20 leading-9 rounded-2xl drop-shadow-xl border-2 border-[#f89b3b] bg-white text-[#f89b3b] transition duration-300 ease-in-out transform group-hover:text-[#eb9843]">
                                <h2 class="text-center font-semibold pt-1 text-xl">{{ productCard.productName }}</h2>
                            <div class="text-center text-black text-base">
                                <p>{{ productCard.productDetails }}</p>
                                <p class="font-medium">Code: {{ productCard.productCode }}</p>
                            </div>
                        </div>
                     </div>
                </div>
            </RouterLink>

        </div>
    </div>
</template>