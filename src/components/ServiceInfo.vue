<script setup>
const serviceinfo =[
    {
        Unitech:"Unitech - Believe In Quality",
        Where:"Where Quality Meets Affordability",
        Etiam:"Etiam sit amet orci eget eros faucibus tincidunt.  Duis leo.",
        Sed:"Sed fringilla mauris sit amet nibh.  Donec sodales sagittis",
        sit:"Etiam sit amet orci eget eros faucibus tincidunt.",
        fringilla:"Sed fringilla mauris sit amet nibh. Donec sodales",  
        button:"View Help Videos",
        image:"http://localhost:5173/src/assets/image/About-4.webp",
    }
]
</script>

<template>
    <div class="container mx-auto pb-20">
        <div class="grid lg:grid-cols-2 gap-5 group">
            <div v-for="(services , index) in serviceinfo" :key="index" class="Image w-full h-auto lg:rounded-2xl flex justify-center overflow-hidden">
                <img class="w-full h-auto object-cover object-center rounded-2xl transition-all group-hover:scale-110 overflow-hidden" :src="services.image" alt="">
            </div>

            <div class="text-info text-center">
                <p v-for="(services , index) in serviceinfo" :key="index" class="lg:text-2xl font-light mt-12">{{services.Unitech}}</p>    
                <h1 v-for="(services , index) in serviceinfo" :key="index" class="lg:text-5xl text-xl font-medium leading-[60px] lg:mt-5 text-[#273270]">{{ services.Where }}</h1>
                <p v-for="(services , index) in serviceinfo" :key=" index" class="lg:text-xl font-normal leading-10 mt-5 px-5">{{services.Etiam}} <br class="lg:block hidden"> {{ services.Sed }} <br class="lg:block hidden"> {{ services.sit }} <br class="lg:block hidden"> {{ services.fringilla }}</p>
                <button v-for="(services , index) in serviceinfo" :key="index" class="py-4 px-10 bg-[#273270] text-white text-2xl font-noraml rounded-lg mt-10 transition-all hover:bg-[#eb9843]">{{services.button}}</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>