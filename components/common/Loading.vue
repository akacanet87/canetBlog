<template>
  <div
    v-if="isLoading"
    class="loading-page">
    <Spinner size="md" />
  </div>
</template>

<script>
import Spinner from './Spinner'

export default {
  components: { Spinner },
  data() {
    return {
      loading: false,
      isLoading: false,
    }
  },
  watch: {
    loading(value) {
      if (value) {
        this.isLoading = true
      } else {
        setTimeout(() => {
          this.isLoading = false
        })
      }
    },
  },
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
    fail() {
      this.loading = false
    },
  },
}
</script>

<style
  scoped
  lang="scss">
.loading-page {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  /*animation: nuxtLoadingIn 2.5s ease;*/
  /*-webkit-animation: nuxtLoadingIn 2.5s ease;*/
  animation: nuxtLoadingIn 1.5s ease;
  -webkit-animation: nuxtLoadingIn 1.5s ease;
  animation-fill-mode: forwards;
  overflow: hidden;
  background-color: rgba(256, 256, 256, 100);
  z-index: 9999;
}

@keyframes nuxtLoadingIn {
  0% {
    visibility: hidden;
    opacity: 0;
    /*background-color: rgba(0,0,0,0);*/
  }
  100% {
    visibility: visible;
    opacity: 1;
    /*background-color: rgba(0,0,0,0.2);*/
  }
}

@-webkit-keyframes nuxtLoadingIn {
  0% {
    visibility: hidden;
    opacity: 0;
    /*background-color: rgba(0,0,0,0);*/
  }
  100% {
    visibility: visible;
    opacity: 1;
    /*background-color: rgba(0,0,0,0.2);*/
  }
}
</style>
