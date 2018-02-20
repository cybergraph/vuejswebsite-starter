<template>
  <div class="switcher">
    <router-link :to="{path: '/fr/' + this.$t($route.name + '.slug', 'fr')}">FR</router-link>
    <router-link :to="{path: '/en/' + this.$t($route.name + '.slug', 'en')}">EN</router-link>
    <router-link :to="{path: '/de/' + this.$t($route.name + '.slug', 'de')}">DE</router-link>
  </div>
</template>

<script>
export default {
  name: 'Switcher'
}
</script>

<style>
  .lang { float: right; }
  .lang .router-link-exact-active { font-weight: 900; }
</style>
