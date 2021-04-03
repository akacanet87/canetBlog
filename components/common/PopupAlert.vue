<template>
  <PopupLayout
    :opened="popup.show"
    :disable-click-outside="popup.disableClickOutside">
    <div class="popup popup-alert">
      <h2
        v-if="popup.title"
        class="header"
        v-html="popup.title" />
      <p
        v-if="popup.message"
        class="body"
        v-html="popup.message" />
      <div class="footer">
        <input ref="fakeInput" style="width: 0; height: 0; border: none">
        <Button
          v-if="popup.type==='confirm'"
          :value="popup.cancelText"
          type="button"
          class="basic"
          @click.native.stop="onCancel" />
        <Button
          v-if="popup.type==='confirm'"
          :value="popup.confirmText"
          type="button"
          class="primary"
          @click.native.stop="onConfirm" />
        <Button
          v-if="popup.type==='alert'"
          :value="popup.confirmText"
          type="button"
          class="primary"
          @click.native.stop="onConfirm" />
      </div>
    </div>
  </PopupLayout>
</template>

<script>
import PopupLayout from '@/components/common/PopupLayout'
import Button from '@/components/common/Button'
export default {
  name: 'PopupAlert',
  components: { Button, PopupLayout },
  data() {
    return {}
  },
  computed: {
    opened: {
      get() {
        return this.popup.show
      },
      set(value) {
        console.log('PopupAlert', value)
      },
    },
    popup() {
      return this.$store.state.popup.popup
    },
  },
  methods: {
    onCancel() {
      if (this.popup.onCancel) {
        if (typeof this.popup.onCancel === 'function') {
          this.popup.onCancel()
        } else {
          this.$store.dispatch('popup/dispatchClosePopup')
        }
      } else {
        this.$store.dispatch('popup/dispatchClosePopup')
      }
    },
    onConfirm() {
      if (this.popup.onConfirm) {
        this.popup.onConfirm()
      } else {
        this.onCancel()
      }
    },
  },
}
</script>
<style
  scoped
  lang="scss">
.popup-alert {
  width: 100%;
  max-width: 480px;
  background: $color-white;
  border-radius: 8px;

  h2.header {
    padding: 20px 20px 10px 20px;
    font-size: 18px;
  }

  p.body {
    padding: 10px 20px 10px 20px;
  }

  .footer {
    padding: 10px 20px 20px 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .button {
      width: 96px;
      height: 36px;
    }

    .button + .button {
      margin-left: 12px;
    }
  }
}
</style>
