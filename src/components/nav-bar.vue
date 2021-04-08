<template>
    <div id="wrapper">
        <div class="nav_bar_container">
            <div class="nav_bar_container__logo">
                <h1 class="nav_bar_container__logo--text">Hilltop Hotel</h1>
            </div>
            <nav class="nav_bar_container__navigation">
                <ul class="nav_bar_container__list">
                    <li class="nav_bar_container__list--item">Home</li>
                    <li class="nav_bar_container__list--item">Room Types</li>
                    <li class="nav_bar_container__list--item">Restaurant</li>
                    <li class="nav_bar_container__list--item">About us</li>
                    <li class="nav_bar_container__list--item">blog</li>
                    <li class="nav_bar_container__list--item">contact</li>
                    <li class="nav_bar_container__list--item">
                        <img src="../assets/icons/phone.svg" alt="phone_logo">
                        <span class="nav_bar_container__list--item">+995 555 555 555</span>
                        <img src="../assets/icons/facebook.svg" alt="facebook_logo">
                    </li>
                    <li class="nav_bar_container__list--item">ENG</li>
                </ul>
            </nav>
        </div>

        <div class="mobile_nav_bar">
            <div class="mobile_nav_bar__header">
                <span @click="temp=!temp"><img src="../assets/icons/nav.png"/></span>
                <h1>Hilltop Bakuriani</h1>
                <span><img src="../assets/icons/whatsapp.svg"/></span>
            </div>
                <transition name="mobile">
                <nav class="mobile_nav_bar__link" v-if="temp">
                    <div class="mobile_nav_bar__link--header">
                        <h2>Hilltop Bakuriani</h2>
                        <span @click="temp=!temp"><img src="../assets/icons/iconclose.svg"></span>
                    </div>
                    <div class="mobile_nav_bar__link--dropdown">
                        <h3>ENG</h3>
                        <div>
                            <span id="mobile_nav_bar__link--dropdown--fblogo"><img src="../assets/icons/facebookmob.png"/></span>
                            <span><img src="../assets/icons/iconcontact.svg"/></span>
                        </div>
                    </div>
                    <ul class="mobile_nav_bar__link--list">
                        <a class="mobile_nav_bar__link--item">home</a>
                        <a class="mobile_nav_bar__link--item">room types</a>
                        <a class="mobile_nav_bar__link--item">service</a>
                        <a class="mobile_nav_bar__link--item">blog</a>
                        <a class="mobile_nav_bar__link--item">about us</a>
                        <a class="mobile_nav_bar__link--item">contact</a>
                    </ul>
                </nav>
                </transition>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return {
            temp: false,
        }
    }
}
</script>

<style lang="scss" scoped>
@keyframes fade-in{
    from{
        opacity: 0;
        transform:translateX(-100%);
    }
    to{
        opacity: 1;
        transform:translateX(0);
    }
}
@keyframes fade-out{
    from{
        opacity: 1;
        transform:translateX(0);
    }
    to{
        opacity: 0;
        transform:translateX(-100%);
    }
}
.background_modal{
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 40;
}
.mobile-enter-active{
    animation: fade-in 0.5s ease-in;
}
.mobile-leave-active{
    animation: fade-out 0.5s ease-out;
}
.mobile_nav_bar{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 200;
    width: 100vw;
    display: none;
    &__header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 0 1rem;
        h1{
            font-size: 2rem;
            color: #fff;
            font-family: 'caslon-medium';
            
        }
        // &:first-child{
        //     margin-left: 1rem;
        // }
        // &:last-child{
        //     margin-right: 1rem;
        // }
    }
    &__link{    
    width: 70%;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 30;
    height: 100vh;
    padding: 1rem;
    transition: all 0.5s;
        &--header{
            display: flex;
            justify-content: space-between;
            width: 100%;
            h2{
                font-size: 2rem;
                font-family: 'caslon-medium';
            }
        }
        &--dropdown{
            margin-top: 2.8rem;
            display: flex;
            justify-content: space-between;
            width: 100%;
            span:first-child{
                margin-right: 1rem;
            }
            h3{
                font-size: 1.6rem;
                font-family: 'larsseit-light'
            }
        }
        &--list{
            margin-top: 2rem;
            display: flex;
            flex-direction: column;
            row-gap: 0.7rem; 
            list-style: none;
        }
        &--item{
            text-decoration: none;
            font-size: 1.6rem;
            font-family: 'larsseit-light';
            display: inline-block;
            text-transform: uppercase;
        }
    }
}

#wrapper{
    position: relative;
}
.nav_bar_container{
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

