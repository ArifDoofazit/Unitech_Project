<script setup>
const homeIntro = {
    imageUrl: "/assets/Slider-5-UXzDk7bZ.jpg",
    videoLink: "https://www.facebook.com/hicare11/videos/406464681786826/",
    title: "Company Introduction",
    description: "provides high quality accessories of hardware, specially various Lock, Handle, others doors and all kinds of home accessories etc.",
    shortTitle: "WHOLE SALE OLNY"
}
</script>

<template>
    <div class="container mx-auto bg-white lg:py-10 py-10 lg:mt-10">
        <div class="grid lg:grid-cols-2 gap-5">
            <div class="video w-full h-full lg:px-0 px-3">
                <div class="w-full lg:h-[400px] h-[350px] px-5 text-center mt-5 rounded-2xl bg-no-repeat bg-cover bg-opacity-30"
                    :style="{ backgroundImage: `url(${homeIntro.imageUrl})` }">
                    <div class="h-full flex justify-center items-center">
                        <a :href="homeIntro.videoLink"
                            class="play-icon w-20 h-20 rounded-full bg-[#eb9843] text-4xl text-black cursor-pointer flex justify-center items-center mt-5 mb-5">
                            <i class="fa-solid fa-play"></i>
                        </a>
                    </div>
                </div>

            </div>

            <div class="text">
                <div class="text-start">
                    <h2 class="text-[#f89b3b] lg:text-5xl text-3xl pl-5 font-medium lg:pt-28 lg:pl-10">
                        {{ homeIntro.title }}
                    </h2>

                    <p class="font-normal lg:text-xl text-base pl-5 text-[#999999] lg:pl-10 pt-6 leading-9">
                        {{ homeIntro.description }}
                    </p>
                    <h4
                        class="font-medium text-[#ec2c49] text-xl lg:pl-10 pl-5 pt-8 lg:mt-5 tracking-[6px] whitespace-nowrap">
                        {{ homeIntro.shortTitle }}
                    </h4>

                </div>
            </div>
        </div>
    </div>
</template>