<script setup>
import { onMounted, ref, computed } from 'vue';
import axios from 'axios';
import { BASE_URL } from '../assets/apiConfig';
import { IMG } from '../assets/imageUrl';

const productCards = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}productCardInfo`);
        productCards.value = response.data;
        console.log('Data fetched successfully:', productCards.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

const allProductsCategory = async () => {
    try {
        const response = await axios.get(`${BASE_URL}productCardInfo`);
        productCards.value = response.data;
        console.log('Data fetched successfully:', productCards.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};


const filterProductsByCategory = async (categoryId) => {
    try {
        const response = await axios.get(`${BASE_URL}productCardInfobyCategory/` + categoryId );
        productCards.value = response.data;
        console.log('Data fetched successfully:', productCards.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const shuffleProductCards = () => {
    for (let i = productCards.value.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [productCards.value[i], productCards.value[j]] = [productCards.value[j], productCards.value[i]];
    }
};

const productCategory = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}productCategoryInfo`);
        productCategory.value = response.data;
        console.log('Data fetched successfully:', productCategory.value);

        if (productCategory.value && productCategory.value.data && Array.isArray(productCategory.value.data)) {
            // Sort the data by position first, then by product name
            productCategory.value.data.sort((a, b) => {
                const productNameA = a.productName || ''; // Handle undefined productName
                const productNameB = b.productName || ''; // Handle undefined productName
                if (a.position !== b.position) {
                    return a.position - b.position;
                } else {
                    // Sort alphabetically by product name (handle undefined productName)
                    return productNameA.localeCompare(productNameB);
                }
            });

            console.log('Sorted data:', productCategory.value.data);
        } else {
            console.error('Data fetched is not an array:', productCategory.value);
        }

        if (productCategory.value && productCategory.value.data && Array.isArray(productCategory.value.data)) {
            sortByPosition(productCategory.value.data);
            console.log('Sorted product categories:', productCategory.value.data);
        } else {
            console.error('Product categories data is not an array:', productCategory.value);
        }

    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

const sortedCategories = computed(() => {
    if (productCategory.value && productCategory.value.data && Array.isArray(productCategory.value.data)) {
        return productCategory.value.data.slice(); // Return a copy of the sorted data
    } else {
        return []; // Return an empty array if data is not available
    }
});

const sortByPosition = (categories) => {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < categories.length - 1; i++) {
            if (categories[i].categoryPosition > categories[i + 1].categoryPosition) {
                const temp = categories[i];
                categories[i] = categories[i + 1];
                categories[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
};

const setSelectedCategory = (categoryName) => {
    // Update the content of the <h2> tag with the selected category name
    document.getElementById('selected-category').textContent = categoryName;
};

console.log('sortedCategories');

</script>

<template>
    <div class="container mx-auto pb-10">
        <div class="grid lg:grid-cols-3 grid-cols-1 lg:gap-5 gap-0 lg:grid-rows-1">

            <div class="Tabs">
                <h2 class="lg:text-3xl text-center lg:text-start text-2xl font-semibold text-[#2c306b]">CATAGORY OF
                    PRODUCTS</h2>

                <div class="mb-4 border-b border-gray-200 dark:border-gray-700 lg:mt-12 mt-8 lg:ml-0 ml-2">
                    <ul class="-mb-px text-2xl font-medium text-center" id="default-styled-tab"
                        data-tabs-toggle="#default-styled-tab-content"
                        data-tabs-active-classes="text-[#f89b3b] hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500"
                        data-tabs-inactive-classes="dark:border-transparent text-white hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"
                        role="tablist">
                        <li class="me-2 focus:bg-[#2c306b] bg-[#f89b3b] mt-2 rounded-md"
                            @click="setSelectedCategory(category.categoryName)" role="presentation">
                            <button @click="allProductsCategory"
                                class="inline-block focus:bg-[#2c306b] text-white focus:text-white w-full p-4 rounded-t-lg"
                                id="profile-styled-tab" data-tabs-target="#styled-profile" type="button" role="tab"
                                aria-controls="profile" aria-selected="false">
                                All Products
                            </button>
                        </li>
                        <li v-for="(category, index) in sortedCategories" :key="index"
                            @click="setSelectedCategory(category.categoryName)"
                            class="me-2 focus:bg-[#2c306b] bg-[#f89b3b] mt-2 rounded-md" role="presentation">
                            <button @click="filterProductsByCategory(category.id)"
                                class="inline-block focus:bg-[#2c306b] text-white focus:text-white w-full p-4 rounded-t-lg"
                                id="profile-styled-tab" data-tabs-target="#styled-profile" type="button" role="tab"
                                aria-controls="profile" aria-selected="false">
                                {{ category.categoryName }}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <div id="default-styled-tab-content" class="col-span-2">
                <div class="w-72 h-auto rounded-lg text-center bg-[#eb9843]">
                    <h2 class="font-medium text-4xl p-2 text-white" id="selected-category">

                    </h2>
                </div>
                <div v-if="productCards && productCards"
                    class="col-span-2 grid lg:grid-cols-3 grid-cols-2 gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                    id="styled-profile" role="tabpanel" aria-labelledby="profile-tab">
                    <RouterLink v-for="(productCard, index) in productCards.data" :key="index" to="/product-details">
                        <div class="flex justify-center">
                            <div
                                class="product-card w-72 rounded-lg drop-shadow-2xl overflow-hidden cursor-pointer relative group border hover:shadow-2xl">
                                <img :src="IMG +productCard.images" class="w-full lg:h-[270px] rounded-lg " alt="">
                                <img :src="IMG +productCard.images"
                                    class="w-full lg:h-[270px] rounded-lg absolute top-0 left-0 opacity-0 " alt="">
                                <div
                                    class="lg:h-20 leading-9 rounded-2xl drop-shadow-xl border-2 border-[#f89b3b] bg-white text-[#f89b3b] transition duration-300 ease-in-out transform group-hover:text-[#eb9843]">
                                    <h2 class="text-center font-semibold pt-1 text-xl">{{ productCard.productName }}
                                    </h2>
                                    <div class="text-center text-black text-sm">
                                        <p>{{ productCard.productDetails }}</p>
                                        <p class="font-medium">Code: {{ productCard.productCode }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>


    </div>
</template>

<style scoped>
ul.text-white > li > button {
  color: white;
}

/* Change text color for active link when clicked and stays active */
ul.text-white > li.active-link > button {
  color: blue;
}
</style>