<template>

<div class="common-set">

  <PageSet></PageSet>

  <template v-if="actEl">
    <BaseSet></BaseSet>
  </template>
  
</div>

</template>

<script>

import PageSet from './Sets/PageSet.vue'
import BaseSet from './Sets/BaseSet.vue'

export default {
  inject: ['getActEl'],
  computed: {
    actEl () {
      return this.getActEl()
    }
  },
  components: {
    PageSet,
    BaseSet
  }
}
</script>
