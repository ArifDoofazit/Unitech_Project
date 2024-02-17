<script setup></script>

<template>
    <div class="Product_Heading lg:w-full lg:mt-20 mt-20">
        <div class="Title_Heading py-5 w-full h-auto text-start lg:px-5 pl-3 lg:pl-5 mb-10 relative z-[1]">

            <nav class="flex justify-start py-5" aria-label="Breadcrumb">
                <ol class="inline-flex items-start space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li class="inline-flex items-center">
                        <RouterLink to="/" class="inline-flex items-center text-sm font-medium text-white hover:text-[#eb9843] dark:text-gray-400 dark:hover:text-white">
                            <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                            </svg>
                            Home
                        </RouterLink>
                    </li>
                    <li aria-current="page">
                    <div class="flex items-center">
                        <svg class="rtl:rotate-180 w-3 h-3 text-white mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span class="ms-1 text-sm font-medium text-white md:ms-2 dark:text-gray-400">Products</span>
                    </div>
                    </li>
                </ol>
            </nav>

            <h2 class="text-[#f89b3b] lg:text-5xl text-3xl font-medium lg:py-5"> We Believe in Quality</h2>
            <p class="text-white lg:text-xl text-base font-normal leading-6">
                provides high quality accessories of hardware, specially various Lock, <br class="lg:block hidden"> Handle, others doors and all kinds of home
                accessories etc.
            </p>

            <h4 class="font-normal lg:text-2xl text-xl text-[#bf1f36] py-6">W&nbsp;H&nbsp;O&nbsp;L&nbsp;E&nbsp;&nbsp;&nbsp;&nbsp;S&nbsp;A&nbsp;L&nbsp;E&nbsp;&nbsp;&nbsp;&nbsp;O&nbsp;N&nbsp;L&nbsp;Y</h4>
        </div>
    </div>
</template>

<style scoped>
.Title_Heading{
    background: url(../assets/image/Slider/Slider-5.jpg) no-repeat;
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
    background: #333888;
    opacity: .6;
}
</style>