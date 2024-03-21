<script setup>
const serviceHeading = {
    image: "/assets/About-4-mAf3Rufd.webp",
    smallQuote: "Unitech - Believe In Quality",
    title: "Where Quality Meets Affordability",
    description: "Etiam sit amet orci eget eros faucibus tincidunt.  Duis leo.<br>Sed fringilla mauris sit amet nibh.  Donec sodales sagittis <br> Etiam sit amet orci eget eros faucibus tincidunt. <br> Sed fringilla mauris sit amet nibh. Donec sodales",
    buttonName: "View Help Videos"
}
</script>

<template>
    <div class="container mx-auto pb-10">
        <div class="grid lg:grid-cols-2 gap-5 group">
            <div
                class="Image w-full h-auto lg:rounded-2xl flex justify-center overflow-hidden">
                <img class="w-full h-auto object-cover object-center rounded-2xl transition-all group-hover:scale-110 overflow-hidden"
                    :src="serviceHeading.image" alt="">
            </div>

            <div v-if="serviceHeading" class="text-info text-center">
                <p class="lg:text-2xl font-light mt-12">{{ serviceHeading.smallQuote }}</p>
                <h1 class="lg:text-5xl text-2xl font-medium leading-[60px] lg:mt-5 text-[#273270]">
                    {{ serviceHeading.title }}
                </h1>
                <p v-html="serviceHeading.description" class="lg:text-xl font-normal leading-7 mt-3 lg:mt-7 px-5"></p>
                <button
                    class="lg:py-4 lg:px-10 px-7 py-3 bg-[#273270] text-white lg:text-2xl text-lg font-normal rounded-lg mt-10 transition-all hover:bg-[#eb9843]">
                    {{ serviceHeading.buttonName }}
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>