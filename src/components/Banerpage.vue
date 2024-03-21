<script setup>
const banerPage = [
    {
        imageUrl: "/src/assets/Lock/doorLock1.png",
        title: "DOOR LOCK",
        description: `Material: Steel; <br> Key: 3 normal brass keys/iron; OEM: Accepted SN, PC, AB, AC, PB, etc`
    },
    {
        imageUrl: "/src/assets/Lock/handelLock.png",
        title: "HANDLE LOCK",
        description: `Iron plate, plate length: 250-260 available All designs and colors available 1.0mm-2.0mm with 8540 lockbody with iron keys`
    },
    {
        imageUrl: "/src/assets/Lock/padLock1.png",
        title: "PAD LOCK",
        description: `Super premium solid steel 10 years guarantee`
    }
]
</script>

<template>
    <section class="">
        <div class="">
            <div class="Featured_Image"></div>
            <div class="container mx-auto">
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 lg:mt-0 -mt-72">
                    <div class="flex justify-center lg:mt-0 mt-10">
                        <div
                            class="z-10 h-72 w-72 shadow-2xl bg-[#323787] rounded-full lg:ml-0 ml-4 lg:-mt-28 mt-36 ring-8 ring-white overflow-visible">
                            <div src="" class="Img-1" alt=""></div>
                            <img :src="banerPage[0].imageUrl" class="Img-2" alt="">
                            <h3 class="lg:ml-4 text-center text-2xl lg:font-semibold text-[#eb9843] mt-16">
                                {{ banerPage[0].title }}
                            </h3>
                            <p class="text-xl text-center text-[#606060] pt-3">
                                {{ banerPage[0].description }}
                            </p>
                        </div>
                    </div>
                    <div class="flex justify-center lg:mt-0 mt-16">
                        <div
                            class="z-10 h-72 w-72 shadow-2xl bg-[#323787] rounded-full lg:ml-0 ml-4 lg:-mt-28 mt-36 ring-8 ring-white overflow-visible">
                            <img :src="banerPage[1].imageUrl" class="Img-3" alt="">
                            <h3 class="lg:ml-4 text-center text-2xl lg:font-semibold text-[#eb9843] mt-9">
                                {{ banerPage[1].title }}
                            </h3>
                            <p class="text-xl text-center text-[#606060] pt-3">{{ banerPage[1].description }}</p>
                        </div>
                    </div>
                    <div class="flex justify-center lg:mt-0 mt-16">
                        <div
                            class="z-10 h-72 w-72 shadow-2xl bg-[#292a2e] rounded-full lg:ml-0 ml-4 lg:-mt-28 mt-36 ring-8 ring-white overflow-visible">
                            <div src="" class="Img-4" alt=""></div>
                            <img :src="banerPage[2].imageUrl" class="Img-5" alt="">
                            <!-- <div class="Img-4"></div>
                            <div class="Img-5"></div> -->
                            <h3 class="lg:ml-4 text-center text-2xl lg:font-semibold text-[#eb9843] mt-20">{{ banerPage[2].title }}</h3>
                            <p class="text-xl text-center text-[#606060] pt-3">{{ banerPage[2].description }}</p>
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
    background-size: contain;
}
.Img-2{
    width: 330px;
    height: 165px;
    margin-top: -60px;
    margin-left: -20px;
    background-size: contain;
    rotate: 15deg;
}
.Img-3{
    width: 340px;
    height: 270px;
    margin-top: 25px;
    margin-left: -12px;
    background-size: contain;
}
.Img-4{
    width: 320px;
    height: 200px;
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