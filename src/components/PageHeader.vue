<template>
  <div class="bg-secondary q-py-xl q-mb-xl">
    <container>
      <h2 class="text-2 text-center q-ma-none text-white">{{ title }}</h2>
    </container>
  </div>
</template>

<script>
import Container from './Container'

export default {
  props: {
    title: String
  },

  components: {
    'container': Container
  }
}
</script>
