<script setup>
const clients = [
    {
        Images : "https://www.theimpulsedigital.com/uploads/images/clients-logo/Amazon.jpg"
    },
    {
        Images : "https://whitewallmarketing.co.uk/wp-content/uploads/2022/07/business_gateway_01.png"
    },
    {
        Images : "https://consumersiteimages.trustpilot.net/business-units/5b2050a59fda6800011ebf55-198x149-1x.jpg"
    },
    {
        Images : "https://whitewallmarketing.co.uk/wp-content/uploads/2022/07/albion-overseas_01.png"
    },
    {
        Images : "https://whitewallmarketing.co.uk/wp-content/uploads/2022/06/bluewater_01-1.png"
    },
]
</script>
<template>
    <section class="">
        <div class="h-auto w-auto pb-10">
            <div class="container mx-auto px-4">
                <h2 class="lg:text-3xl lg:ml-5 text-2xl text-center text-[#eb9843] ml-5 font-semibold">OUR CLIENTS</h2>
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-4 mt-10">
                    <!-- <div class="w-full flex justify-center">
                        <div class="border-solid border-2 rounded-2xl border-inherit flex justify-center lg:w-64 w-11/12 lg:ml-4 hover:shadow-md">
                            <img src="../assets/clients image-1.avif" class="h-40" alt="">
                        </div>
                    </div> -->
                    <div v-for="(client , index) in clients" :key="index" class="w-full flex justify-center">
                        <div class="border-solid border-2 rounded-2xl border-inherit flex justify-center lg:w-64 w-11/12 lg:ml-4 hover:shadow-md">
                            <img :src="client.Images" class="h-40" alt="">
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
</template>