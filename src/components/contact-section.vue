<template>
    <div class="contact_container">
        <div class="contact_container__box">
            <div class="contact_container__content" v-if="contact">
                <h4 class="contact_container__content--text">Phone: {{ contact.phone }}</h4>
                <h4 class="contact_container__content--text">Email: {{ contact.email }}</h4>
                <h4 class="contact_container__content--text">Address: {{ contact.address }}</h4>
            </div> 
        </div>
        <div class="contact_container__map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2976.8739340779516!2d43.527764515436935!3d41.744811979232956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440d276e3d7e93%3A0xf8903b47b3b8245a!2sHilltop%20Bakuriani!5e0!3m2!1ska!2sge!4v1611562952104!5m2!1ska!2sge" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
    </div>
</template>

<script>
export default {
    mounted(){
        this.$store.dispatch('fetchContactData')
    },
    computed: {
        contact(){
            return this.$store.getters.getContact
        }
    }
}
</script>

<style lang="scss" scoped>
.contact_container{

    display: flex;
    justify-content: flex-end;
    position: relative;
    margin-top: 10rem;

    &__box{
        position: absolute;
        left: 5rem;
        align-self: center;
        border-left: 1px solid #56D9D4;
        box-shadow: 0 0.4rem 0.3rem 0.3rem rgba(0, 0, 0, 0.096);
        padding: 9rem 5rem;
        min-width: 60rem;
        z-index: 20 !important;
        background-color: #fff;
    }
    &__content{
        padding-left: 2rem;
        border-left: 1px solid rgb(187, 187, 187);
        &--text{
            font-size: 2.2rem;
            font-family: 'larsseit';
        }
    }
    &__map{
        width: 70%;
        z-index: 10;
        position: relative;
        iframe{
            width: 100%;
        }
    }
}
</style>