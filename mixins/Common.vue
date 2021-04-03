<script>
export default {
  name: 'Common',
  data() {
    return {}
  },
  computed: {
    weather() {
      return this.$options.filters.weather(this.$store.state.weather.weatherIcon)
    },
  },
  mounted() {
    document.body.className = this.weather
  },
}
</script>
