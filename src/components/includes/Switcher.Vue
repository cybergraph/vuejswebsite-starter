<template>
  <ul class="switcher">
    <li><router-link :to="{path: '/fr/' + this.$t($route.name + '.slug', 'fr')}">FR</router-link></li>
    <li><router-link :to="{path: '/en/' + this.$t($route.name + '.slug', 'en')}">EN</router-link></li>
    <li><router-link :to="{path: '/de/' + this.$t($route.name + '.slug', 'de')}">DE</router-link></li>
  </ul>
</template>

<script>
export default {
  name: 'Switcher'
}
</script>

<style>
  .switcher { float: right; }
  .switcher li { display: inline-block; margin-left: 16px; }
  .switcher li .router-link-exact-active { font-weight: bold; }
</style>
