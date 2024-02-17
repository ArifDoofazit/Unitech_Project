<script setup>
const serviceHeading = [
    {
        name: "How Unitech makes a difference?",
    }
 ]
 const serviceBox = [
    {
        Title: "Highly Durable",
        Icon: "fa-solid fa-building",
        description: "Knterdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque euismod venenatis dolor sed condimentum. Donec interdum arcu id nibh porttitor scelerisque Nunc faucibus .",
    },
    {
        Title: "Maintenance free",
        Icon: "fa-solid fa-wrench",
        description: "Knterdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque euismod venenatis dolor sed condimentum. Donec interdum arcu id nibh porttitor scelerisque Nunc faucibus .",
    },
    {
        Title: "Impact resistant",
        Icon: "fa-solid fa-credit-card",
        description: "Knterdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque euismod venenatis dolor sed condimentum. Donec interdum arcu id nibh porttitor scelerisque Nunc faucibus .",
    },
    {
        Title: "Excellent Noise Insulation",
        Icon: "fa-solid fa-volume-high",
        description: "Knterdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque euismod venenatis dolor sed condimentum. Donec interdum arcu id nibh porttitor scelerisque Nunc faucibus .",
    },
    {
        Title: "Weather resistant",
        Icon: "fa-solid fa-umbrella",
        description: "Knterdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque euismod venenatis dolor sed condimentum. Donec interdum arcu id nibh porttitor scelerisque Nunc faucibus .",
    },
    {
        Title: "UV protection",
        Icon: "fa-solid fa-house-chimney-window",
        description: "Knterdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque euismod venenatis dolor sed condimentum. Donec interdum arcu id nibh porttitor scelerisque Nunc faucibus .",
    },
 ]

</script>

<template>
    <div class="container mx-auto">
        <h2 v-for="(service , index) in serviceHeading" :key="index" class="text-center font-medium text-5xl text-[#273270] mt-10 pb-10"> {{service.name}} </h2>

        <div class="container mx-auto pb-20">
            <div class="grid lg:grid-cols-2 lg:row-span-3 gap-5">
                <div v-for="(Box , index) in serviceBox" :key="index" class="boxInfo flex justify-center">
                    <div class=" w-10/12 h-auto border mt-20 rounded-2xl pb-10 transition-all group hover:border-[#032b90]">
                        <div class="flex justify-center bg-white px-5">
                            <div class="icon lg:w-20 lg:h-20 px-3 py-3 bg-black text-white lg:text-6xl text-5xl flex justify-center items-center lg:-mt-11 -mt-9 rounded-xl group-hover:bg-[#032b90]">
                                <i :class="Box.Icon"></i>
                            </div>
                        </div>
                        <h3 class="Title text-center mt-8 text-2xl text-[#273270] font-medium with-underline">{{ Box.Title }}</h3>
                        <p class="text-center lg:text-xl lg:px-8 px-4 leading-7 lg:leading-9 mt-10">{{ Box.description }}</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<style scoped>

.with-underline {
    position: relative;
}

.with-underline::before {
    content: "";
    position: absolute;
    bottom: -23px;
    left: 49%;
    transform: translateX(-50%);
    width: 10px;
    height: 10px;
    background: #e8e8e8;
    z-index: 1;
    transition: all .3s linear;
}

.with-underline::after {
    content: "";
    position: absolute;
    bottom: 0px;
    top: 50px;
    left: 48%;
    transform: translateX(-50%);
    width: 110px;
    height: 1px;
    background: #e8e8e8;
    transition: all .3s linear;
}
.group:hover .with-underline::before,
.group:hover .with-underline::after {
    background-color: #032b90; /* Change to the desired background color */
}
</style>