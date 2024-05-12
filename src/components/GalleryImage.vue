<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { BASE_URL } from '../assets/apiConfig';
import { IMG } from '../assets/imageUrl';

const galleryCard = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}galleryCardInfo`);
        galleryCard.value = response.data;
        console.log('Data fetched successfully:', galleryCard.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
</script>

<template>
    <div class="container mx-auto pb-10">
        <div v-if="galleryCard && galleryCard" class="grid lg:grid-cols-4 gap-5 lg:grid-rows-3">

            <a v-for="(gallery, index) in galleryCard.data" :key="index" href="https://www.facebook.com/hicare11">
                <div class="flex justify-center">
                    <div
                        class="product-card w-72 rounded-2xl drop-shadow-2xl overflow-hidden cursor-pointer relative group">
                        <div class="flex justify-center">
                            <div class="icon absolute text-6xl text-gray-400 z-10 lg:mt-32 mt-32">
                                <i class="fa-regular fa-circle-play"></i>
                            </div>
                        </div>
                        <img :src="IMG +gallery.images"
                            class="w-full h-80 rounded-2xl transition-transform duration-300 transform scale-100 group-hover:scale-105"
                            alt="">
                        <div
                            class="lg:h-32 h-14 rounded-b-2xl text-[#f89b3b] transition duration-300 ease-in-out transform">
                            <h2 class="font-semibold pt-5 text-xl">
                                {{ gallery.cardTitle }}
                                <span class="px-1 text-[#524c4c]">|</span>
                                <span class="font-normal text-lg text-black">Promotion mp4 </span>
                            </h2>
                        </div>
                    </div>
                </div>
            </a>

        </div>
    </div>
</template>