<template>
  <div class="page">
    <h1>{{ error.title }}</h1>
    <p v-if="error.body">{{ error.body }}</p>
  </div>
</template>

<script>
export default {
  name: 'Error',
  data () {
    return {
      error: {}
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
      let errors = require('../locales/error-' + this.$route.params.language + '.json')
      this.error = errors[this.$route.name]
    }
  }
}
</script>

<style>

</style>
