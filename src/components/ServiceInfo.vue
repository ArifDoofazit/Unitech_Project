<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { BASE_URL } from '../assets/apiConfig';
import { IMG } from '../assets/imageUrl';

const serviceDetails = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}serviceDetailsInfo`);
        serviceDetails.value = response.data;
        console.log('Data fetched successfully:', serviceDetails.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
</script>

<template>
    <div class="container mx-auto pb-10">
        <div v-if="serviceDetails && serviceDetails" class="grid md:grid-cols-2 grid-cols-1 gap-5 group">
            <div v-for="(serviceInfo , index) in serviceDetails.data" :key="index">
                <div class="Image w-full h-auto lg:rounded-2xl flex justify-center overflow-hidden">
                    <img class="w-full h-auto object-cover object-center rounded-2xl transition-all group-hover:scale-110 overflow-hidden"
                        :src="IMG +serviceInfo.image" alt="">
                </div>
            </div>
            <div v-for="(serviceInfo, index) in serviceDetails.data" :key="index"
                class="text-info text-center float-left">
                <p class="lg:text-2xl font-light mt-12">{{ serviceInfo.smallQuote }}</p>
                <h1 class="lg:text-5xl text-2xl font-medium leading-[60px] lg:mt-5 text-[#273270]">
                    {{ serviceInfo.title }}
                </h1>
                <p v-html="serviceInfo.description" class="lg:text-xl font-normal leading-7 mt-3 lg:mt-7 px-5"></p>
                <button
                    class="lg:py-4 lg:px-10 px-7 py-3 bg-[#273270] text-white lg:text-2xl text-lg font-normal rounded-lg mt-10 transition-all hover:bg-[#eb9843]">
                    {{ serviceInfo.buttonName }}
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>