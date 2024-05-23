<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import { BASE_URL } from '../assets/apiConfig';
import { IMG } from '../assets/imageUrl';

const route = useRoute();
const productDetails = ref(null);

onMounted(async () => {
    try {
        const productId = route.params.id; // Extracting ID from route parameters
        const response = await axios.get(`${BASE_URL}productCardInfobyId/${productId}`);
        productDetails.value = response.data;
        console.log('Data fetched successfully:', productDetails.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
</script>

<template>
    <div v-if="productDetails && productDetails" class="container mx-auto pb-10">
        <div v-for="(productDetail, index) in productDetails.data" :key="index" class="grid lg:grid-cols-2">

            <div>
                <div class="flex justify-center ">
                    <div
                        class="product-card lg:max-w-full max-w-[320px] rounded-2xl drop-shadow-2xl overflow-hidden cursor-pointer relative border group">
                        <div class="h-[100%]">
                            <img :src="IMG + productDetail.images"
                                class="lg:w-full h-[440px] transition-transform duration-300 transform scale-100 group-hover:scale-105"
                                alt="">
                            <img :src="IMG + productDetail.imageTwo"
                                class="lg:w-full h-[440px] absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                alt="">
                        </div>
                    </div>
                </div>

            </div>

            <div class="flex justify-start">
                <div class="pt-4 pl-10 mt-2">
                    <h3 class="lg:text-3xl text-xl font-semibold underline">{{ productDetail.productName }}</h3>
                    <p class="font-normal lg:text-lg text-base pt-3">Product Id: {{ productDetail.productInfo }}</p>
                    <p class="font-normal lg:text-lg text-base pt-3">Product Code: {{ productDetail.productCode }}</p>
                    <p class="font-normal lg:text-lg text-base pt-3">Product Availability:
                        <span class="text-red-600">{{ productDetail.productAvailability }}</span>
                    </p>
                    <div class="grid lg:grid-cols-2">
                        <h4 class="font-normal w-60 rounded-md lg:text-lg py-3 px-3 mt-10 bg-[#f2f2f2]">
                            Product Price :
                            {{ productDetail.productPrice }}
                        </h4>
                    </div>


                    <div class="overview">
                        <h2 class="font-medium text-3xl mt-8">Quick Overview</h2>
                        <div v-html="productDetail.productDetails" class="py-5 text-xl leading-10"></div>
                    </div>

                </div>
            </div>

        </div>

    </div>
</template>