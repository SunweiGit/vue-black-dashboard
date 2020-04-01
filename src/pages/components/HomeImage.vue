<template>

  <b-carousel
    id="carousel-1"
    v-model="slide"
    :interval="4000"
    :no-hover-pause=false
    controls
    indicators
    background="#ababab"
    img-width="1024"
    img-height="480"
    style="text-shadow: 1px 1px 2px #333;"
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
  >
    <!-- Text slides with image -->
    <div v-for="model in models1">
      <b-carousel-slide
        :caption="model.caption"
        :text="model.text"
        :img-src="model.src"
      ></b-carousel-slide>
    </div>


    <!-- Slides with custom text -->
    <div v-for="model in models2">
      <b-carousel-slide :img-src=model.src>
        <h1>{{model.h1}}</h1>
      </b-carousel-slide>
    </div>


    <!-- Slides with image only -->
    <div v-for="model in models3">
      <b-carousel-slide :img-src=model.src></b-carousel-slide>
    </div>
  </b-carousel>

</template>

<script>
  import {BCarouselSlide} from "bootstrap-vue/esm/components/carousel/carousel-slide";
  import {BCarousel} from "bootstrap-vue/esm/components/carousel/carousel";

  export default {
    name: "HomeImage",
    components: {
      BCarousel,
      BCarouselSlide
    },
    data() {
      return {
        slide: "",
        models1: [
          {
            caption: "First slide",
            text: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
            src: "https://picsum.photos/1024/480/?image=52"
          }
        ],
        models2: [
          {
            h1: "Hello world!",
            src: "https://picsum.photos/1024/480/?image=54"
          }
        ],
        models3: [
          {
            src: "https://picsum.photos/1024/480/?image=58"
          },
          {
            src: "https://picsum.photos/1024/480/?image=55"
          }
        ]
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style scoped>

</style>
