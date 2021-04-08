<template>
    <div>
        <the-header v-if="sliderData"
        :data="sliderData"
        ></the-header>
        <room-types></room-types>
        <additional-info></additional-info>
    </div>
</template>

<script>
import navBar from '../components/nav-bar.vue'
import RoomTypes from '../components/roomTypes/roomTypes.vue';
import theHeader from '../components/the-header.vue';
import additionalInfo from '../components/additionalInfo/additional-info.vue'
export default {
  components: {
    navBar,
    theHeader,
    RoomTypes,
    additionalInfo
  },
  mounted(){
    this.$store.dispatch('fetchSliderData');
  },
  computed: {
    sliderData(){
        return this.$store.getters.getSlider;
    }
  }
}
</script>
