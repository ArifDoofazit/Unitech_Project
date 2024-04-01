<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { BASE_URL } from '../assets/apiConfig';
import { IMG } from '../assets/imageUrl';

const clients = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}clientsInfo`);
        clients.value = response.data;
        console.log('Data fetched successfully:', clients.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
</script>
<template>
    <section class="">
        <div class="h-auto w-auto pb-10">
            <div class="container mx-auto">
                <h2 class="lg:text-3xl lg:ml-5 text-2xl text-center text-[#eb9843] ml-5 font-semibold">OUR CLIENTS</h2>
                <div v-if="clients && clients"
                    class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-4 mt-10">
                    <!-- <div class="w-full flex justify-center">
                        <div class="border-solid border-2 rounded-2xl border-inherit flex justify-center lg:w-64 w-11/12 lg:ml-4 hover:shadow-md">
                            <img src="../assets/clients image-1.avif" class="h-40" alt="">
                        </div>
                    </div> -->
                    <div v-for="(client, index) in clients.data" :key="index" class="w-full flex justify-center">
                        <div
                            class="border-solid border-2 rounded-2xl border-inherit flex justify-center lg:w-64 w-11/12 hover:shadow-md">
                            <img :src="IMG +client.Images" class="h-40" alt="">
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>