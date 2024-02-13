<script setup>
const contactDetails = [
    {
        title: "Contact Us",
        number: "+8801877-040404",
        emailAdress: "E: unitechg@gmail.com",
        officeAddress: 'House 49, Road 07, Nikunja 1 Dhaka 1223, Bangladesh',
    }
]

const oderDetails = [
    {
        title: "Order Now",
        description: "From anywhere in Bangladesh, the best premium quality produts, order us for any kind of items of hardware products "
    }
]

const copyRight = [
    {
        copyRightInfo: "Copyright © Unitech Global Limited | Hi-Care - Hardware Product.All rights reserved"
    }
]

const creator = [
    {
        developer: "Developed by Doofaz IT Limited"
    }
]
</script>

<template>
    <section class="bg-[#27266e]">
        <div class="h-auto w-auto pb-4 bg-[url(../assets/image/UGL/Footer_Bg.png)] bg-no-repeat bg-right">
            <div class="container mx-auto">
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 h-5/6 lg:pb-10">
                    <div class="lg:ml-32 lg:mt-4 ml-5">
                        <div class="grid grid-cols-2 gap-1 lg:grid-cols-none">
                            <img src="../assets/UGL/UGL Logo one color-04.png" class="lg:w-64 w-36 pt-3" alt="">
                            <img src="../assets/image/UGL/Hi_Care-logo-of-web-2.png" class="lg:w-60 w-36 lg:ml-2 pt-3" alt="">
                        </div>
                    </div>
                    <div v-for="(contactInfo , index) in contactDetails" :key="index" class="lg:ml-20 lg:mt-4 ml-5 -mt-4">
                        <h2 class="text-white text-xl mt-5">{{ contactInfo.title }}</h2>
                        <h4 class="text-white text-lg mt-3" style="color:#eb9843;"> {{ contactInfo.number }} </h4>
                        <h5 class="text-white  text-lg">{{ contactInfo.emailAdress }}</h5>
                        <h5 class="text-white lg:mt-7 mt-5  text-lg">
                            {{ contactInfo.officeAddress }}
                        </h5>
                    </div>
                    <div v-for="(oderInfo , index) in oderDetails" :key="index" class="lg:mt-4 ml-5 overflow-hidden relative">
                        <h2 class="text-white text-xl mt-5">{{ oderInfo.title }}</h2>
                        <p class="text-white text-base w-72 leading-6 mt-2">
                            {{ oderInfo.description }}
                        </p>

                        <div class="lg:mt-32 mt-6 flex gap-3">
                            <a href="#" class="bg-white lg:ml-4 rounded px-2 flex justify-center items-center py-2 text-base font-medium lg:h-8 lg:w-8 lg:mt-1 w-8 text-[#2c306b]"> <i class="fa-solid fa-phone"></i> </a>
                            <a href="https://www.facebook.com/hicare11" class="bg-white lg:ml-4 rounded px-2 flex justify-center items-center py-2 text-base font-medium lg:h-8 lg:w-8 lg:mt-1 w-8 text-[#2c306b]"> <i class="fa-brands fa-facebook-f"></i> </a>
                            <a href="#" class="bg-white lg:ml-4 rounded px-2 flex justify-center items-center py-2 text-base font-medium lg:h-8 lg:w-8 lg:mt-1 w-8 text-[#2c306b]"> <i class="fa-brands fa-instagram"></i> </a>
                            <a href="#" class="bg-white lg:ml-4 rounded px-2 flex justify-center items-center py-2 text-base font-medium lg:h-8 lg:w-8 lg:mt-1 w-8 text-[#2c306b]"> <i class="fa-brands fa-youtube"></i> </a>
                        </div>
                    </div>
                </div>

               <div class="w-full flex justify-center">
                    <div class="grid grid-cols-2 md:grid-cols-2 lg:border-t-2 border-t w-11/12 mt-10 lg:mt-0">
                        <div v-for="(copyInfo, index) in copyRight" :key="index" class="copyright lg:w-[660px]">
                            <h2 class="lg:text-white w-auto lg:py-4 py-2 pl-5 lg:pl-0 md:pl-0 lg:text-left lg:text-base text-xs text-[#da6565]">{{ copyInfo.copyRightInfo }}</h2>
                        </div>
                        <div v-for="(develop, index) in creator" :key="index" class="Developers lg:w-full lg:text-right flex justify-end lg:pr-0 md:pr-0 pr-5">
                            <a href="https://web.doofazit.com/" class="lg:text-white lg:text-base lg:text-right text-xs lg:pl-0 pl-5 lg:py-4 py-2 text-[#da6565]">{{ develop.developer }}</a>
                        </div>
                   </div>
               </div>

            </div>
        </div>
    </section>
</template>