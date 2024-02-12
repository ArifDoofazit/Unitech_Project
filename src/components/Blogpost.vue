<script setup>
const blogPost = [
    {
        headingTitle : "WHY CHOOSE UGL",
    }
]
const blogCard = [
    {
        images: "https://www.doordeals.co.uk/files/img_cache/4552/770_450_1592565526_best-door-locks.jpg?1592565536",
        cardTitle: "EXPERT SKIRTING OF TILES 2021",
        cardDescription: "Muis sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis grav..."
    },
    {
        images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdBsF_XVR6buQl35zwQOfAu5bU1h2aRRUCRQ&usqp=CAU",
        cardTitle: "WE ARE PROVIDE BEST QUALITY",
        cardDescription: "Muis sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis grav..."
    },
    {
        images: "https://assets-global.website-files.com/61b8072f14a976752f811ee3/61e9ed7e8f7540029650a99d_Hero.jpg",
        cardTitle: "EXPERT SKIRTING OF TILES DONE",
        cardDescription: "Muis sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis grav..."
    },
]
</script>

<template>
    <section class="">
        <div class="h-auto w-auto pb-20">
            <div class="container mx-auto px-4 lg:mt-32">
                <h2 v-for="(blog , index) in blogPost" :key="index" class="lg:text-4xl lg:ml-10 pb-10 text-2xl text-center text-[#eb9843] font-medium">{{ blog.headingTitle }}</h2>
                <div class="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:ml-24 lg:mr-4">
                    <!-- card-1========================== -->

                    <div v-for="(card , index) in blogCard" :key="index" class="max-w-sm h-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img class="rounded-t-lg lg:h-60 w-full" :src="card.images" alt="" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 mt-5 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{{ card.cardTitle }}</h5>
                            </a>
                            <p class="mb-3 mt-5 font-normal text-[#999999] leading-7 dark:text-gray-200">{{ card.cardDescription }}</p>
                        </div>
                    </div>
                    <!-- card-1 end========================== -->

                </div>
            </div>
        </div>
    </section>
</template>