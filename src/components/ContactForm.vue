<script setup>
const addressDetails = [
    {
        title: "Address ",
        officeAddress: "House 49 Road 07 Nikunja - 1 Dhaka 1223, Bangladesh"
    }
]

const oderDetails = [
    {
        title: "Make an oder",
        oderNumber: "+8801877-040404"
    }
]


const openingHours = {
    sunToWed: ({ day: 'Sun to Wed', hours: '09.00 am - 06.00pm' }),
    sat: ({ day: 'Sat', hours: '10.00 am - 06.00pm' }),
    thu: ({ day: 'Thu', hours: '10.00 am - 05.00pm' })
};
</script>

<template>
    <div class="container mx-auto pb-7">
        <div class="grid lg:grid-cols-2 gap-5">
            <div class="Info pt-5 lg:pt-0">
                <div v-for="(addressInfo , index) in addressDetails" :key="index" class="Address border-b pb-6 border-gray-300 lg:px-0 px-4">
                    <h3 class="font-medium text-xl text-[#2c306b] leading-7 lg:pt-10">
                        <i class="fa-solid fa-house pr-2"></i> {{ addressInfo.title }} 
                        <span class="text-gray-500 text-lg lg:ml-16"> <br class="lg:hidden block">
                            {{ addressInfo.officeAddress }}
                        </span>
                    </h3>
                </div>

                <div v-for="(oderInfo, index) in oderDetails" :key="index" class="Phone border-b py-6 border-gray-300 lg:px-0 px-4">
                    <h3 class="font-medium text-xl text-[#2c306b]">
                        <i class="fa-solid fa-phone pr-2"></i> 
                            {{ oderInfo.title }}
                        <br class="lg:hidden block">
                        <span class="text-gray-500 text-lg lg:ml-5 leading-5">
                            {{ oderInfo.oderNumber }}
                        </span>
                    </h3>
                </div>

               <div class="Hours border-b py-6 border-gray-300 lg:px-0 px-4">
                    <h3 class="font-medium text-xl text-[#2c306b]">
                        <i class="fa-regular fa-calendar-days pr-2 lg:mt-12"></i> 
                        Hours
                        <div class="Time lg:ml-[180px] lg:-mt-[75px] mt-5 lg:w-80">
                            <span class="text-gray-500 text-lg lg:-mt-5 leading-10">
                                {{ openingHours.sunToWed.day }}
                                <span class="lg:ml-8">{{ openingHours.sunToWed.hours }}</span>
                            </span> <br class="lg:hidden block">
                            <span class="text-gray-500 text-lg mt-8 leading-10">
                            {{ openingHours.sat.day }}
                            <span class="lg:ml-24">{{ openingHours.sat.hours }}</span>
                            </span> <br class="lg:hidden block">
                            <span class="text-gray-500 text-lg mt-8 leading-10">
                            {{ openingHours.thu.day }}
                            <span class="lg:ml-[92px]">{{ openingHours.thu.hours }}</span>
                            </span>
                        </div>
                    </h3>
                </div>

            </div>

            <div class="Logo">
                <div class="grid lg:grid-cols-1 grid-rows-2">
                </div>
            </div>
        </div>

        
    </div>
</template>