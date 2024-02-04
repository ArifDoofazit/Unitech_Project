<script setup></script>

<template>
    <div class="container mx-auto">
        <div class="grid lg:grid-cols-3 gap-8 pb-10">
            <div class="w-full h-auto border rounded-3xl py-10 pl-10 pb-10 border-[#273270] transition-all group hover:border-[#eb9843]">
                <div class="phone_icon w-16 h-16 text-2xl text-white bg-[#eb9843] flex justify-center items-center rounded-full py-3 px-3 transition-all duration-300 group-hover:bg-[#273270]">
                    <i class="fa-solid fa-phone"></i>
                </div>
                <h3 class="pt-10 text-2xl font-normal pl-2">Phone</h3>
                <p class="pt-3 pl-2"><span class="font-medium">Toll-Free :</span> 0000 - 123 - 456789</p>
                <p class="pt-3 pl-2"><span class="font-medium">Fax :</span> +880 1877-0404 04</p>
            </div>

            <div class="w-full h-auto border rounded-3xl py-10 pl-10 pb-10 border-[#273270] transition-all group hover:border-[#eb9843]">
                <div class="phone_icon w-16 h-16 text-2xl text-white rounded-full py-3 px-3 bg-[#eb9843] flex justify-center items-center transition-all duration-300 group-hover:bg-[#273270]">
                    <i class="fa-solid fa-envelope"></i>
                </div>
                <h3 class="pt-10 text-2xl font-normal pl-2">Email</h3>
                <p class="pt-3 pl-2 ">unitechg@gmail.com</p>
                <p class="pt-3 pl-2 ">support@unitech.com</p>
            </div>

            <div class="w-full h-auto border rounded-3xl py-10 pl-10 pb-10 border-[#273270] transition-all group hover:border-[#eb9843]">
                <div class="phone_icon w-16 h-16 text-2xl text-white rounded-full py-3 px-3 bg-[#eb9843] flex justify-center items-center transition-all duration-300 group-hover:bg-[#273270]">
                    <i class="fa-solid fa-location-arrow"></i>
                </div>
                <h3 class="pt-10 text-2xl font-normal pl-2">Address</h3>
                <p class="pt-3 pl-2 leading-8">House 49, Road 07, Nikunja - 1 <br>
                    Dhaka 1223, Bangladesh
                </p>
            </div>

        </div>
    </div>
</template>