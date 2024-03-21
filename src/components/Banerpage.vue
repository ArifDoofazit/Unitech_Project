<script setup>
const gridItems = [
    {
        img1: 'Img-1',
        img2: 'Img-2',
        title: 'DOOR LOCK',
        description: 'Material: Steel; <br> Key: 3 normal brass keys/iron; OEM: Accepted SN, PC, AB, AC, PB, etc'
    },
    {
        img1: 'Img-3',
        title: 'HANDLE LOCK',
        description: 'Iron plate, plate length: 250-260 available All designs and colors available 1.0mm-2.0mm with 8540 lockbody with iron keys'
    },
    {
        img1: 'Img-4',
        img2: 'Img-5',
        title: 'PAD LOCK',
        description: 'Super premium solid steel 10 years guarantee'
    }
];
</script>

<template>
    <section class="">
        <div class="">
            <div class="Featured_Image"></div>
            <div class="container mx-auto">
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 lg:mt-0 -mt-72">
                    <div v-for="(item, index) in gridItems" :key="index" class="flex justify-center lg:mt-0 mt-10">
                        <div
                            class="z-10 h-72 w-72 shadow-2xl bg-[#323787] rounded-full lg:ml-0 ml-4 lg:-mt-28 mt-36 ring-8 ring-white overflow-visible">
                            <div :class="item.img1"></div>
                            <div v-if="item.img2" :class="item.img2"></div>
                            <h3 class="lg:ml-4 text-center text-2xl lg:font-semibold text-[#eb9843]"
                                :class="{ 'mt-16': item.img2, 'mt-9': !item.img2 }">{{ item.title }}</h3>
                            <p class="text-xl text-center text-[#606060] pt-3" v-html="item.description"></p>
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
.Img-1{
    width: 300px;
    height: 125px;
    margin-top: 40px;
    margin-left: 20px;
    background: url(/src/assets/Lock/doorLock.png) no-repeat;
    background-size: contain;
}
.Img-2{
    width: 330px;
    height: 165px;
    margin-top: -60px;
    margin-left: -20px;
    background: url(/src/assets/Lock/doorLock1.png) no-repeat;
    background-size: contain;
    rotate: 15deg;
}
.Img-3{
    width: 340px;
    height: 270px;
    margin-top: 25px;
    margin-left: -12px;
    background: url(/src/assets/Lock/handelLock.png) no-repeat;
    background-size: contain;
}
.Img-4{
    width: 320px;
    height: 195px;
    margin-top: 40px;
    margin-left: -5px;
    background: url(/src/assets/Lock/padLock.png) no-repeat;
    background-size: contain;
}
.Img-5{
    width: 300px;
    height: 170px;
    margin-top: -152px;
    margin-left: 5px;
    background: url(/src/assets/Lock/padLock1.png) no-repeat;
    background-size: contain;
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