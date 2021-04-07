<template>
    <div class="container">
        <div class="container__logo">
            <h1 class="container__logo--text">Hilltop Hotel</h1>
        </div>
        <nav class="container__navigation">
            <ul class="container__list">
                <li class="container__list--item">Home</li>
                <li class="container__list--item">Room Types</li>
                <li class="container__list--item">Restaurant</li>
                <li class="container__list--item">About us</li>
                <li class="container__list--item">blog</li>
                <li class="container__list--item">contact</li>
                <li class="container__list--item">
                    <img src="../assets/icons/phone.svg" alt="phone_logo">
                    <span class="container__list--item">+995 555 555 555</span>
                    <img src="../assets/icons/facebook.svg" alt="facebook_logo">
                </li>
                <li class="container__list--item">ENG</li>
                
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.container{
    position: absolute;
    top: 2rem;
    left: 0;
    background-color: transparent;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    width: 100%;

    &__logo{
        margin-left: 5rem;
        font-family: 'caslon-medium', sans-serif;
        &--text{
            color: #fff;
            font-size: 3.5rem;
            letter-spacing: 0.2rem;
        }
    }
    &__navigation{
        display: flex;
        align-items: flex-end;
    }
    &__list{
        list-style: none;
        display:flex;        
        height: 100%;
        align-items: center;
        text-transform: uppercase;

        &--item{
            display: inline-block;
            margin-right: 3rem;;
            font-family: "larsseit-light", sans-serif;
            letter-spacing: 0.3rem;
            font-weight: 100;
            font-size: 2.2rem;
            color: #fff;
            line-height: 3rem;
            & img:first-child{
                margin-right: 0.2rem;
            }
        }
    }
}
</style>

