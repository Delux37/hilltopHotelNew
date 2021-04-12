<template>
    <div class="blog__container">
        <div class="blog__container__image">
            <img :src="image"/>
        </div>
        <div class="blog__container__content">
            <h3 class="blog__container__content--title">title</h3>
            <p class="blog__container__content--description"> <span v-html="description"></span></p>
            <a class="blog__container__content--button" @click="$router.replace(slug)">Read more</a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'image', 'description', 'slug'],
}
</script>

<style lang="scss" scoped>
.blog__container{
    width: 47%;
    display: flex;
    position: relative;
    @media (max-width: 1200px){
        width: 50%;
    }
    @media (max-width: 800px){
        width: 100%;
        flex-direction: column;
    }
    &__image{
        margin-left: 5rem;
        width: 45%;

        @media (max-width: 1300px){
           min-height: 180px;
        }

        @media (max-width: 800px){
            margin-left: 0;
            width: 70%;
            min-height: auto;
        }

        img {
            width: 100%;
              @media (max-width: 1300px){
               height: 100%;
            };
        }
    }
    &__content{
        min-height: 80%;
        max-height: 100%;
        overflow-y:scroll;
        align-self: center;
        z-index: 20;
        position: absolute;
        right: 5rem;
        background-color: #fff;
        width: 50%;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-right: 1px solid #56D9D4;
        box-shadow: 0 0.4rem 0.3rem 0.3rem rgba(0, 0, 0, 0.096);
        @media (max-width: 1200px){
            position: static;
            height: 100%;
        }

        @media (max-width: 800px){
            position: static;
            align-self: flex-end;
            min-height: auto;
            max-height: auto;
            margin-top: -10rem;
            margin-left: -10rem;
            margin-right: 2rem;
            width: 40%;
            padding: 3rem;
        }
        @media (max-width: 700px){
            width: 60%;
        }
        &--title{
            font-family: 'caslon-medium';
            font-size: 3rem;
            letter-spacing: 0.2rem;
            @media (max-width: 1500px){
                font-size: 2.5rem;
            }
             @media (max-width: 1000px){
                font-size: 2rem;
            }
            @media (max-width: 800px){
                margin-bottom: 2rem;
            }
        }
        &--description{
            font-family: 'larsseit-thin-italic';
            font-size: 2rem;
            @media (max-width: 1500px){
                font-size: 1.8rem;
            }
            @media (max-width: 1000px){
                font-size: 1.5rem;
            }
        }
        &--button{
            align-self: flex-end;
            font-family: 'larsseit-light';
            font-size: 1.8rem;
            text-decoration: none;
            color: gray;
            border-bottom: 1px solid transparent;
            padding-bottom: 0.2rem;
            transition: all .3s;
            &:hover{
                cursor: pointer;
                border-bottom: 1px solid #56D9D4;
                color: #464646;
            }
        }
    }
}

/*SCROLLBAR */

::-webkit-scrollbar-track
{
  background-color: #F5F5F5;
}
::-webkit-scrollbar
{
  width: 1px;
  background-color: #F5F5F5;
}
::-webkit-scrollbar-thumb
{
  background-color: #56D9D4; 
  background-image: -webkit-linear-gradient(45deg,
                                            rgba(255, 255, 255, .2) 25%,
                        transparent 25%,
                        transparent 50%,
                        rgba(255, 255, 255, .2) 50%,
                        rgba(255, 255, 255, .2) 75%,
                        transparent 75%,
                        transparent)
}

</style>