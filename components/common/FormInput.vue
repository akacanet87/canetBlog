<template>
  <div
    :class="{ invalid: isInvalid, active: isFocused }"
    class="form-input"
    @focusin="onFocusIn">
    <input
      ref="input"
      :class="{ invalid: isInvalid, disabled: disabled }"
      :value="value"
      :type="type"
      :required="required"
      :disabled="disabled"
      :invalid="isInvalid"
      @input="onInput"
      @focusout="onFocusOut"
      @blur="onFocusOut"
      @keyup.enter="onEnter" />
    <p :class="{ active: isFocused || (value && value.length > 0) }" class="placeholder">
      {{ placeholder }}
    </p>
    <p
      v-if="isInvalid"
      class="invalid">
      <!--<img-->
      <!--  src="~/assets/images/icon-invalid-input.svg"-->
      <!--  alt="Invalid Input Image" />-->
      {{ invalidMessage }}
    </p>
  </div>
</template>

<script>
import Validation from '@/mixins/Validation'

export default {
  name: 'FormInput',
  mixins: [Validation],
  props: {
    required: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: '',
    },
    compareText: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: '',
    },
    regex: {
      type: String,
      default: '',
    },
    regexFunction: {
      type: Function,
      default: null,
    },
  },
  data() {
    return {
      isFocused: false,
      isInvalid: false,
      invalidMessage: '',
    }
  },
  watch: {
    compareText(text) {
      console.log('compareText', text)
      if (text && this.value && text !== this.value) {
        this.isInvalid = true
        this.invalidMessage = '입력하신 값이 일치하지 않습니다'
      } else {
        this.isInvalid = false
        this.invalidMessage = ''
      }
    },
  },
  methods: {
    onFocusIn() {
      this.isFocused = true
      if (this.type === 'datepicker') {

      } else {
        this.$refs.input.focus()
      }
    },
    onFocusOut(e) {
      console.log('onFocusOut', e)
      this.isFocused = false
      this.onCheckValid(e)
    },
    onCheckValid(e) {
      console.log('onCheckValid', e)
      // this.isInvalid = this.required && !e.target.value
      this.invalidMessage = ''
      this.isInvalid = false
      if (this.required) {
        if (!e.target.value) {
          this.isInvalid = true
          this.invalidMessage = this.errorMessage || '필수 입력값입니다'
        } else {
          switch (this.type) {
            case 'email':
              if (!this.regexEmail(e.target.value)) {
                this.invalidMessage = '이메일 형식에 맞게 입력해주세요'
              }
              break
            case 'password':
              if (e.target.value.length < 8) {
                this.invalidMessage = '비밀번호의 길이는 최소 8자 이상이어야 합니다'
              } else if (!this.regexPassword(e.target.value)) {
                this.invalidMessage = '비밀번호 형식에 맞게 입력해주세요'
              }
              break
            case 'checkPassword':
              if (e.target.value.length < 8) {
                this.invalidMessage = '비밀번호의 길이는 최소 8자 이상이어야 합니다'
              } else if (!this.regexPassword(e.target.value)) {
                this.invalidMessage = '비밀번호 형식에 맞게 입력해주세요'
              } else if (this.compareText !== e.target.value) {
                this.invalidMessage = '입력하신 비밀번호와 일치하지 않습니다'
              }
              break
            default:
              break
          }
          if (this.invalidMessage.length > 0) {
            this.isInvalid = true
          }
        }
      }
      this.$emit('onValid', !this.isInvalid)
    },
    onInput(e) {
      if (this.regexFunction) {
        e.target.value = e.target.value && this.regexFunction(e.target.value)
      } else if (this.type === 'tel') {
        e.target.value = this.$options.filters.tel(e.target.value)
      }
      console.log('e.target.value', e.target.value)
      this.$emit('input', e.target.value)
      this.$emit('onInput', e)
    },
    onEnter() {
      this.$emit('onEnter')
    },
  },
}
</script>
<style
  scoped
  lang="scss">
.form-input {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  transition: all 0.3s ease-in-out;

  input {
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent !important;
    cursor: inherit !important;
    color: inherit;
    z-index: 1;

    &.disabled {
      cursor: not-allowed !important;
    }
  }

  p.placeholder {
    margin: auto 0;
    padding: 1em 0;
    position: absolute;
    top: 0;
    bottom: 0;
    color: $color-black;
    font-size: 14px;
    z-index: -1;
    transition: top .25s ease-in-out, padding .25s ease-in-out, font-size .25s ease-in-out;

    &.active {
      top: -0.875em;
      font-size: 11px;
      padding: 0px;
      transition: top .25s ease-in-out, padding .25s ease-in-out, font-size .25s ease-in-out;
    }
  }

  p.invalid {
    width: 100%;
    position: absolute;
    left: 0;
    top: calc(100% + 12px);
    color: $color-sub-red;
    font-size: 11px;
    display: none;
  }

  &.active {
    //transition: all 0.3s ease-in-out;
  }

  &.invalid {
    //border-bottom: 1px solid $color-sub-red !important;
    transition: all 0.3s ease-in-out;

    p.invalid {
      display: flex;
      align-items: center;

      img {
        margin-right: 4px;
      }
    }
  }
}
</style>
