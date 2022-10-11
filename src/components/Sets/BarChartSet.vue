<template>

  <div class="bar-chart-set">
    <TitleSet></TitleSet>
    <InterfaceSet></InterfaceSet>
  </div>

</template>

<script>

import TitleSet from '../Charts/TitleSet.vue'
import InterfaceSet from '../Charts/InterfaceSet.vue'

export default {
  components: {
    TitleSet,
    InterfaceSet
  }
}

</script>
