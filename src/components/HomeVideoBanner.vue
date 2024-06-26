<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { BASE_URL } from '../assets/apiConfig';
import { IMG } from '../assets/imageUrl';

const videoBanner = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}videoBannerInfo`);
        videoBanner.value = response.data;
        console.log('Data fetched successfully:', videoBanner.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

</script>

<template>
    <div v-if="videoBanner && videoBanner" class="Contact_Heading lg:w-full mt-72">
        <div v-for="(details, index) in videoBanner.data" :key="index"
            class="Title_Heading pt-28 w-full h-full mb-10 z-[1] border flex justify-center"
            :style="{ backgroundImage: `url(${IMG + details.backgroundImage})` }">

            <div class="w-96 h-96 text-center mt-5">

                <div>
                    <button data-modal-target="default-modal" data-modal-toggle="default-modal"
                        class="play-icon w-12 h-12 rounded-full bg-[#eb9843] text-xl text-black cursor-pointer flex justify-center items-center mt-5 mb-5"
                        type="button">
                        <i class="fa-solid fa-play"></i>
                    </button>
                </div>
                <h2 class="text-3xl text-slate-600 font-normal uppercase">{{ details.title }}</h2>
                <p class="py-5 text-xl font-light lg:text-[#f89b3b] text-white">{{ details.discountMessage }}</p>
            </div>

            <!-- Modal Code -->

            <div id="default-modal" tabindex="-1" aria-hidden="true"
                class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative p-4 w-full max-w-2xl max-h-full">
                    <!-- Modal content -->
                    <div class="relative bg-black rounded-lg shadow dark:bg-gray-700">
                        <!-- Modal header -->
                        <div class="flex items-center justify-between p-4 md:p-5 rounded-t dark:border-gray-600">

                            <button type="button"
                                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="default-modal">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        <!-- Modal body -->
                        <div class=" space-y-4">
                            <iframe width="640" height="325" :src="details.videoLink" title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                        </div>
                        <!-- Modal footer -->
                        <div class="flex items-center md:p-5 rounded-b dark:border-gray-600">

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.Title_Heading {
    width: 100%;
    background-size: cover !important;
    background-position: top;
    background: no-repeat;
}
.play-icon {
  position: relative;
  display: inline-block;
}

.play-icon::after {
  content: "";
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  opacity: 0;
  animation: fadeInCircle 2s ease infinite; /* Adjust the duration as needed */
}

@keyframes fadeInCircle {
  0% {
    opacity: 0;
    background-color: #273270;
  }
  50% {
    opacity: 0.7;
    background-color: #273270;
  }
  100% {
    opacity: 0;
    background-color: #273270;
  }
}
</style>