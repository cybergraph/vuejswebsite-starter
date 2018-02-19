<template>
  <div id="app">
    <nav>
      <langugeswitcher></langugeswitcher>
      <navigation></navigation>
    </nav>
    <transition name="fade">
      <router-view class="container"></router-view>
    </transition>
  </div>
</template>

<script>
import langugeswitcher from './components/globale/LangueSwitcher'
import navigation from './components/globale/Menu'

export default {
  name: 'App',
  components: {
    langugeswitcher,
    navigation
  }
}
</script>

<style>
  html, body{ margin: 0; }
  #app { font-family: 'Avenir', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
  nav{ padding: 20px 30px; background: #FFF; color: #fff; height: 25px;}
  nav a {color: #222; text-decoration: none;}
  .container{ margin: 0 auto; padding: 3em 3em 3em 3em;}
  .hello{background: #F7F7F7;}
  h1{ font-size: 3em }
  /* transition router-view */
  .fade-enter-active, .fade-leave-active { transition-property: opacity; transition-duration: .20s; }
  .fade-enter-active { transition-delay: .20s; }
  .fade-enter, .fade-leave-active { opacity: 0; }
</style>
