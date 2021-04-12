<template>
    <div id="wrapper">
        <div class="nav_bar_container" :class="{scrolledNavBar: isScrolled || isNavigated}">
            <div class="nav_bar_container__logo" @click="$router.replace('/')" :class="{scrolledNavBar__logo: isScrolled || isNavigated}">
                <h1 class="nav_bar_container__logo--text">Hilltop Hotel</h1>
            </div>
            <nav class="nav_bar_container__navigation">
                <ul class="nav_bar_container__list" :class="{scrolledNavBar__list: isScrolled || isNavigated}">
                    <li class="nav_bar_container__list--item"><a href="#home" class="active">{{ $t('navBar.home') }}</a></li>
                    <li class="nav_bar_container__list--item"><a href="#roomTypes">{{ $t('navBar.roomTypes') }}</a></li>
                    <li class="nav_bar_container__list--item"><a href="#servicesSection">{{ $t('navBar.services') }}</a></li>
                    <li class="nav_bar_container__list--item"><a href="#aboutSection">{{ $t('navBar.aboutUs') }}</a></li>
                    <li class="nav_bar_container__list--item"><a href="#blogSection">{{ $t('navBar.blog') }}</a></li>
                    <li class="nav_bar_container__list--item"><a href="#contactSection">{{ $t('navBar.contact')}}</a></li>
                    <li class="nav_bar_container__list--item" :class="{scrolledNavBar__additional: isScrolled || isNavigated}">
                        <img src="../assets/icons/phone.svg" class="nav_bar_container__list__phone_logo" alt="phone_logo">
                        <span class="nav_bar_container__list--item" v-if="phone">{{ phone.phone }}</span>
                        <img v-if="!isScrolled" class="nav_bar_container__list__fb_logo" src="../assets/icons/facebook.svg" alt="facebook_logo_white">
                        <img v-else class="nav_bar_container__list__fb_logo" src="../assets/icons/facebookmob.png" alt="fb_logo_black">
                    </li>
                    <li class="nav_bar_container__list--item">
                        <drop-down />
                    </li>
                </ul>
            </nav>
        </div>

        <div class="mobile_nav_bar" :class="{mobile_nav_bar__scrolled: isScrolled}">
            <div class="mobile_nav_bar__header">
                <span v-if="!isScrolled" @click="temp=!temp"><img src="../assets/icons/nav.png"/></span>
                <span v-else @click="temp=!temp"><img src="../assets/icons/burger.svg"/></span>
                <h1 :class="{mobile_nav_bar__header__scrolled: isScrolled}">Hilltop Bakuriani</h1>
                <span v-if="!isScrolled"><img src="../assets/icons/whatsapp.svg"/></span>
                <span v-else><img src="../assets/icons/iconcontact.svg"/></span>
            </div>
                <transition name="mobile">
                <nav class="mobile_nav_bar__link" v-if="temp">
                    <div class="mobile_nav_bar__link--header">
                        <h2>Hilltop Bakuriani</h2>
                        <span @click="temp=!temp"><img src="../assets/icons/iconclose.svg"></span>
                    </div>
                    <div class="mobile_nav_bar__link--dropdown">
                        <drop-down />
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
import dropDown from './drop-down'
export default {
    components: {
        dropDown
    },
    data(){
        return {
            temp: false,
        }
    },
    computed: {
        isScrolled(){
            return this.$store.getters.isScrolled
        },
        isNavigated(){
            return !!this.$route.params.slug;
        },
        phone(){
            return this.$store.getters.getContact
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
    transition: all .3s;
    &__scrolled{
        background-color: #fff;
        position: fixed;
        z-index: 999;
        border-bottom: 1px solid #56D9D4;
        padding: 1rem 0;
    }
    @media (max-width: 800px){
        display: block;
    }
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
        &__scrolled{
            color: black !important;
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
    z-index: 150;
    display: flex;
    justify-content: space-between;
    width: 100%;
        @media (max-width: 1000px){
        justify-content: center;
    }
    @media (max-width: 800px){
        display: none;
    }
    &__logo{
        margin-left: 5rem;
        font-family: 'caslon-medium', sans-serif;
        &:hover{
            cursor: pointer;
        }
        &--text{
            color: #fff;
            font-size: 3.5rem;
            letter-spacing: 0.2rem;
        }
    @media (max-width: 1000px){
        display: none;
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
        &__fb_logo{
            @media (max-width: 1330px){
                width: 1.5rem;
                height: 1.5rem;
            }
        }
        span{
            @media (max-width: 1200px){
                display: none;
            }
        }
         @media (max-width: 1330px){
            &__phone_logo{
                width: 1rem;
                height: 2rem;
            }
        }
        &__phone_logo{
            @media (max-width: 1200px){
                display: none;
            }
        }
        &--item{
            display: inline-block;
            margin-right: 3rem;;
            font-family: "larsseit-light", sans-serif;
            letter-spacing: 0.3rem;
            font-weight: 100;
            font-size: 2.2rem;
            color: rgba(255, 255, 255, 0.8);
            line-height: 3rem;
            border-bottom: 2px solid transparent;
            @media (max-width: 1660px){
                margin-right: 1.5rem;
            }
            @media (max-width: 1330px){
                font-size: 1.5rem;
                margin-right: 1rem;
            }
            a{
                text-decoration: none;
                color: inherit;
                padding-bottom: 0.5rem;
            }
            & img:first-child{
                margin-right: 0.2rem;
            }
        }
    }
}
.active{
    border-bottom: 2px solid #56D9D4;
    color: #fff;
    font-family: 'larsseit-medium';
}
.scrolledNavBar{
    background-color: #fff;
    padding: 1rem 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    border-bottom: 1px solid #56D9D4;
    box-shadow: 0 0.4rem 0.3rem 0.3rem rgba(0, 0, 0, 0.096);
    &__list *{
        color: black;
    }
    &__logo > h1{
        color: #000;
    }
}
</style>

