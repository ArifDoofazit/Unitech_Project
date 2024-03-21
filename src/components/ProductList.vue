<script setup>
import { ref } from 'vue';
const productCards = ref([
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
]);
const shuffleProductCards = () => {
    for (let i = productCards.value.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [productCards.value[i], productCards.value[j]] = [productCards.value[j], productCards.value[i]];
    }
};
</script>

<template>
    <div class="container mx-auto pb-10">
        <div class="grid lg:grid-cols-3 grid-cols-1 lg:gap-5 gap-0 lg:grid-rows-1">

            <div class="Tabs">
                <h2 class="lg:text-3xl text-center lg:text-start text-2xl font-semibold text-[#2c306b]">CATAGORY OF PRODUCTS</h2>

                <div class="mb-4 border-b border-gray-200 dark:border-gray-700 lg:mt-12 mt-8 lg:ml-0 ml-2">
                    <ul class="-mb-px text-2xl font-medium text-center" id="default-styled-tab" data-tabs-toggle="#default-styled-tab-content" data-tabs-active-classes="text-[#f89b3b] hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500" data-tabs-inactive-classes="dark:border-transparent text-white hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300" role="tablist">
                        <li class="me-2 focus:bg-[#2c306b] bg-[#f89b3b] mt-2 rounded-md" role="presentation">
                            <button class="inline-block focus:bg-[#2c306b] focus:text-white w-full p-4 rounded-t-lg" id="profile-styled-tab" data-tabs-target="#styled-profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Door Lock</button>
                        </li>
                        <li class="me-2 bg-[#f89b3b] mt-2 rounded-md" role="presentation">
                            <button @click="shuffleProductCards" class="inline-block focus:bg-[#2c306b] focus:text-white w-full p-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-styled-tab" data-tabs-target="#styled-dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Door Hinges</button>
                        </li>
                        <li class="me-2 bg-[#f89b3b] mt-2 rounded-md" role="presentation">
                            <button class="inline-block focus:bg-[#2c306b] focus:text-white w-full p-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-styled-tab" data-tabs-target="#styled-settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Cabinet Handles</button>
                        </li>
                        <li class="me-2 bg-[#f89b3b] mt-2 rounded-md" role="presentation">
                            <button @click="shuffleProductCards" class="inline-block focus:bg-[#2c306b] focus:text-white w-full p-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-styled-tab" data-tabs-target="#styled-contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Drawer Slider</button>
                        </li>
                        <li class="me-2 bg-[#f89b3b] mt-2 rounded-md" role="presentation">
                            <button class="inline-block focus:bg-[#2c306b] focus:text-white w-full p-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="drawer-styled-tab" data-tabs-target="#styled-drawers" type="button" role="tab" aria-controls="drawer" aria-selected="false">Drawer Lock</button>
                        </li>
                        <li class="me-2 bg-[#f89b3b] mt-2 rounded-md" role="presentation">
                            <button @click="shuffleProductCards" class="inline-block focus:bg-[#2c306b] focus:text-white w-full p-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="drawer-styled-tab" data-tabs-target="#styled-viewrs" type="button" role="tab" aria-controls="viewr" aria-selected="false">Door Viewer</button>
                        </li>
                        <li class="me-2 bg-[#f89b3b] mt-2 rounded-md" role="presentation">
                            <button @click="shuffleProductCards" class="inline-block focus:bg-[#2c306b] focus:text-white w-full p-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="drawer-styled-tab" data-tabs-target="#styled-handles" type="button" role="tab" aria-controls="handle" aria-selected="false">Handle Lock</button>
                        </li>
                        <li class="me-2 bg-[#f89b3b] mt-2 rounded-md" role="presentation">
                            <button @click="shuffleProductCards" class="inline-block focus:bg-[#2c306b] focus:text-white w-full p-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="drawer-styled-tab" data-tabs-target="#styled-pads" type="button" role="tab" aria-controls="pad" aria-selected="false">Pad Lock</button>
                        </li>
                    </ul>
                </div>
            </div>

            <div id="default-styled-tab-content" class="col-span-2">
                <div class="col-span-2 grid lg:grid-cols-3 grid-cols-2 gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-profile" role="tabpanel" aria-labelledby="profile-tab">
                    <RouterLink v-for="(productCard, index) in productCards" :key="index" to="/product-details">
                        <div class="flex justify-center">
                            <div class="product-card w-72 rounded-lg drop-shadow-2xl overflow-hidden cursor-pointer relative group border hover:shadow-2xl">
                                <img :src="productCard.images[0]" class="w-full lg:h-[270px] rounded-lg " alt="">
                                <img :src="productCard.images[1]" class="w-full lg:h-[270px] rounded-lg absolute top-0 left-0 opacity-0 " alt="">
                                <div class="lg:h-20 leading-9 rounded-2xl drop-shadow-xl border-2 border-[#f89b3b] bg-white text-[#f89b3b] transition duration-300 ease-in-out transform group-hover:text-[#eb9843]">
                                        <h2 class="text-center font-semibold pt-1 text-xl">{{ productCard.productName }}</h2>
                                    <div class="text-center text-black text-sm">
                                        <p>{{ productCard.productDetails }}</p>
                                        <p class="font-medium">Code: {{ productCard.productCode }}</p>
                                    </div>
                                </div>
                                </div>
                        </div>
                    </RouterLink>
                </div>
                <div class="col-span-2 grid lg:grid-cols-3 grid-cols-2 gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                    <RouterLink v-for="(productCard, index) in productCards" :key="index" to="/product-details">
                        <div class="flex justify-center">
                            <div class="product-card w-72 rounded-lg drop-shadow-2xl overflow-hidden cursor-pointer relative group border hover:shadow-2xl">
                                <img :src="productCard.images[0]" class="w-full lg:h-[270px] rounded-lg " alt="">
                                <img :src="productCard.images[1]" class="w-full lg:h-[270px] rounded-lg absolute top-0 left-0 opacity-0 " alt="">
                                <div class="lg:h-20 leading-9 rounded-2xl drop-shadow-xl border-2 border-[#f89b3b] bg-white text-[#f89b3b] transition duration-300 ease-in-out transform group-hover:text-[#eb9843]">
                                        <h2 class="text-center font-semibold pt-1 text-xl">{{ productCard.productName }}</h2>
                                    <div class="text-center text-black text-sm">
                                        <p>{{ productCard.productDetails }}</p>
                                        <p class="font-medium">Code: {{ productCard.productCode }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>

        
    </div>
</template>

<style scoped>
ul.text-white > li > button {
  color: white;
}

/* Change text color for active link when clicked and stays active */
ul.text-white > li.active-link > button {
  color: #f89b3b;
}
</style>