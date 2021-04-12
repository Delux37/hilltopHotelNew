<template>
    <div class="info_container"
    :class="{chessStyled: index %2 == 1}">
        <div class="info_container__content" :class="{chessStyled__content:index %2 == 1}">
            <h3 class="info_container__content--title">{{ title }}</h3>
            <p class="info_container__content--description" v-html="description"></p>
        </div>
        <div class="info_container__carousel">
            <vueper-slides
            fractions 
            :touchable="false" 
            :arrows="false"   
            :fixed-height="true"
            @slide="logEvents('slide', $event)">
                <vueper-slide
                    v-for="(image, i) in images"
                    :key="i"
                    :image="image.image.full_size"
                    :style="'background-size: ' + 'cover'" />
                />             
             </vueper-slides>
        </div>
    </div>
</template>

<script>

import { VueperSlides, VueperSlide } from 'vueperslides'

import 'vueperslides/dist/vueperslides.css'
export default {
    props: ['images', 'title', 'description', 'index'],
    components:{
        VueperSlides,
        VueperSlide
    }
}
</script>

<style lang="scss">
.info_container{
    width: 100%;
    display: flex;
    position: relative;
    justify-content: flex-end;
    @media(max-width: 800px){
        flex-direction: column-reverse;
    }
    &__carousel{
        flex: 0 0 80%;
        @media(max-width: 800px){
            flex: 0 0 100%;
        }
    }

    &__content{
        max-height: 80%;
        overflow: hidden;
        overflow-y: scroll;
        position: absolute;
        align-self: center;
        border-left: 1px solid #56D9D4;
        width: 50rem;
        left: 5rem;
        background-color: #fff;
        box-shadow: 0 0.4rem 0.3rem 0.3rem rgba(0, 0, 0, 0.096);
        z-index: 20;
        padding: 4rem;
        @media(max-width: 800px){
            position: static;
            margin-top: -7rem;
            width: 90%;
            // margin-left: 5rem;
            border-right: 1px solid #56D9D4;
            border-left: none;
            padding: 2rem;
        }
            &--title{
                font-size: 5rem;
                font-family: 'caslon-medium';
                margin-bottom: 7rem;
                @media(max-width: 1400px){
                    margin-bottom: 4rem;
                    font-size: 4rem;
                }
                 @media(max-width: 800px){
                    margin-bottom: 2rem;
                    font-size: 3.5rem;
                }
                @media (max-width: 700px){
                    font-size: 2.5rem;
                }
            }
            &--description{
                font-family: 'larsseit-thin-italic';
                font-size: 2rem;
                @media (max-width: 700px){
                    font-size: 1.5rem;
                }
            }
    }

}
.chessStyled{
    flex-direction: row-reverse;
    @media(max-width: 800px){
        flex-direction: column-reverse;
    }
    &__content{
        border-right: 1px solid #56D9D4;
        right: 5rem;
        left: auto;
        border-left: none;
        @media(max-width: 800px){
            position: static;
            margin-top: -7rem;
            width: 90%;
            // margin-left: 5rem;
            border-right: 1px solid #56D9D4;
            border-left: none;
            padding: 2rem;
        }
    }
}
.vueperslides__fractions {
    top: auto;
    left: 1em;
    bottom: 1em;
    transform: translate(-50%, 50%);
    background-color: transparent;
    font-size: 4rem;
    font-family: 'caslon-medium';
    color: #fff;
    border: none;
    letter-spacing: -5px;
    opacity: 0.7;
}

.vueperslides--fixed-height { height: 70rem; }
</style>