<template>
    <section>
        <h3 class="blog__title">BLOG</h3>
        <div class="blog__content" v-if="blogList">
            <blogCard v-for="(blog,index) in blogList"
             :key="index"
             :title="blog.title"
             :description= "blog.short_description"
             :image="blog.picture.crop"></blogCard>
        </div>
        <div class="blogButton__container">
            <button class="blogButton__container__button">Load more</button>
        </div>
    </section>
</template>

<script>
import blogCard from './blog-card.vue'
export default {
    components: {
        blogCard
    },
    mounted(){
        this.$store.dispatch('fetchBlogs');
    },
    computed: {
        blogList(){
            return this.$store.getters.getBlogs;
        }
    }
}
</script>

<style lang="scss" scoped>
.blog__title{
    display: block;
    font-size: 4rem;
    font-family: 'larsseit-light';
    text-align: center;
}
.blog__content{
    padding-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    row-gap: 5rem;
    justify-content: space-between;
}
.blogButton__container{
    margin-top: 2rem;
    text-align: center;
    &__button{
        background-color: transparent;
        color: #464646;
        font-size: 2.5rem;
        font-family: 'larsseit-light';
        border: none;
        border-bottom: 1px solid #56D9D4;

        &:hover{
            cursor: pointer;
        }
    }
}



</style>