<template>
    <section id="home" class="header_main">
        <vueper-slides 
        :touchable="false" 
        :bullets="false" 
        :arrows="false"  
        ref="myVueperSlides" 
        fixed-height="100vh" 
        @slide="logEvents('slide', $event)">
            <vueper-slide
             v-for="(slide, i) in data"
            :key="i"
            :title="slide.title"
            :content="slide.sub_title"
            :image="slide.picture.full_size"
            :style="'background-size: ' + 'cover'" />
            
             />             
        </vueper-slides>
        <div class="custom_bullets">
            <span 
            v-for="data, i in data"
            :key = i
            @click.native="$refs.myVueperSlides.goToSlide(i)"
            :class="{custom_bullets__bullet__active : i === index}"
            class="custom_bullets__bullet"
            >0{{ i + 1 }}</span>
        </div>
    </section>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
    components: { VueperSlides, VueperSlide },
    props: ['data'],
    data(){
        return {
            index: 0,
        }
    },
    methods:{
        test(index){
            this.$refs.myVueperSlides.goToSlide(index);
        },
        logEvents (_, params) {
            this.index = params.currentSlide.index
        }

    }

}
</script>

<style lang="scss">
.header_main{
    position: relative;
    z-index: 120;
    width: 100vw;
    background-color: rgb(114, 114, 114);
}
.vueperslides{
    opacity: 0.8;
}
.custom_bullets{
    z-index: 120;
    position: absolute;
    top: 50%;
    right: 3rem;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    @media (max-width: 800px){
        top: 35%;   
    }
    &__bullet{
        color: rgba(255, 255, 255, 0.7);
        font-size: 3rem;
        border-right: 1px solid rgba(255, 255, 255, 0.7);;
        padding-bottom: 0.1rem;
        padding-right: 1.3rem;
        font-family: 'mishafi-gold', sans-serif;
        &__active{
            color: #fff;
            border-right: 3px solid #fff;
        }
    }
    &__bullet:hover{
        cursor: pointer;
    }
    &__bullet:first-child{
        padding-top: 0.1rem;
    }

}
.vueperslide__title{
    position: absolute;
    left: 5rem;
    bottom: 15rem;
    color: white;
    font-size: 5rem;
    font-family: 'caslon-medium';
    font-size: 3.5rem;
    @media (max-width: 800px){
        bottom: 50%;
        left: 1rem;
        font-size: 3rem;
    }
}
.vueperslide__content{
    position: absolute;
    left: 5rem;
    bottom: 10rem;
    color: white;
    font-family: 'caslon-medium';
    font-size: 2.5rem;
    z-index: 50;
    @media (max-width: 800px){
        bottom: 42%;
        left: 1rem;
        font-size: 2rem;
        width: 60%;
    }
}


.vueperslides__bullet .default {
    width: 8px !important;
    height: 8px !important;
    display: inline-block;
    border-radius: 50%;
    background: #fff;
    border: none;
}

.vueperslides__bullet--active .default {    
    width: 16px !important;
    border-radius: 20px;
    }
</style>