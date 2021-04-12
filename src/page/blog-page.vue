<template>
    <div class="blogDetail__contianer" v-if="blogDetail">
        <div class="blogDetail__contianer__image">
            <img :src="blogDetail.picture.full_size" />
        </div>
        <div class="blogDetail__contianer__content">
                <span @click="$router.replace('/')" class="blogDetail__contianer__content--back"><img src="../assets/icons/arrow-left.svg" ></span>
                <h2 class="blogDetail__contianer__content--title">{{ blogDetail.title }} <span @click="$router.replace('/')" class="blogDetail__contianer__content--backMOB"><img src="../assets/icons/arrow-left.svg" ></span></h2>
                <div class="blogDetail__contianer__content--tags">
                    <p>published</p>
                    <p>date</p>
                </div>
                <div class="blogDetail__contianer__content--box" v-html="blogDetail.description">
                </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted(){
        this.$store.dispatch('fetchBlogDetail', this.$route.params.slug);
    },
    computed:{
        blogDetail(){
            return this.$store.getters.getBlogDetail
        },
    }
}
</script>

<style lang="scss" scoped>
.blogDetail__contianer{
    margin-top: 10rem;
    display: flex;
    width: 100%;

    @media(max-width: 800px){
        flex-direction: column;
        margin-top: 0;
        padding-top: 10rem;
    }
    &__image{
        // min-height: 70vh;
        width: 70%;
        @media (max-width: 1500px){
            min-height: 70vh;
            overflow: hidden;
        }
        @media(max-width: 800px){
            width: 100%;
            min-height: auto;
        }
        img{
            height: 100%;
             @media (max-width: 1500px){
            width: unset;
             }
             @media(max-width: 800px){
                width: 100%;
            }
        }
    }
    &__content{
        width: 30%;
        position: relative;
        padding: 0 7rem 0 3rem;
        @media(max-width: 800px){
            width: 100%;
            padding: 5rem 3rem;
            display: flex;
            flex-direction: column;
            row-gap: 2rem;
        }
        &--back{
            position: absolute;
            top: 7rem;
            @media(max-width: 800px){
               display: none;
            }
        }
        &--backMOB{
            display: none;
            @media(max-width: 800px){
               display: inline-block;
            }
        }
        &--title{
            font-family: 'caslon-medium';
            font-size: 3rem;
            color: #464646;
            margin-top: 18rem;
            @media(max-width: 800px){
                margin-top: 0;
                display: flex;
                justify-content: space-between;
            }
        }
        &--tags{
            display: flex;
            justify-content: space-between;
            margin-top: 3rem;
            @media(max-width: 800px){
                   order: 5;
                }
            p{
                font-size: 1.8rem;
                color: #8B8686;
                font-family: 'larsseit-thin-italic'
            }
        }
        &--box{
            width: 100%;
            background-color: #fff;
            position:absolute;
            top: 30rem;
            right: 5rem;
            padding: 5rem;
            max-width: 100%;
            max-height: 50%;
            overflow-y: scroll;
            font-size: 2rem;
            font-family: 'larsseit-thin';
            border-right: 1px solid #56D9D4;
            box-shadow: 0 0.4rem 0.3rem 0.3rem rgba(0, 0, 0, 0.096);
            @media(max-width: 800px){
                position: static;
                padding: 0;
                border: none;
            }
        }
    }
}
</style>