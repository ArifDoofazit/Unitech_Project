<script setup>
const aboutus=[
    {
        about:"ABOUT US",
        UNITECH:"UNITECH HARDWARES",
        Vivamus:"Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.",
        PLUMBING:"PLUMBING MATERIALS",
        Sed:"Sed vestibulum nulla elementum auctor tincidunt. Aliquam sit amet cursus mauris. Sed vitae mattis ipsum. Vestibulum enim nulla, sollicitudin ac hendrerit nec, tempor quis nisl",
        ELECTRICAL:"ELECTRICAL FITTINGS",
        THE:"THE DRIVEWAY & LAWN",
        EXTERIORS:"EXTERIORS",
        OUR:"OUR WORKS",
        WALKWAYS:"WALKWAYS BY THE POOLSIDE",
        MASONRY:"MASONRY",
        INTERIORS:"INTERIORS",
        imageone:"http://localhost:5173/src/assets/about001_6557fbf8-05bb-4747-9958-bb03634ebd2e_770x.webp",
        manecardimage1:"http://localhost:5173/src/assets/team001_800x.webp",
        manecardimage2:"http://localhost:5173/src/assets/team002_800x.webp",
        manecardimage3:"http://localhost:5173/src/assets/team003_800x.webp",
        manecardimage4:"http://localhost:5173/src/assets/team004_800x.webp",
        Main:"Main Door Handles",
        Rs:"Rs.2,999.00",
        Doors:"Main Doors Pack of(Left)",
        AU:"AU $250.44",
        Glass:"Glass Door Pull Handle",
        Horse:"10'' Aluminum Horse",
        P:"₱7,823.27",
    }
]
</script>

<template>
    <div class="Heading">
        <!-- Title_Heading=========================== -->
        <div class="Title_Heading py-10 lg:mt-20 w-full h-auto text-center mb-20 relative z-[1]">
            <h2 v-for="(indexs , index) in aboutus" :key="index" class="text-white text-5xl font-normal">{{indexs.about}}</h2>

            <nav class="flex justify-center py-5" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li class="inline-flex items-center">
                        <a href="#" class="inline-flex items-center text-sm font-medium text-white hover:text-[#eb9843] dark:text-gray-400 dark:hover:text-white">
                            <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                            </svg>
                            Home
                        </a>
                    </li>
                    <li aria-current="page">
                    <div class="flex items-center">
                        <svg class="rtl:rotate-180 w-3 h-3 text-white mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span class="ms-1 text-sm font-medium text-white md:ms-2 dark:text-gray-400">About</span>
                    </div>
                    </li>
                </ol>
            </nav>

        </div>
        <!-- Title_Heading End=========================== -->

        <div class="container mx-auto bg-white pb-10">
            <div class="grid lg:grid-cols-2 gap-5">
                <div class="video w-full h-full">

                    <div class="w-full lg:h-[400px] h-[350px] text-center mt-5 rounded-2xl bg-[url(../assets/image/Slider.png)] bg-no-repeat bg-opacity-30">
                        <div class="h-full flex justify-center items-center">
                            <a href="https://www.facebook.com/hicare11/videos/406464681786826/" class="play-icon w-20 h-20 rounded-full bg-[#eb9843] text-4xl text-black cursor-pointer flex justify-center items-center mt-5 mb-5">
                                <i class="fa-solid fa-play"></i>
                            </a>
                        </div>
                    </div>

                </div>

                <div class="text">
                    <div class="text-start">
                        <h2 class="text-[#f89b3b] lg:text-5xl text-3xl pl-5 font-medium lg:pt-28 lg:pl-10">Company Introduction</h2>
                        <h5 class="font-normal lg:text-2xl text-[#999999] lg:pl-10 pl-5 pt-8">We Believe in Quality</h5>
                        <p class="font-normal lg:text-xl text-base pl-5 text-[#999999] lg:pl-10 pt-6 leading-9">
                            provides high quality accessories of hardware, specially
                            <br class="lg:block hidden"> various Lock, Handle, others doors and all kinds of 
                            <br class="lg:block hidden"> home accessories etc.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      
        <!-- about-page-card=================================== -->

        <h2 v-for="(indexs , index) in aboutus" :key="index" class="text-center lg:text-4xl lg:font-semibold mt-10">{{indexs.UNITECH}}</h2>
        <p v-for="(indexs , index) in aboutus" :key="index" class="text-center lg:py-5 py-5 lg:text-xl text-[#B4B4B8]">{{indexs.Vivamus}}</p>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 py-10">

                <!-- card-1==================================== -->
                <div class="lg:ml-5 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#" class="bg-[#202472] text-[#fab915] text-4xl pt-3 pb-2 pr-3 pl-3 shadow-md rounded-full lg:w-32 lg:h-32 border-solid border-4 border-yellow-400">
                        <i class="fa-solid fa-key"></i>
                    </a>
                        <a href="#">
                            <h5 v-for="(indexs , index) in aboutus" :key="index" class="mt-4 mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{{indexs.PLUMBING}}</h5>
                        </a>
                        <p v-for="(indexs , index) in aboutus" :key="index" class="mb-3 font-normal text-gray-500 dark:text-gray-400">{{indexs.Sed}}</p>
                    </div>
                <!-- card-1 End==================================== -->
                
                <!-- card-2=============================== -->                 
                    <div class="lg:ml-2 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#" class="bg-[#202472] text-[#fab915] text-4xl pt-2 pb-2 pr-3 pl-3 shadow-md rounded-full lg:w-32 lg:h-32 border-solid border-4 border-yellow-400">
                            <i class="fa-solid fa-door-closed"></i>
                        </a>
                        <a href="#">
                            <h5 v-for="(indexs , index) in aboutus" :key="index" class="mt-4 mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{{ indexs.ELECTRICAL }}</h5>
                        </a>
                        <p v-for="(indexs , index) in aboutus" :key="index" class="mb-3 font-normal text-gray-500 dark:text-gray-400">{{indexs.Sed}}</p>
                        
                    </div>
                    <!-- card-2 End=============================== --> 


                <!-- card-3=============================== -->
                <div class="lg:ml-2 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#" class="bg-[#202472] text-[#fab915] text-4xl pt-2 pb-2 pr-3 pl-3 shadow-md rounded-full lg:w-32 lg:h-32 border-solid border-4 border-yellow-400">
                        <i class="fa-brands fa-keycdn"></i>
                    </a>
                        <a href="#">
                            <h5 v-for="(indexs , index) in aboutus" :key="index" class="mt-4 mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{{indexs.THE}}</h5>
                        </a>
                        <p v-for="(indexs , index) in aboutus" :key="index" class="mb-3 font-normal text-gray-500 dark:text-gray-400">{{indexs.Sed}}</p>
                        
                </div>
                <!-- card-3 End=============================== -->

                <!-- card-4=============================== -->
                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        
                    <a href="#" class="bg-[#202472] text-[#fab915] text-4xl pt-2 pb-1 pr-2 pl-2 shadow-md rounded-full lg:w-32 lg:h-32 border-solid border-4 border-yellow-400">
                        <i class="fa-solid fa-dungeon"></i>
                    </a>

                        <a href="#">
                            <h5 v-for="(indexs , index) in aboutus" :key="index" class="mt-4 mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{{indexs.EXTERIORS}}</h5>
                        </a>
                        <p v-for="(indexs , index) in aboutus" :key="index" class="mb-3 font-normal text-gray-500 dark:text-gray-400">{{indexs.Sed}}</p>
                        
                </div>
                <!-- card-4 End=============================== -->

            </div>

        <!-- about-page-card End=================================== -->

        <div class="about-page-para py-20 w-full h-auto mb-20 relative z-[1]">
            <h2 v-for="(indexs , index) in aboutus" :key="index" class="text-white lg:text-6xl text-3xl font-normal text-center">{{indexs.OUR}}</h2>

            <div class="container mx-auto mt-8">
                <div class="grid md:grid-cols-2 grid-cols-1 gap-4 ">
                    <div class="p-2 rounded-md">
                        <h2 v-for="(indexs , index) in aboutus" :key="index" class="text-white lg:text-4xl text-xl">{{indexs.WALKWAYS}}</h2>


                        <div class="container mx-auto mt-6">
                            <div class="grid grid-cols-1 gap-4">
                                <!-- ========================1================================= -->
                                <div class="max-w-full p-6 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#" class="bg-[#202472] text-[#fab915] text-4xl pt-2 pb-1 pr-3 pl-3 shadow-md rounded-full lg:w-32 lg:h-32 border-solid border-4 border-yellow-400">
                                        <i class="fa-brands fa-yelp"></i>
                                    </a>
                
                                        <a href="#">
                                            <h5 v-for="(indexs , index) in aboutus" :key="index" class="mt-4 mb-2 text-2xl font-semibold tracking-tight text-white">{{indexs.EXTERIORS}}</h5>
                                        </a>
                                        <p v-for="(indexs , index) in aboutus" :key="index" class="mb-3 font-normal text-gray-500 dark:text-gray-100">{{indexs.Sed}}</p>
                                </div>
                                <!-- ========================1 End================================= -->
                                <!-- ========================2================================= -->
                                <div class="max-w-full p-6 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#" class="bg-[#202472] text-[#fab915] text-4xl pt-2 pb-1 pr-3 pl-2 shadow-md rounded-full lg:w-32 lg:h-32 border-solid border-4 border-yellow-400">
                                        <i class="fa-solid fa-share-nodes"></i>
                                    </a>
                
                                        <a href="#">
                                            <h5 v-for="(indexs , index) in aboutus" :key="index" class="mt-4 mb-2 text-2xl font-semibold tracking-tight text-white">{{indexs.MASONRY}}</h5>
                                        </a>
                                        <p v-for="(indexs , index) in aboutus" :key="index" class="mb-3 font-normal text-gray-500 dark:text-gray-100">{{indexs.Sed}}</p>
                                </div>
                                <!-- ========================2 End================================= -->
                                <!-- ========================3================================= -->
                                <div class="max-w-full p-6 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#" class="bg-[#202472] text-[#fab915] text-4xl pt-2 pb-1 pr-3 pl-3 shadow-md rounded-full lg:w-32 lg:h-32 border-solid border-4 border-yellow-400">
                                        <i class="fa-solid fa-tag"></i>
                                    </a>
                
                                        <a href="#">
                                            <h5 v-for="(indexs , index) in aboutus" :key="index" class="mt-4 mb-2 text-2xl font-semibold tracking-tight text-white">{{indexs.INTERIORS}}</h5>
                                        </a>
                                        <p v-for="(indexs , index) in aboutus" :key="index" class="mb-3 font-normal text-gray-500 dark:text-gray-100">{{indexs.Sed}}</p>
                                </div>
                                <!-- ========================3End================================= -->
                            </div>
                        </div>
                        

                    </div>
                    <div v-for="(indexs , index) in aboutus" :key="index" class="border-8 border-[#202447] rounded-md">
                        <img :src="indexs.imageone" class="w-full h-full bg-cover" alt="">
                    </div>
                </div>
            </div>
        </div>

        <!-- men-card============================================ -->
        <section class="bg-[#F2EFE5]">
            <div class="container mx-auto">
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 py-10">
                <div v-for="(indexs , index) in aboutus" :key="index" class="h-auto bg-[#E3E1D9]">
                    <img :src="indexs.manecardimage1" alt="">
                    <h3 class="text-center text-xl font-medium mt-5">{{indexs.Main}}</h3>
                    <p class="text-center text-md">{{indexs.Rs}}</p>
                </div>
                <div v-for="(indexs , index) in aboutus" :key="index" class="bg-[#E3E1D9]">
                    <img :src="indexs.manecardimage2" alt="">
                    <h3 class="text-center text-xl font-medium mt-5">{{indexs.Doors}}</h3>
                    <p class="text-center text-md">{{indexs.AU}}</p>
                </div>
                <div v-for="(indexs , index) in aboutus" :key="index" class="bg-[#E3E1D9]">
                    <img :src="indexs.manecardimage3" alt=""/>
                    <h3 class="text-center text-xl font-medium mt-5">{{indexs.Glass}}</h3>
                    <p class="text-center text-md">US $79.19</p>
                </div>
                <div v-for="(indexs , index) in aboutus" :key="index" class="bg-[#E3E1D9]">
                    <img :src="indexs.manecardimage4" alt="">
                    <h3 class="text-center text-xl font-medium mt-5">{{indexs.Horse}}</h3>
                    <p class="text-center text-md">{{indexs.P}}</p>
                </div>
            </div>
        </div>
        </section>
        <!-- men-card End============================================ -->

    </div>
</template>

<style scoped>
.Title_Heading{
    background: url(../assets/image/PageTitle-Background.webp) no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: top;
}
.Title_Heading:before {
    position: absolute;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -1;
    background:black;
    opacity: 0.6;
}
.about-page-para{
    width: 100%;
    height: auto;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0px 0px 20px;
    background-attachment: fixed;
    background-position: top;
    background-image: url(../assets/about-para-01_1512x.jpg);

}
.about-page-para::before{
    position: absolute;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -1;
    background: #000;
    opacity: .6;
}
</style>