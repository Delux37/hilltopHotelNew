<template>
    <section>
        <div class="content">2>
            <room-card>
            </room-card>
        </div>
    </section>
</template>

<script>
import roomCard from './roomCard.vue'
export default {
    components: {
        roomCard
    },
    computed: {
        roomList(){
            console.log(this.$store.getters.getRoomTypesList)
            return this.$store.getters.getRoomTypesList
        }
    },
    mounted(){
        this.$store.dispatch('fetchRoomTypesData');
    }
    
}
</script>

<style lang="scss" scoped>
.content{
    //test
    width: 100%;
    display: flex; 
    height: 50rem;
    bordeR: 2px solid red;

    &__title{
        text-align: center;
        font-size: 4rem;
        font-family: 'larsseit-light';
    }
}

</style>