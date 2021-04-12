<template>
    <div class="zoomed_images_container">
        <div class="zoomed_images_container--slider">
            <span @click="close" class="zoomed_images_container--close"><img src="../assets/icons/x-btn.svg"></span>
            <vueper-slides 
            :touchable="false" 
            :bullets="false"
            fixed-height="100%">
                <vueper-slide
                v-for="(slide, i) in images"
                :key="i"
                :image="slide.image.full_size"
                :style="'background-size: ' + 'cover'" />
            </vueper-slides>
        </div>
    </div>
</template>



<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
    props: ['images'],
    components: {
        VueperSlides,
        VueperSlide
    },
    methods: {
        close(){
            this.$store.dispatch('zoomOut')
            this.$store.dispatch('addImagesToCarousel', null)        
        }
    }
}
</script>

<style lang="scss">
.zoomed_images_container{
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-color: rgba(255, 255, 255, 0.623);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;

    &--close{
        position: absolute;
        right: 0;
        top: -2.5rem;
        width: 2rem;
        height: 2rem;
        z-index: 1001;
        &:hover{
            cursor: pointer;
        }
        img{
            width: 100%;
            height: 100%;
        }
    }

    &--slider{
        position: relative;
        width: 80%;
        height: 80%;
        background-color: #fff;
        @media (max-width: 700px){
            height: 50%;
        }
        @media (max-width: 500px){
            height: 40%;
        }
    }
}
</style>