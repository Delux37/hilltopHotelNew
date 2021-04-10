<template>
  <div>
    <nav-bar></nav-bar>
    <transition name="zoom">
      <zoomed-images v-if="isZoomed && images.length" :images="images"></zoomed-images>
    </transition>
    <router-view></router-view>
  </div>
</template>

<script>
import navBar from './components/nav-bar.vue'
import RoomTypes from './components/roomTypes/roomTypes.vue';
import theHeader from './components/the-header.vue';
import additionalInfo from './components/additionalInfo/additional-info.vue'
import zoomedImages from './UI/zoomed-images.vue'
export default {
  components: {
    navBar,
    theHeader,
    RoomTypes,
    additionalInfo,
    zoomedImages
  },
  mounted(){
    this.$store.dispatch('fetchSliderData');
    this.onScroll();
  },
  computed: {
    sliderData(){
        return this.$store.getters.getSlider;
    },
    isZoomed(){
      return this.$store.getters.isZoomed
    },
    images(){
      return this.$store.getters.images;
    }
  },
  methods: {
    onScroll(){
     
      onscroll = function (){       
      var sections = document.querySelectorAll('section');
      var scrollPosition = document.documentElement.scrollTop;
      
        sections.forEach((section) => {
          if(scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 && scrollPosition < section.offsetTop + section.offsetHeight){
            const currentId = section.attributes.id.value
            const selector = `nav a[href="#${currentId}"]`;

            document.querySelectorAll('nav a').forEach(el => {
              el.classList.remove("active");
            });

            document.querySelectorAll(selector).forEach(elem => {
              elem.classList.add('active')
            })
          }
        })
      
      }

    }
  },
  watch: {
    isZoomed() {
      document.querySelector('body').style.overflow = this.isZoomed ? 'hidden' : null;
    }
  }
}
</script>

<style lang="scss">
$border-color: #56D9D4;
$dark-gray-color: #464646;

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box
}

html {
  font-size: 62.5%
}

/* FONTS */
@font-face {
  font-family: "caslon-medium";
  src: url(assets/fonts/BigCaslonMedium.ttf);
}

@font-face {
  font-family: "larsseit-light";
  src: url(assets/fonts/Larsseit-Light.otf);
}

@font-face {
  font-family: "larsseit-thinitalic";
  src: url(assets/fonts/Larsseit-ThinItalic.otf);
}

@font-face {
  font-family: "larsseit-medium";
  src: url(assets/fonts/Larsseit-Medium.otf);
}



@font-face {
  font-family: "larsseit-thin";
  src: url(assets/fonts/Larsseit-Thin.otf);
}


@font-face {
  font-family: "mishafi-gold";
  src: url(assets/fonts/Mishafi-Gold.ttf);
}

/* geo fonts */

@font-face {
  font-family: "bpg-arial-caps";
  src: url(assets/fonts/bpg-arial-caps-webfont.ttf);
}

@font-face {
  font-family: "bpg-nateli-mtavruli";
  src: url(assets/fonts/bpg-nateli-mtavruli-webfont.ttf);
}

@font-face {
  font-family: "bpg-nateli-regular";
  src: url(assets/fonts/bpg-nateli-webfont.ttf);
}


@font-face {
  font-family: "bpg-arial-regular";
  src: url(assets/fonts/bpg-arial-webfont.ttf);
}

@font-face {
  font-family: "bpg-rioni-regular";
  src: url(assets/fonts/bpg-rioni-contrast-webfont.ttf);
}

@font-face {
  font-family: "larseit-thinLight-italic";
  src: url(assets/fonts/Larsseit-LightItalic.otf);
}

/*ANIMATIONS */
@keyframes zoomIn{
  from{
    opacity: 0;
    transform: scale(0);
  }
  to{
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes zoomOut{
  from{
    opacity: 1;
  }
  to{
    transform: translateY(-100vh);
  }
}
.zoom-enter-active{
  animation: zoomIn 0.5s ease-in;
}

.zoom-leave-active{
  animation: zoomOut 0.5s ease-out;
}

</style>
