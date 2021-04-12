<template>
    <div class="container">
        <div class="container__image">
            <img :src="image"/>
        </div>
        <div class="container__content">
            <h3 class="container__content--title">{{ title }}</h3>
            <div class="container__content--additional">
                <p>{{ $t('roomTypes.price') }}: {{ price }}</p>
                <p>{{ $t('roomTypes.person') }}: {{ human_capacity }}</p>
            </div>
            <div class="container__content__box">
            <p class="container__content--description" >
                <span v-html="description"></span>
            </p>
            <button class="container__content--button" @click="zoomImage">
                View Gallery
            </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'price', 'human_capacity', 'image', 'description', 'images'],
    computed:{
        croppedDescription(){
            return this.description.substring(0, 120) + "..."
        },
    },
    methods: {
        zoomImage(){
            this.$store.dispatch('addImagesToCarousel', this.images);
            this.$store.dispatch('zoomIn');
        }
    }
}
</script>

<style lang="scss">
.container{
    display: flex;
    justify-content: flex-end;
    width: 50%;
    position: relative;
    // height: fit-content;
    @media(max-width: 800px){
        width: 100%;
        justify-content: stretch;
    }
    
    &__image{
        height: 100%;
        display: flex;
        align-items: center;
        position: absolute;
        left: 5rem;
        top: 0;
        width: 30%;
        z-index: 10;
        @media (max-width: 800px){
            align-items: stretch;
            position: static;
            width: 50%;
            margin-left: 2.5rem;
        }
        & img{
            width: 100%;
            max-height: 70%;
            min-height: 50%;
            @media (max-width: 800px){
                min-height: 130px;
            }
        }
    }
    &__content{
        width: 70%;
        padding-left: 7rem;
        padding-right: 5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        box-shadow: 0 0.4rem 0.3rem 0.3rem rgba(0, 0, 0, 0.096);
        @media (max-width: 800px){
            box-shadow: none;
            padding-left: 1rem;
        }
        &__box{
            @media (max-width: 800px){
                margin-left: -15rem;
                z-index: 20;
                background-color: #fff;
                box-shadow: 0 0.4rem 0.3rem 0.3rem rgba(0, 0, 0, 0.096);
                padding: 2rem;
                display: flex;
                flex-direction: column;
            }
        }
        &--title{
            font-family: 'caslon-medium';
            font-size: 3rem;
            margin-bottom: 2rem;
            @media (max-width: 1330px){
                font-size: 2.3rem;
            }
        }
        &--additional{
            margin-left: 3rem;
            padding: 0.5rem 1rem;
            border-left: 1px solid #56D9D4;
            font-family: 'larsseit';
            font-size: 2.2rem;
            text-transform: uppercase;
            margin-bottom: 2rem;
            @media (max-width: 1330px){
                font-size: 1.5rem;
            }
        }
        &--description{

            font-family: 'larsseit-thin-italic';
            font-size: 2rem;

            margin-bottom: 2rem;
        }
        &--button{
            border: none;
            outline: none;
            background-color: transparent;
            border-bottom: 1px solid transparent;
            color: gray;
            display: inline-block;
            width: fit-content;
            font-family: 'larsseit-light';
            font-size: 2rem;
            margin-bottom: 2rem;
            transition: all .3s;
            &:hover{
                border-bottom: 1px solid #56D9D4;
                color: #494949;
                cursor: pointer;
            }
            @media (max-width: 800px){
                align-self: flex-end;
                margin-bottom: 0;
            }
        }
    }
}
</style>