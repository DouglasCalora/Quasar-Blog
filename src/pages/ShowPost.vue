<template>
  <q-page>
    <page-header :title="post.title"></page-header>
    <container>
      <img
        :src="post.image"
        :alt="post.title"
        class="q-mx-auto block q-mb-xl" >

      <div class="q-mb-xl">{{ post.content }}</div>
    </container>
  </q-page>
</template>

<script>
import PageHeader from '../components/PageHeader'
import Container from '../components/Container'

import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    'page-header': PageHeader,
    'container': Container
  },

  created () {
    this.getPost(this.id).then(() => {
      this.blogPost = this.post
    })
  },

  data () {
    return {
      id: this.$route.params.id,
      blogPost: ''
    }
  },

  computed: {
    ...mapGetters(['post'])
  },

  methods: {
    ...mapActions(['getPost'])
  }
}
</script>
