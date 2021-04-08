<template>
    <div>
        <the-header v-if="sliderData"
        :data="sliderData"
        ></the-header>
        <room-types></room-types>
        <additional-info></additional-info>

        <section class="about-section" v-if="aboutData">
          <h4 class="about-section__header">About us</h4>
          <p class="about-section__paragraph">
            <span v-html="aboutData.description"></span>
          </p>
        </section>

        <blog-section></blog-section>
    </div>
</template>

<script>
import navBar from '../components/nav-bar.vue'
import RoomTypes from '../components/roomTypes/roomTypes.vue';
import theHeader from '../components/the-header.vue';
import additionalInfo from '../components/additionalInfo/additional-info.vue'
import blogSection from '../components/blogSection/blog-section.vue'
export default {
  components: {
    navBar,
    theHeader,
    RoomTypes,
    additionalInfo,
    blogSection
  },
  mounted(){
    this.$store.dispatch('fetchSliderData');
    this.$store.dispatch('fetchAboutData');
  },
  computed: {
    sliderData(){
        return this.$store.getters.getSlider;
    },
    aboutData(){
      return this.$store.getters.getAbout
    }
  }
}
</script>

<style lang="scss" scoped>
.about-section{
  width: 100%;
  margin-top: 15rem;
  margin-bottom: 15rem;
  &__header{
    font-family: 'larsseit-light';
    font-size: 4rem;
    display: block;
    margin: 0 auto 5rem auto;
    text-align: center;
  }
  &__paragraph{
    font-family: 'larsseit-thin-italic';
    font-size: 2.5rem;
    padding: 0 17rem;
    text-align: justify;
  }
}
</style>