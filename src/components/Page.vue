<template>
  <div class="page">
    <h1>{{ page.title }}</h1>
    <p v-if="page.body">{{ page.body }}</p>
  </div>
</template>

<script>
export default {
  name: 'Page',
  data () {
    return {
      page: {}
    }
  },
  mounted () {
    this.load()
  },
  watch: {
    '$route': function () {
      this.load()
    }
  },
  methods: {
    load: function () {
      let pages = require('../locales/page-' + this.$route.params.language + '.json')
      this.page = pages[this.$route.name]
    }
  }
}
</script>

<style>

</style>
