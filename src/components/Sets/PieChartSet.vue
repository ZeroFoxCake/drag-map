<template>

  <div class="pie-chart-set">
    <TitleSet></TitleSet>
    <SeriesSet></SeriesSet>
  </div>

</template>

<script>

import TitleSet from '../Charts/TitleSet.vue'
import SeriesSet from '../Charts/SeriesSet.vue'

export default {
  components: {
    TitleSet,
    SeriesSet
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>