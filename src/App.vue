<template>
  <div id="app">
    <nav>
      <switcher></switcher>
      <transition name="navigation" mode="out-in">
        <navigation :key="$route.params.language"></navigation>
      </transition>
    </nav>
    <transition name="view" mode="out-in">
      <router-view :key="$route.path"></router-view>
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
  html, body { height: 100%; overflow-x: hidden; }
  body { padding: 32px; background: #fff; color: #000; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-style: normal; font-size: 16px; line-height: 1.5; }
  a { color: #000; text-decoration: none; }
  nav:after { content: ''; display: block; clear: both; }
  h1 { margin-top: 64px; font-size: 64px; clear: both; }

  .navigation-enter-active, .navigation-leave-active { transition: all 0.25s ease; }
  .navigation-enter, .navigation-leave-to { transform: translateY(-64px); }

  .view-enter-active, .view-leave-active { transition: all 0.25s ease; }
  .view-enter, .view-leave-to { opacity: 0; }
  .view-enter { transform: scale(1.5); }
  .view-leave-to { transform: scale(0.5); }
</style>
