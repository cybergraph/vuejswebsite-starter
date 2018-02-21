<template>
  <ul class="switcher">
    <li v-for="item in switcher" :key="item.id">
      <router-link :to="{ path: '/' + item.language + '/' + item.slug }">{{ item.language }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Switcher',
  data () {
    return {
      switcher: {},
      languages: { 'fr': {}, 'en': {} }
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
      let pages = []
      for (var language in this.languages) {
        pages[language] = require('../../locales/page-' + language + '.json')
        this.switcher[language] = pages[language][this.$route.name]
        this.switcher[language]['language'] = language
      }
    }
  }
}
</script>

<style>
  .switcher { float: right; }
  .switcher li { display: inline-block; margin-left: 16px; text-transform: uppercase; }
  .switcher li .router-link-exact-active { font-weight: bold; }
</style>
