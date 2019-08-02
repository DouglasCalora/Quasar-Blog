<template>
  <div>
  <router-link
    class="Post"
    :to="`/post/${post.id}`" >
    <div class="row">
      <div class="col">
        <figure class="Post-figure">
          <img
            :src="post.image"
            :alt="post.title">
        </figure>
      </div>
      <div class="col">
        <div class="Post-content q-ml-md">
          <h4 class="Post-title text-h5 q-mt-none">
            {{ post.title }}
            <q-badge
              transparent
              align="middle"
              :color="changeBadgeColor()">
              {{ post.category }}
            </q-badge>
          </h4>
          <div>
            {{ post.description }}
          </div>
          <div>
            <q-btn
              outline
              rounded
              :color="changeBadgeColor()"
              label="Ver mais"
              size="sm" />
          </div>
        </div>
      </div>
    </div>
  </router-link>
  <q-btn
  outline
  rounded
  color="red"
  :label="post.id"
  size="sm"
  @click="deletePost(post.id)" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    post: {
      title: '',
      description: '',
      image: ''
    }
  },

  data () {
    return {
      colors: {
        blue: 'blue',
        red: 'red',
        green: 'green',
        orange: 'orange'
      }
    }
  },

  methods: {
    ...mapActions(['deletePost']),

    changeBadgeColor () {
      const category = this.post.category

      return category === 'tecnologia'
        ? this.colors.blue : category === 'natureza'
          ? this.colors.green : this.colors.red
    }
  }
}
</script>

<style lang="scss" scoped>
.Post {
  display: block;
  text-decoration: none;
  color: black;

  & + & {
    margin-top: 20px;
  }

  &-figure {
    width: 100%;
    margin: 0;

    img {
      width: 100%;
      display: block;
    }
  }
}
</style>
