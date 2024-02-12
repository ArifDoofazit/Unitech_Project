<script setup>
const banners = [
    {
        images: "https://olefinsbd.com/wp-content/uploads/2020/03/zkteco-lh3600-new-smart-door-lock.jpg",
        title: "Installation",
        description : "Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate"
    },
    {
        images: "https://www.ryanscomputers.com/storage/products/main/smartx-sx-528-wi-fi-fingerprint-smart-door-11677998097.webp",
        title: "Installation",
        description : "Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate"
    },
    {
        images: "https://upload.digoodcms.com/542/image_1682566518_AJ3011-09-K9-1.jpg?imageMogr2/thumbnail/300x/gravity/Center/crop/300x300",
        title: "Installation",
        description : "Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate"
    },
]
</script>

<template>
    <section class="">
        <div class="">
            <h3 class="lg:w-96 text-4xl text-[#eb9843] font-medium uppercase text-center lg:ml-20 py-6">Featured</h3>
            <img src="../assets/banner-hardware.jpg" class="w-full lg:h-60 h-40 mt-10 opacity-30" alt="">
            <div class="container mx-auto">
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
                    <div v-for="(banner, index) in  banners " :key="index" class="flex justify-center lg:mt-0 mt-10">
                        <div class="z-10 h-72 w-72 shadow-md rounded-full lg:ml-28 ml-4 lg:-mt-28 mt-36 border-solid border-4 border-yellow-400">
                            <img :src="banner.images" class="h-72 w-72 shadow-md rounded-full" alt="">
                            <h3 class="lg:ml-4 text-center text-2xl lg:font-semibold text-[#eb9843] mt-5">{{ banner.title }}</h3>
                            <p class="text-center text-[#a6a5a4]">{{ banner.description }}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>