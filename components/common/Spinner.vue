<template>
  <div :class="{'large':size==='lg'}" class="spinner">
    <svg :class="{'x-large':size==='xl', 'large':size==='lg', 'small':size==='sm', 'medium':size==='md' , 'x-small':size==='xs'}" class="spinner-img" width="50" height="50" viewBox="0 0 50 50">
      <circle
        class="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke-width="5" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Spinner',
  props: {
    size: {
      type: String,
      default: 'sm',
    },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped lang="scss">
.spinner {
  width: 100%;
  height: 100%;
  display: flex;
  display: -ms-flexbox;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &.large {
    margin-top: -56px;
  }

  .spinner-img {
    position: relative;
    animation: rotate 2s linear infinite;
    display: flex;
    display: -ms-flexbox;
    align-items: center;

    &.x-large {
      width: 7rem;
      height: 7rem;
    }
    &.large {
      width: 5rem;
      height: 5rem;
    }
    &.medium {
      width: 3rem;
      height: 3rem;
    }
    &.small {
      width: 1.6rem;
      height: 1.6rem;
    }
    &.x-small {
      width: 1rem;
      height: 1rem;
    }

    .path {
      stroke: $color-primary;
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
