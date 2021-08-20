<template>
    <v-card @click="sas(post.id)" elevation="7" class="justify-center">
        
        <v-img
          height="250"
          :src="imageItem()"
        ></v-img>
        <v-card-title primary-title>
            {{ post.title }}
        </v-card-title>

        <v-card-text>
          <div>{{ post.text }}</div>
        </v-card-text>
    </v-card>
    
</template>

<script>
    export default {
        methods: {
            sas(ing) {
                console.log(ing)
            },
            imageItem() {
                return require(`@/assets/${this.post.image}`)
            }
        },
        props: {
            post: Object
        },
    }
</script>

<style scoped>

</style>