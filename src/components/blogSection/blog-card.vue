<template>
    <div class="blog__container">
        <div class="blog__container__image">
            <img :src="image"/>
        </div>
        <div class="blog__container__content">
            <h3 class="blog__container__content--title"> title</h3>
            <p class="blog__container__content--description"> <span v-html="description"></span></p>
            <a class="blog__container__content--button">Read more</a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'image', 'description'],
}
</script>

<style lang="scss" scoped>
.blog__container{
    width: 47%;
    display: flex;
    position: relative;

    &__image{
        margin-left: 5rem;
        width: 45%;
        img {
            width: 100%;
        }
    }
    &__content{
        min-height: 80%;
        max-height: 100%;
        overflow: scroll;
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

        &--title{
            font-family: 'caslon-medium';
            font-size: 3rem;
            letter-spacing: 0.2rem;
        }
        &--description{
            font-family: 'larsseit-thin-italic';
            font-size: 2rem;
            
        }
        &--button{
            align-self: flex-end;
            font-family: 'larsseit-light';
            font-size: 1.8rem;
            text-decoration: none;
            color: #464646;
            border-bottom: 1px solid #56D9D4;
            padding-bottom: 0.2rem;
        }
    }
}
</style>