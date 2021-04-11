<template>
    <section id="roomTypes">

        <h2 class="title">{{ $t('roomTypes.roomTypes') }}</h2>
        <div class="box">
            <room-card v-for="room in roomList"
            :key="room.id"
            :title="room.title"
            :price="room.price"
            :human_capacity="room.human_capacity"
            :image="room.primary_image.crop"
            :description=room.description
            :images="room.images"
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
#roomTypes{
    @media(max-width: 800px){
        position: relative;
        z-index: 500;
        background-color: #fff;
        width: 97%;
        margin: -35rem auto 0 auto;
        padding-top: 3rem;
    }
}
.box{
    //test
    // border: 2px solid blue;
    width: 100%;
    display: flex; 
    flex-wrap: wrap;
    row-gap: 5rem;
    // display: grid;
    // grid-template-columns: 1fr 1fr;
    // row-gap: 5rem;
    @media(max-width: 800px){
        flex-direction: column;
    }
}
.title{
    text-align: center;
    font-size: 4rem;
    font-family: 'larsseit-light';
    margin-top: 10rem;
    margin-bottom: 5rem;
    text-transform: uppercase;

        @media(max-width: 800px){
        margin-top: 0;
        margin-bottom: 3rem;
        font-size: 3rem;
    }

    }
</style>