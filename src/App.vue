<template>
  <div id="app">
    <nav>
      <switcher></switcher>
      <navigation></navigation>
    </nav>
    <transition name="fade">
      <router-view class="container"></router-view>
    </transition>
  </div>
</template>

<script>
import Switcher from './components/includes/Switcher'
import Navigation from './components/includes/Navigation'

export default {
  name: 'App',
  components: {
    Switcher,
    Navigation
  }
}
</script>

<style>
  * { box-sizing: border-box; margin: 0; border: 0; padding: 0; list-style: none; }
  html, body { height: 100%; }
  body { padding: 32px; background: #fff; color: #000; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-style: normal; font-size: 16px; line-height: 1.5; }
  a { color: #000; text-decoration: none; }
  nav:after { content: ''; display: block; clear: both; }
  h1 { margin-top: 64px; font-size: 64px; clear: both; }
  /* transition router-view */
  .fade-enter-active, .fade-leave-active { transition-property: opacity; transition-duration: .20s; }
  .fade-enter-active { transition-delay: .20s; }
  .fade-enter, .fade-leave-active { opacity: 0; }
</style>
