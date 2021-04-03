<template>
  <client-only>
    <DatePicker
      :tabindex="0"
      :value="value"
      :language="language"
      :required="required"
      :disabled="disabled"
      :disabled-dates="disabledDates || {}"
      :open-date="value ? new Date(value) : new Date()"
      :class="{ focus: isFocused}"
      :placeholder="placeholder"
      :format="format"
      class="calendarpicker"
      calendar-class="calendar-box"
      wrapper-class="wrapper-box"
      @selected="onSelected"
      @focusin="isFocused=true" />
  </client-only>
</template>

<script>
import { ko, en, ja, zh } from 'vuejs-datepicker/dist/locale'

export default {
  name: 'CalendarPicker',
  props: {
    value: {
      type: String,
      default: '',
    },
    format: {
      type: String,
      default: 'yyyy-MM-dd',
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    disabledDates: {
      type: Object,
      default: null,
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isFocused: false,
    }
  },
  computed: {
    language() {
      const locale = 'ko'
      return ko
    },
  },
  methods: {
    onSelected(date) {
      console.log('onSelected', date)
      this.$emit('input', this.$dayjs(date, 'YYYY-MM-DDTHH:mm:ss.SSSSZ').format('YYYY-MM-DD'))
    },
  },
}
</script>
<style
  scoped
  lang="scss">
.calendarpicker {
  width: 100%;
  height: 100%;

  &.focus {
    border: 1px solid $color-primary;
  }
}
</style>
