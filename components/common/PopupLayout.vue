<template>
  <div v-if="show" class="popup-layout">
    <div class="popup-container" @click="onClickOutside">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopupLayout',
  props: {
    opened: Boolean,
    disableClickOutside: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    show: {
      get() {
        return this.opened
      },
      set(value) {
        if (!value) {
          console.log(value)
        }
      },
    },
  },
  watch: {
    opened(value) {
      if (value) {
        if (typeof document !== 'undefined') {
          this.$nextTick(() => {
            const scrollY = window.scrollY
            document.body.classList.add('fixed')
            document.body.style.height = `auto`
            document.body.style.position = `fixed`
            document.body.style.top = `-${scrollY}px`
          })
          // document.body.style.overflow = 'hidden'
          // document.body.style.cssText = 'overflow: hideen;'
        } else {
          // document.body.style.overflow = 'unset'
          // document.body.style.position = 'relative'
          // document.body.style.cssText = 'overflow: unset; position: relative;'
        }
      } else {
        this.$nextTick(() => {
          const scrollY = document.body.style.top
          document.body.style.position = ''
          document.body.style.top = ''
          document.body.style.height = `100%`
          document.body.classList.remove('fixed')
          window.scrollTo(0, parseInt(scrollY || '0') * -1)
          // document.body.style.overflow = 'unset'
          // document.body.style.position = 'relative'
          // document.body.style.cssText = 'overflow: unset; position: relative;'
        })
      }
    },
  },
  methods: {
    onClickOutside(e) {
      // console.log('onClickOutside e.target', e.target)
      // console.log('e.target.classList[0].indexOf(\'popup-container\')', e.target.classList[0].indexOf('popup-container') >= 0)
      if (!this.disableClickOutside && e.target && e.target.classList && e.target.classList.length > 0 && e.target.classList[0].indexOf('popup-container') >= 0) {
        this.show = false
        this.onClose()
      }
    },
    onClose() {
      this.$emit('onClose', false)
    },
  },
}
</script>

<style scoped lang="scss">
.popup-layout {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  display: -ms-flexbox;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  z-index: 9999;

  .popup-container {
    width: 100%;
    height: 100%;
    display: flex;
    display: -ms-flexbox;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.75);
  }
}
</style>
