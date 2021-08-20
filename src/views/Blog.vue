<template>
    <v-main>
        <v-container>
            <v-row v-for="post in posts" :key="post.id">
            
                <v-col>
                    <BlogCard  :post="post"/>
                </v-col>
            
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
import BlogCard from '@/components/BlogCard.vue';
export default {
    components: {
        BlogCard
    },
    data() {
        return {
            posts: [
                {
                    id: 1,
                    title: 'got rickrolled lol',
                    image: 'rickroll.gif',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempora quaerat voluptatibus nisi ab, dicta neque maxime? Ipsam eveniet rerum officiis quasi iste esse voluptate, architecto tenetur! Similique, dolorem eos?'
                },
                {
                    id: 2,
                    title: 'got rickrolled again lol',
                    image: 'rickroll.gif',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempora quaerat voluptatibus nisi ab, dicta neque maxime? Ipsam eveniet rerum officiis quasi iste esse voluptate, architecto tenetur! Similique, dolorem eos?'
                }
            ]
        }
    },
}
</script>

<style scoped>

</style>