<script>
export default {
    mounted() {
        this.setupSlider();
    },
    methods: {
        setupSlider() {
            const cardsContainer = this.$el.querySelector('.card-content');
            const cardWidth = window.innerWidth / 2 > 600 ? window.innerWidth / 2 : window.innerWidth - 100;
            let currentIndex = 0;

            this.handleScrollNext = () => {
                currentIndex = (currentIndex + 1) % cardsContainer.children.length;
                this.scrollSlider();
            };

            this.handleScrollPrev = () => {
                currentIndex = (currentIndex - 1 + cardsContainer.children.length) % cardsContainer.children.length;
                this.scrollSlider();
            };

            this.scrollSlider = () => {
                const scrollAmount = currentIndex * cardWidth;
                cardsContainer.scrollLeft = scrollAmount;

                if (currentIndex === cardsContainer.children.length - 1) {
                    currentIndex = 0;
                    cardsContainer.scrollLeft = 0;
                }
            };
        },
    },
};
</script>

<template>

    <section class="mt-10 py-10">

        <div class="mt-5 grid grid-cols-2">
            <h3 class="w-96 text-3xl uppercase ml-28 py-6">Featured Products</h3>
            <div class="Carousel_Button flex justify-end">
                <button id="prev" class="btn" @click="handleScrollPrev">
                        <i class="fa-solid fa-angle-left"></i>
                </button>

                <button  id="next" class="btn" @click="handleScrollNext">
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </div>

        <div class="grid grid-cols-4 gap-4">
            <div class="col-span-2">
                <img src="../assets/image/produc_470x.webp" class="lg:mx-auto" alt="">
            </div>

            <div class="col-span-2">
                <div class="container">

                    <div class="slider">

                        <div class="card-content">
                            <!-- Card -->
                            <div class="card w-80">
                                <div class="Package-card-img">
                                    <img src="../assets/image/product1.webp" class="lg:h-96" alt="">
                                </div>
                                <div class="card-text">
                                    
                                </div>
                            </div>
                            <!-- Card End -->
                                
                            <!-- Card -->
                            <div class="card">
                        
                                <div class="Package-card-img">
                                    <img src="../assets/image/product2.webp" alt="">
                                </div>
                                <div class="card-text">
                                   
                                </div>
                            </div>
                                <!-- Card End -->
                                
                                <!-- Card -->
                            <div class="card">
                            
                                <div class="Package-card-img">
                                    <img src="../assets/image/product3.webp" alt="">
                                </div>
                                <div class="card-text">
                                    
                                </div>
                            </div>
                                <!-- Card End -->
                                
                                <!-- Card -->
                            <div class="card">
                            
                                <div class="Package-card-img">
                                    <img src="../assets/image/product4.webp" alt="">
                                </div>
                                <div class="card-text">
                                    
                                </div>
                            </div>
                                <!-- Card End -->
                                
                                <!-- Card -->
                            <div class="card">
                            
                                <div class="Package-card-img">
                                    <img src="../assets/image/product1.webp" alt="">

                                </div>
                                <div class="card-text">
                                    
                                </div>
                            </div>
                                <!-- Card End -->
                                
                                <!-- Card -->
                            <div class="card">
                            
                                <div class="Package-card-img">
                                    <img src="../assets/image/product2.webp" alt="">

                                </div>
                                <div class="card-text">
                                    
                                    
                                </div>
                            </div>
                            <!-- Card End -->
                            
                        </div>
                    
                    </div>

                </div>
            </div>
        </div>

    </section>

</template>

<style scoped>
.card {
  width: 300px;
  min-width: 300px;
  height:auto;
  background:#fff;
  border-radius:30px;
  position:relative;
  z-index:10;
  margin:25px;
  min-height:356px;
  cursor:pointer;
  transition: all .25s ease;
  border: none;
  box-shadow: 0px 0px 0px 0px rgba(0,0,0, .08);
}

.card:hover {
  transform:translate(0, -10px);
  box-shadow: 0px 17px 35px 0px rgba(0,0,0,.07);
}

.card h4 {
  position:absolute;
  left: 0;
  top: 0;
  padding: 15px;
  color: #fd9604;
}
.card i {
  position:absolute;
  right: 0;
  top: 0;
  padding: 15px;
  font-size:1.4rem;
  line-height:3.2rem;
}
.card .card-text {
    height: 130px;
    background-color: #2c306b;
    box-shadow: 0px 17px 35px 0px rgba(0,0,0,.07);
    padding: 20px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
}
.card:hover .card-text {
    background: #fab915;
}
.card-text h2{
    color: #0b3ba7;
    font-size: 25px;
    font-family: 'Fira Sans', sans-serif;
    letter-spacing: 1px;
}
p {
  font-size: .8rem;
  opacity: .6;
  margin-top: 10px;
}
.card img {
    width: 100%;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    height: 310px;

}
.card-content {
  display:flex;
  align-items:center;
  justify-content:flex-start;
  width:100%;
  overflow:auto;
  padding-right: 50px;
  scroll-behavior:smooth;
}

.card-content::-webkit-scrollbar {
   height:0px;
}

.card-content:after {
  content:'';
  display:block;
  min-width:20px;
  height:100px;
  position:relative;
}

.btn{
  min-width:50px;
  margin:auto 10px;
  height:50px;
  padding: 6px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  letter-spacing: 0.5px;
  border-radius:20px;
  background:#fd9604;
  color: #fff;
  border:0px;
  outline:none;
  cursor:pointer;
  z-index:9999;
  box-shadow: 0px 0px 0px 0px rgba(0,0,0,.08);
  transition: all .25s ease;
}

.btn:hover{
  box-shadow: 0px 17px 35px 0px rgba(0,0,0,.07);
}

.btn i {
  font-size:1.2rem;
}

.slider {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    padding-bottom: 15px;
    overflow: hidden;
}

.line{
    position: absolute;
    left: 575px;
    width: 90px;
    height: 5px;
    background-color: #fd9604;
    border-radius: 10px;
}
@media screen and (max-width: 768px) {
    .card-content {
        width: 100%;
        padding: 0;
    }
    .slider{
        display: block;
        margin-top: -50px;
    }
    .card{
        margin-left:10px;
    }
    #prev {
        width: 30px !important;
        height: 30px!important;
        margin-top: 80px;
        margin-left: 62%;
        padding: 0;
    }
    #next {
        width: 30px !important;
        height: 30px!important;
        margin-top: -963px;
        margin-left: 80%;
        padding: 0;
    }
    .slider:before{
        display: none;
    }
    .slider:after{
        display: none;
    }
}
</style>