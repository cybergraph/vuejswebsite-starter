<template>
  <ul class="navigation">
    <li><router-link :to="{ path: '/' + this.$i18n.locale }">{{ $t('home.title') }}</router-link></li>
    <li><router-link :to="{ path: '/' + this.$i18n.locale + '/' + $t('about.slug') }">{{ $t('about.title') }}</router-link></li>
    <li><router-link :to="{ path: '/' + this.$i18n.locale + '/' + $t('works.slug') }">{{ $t('works.title') }}</router-link></li>
  </ul>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style>
  .navigation { float: left; }
  .navigation li { display: inline-block; margin-right: 16px; }
  .navigation li .router-link-exact-active { font-weight: bold; }
</style>
