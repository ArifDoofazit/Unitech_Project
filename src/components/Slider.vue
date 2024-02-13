<script setup>
function slider(flag, num) {
    var current = $(".item.current"),
        next,
        index;
    if (!flag) {
        next = current.is(":last-child") ? $(".item").first() : current.next();
        index = next.index();
    } else if (flag === 'dot') {
        next = $(".item").eq(num);
        index = num;
    } else {
        next = current.is(":first-child") ? $(".item").last() : current.prev();
        index = next.index();
    }
    next.addClass("current");
    current.removeClass("current");
    $(".dot").eq(index).addClass("current").siblings().removeClass("current");
}
var setSlider = setInterval(slider, 4000);

$(".button").on("click", function () {
    clearInterval(setSlider);
    var flag = $(this).is(".prev") ? true : false;
    slider(flag);
    setSlider = setInterval(slider, 4000);
});

$(".dot").on("click", function () {
    if ($(this).is(".current")) return;
    clearInterval(setSlider);
    var num = $(this).index();
    slider('dot', num);
    setSlider = setInterval(slider, 4000);
});

const slides = [
    { image: "../assets/Slider-1-yMkRT9Pb.jpg", content: { title: "PAD LOCK", description: "Super premium solid steel<br>10 years guarantee" } },
    { image: "../assets/Slider-2-K0edHQel.jpg", content: { title: "DOVE HANDLE", description: "Premium quality of<br>aluminium" } },
    { image: "../assets/Slider-3-J3fB3FmE.jpg", content: { title: "DRAWER SLIDER", description: "100% stainless steel<br>hydraulic Presser" } },
    { image: "../assets/Slider-4-4gG5P3jC.jpg", content: { title: "DOVE HANDLE", description: "Premium quality of<br>aluminium" } },
    { image: "../assets/Slider-5-UXzDk7bZ.jpg", content: { title: "CONCEALED HINGES", description: "100% stainless steel<br>hydraulic piston " } },
];

let currentIndex = 0;

// You can initialize sliderContent to the first slide content
let sliderContent = slides[currentIndex].content;
</script>

<template>

    <section>
        <div class="slider w-full lg:h-[650px] h-[500px] relative lg:mt-20">
            <ul class="items relative w-full lg:h-[650px] h-[500px] overflow-hidden">
                <li v-for="(slide, index) in slides" :key="index" class="item" :class="{ current: index === currentIndex }">
                    <img :src="slide.image" alt="slide image" class="bg-cover">
                    <div v-if="slide.content" class="w-full absolute lg:top-[370px] flex lg:justify-end top-2/4 z-20 lg:rounded-r-xl bg-opacity-40 lg:pr-32 pr-5">
                        <div class="lg:w-[500px] w-full text-right">
                            <h2 class="font-bold lg:text-5xl text-2xl text-[#f89b3b] lg:pl-8 pl-4">{{ slide.content.title }}</h2>
                            <p class="lg:w-[410px] lg:ml-[90px] lg:text-right lg:font-normal lg:text-3xl text-lg lg:pl-8 pl-4 lg:pt-5 pt-2 leading-6 text-white" v-html="slide.content.description"></p>
                            <button class="mt-5 py-2 px-8 rounded-md bg-[#f89b3b] font-medium lg:text-2xl text-lg ml-4 lg:ml-0">More</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <!-- Mobile Responsive -->

        <!-- <div class="slider w-full lg:h-[650px] h-[500px] relative lg:mt-20 lg:hidden block">
            <ul class="items relative w-full lg:h-[650px] h-[500px] overflow-hidden">
                <li>
                    <div class="image">
                    </div>
                    <div class="w-full absolute lg:top-2/4 flex lg:justify-end top-2/4 z-20 lg:rounded-r-xl bg-opacity-40 lg:pr-32 pr-5">
                        <div class="lg:w-[500px] w-full text-right">
                            <h2 class="font-bold lg:text-5xl text-2xl text-[#f89b3b] lg:pl-8 pl-4"></h2>
                            <p class="lg:w-[410px] w-[240px] lg:ml-[90px] ml-[110px] lg:text-right lg:font-normal lg:text-3xl text-lg lg:pl-8 pl-4 lg:pt-5 pt-2 leading-6 text-white"></p>
                            <button class="mt-5 py-2 px-8 rounded-md bg-[#f89b3b] font-medium lg:text-2xl text-lg ml-4 lg:ml-0">More</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div> -->
    </section>


</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");

.items {
    padding-bottom: 56.25%;
}
.image{
    width: 100%;
    height: 650px;
    background: url(../assets/image/Slider/Slider-M-1.jpg) no-repeat;
    background-size: contain;
}
.item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity .6s ease-in-out;
}

.item.current {
  opacity: 1;
}

.item img {
  width: 100%;
  height: 650px;
  object-fit: cover;
}
@media (max-width: 768px) {
    .item img {
        width: 500px !important;
        height: 420px;
        background-size: cover;
        object-fit:fill;
        overflow: hidden;
    }
}

@media (max-width: 576px) {
    .item img {
        width: 500px;
        height: 420px;
        background-size: cover;
        object-fit:fill;
        overflow: hidden;
    }
}
</style>