<template>
  <div class="wrapper-layout" :class="weather">
    <Nav />
    <main>
      <nuxt />
    </main>
    <PopupAlert />
  </div>
</template>

<script>
import PopupAlert from '@/components/common/PopupAlert'
import Nav from '@/components/common/Nav'
import Common from '@/mixins/Common'

export default {
  name: 'Default',
  components: {
    Nav,
    PopupAlert,
  },
  mixins: [Common],
  data() {
    return {}
  },
  computed: {
    weather() {
      return this.$options.filters.weather(this.$store.state.weather.weatherIcon)
    },
  },
  methods: {},
}
</script>

<style
  lang="scss"
  scoped>
.wrapper-layout {
  width: 100%;
  min-height: 100vh;
  position: relative;

  .nav {
    width: 378px;
    height: 100vh;
    position: fixed;
    left: 0;
    z-index: 11;
  }
  main {
    width: calc( 100vw - 396px);
    min-height: 100vh;
    position: absolute;
    padding-top: 72px;
    right: 0;
  }

  .popup-alert {
    z-index: 9999;
  }
}
</style>
