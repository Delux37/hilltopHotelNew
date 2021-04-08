<template>
    <div class="container">
        <div class="container__image">
            <img :src="image"/>
        </div>
        <div class="container__content">
            <h3 class="container__content--title">{{ title }}</h3>
            <div class="container__content--additional">
                <p>Price: {{ price }}</p>
                <p>Person: {{ human_capacity }}</p>
            </div>
            <p class="container__content--description" >
                <span v-html="description"></span>
            </p>
            <button class="container__content--button">
                View Gallery
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'price', 'human_capacity', 'image', 'description' ],
    computed:{
        croppedDescription(){
            return this.description.substring(0, 120) + "..."
        },
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
    &__image{
        height: 100%;
        display: flex;
        align-items: center;
        position: absolute;
        left: 5rem;
        top: 0;
        width: 30%;
        z-index: 10;
        & img{
            width: 100%;
            max-height: 70%;
            min-height: 50%;
        }
    }
    &__content{
        // position: absolute;
        // top: 0;
        // right: 0;
        width: 70%;
        // height: 100%;
        padding-left: 7rem;
        padding-right: 5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        box-shadow: 0 0.4rem 0.3rem 0.3rem rgba(0, 0, 0, 0.096);
        &--title{
            font-family: 'caslon-medium';
            font-size: 3rem;
            margin-bottom: 2rem;
            // text-transform: uppercase;
        }
        &--additional{
            margin-left: 3rem;
            padding: 0.5rem 1rem;
            border-left: 1px solid #56D9D4;
            font-family: 'larsseit';
            font-size: 2.2rem;
            text-transform: uppercase;
            margin-bottom: 2rem;
        }
        &--description{

            font-family: 'larsseit-thin-italic';
            font-size: 2rem;

            margin-bottom: 2rem;
        }
        &--button{
            border: none;
            outline: none;
            background-color: none;
            display: inline-block;
            width: fit-content;
            font-family: 'larsseit-light';
            font-size: 2rem;
            margin-bottom: 2rem;
        }
    }
}
</style>