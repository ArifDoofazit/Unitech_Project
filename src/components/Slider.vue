<script>
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

</script>

<template>

        <section>
            <div class="slider w-full lg:h-[650px] h-[500px] relative lg:mt-20">
                <ul class="items relative w-full lg:h-[650px] h-[500px] overflow-hidden ">
                    <div class="absolute lg:top-1/4 top-1/4 z-20 bg-[#f89b3b] rounded-r-xl bg-opacity-40 p-10">
                        <h2 class="font-medium lg:text-5xl text-3xl text-[#2c306b] pl-8">We Believe in Quality</h2>
                        <p class="lg:w-[700px] font-normal text-lg pl-8 pt-5 leading-8 text-white">
                            provides high quality accessories of hardware, specially various Lock, Handle, others doors and all kinds of home
                            accessories etc
                        </p>
                        <h4 class="font-medium text-2xl text-[#ed1f36] pl-8 mt-20">W H O L E S A L E O N L Y</h4>
                    </div>
                    <li class="item current">
                        <img src="https://images.pexels.com/photos/6689289/pexels-photo-6689289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                    </li>
                    <li class=item>
                        <img src="https://www.bproperty.com/blog/wp-content/uploads/door-handle-key-keyhole-279810.jpg">
                    </li>
                    <li class=item>
                        <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/bd86580b-3f97-4fc4-9f7a-790c132a2a76.__CR0,0,600,450_PT0_SX600_V1___.png">
                    </li>
                </ul>
            </div>
        </section>

</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");

.items {
    padding-bottom: 56.25%;
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

</style>