<template>
  <button :type="type" :class="{'loading': loading, 'disabled': disabled}" :disabled="disabled || loading" class="button">
    {{ `${loading ? '' : value}` }}
    <svg v-if="loading" class="spinner" width="25" height="25" viewBox="0 0 50 50">
      <circle
        :stroke="color"
        class="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke-width="5" />
    </svg>
    <slot v-else />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    strokeColor: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      color: 'white',
    }
  },
  watch: {
    loading(value) {
      console.log('Button loading', value)
    },
  },
  created() {
    this.color = this.strokeColor === '' ? 'white' : this.strokeColor
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
button {
  width: 72px;
  height: 32px;
  border-radius: 2px;

  &.disabled {
    cursor: not-allowed;
    background-color: $color-primary;
  }

  &.primary {
    background-color: $color-primary;
    color: $color-white;

    .path {
      stroke: $color-white;
    }

    &:hover {
      opacity: 0.8;
    }
  }

  &.white {
    border: 1px solid $color-primary;
    background-color: $color-white;
    color: $color-primary;

    .path {
      stroke: $color-primary;
    }

    &:hover {
      background-color: $color-primary;
    }
  }

  &.gray, &.grey {
    background-color: $color-primary;
    color: $color-primary;

    .path {
      stroke: $color-primary;
    }

    &:hover {
      opacity: 0.8;
    }
  }

  &.basic {
    background-color: $color-white;
    border: 1px solid $color-primary;
    color: $color-primary;

    .path {
      stroke: $color-primary;
    }

    &:hover {
      opacity: 0.8;
    }
  }

  &.black {
    background-color: $color-primary;
    color: $color-white;

    .path {
      stroke: $color-white;
    }

    &:hover {
      opacity: 0.8;
    }
  }
}

.loading {
  text-align: center;

  .spinner {
    position: relative;
    animation: rotate 2s linear infinite;
    display: flex;
    display: -ms-flexbox;
    margin: auto;

    .path {
      stroke-linecap: round;
      animation: dash 1.5s ease-in-out infinite;
    }
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
}
</style>
