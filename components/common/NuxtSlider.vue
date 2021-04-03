<template>
  <div class="nuxt-slider">
    <client-only>
      <VueSlick
        v-if="options"
        v-cloak
        ref="slickSlide"
        class="slider"
        :options="options"
        @afterChange="handleAfterChange"
        @beforeChange="handleBeforeChange"
        @breakpoint="handleBreakpoint"
        @destroy="handleDestroy"
        @edge="handleEdge"
        @init="handleInit"
        @reInit="handleReInit"
        @setPosition="handleSetPosition"
        @swipe="handleSwipe"
        @lazyLoaded="handleLazyLoaded"
        @lazyLoadError="handleLazyLoadError">
        <slot />
      </VueSlick>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'NuxtSlider',
  // components: {
  //   VueSlick: () => import('vue-slick'),
  // },
  props: {
    options: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      isDragging: false,
      slickOptions: {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        draggable: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }
  },
  // watch: {
  //   '$route.fullPath': {
  //     handler() {
  //       if (this.$refs.slickSlide) {
  //         this.$refs.slickSlide.destroy()
  //         this.$nextTick(() => {
  //           this.$refs.slickSlide.create()
  //         })
  //       }
  //     },
  //     deep: true,
  //     immediate: true,
  //   },
  // },
  methods: {
    setDragging(isDragging) {
      this.isDragging = isDragging
      console.log('isDragging', isDragging)
    },
    handleAfterChange(event, slick, currentSlide) {
      this.setDragging(false)
      console.log('handleSetPosition', currentSlide)
      this.$emit('afterChange', {
        event,
        slick,
        currentSlide,
      })
    },
    handleBeforeChange(event, slick, currentSlide, nextSlide) {
      this.setDragging(true)
      this.$emit('beforeChange', {
        event,
        slick,
        currentSlide,
        nextSlide,
      })
    },
    handleBreakpoint(event, slick, breakpoint) {
      this.$emit('breakpoint', {
        event,
        slick,
        breakpoint,
      })
    },
    handleDestroy(event, slick) {
      this.$emit('destroy', {
        event,
        slick,
      })
    },
    handleEdge(event, slick, direction) {
      this.$emit('edge', {
        event,
        slick,
        direction,
      })
    },
    handleInit(event, slick) {
      this.$emit('init', {
        event,
        slick,
      })
    },
    handleReInit(event, slick) {
      this.$emit('reInit', {
        event,
        slick,
      })
    },
    handleSetPosition(event, slick) {
      this.$emit('setPosition', {
        event,
        slick,
      })
    },
    handleSwipe(event, slick, direction) {
      this.$emit('swipe', {
        event,
        slick,
        direction,
      })
    },
    handleLazyLoaded(event, slick, image, imageSource) {
      this.$emit('lazyLoaded', {
        event,
        slick,
        image,
        imageSource,
      })
    },
    handleLazyLoadError(event, slick, image, imageSource) {
      this.$emit('lazyLoadError', {
        event,
        slick,
        image,
        imageSource,
      })
    },
  },
}
</script>
<style
  scoped
  lang="scss">
.nuxt-slider {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  .slick-list {
    width: calc(100% + 10px);
    height: 100%;
    margin-left: -5px;

    .slick-track {
      min-width: 100%;
      height: 100%;
      display: flex;

      .slick-slide {
        display: block !important;
      }
    }
  }

  .slick-next,
  .slick-prev {

    &:before {
      content: "" !important;
    }
  }

  .slick-arrow {
    transform: none;
    background-repeat: no-repeat !important;

    &:hover {
      background-repeat: no-repeat !important;
    }

    &.slick-disabled {
      display: none !important;
    }
  }

  .slick-dots {

  }
}
</style>
