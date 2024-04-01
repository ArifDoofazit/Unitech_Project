<script setup>
const blogPost = [
    {
        headingTitle : "WHY CHOOSE UNITECH GLOBAL LIMITED",
    }
]

import { onMounted, ref } from 'vue';
import axios from 'axios';
import { BASE_URL } from '../assets/apiConfig';
import { IMG } from '../assets/imageUrl';

const blog = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}blogCardInfo`);
        blog.value = response.data;
        console.log('Data fetched successfully:', blog.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
</script>

<template>
    <section class="">
        <div class="h-auto w-auto pb-20">
            <div class="container mx-auto px-4 lg:mt-20">
                <h2 v-for="(blog , index) in blogPost" :key="index"
                    class="lg:text-4xl lg:ml-10 pb-10 text-2xl text-center text-[#eb9843] font-medium">{{
                    blog.headingTitle }}</h2>
                <div v-if="blog && blog" class="flex justify-center">
                    <div class="mt-5 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:ml-0 lg:mr-4">
                        <!-- card-1========================== -->

                        <div v-for="(card, index) in blog.data" :key="index"
                            class="max-w-sm h-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img class="rounded-t-lg lg:h-60 w-full" :src="IMG+card.images" alt="" />
                            </a>
                            <div class="p-5">
                                <a href="#">
                                    <h5
                                        class="mb-2 mt-5 text-lg font-bold tracking-tight text-[#f89b3b] dark:text-white">
                                        {{ card.CardTitle }}</h5>
                                </a>
                                <p class="mb-3 mt-5 font-normal text-[#999999] leading-7 dark:text-gray-200">
                                    {{ card.cardDescription }}
                                </p>
                            </div>
                        </div>
                        <!-- card-1 end========================== -->

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>