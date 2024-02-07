<script>
import '../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';


export default {
    data() {
        return {
            slides: [
                {
                    image: 'https://images.pexels.com/photos/6689289/pexels-photo-6689289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    title: 'The Best Hardware Tools',
                    description: 'We only provide hardware that meets ANSI/BHMA Grade-1 and Grade-2 standards'
                },
                {
                    image: 'https://www.bproperty.com/blog/wp-content/uploads/door-handle-key-keyhole-279810.jpg',
                    // title: 'Second Slide Title',
                    // description: 'Description for the second slide'
                },
                {
                    image: 'https://www.hiatt-hardware.com/media/resized/magefan_blog/767_400/Bathroom-door-lock-types.jpg',
                    // title: 'Third Slide Title',
                    // description: 'Description for the third slide'
                }
            ],
            owlCarouselInstance: null
        };
    },
    mounted() {
        this.initializeCarousel();
    },
    methods: {
        initializeCarousel() {
            this.owlCarouselInstance = $('#main-slider').owlCarousel({
                rtl: false,
                loop: true,
                nav: false,
                dots: false,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: false,
                responsive: {
                    0: {
                        items: 1
                    }
                }
            });
        }
    },
    destroyed() {
        if (this.owlCarouselInstance) {
            this.owlCarouselInstance.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
        }
    }
};
</script>

<template>

        <section>
            <div id="main-slider" class="owl-carousel owl-theme relative">
                <div v-for="(slide, index) in slides" :key="index" class="relative w-full lg:h-[680px] h-[350px] bg-cover bg-center border-b border-zinc-300" :style="{ backgroundImage: 'url(' + slide.image + ')' }">
                    <div class="bg-overlay grid grid-cols-1 lg:grid-cols-2 py-20 md:py-28 lg:py-32 xl:py-56 px-3 md:px-4 lg:px-8">
                        <div class="flex flex-col gap-5 md:gap-8 lg:mt-10">
                            <h2 class="text-3xl md:text-3xl lg:text-5xl text-[#2c306b] font-semibold">{{ slide.title }}</h2>
                            <p class="lg:text-xl text-sm lg:w-[450px] w-[300px] lg:leading-9">{{ slide.description }}</p>
                            <div class="flex gap-3">
                                <button v-if="index === 0" class="lg:py-3 lg:px-7 py-2 px-4 rounded-3xl bg-[#eb9843] text-white lg:text-lg font-medium">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");
body {
	font-family: "Montserrat", sans-serif;
	color: #fff;
	overflow-x: hidden;
}


</style>