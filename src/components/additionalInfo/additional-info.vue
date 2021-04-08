<template>
    <div id="servicesContainer" v-if="serviceList !== null">
        <info-card v-for="(service,index) in serviceList"
        :key="service.id"
        :title="service.title"
        :description="service.description"
        :images="service.images"
        :index="index"
        ></info-card>
    </div>
</template>

<script>
import infoCard from './info-card.vue'
export default {
    components: {
        infoCard 
    },
    mounted(){
        this.$store.dispatch('fetchServiceData');
    },
    computed: {
        serviceList() {
            return this.$store.getters.getServiceList
        }
    }
}
</script>

<style lang="scss" scoped>
#servicesContainer{
    margin-top: 10rem;
    display: flex;
    flex-direction: column;
    column-gap: 5rem;
    row-gap: 10rem;
}
</style>