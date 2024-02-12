<script setup>
</script>

<template>
    <div class="Product_Heading lg:w-full">
        <div class="Title_Heading py-10 lg:mt-20 w-full h-auto text-center mb-20 relative z-[1]">
            <h2 class="text-white text-5xl font-normal">Service</h2>

            <nav class="flex justify-center py-5" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li class="inline-flex items-center">
                        <RouterLink to="/"
                            class="inline-flex items-center text-sm font-medium text-white hover:text-[#eb9843] dark:text-gray-400 dark:hover:text-white">
                            <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                            </svg>
                            Home
                        </RouterLink>
                    </li>
                    <li aria-current="page">
                        <div class="flex items-center">
                            <svg class="rtl:rotate-180 w-3 h-3 text-white mx-1" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 9 4-4-4-4" />
                            </svg>
                            <span class="ms-1 text-sm font-medium text-white md:ms-2 dark:text-gray-400">Service</span>
                        </div>
                    </li>
                </ol>
            </nav>
        </div>

    </div>
</template>

<style scoped>
.Title_Heading {
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
    background: #000;
    opacity: .6;
}</style>