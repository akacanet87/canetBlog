<template>
  <client-only>
    <div id="googleMap" class="google-map">
      <gmap-map :center="mapCenter" :map-type-id="mapTypeId" :zoom="12">
        <gmap-marker
          v-for="(marker, index) in markerList"
          v-if="markerList && markerList.length > 0"
          :key="index"
          :position="{ lat: marker.lat, lng: marker.lng}"
          @click="onClickMarker(marker)">
          <gmap-info-window :opened="currentMarker.lat===marker.lat&&currentMarker.lng===marker.lng" @closeclick="currentMarker={}">
            <div class="location-tooltip">
              <p v-html="'aa'"></p>
            </div>
          </gmap-info-window>
        </gmap-marker>
      </gmap-map>
    </div>
  </client-only>
</template>

<script>
export default {
  name: 'GoogleMap',
  props: {
    markerList: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      mapTypeId: 'terrain',
      mapCenter: {
        lat: -3.350235,
        lng: 111.995865,
      },
      currentMarker: {},
    }
  },
  methods: {
    initMap() {
      let totalLat = 0
      let totalLng = 0
      let totalMakers = this.markerList.length
      if (totalMakers > 0) {
        this.markerList.forEach((marker) => {
          totalLat += marker.lat
          totalLng += marker.lng
        })
        this.setCenter({
          lat: totalLat / totalMakers,
          lng: totalLng / totalMakers,
        })
      } else {
        this.setCenter(this.mapCenter)
      }
    },
    onClickMarker(marker) {
      console.log('onClickMarker', marker)
      this.currentMarker = marker
      this.setCenter(marker)
    },
    setCenter(marker) {
      this.mapCenter = {
        lat: marker.lat,
        lng: marker.lng,
      }
    },
  },
}
</script>
<style
  scoped
  lang="scss">
.google-map {
  width: 100%;
  height: 100%;

  .vue-map-container {
    width: 100%;
    height: 100%;

    .vue-map {
      height: 100%;
    }
  }

  .location-tooltip {

    p {
    }
  }
}
</style>
