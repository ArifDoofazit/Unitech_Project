<script setup>

</script>

<template> 

        <!-- Title_Heading=========================== -->
        <div class="Title_Heading py-28 w-full h-auto text-center mb-20 relative z-[1]">
            <h2 class="text-white text-5xl font-normal">GALLERY</h2>

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
                        <span class="ms-1 text-sm font-medium text-white md:ms-2 dark:text-gray-400">Gallery</span>
                    </div>
                    </li>
                </ol>
            </nav>

        </div>
        <!-- Title_Heading End=========================== -->


        <!-- gallery================================================= -->
        <h2 class=" lg:text-4xl lg:pb-7 lg:-mt-10 pb-5 -mt-14 text-center text-[#eb9843]">HARDWARES TOOLS</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 pb-10 bg-[#E3E1D9]">
            <div class="grid gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-lg mt-10" src="../assets/gallery/img-1.webp" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="../assets/gallery/image-2.jpg" alt="">
                </div>
                <div>
                    <img class="lg:h-72 w-full rounded-lg" src="../assets/gallery/image-3.webp" alt="">
                </div>
            </div>
            <div class="grid gap-2">
                <div>
                    <img class="h-auto max-w-full rounded-lg mt-8" src="../assets/gallery/image-4.jpg" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="../assets/gallery/image-5.jpg" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="../assets/gallery/image-6.jpg" alt="">
                </div>
            </div>
            <div class="grid gap-0">
                <div>
                    <img class="h-auto max-w-full rounded-lg lg:mt-16" src="../assets/gallery/image-7.jpg" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="../assets/gallery/image-8.jpg" alt="">
                </div>
                <div>
                    <img class="lg:h-60 w-full rounded-lg" src="../assets/gallery/image-9.jpg" alt="">
                </div>
            </div>
            <div class="grid gap-4">
                <div>
                    <img class="lg:h-72 w-full rounded-lg lg:mt-14" src="../assets/gallery/image-10.jpg" alt="">
                </div>
                <div>
                    <img class=" lg:h-96 w-full" src="../assets/gallery/image-11.jpg" alt="">
                </div>
                <div>
                    <img class="lg:h-72 w-full rounded-lg" src="../assets/gallery/image-12.jpg" alt="">
                </div>
            </div>
        </div>

        <!-- gallery End================================================= -->

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
</style>