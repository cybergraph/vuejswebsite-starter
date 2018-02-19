<template>
  <div class="nav">
    <router-link :to="{path: '/' + this.$i18n.locale + '/' + this.$t('home.slug')}">{{ $t("home.pagetitle") }}</router-link>
    <router-link :to="{path: '/' + this.$i18n.locale + '/' + this.$t('about.slug')}">{{ $t("about.pagetitle") }}</router-link>
    <router-link :to="{path: '/' + this.$i18n.locale + '/' + this.$t('works.slug')}">{{ $t("works.pagetitle") }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'navigation'
}
</script>

<style>
  .nav {float: left}
  .nav a {padding: 10px;}
  .nav .router-link-exact-active {font-weight: 900;}
</style>
