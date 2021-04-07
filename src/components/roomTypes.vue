<template>
    <section>
        <h2 class="title">Room types</h2>
        <div class="box">
            <room-card v-for="room in roomList"
            :key="room.id"
            :title="room.title"
            :price="room.price"
            :human_capacity="room.human_capacity"
            :image="room.primary_image.crop"
            :description=room.description
            >
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
            return this.$store.getters.getRoomTypesList
        }
    },
    mounted(){
        this.$store.dispatch('fetchRoomTypesData');
    
    }
    
}
</script>

<style lang="scss" scoped>
.box{
    //test
    width: 100%;
    display: flex; 
    flex-wrap: wrap;
    row-gap: 5rem;
    // display: grid;
    // grid-template-columns: 1fr 1fr;
    // row-gap: 5rem;
}
.title{
    text-align: center;
    font-size: 4rem;
    font-family: 'larsseit-light';
    margin-top: 10rem;
    margin-bottom: 5rem;
}
</style>