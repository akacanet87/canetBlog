<template>
  <section id="index">
  </section>
</template>

<script>

export default {
  data() {
    return {}
  },
  head() {
    return {
      title: `홈`,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: `홈`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `홈`,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${process.env.BASE_URL}/`,
        },
      ],
    }
  },
  methods: {
    onDetectDevice() {
      if (this.$device.ios || this.$device.ipad || this.$device.iphone || this.$device.ipod) {
        console.log('ios')
      } else if (this.$device.android || this.$device.androidPhone) {
        console.log('android')
      } else if (this.$device.mobile) {
        console.log('mobile')
      } else {
        console.log('pc')
      }
    },
  },
}
</script>
<style
  scoped
  lang="scss">
section {

}
</style>
