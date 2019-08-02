<template>
  <q-page class="">
    <div>
      <h5 class="text-5 text-center" color="primary">Destaques da Semana</h5>
    </div>
    <q-carousel
      v-if="spotlightPosts"
      v-model="slide"
      transition-prev="scale"
      transition-next="scale"
      swipeable
      animated
      control-color="white"
      navigation
      padding
      arrows
      height="300px"
      class="bg-primary text-white shadow-1 rounded-borders" >

      <q-carousel-slide
        v-for="post in spotlightPosts"
        :key="post.id"
        :name="post.id"
        class="column no-wrap flex-center"
        :img-src="post.image">

        <div class="q-mt-md text-center">
        <h4 class="text-h4">{{ post.title }}</h4>
         {{ post.description }}
        </div>
      </q-carousel-slide>
    </q-carousel>

    <container>
      <post
        v-for="post in newsPosts"
        :key="post.id"
        :post="post"
        class="q-my-xl" ></post>
    </container>
  </q-page>
</template>

<style>
</style>

<script>
import { mapActions, mapGetters } from 'vuex'

// import api from '../services/api'

import Post from '../components/Post'
import Container from '../components/Container'

export default {
  name: 'PageIndex',

  components: {
    'post': Post,
    'container': Container
  },

  created () {
    this.getPosts().then(() => {
      this.newsPosts = this.posts
      this.spotlightPosts = this.getSpotlightPosts()
      this.changeBadgeColor()
    })
  },

  data () {
    return {
      slide: 'style',
      newsPosts: '',
      spotlightPosts: ''
    }
  },

  computed: {
    ...mapGetters(['posts'])

    // newsPosts () {
    //   return this.newsPosts = this.posts
    // }
  },

  methods: {
    ...mapActions(['getPosts']),

    getSpotlightPosts () {
      const posts = this.newsPosts.filter(({ spotlight }) => spotlight === true)

      return posts.length > 0 ? posts : null
    }
  }
}
</script>
