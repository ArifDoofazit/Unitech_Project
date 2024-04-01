<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { BASE_URL } from '../assets/apiConfig';
import { IMG } from '../assets/imageUrl';

const intro = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}homeIntroInfo`);
        intro.value = response.data;
        console.log('Data fetched successfully:', intro.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
</script>

<template>
    <div class="container mx-auto bg-white lg:py-10 py-10 lg:mt-10">
        <div class="grid lg:grid-cols-2 gap-5">
            <div v-if="intro && intro" class="video w-full h-full lg:px-0 px-3">
                <div v-for="(home, index) in intro.data" :key="index"
                    class="w-full lg:h-[400px] h-[350px] px-5 text-center mt-5 rounded-2xl bg-no-repeat bg-cover bg-opacity-30"
                    :style="{ backgroundImage: `url(${IMG +home.imageUrl})` }">
                    <div class="h-full flex justify-center items-center">
                        <a :href="home.videoLink"
                            class="play-icon w-20 h-20 rounded-full bg-[#eb9843] text-4xl text-black cursor-pointer flex justify-center items-center mt-5 mb-5">
                            <i class="fa-solid fa-play"></i>
                        </a>
                    </div>
                </div>

            </div>

            <div v-if="intro && intro" class="text">
                <div v-for="(home, index) in intro.data" :key="index" class="text-start">
                    <h2 class="text-[#f89b3b] lg:text-5xl text-3xl pl-5 font-medium lg:pt-28 lg:pl-10">
                        {{ home.title }}
                    </h2>

                    <p class="font-normal lg:text-xl text-base pl-5 text-[#999999] lg:pl-10 pt-6 leading-9">
                        {{ home.description }}
                    </p>
                    <h4
                        class="font-medium text-[#ec2c49] text-xl lg:pl-10 pl-5 pt-8 lg:mt-5 tracking-[6px] whitespace-nowrap">
                        {{ home.shortTitle }}
                    </h4>

                </div>
            </div>
        </div>
    </div>
</template>