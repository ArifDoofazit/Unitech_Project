<script setup>
const blogPost = [
    {
        headingTitle : "WHY CHOOSE UNITECH GLOBAL LIMITED",
    }
]
const blogCard = [
    {
        images: "../assets/hcu-ZKz2F9jl.jpg",
        cardTitle: "MAINTAIN - HIGH QUALITY",
        cardDescription: "Our expertise in hardware products, particularly locks, allows us to offer top- notch solutions for your security needs.Whether you're looking for high - quality locks for your home or business, we have the knowledge and products to help you feel safe & secure."
    },
    {
        images: "../assets/hcu1-8VwEgcEX.jpg",
        cardTitle: "LONG LASTING - WITH GAURANTEE",
        cardDescription: "prolonged lifespan or durability, with the added assurance of a guarantee to back up their quality. item or service is expected to remain functional and effective for an extended period of time, & if there are any issues or defects, the guarantee ensures that the customer will receive support or a replacement"
    },
    {
        images: "../assets/hcu2-PfIYbVaR.jpg",
        cardTitle: "SECURE-TECH SOLUTION OF HARDWARE",
        cardDescription: "Our expertise in hardware products, particularly locks, allows us to offer top- notch solutions for your security needs.Whether you're looking for high - quality locks for your home or business, we have the knowledge and products to help you feel safe & secure."
    },
]
</script>

<template>
    <section class="">
        <div class="h-auto w-auto pb-20">
            <div class="container mx-auto px-4 lg:mt-20">
                <h2 v-for="(blog , index) in blogPost" :key="index" class="lg:text-4xl lg:ml-10 pb-10 text-2xl text-center text-[#eb9843] font-medium">{{ blog.headingTitle }}</h2>
                <div class="flex justify-center">
                    <div class="mt-5 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:ml-0 lg:mr-4">
                        <!-- card-1========================== -->

                        <div v-for="(card, index) in blogCard" :key="index" class="max-w-sm h-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img class="rounded-t-lg lg:h-60 w-full" :src="card.images" alt="" />
                            </a>
                            <div class="p-5">
                                <a href="#">
                                    <h5 class="mb-2 mt-5 text-lg font-bold tracking-tight text-[#f89b3b] dark:text-white">{{ card.cardTitle }}</h5>
                                </a>
                                <p class="mb-3 mt-5 font-normal text-[#999999] leading-7 dark:text-gray-200">{{ card.cardDescription }}</p>
                            </div>
                        </div>
                        <!-- card-1 end========================== -->

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>