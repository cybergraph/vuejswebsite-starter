<template>
  <ul class="navigation">
    <li v-for="item in navigation" :key="item.id">
      <router-link :to="{ path: '/' + $route.params.language + '/' + item.slug }">{{ item.title }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      navigation: {}
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
      this.navigation = require('../../locales/navigation-' + this.$route.params.language + '.json')
    }
  }
}
</script>

<style>
  .navigation { float: left; }
  .navigation li { display: inline-block; margin-right: 16px; }
  .navigation li .router-link-exact-active { font-weight: bold; }
</style>
