<template>
  <q-page>
    <page-header :title="title"></page-header>

    <div class="q-my-xl">
      <container>
        <post
          v-for="post in techPosts"
          :key="post.id"
          :post="post">
        </post>
      </container>
    </div>
  </q-page>
</template>

<script>
import PageHeader from '../../components/PageHeader'
import Container from '../../components/Container'
import Post from '../../components/Post'

import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    'page-header': PageHeader,
    'post': Post,
    'container': Container
  },

  created () {
    this.getPosts().then(() => {
      this.getTechPost()
    })
  },

  data () {
    return {
      title: 'Tecnologia',
      newsPosts: '',
      techPosts: ''
    }
  },

  computed: {
    ...mapGetters(['posts'])
  },

  methods: {
    ...mapActions(['getPosts']),

    getTechPost () {
      this.techPosts = this.posts.filter(({ category }) => category === 'tecnologia')
    }
  }
}
</script>
