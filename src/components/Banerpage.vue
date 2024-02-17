<script setup>
const banners = [
    {
        images: "https://i.ebayimg.com/images/g/1GwAAOSwEIdgiZ-H/s-l1200.jpg",
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
            <!-- <img src="../assets/image/Featured_BG.png" class="w-full lg:h-60 h-40 mt-10 opacity-50" alt=""> -->
            <div class="Featured_Image"></div>
            <div class="container mx-auto">
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 lg:mt-0 -mt-72">
                    <div v-for="(banner, index) in  banners " :key="index" class="flex justify-center lg:mt-0 mt-10">
                        <div class="z-10 h-72 w-72 shadow-md rounded-full lg:ml-0 ml-4 lg:-mt-28 mt-36 border-solid border-4 border-yellow-400">
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

<style scoped>
.Featured_Image{
    width: 100%;
    height: 240px;
    background: url(../assets/image/Featured_BG.png) no-repeat;
    background-size: cover;
    opacity: 0.35;
}
@media (max-width: 768px) {
    .Featured_Image{
        width: 100%;
        height: 180px;
        background: url(../assets/image/Featured_BG.png) no-repeat;
        background-size: cover;
        opacity: 0.35;
    }
}
</style>