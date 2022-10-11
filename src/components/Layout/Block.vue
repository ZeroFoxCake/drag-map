<template>

<div :style="elStyle" class="i-block"></div>

</template>

<script>
import { baseModel } from '@/models/orginal'

export default {
  inject: ['getActID', 'setActID', 'setChange', 'deleteEl'],
  props: {
    elSet: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    isAct () {
      return this.getActID() === this.elSet.id
    },
    base () {
      return this.elSet.base || new baseModel()
    },
    elStyle () {
      return {
        width: `${this.base.w}px`,
        height: `${this.base.h}px`
      }
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>

.i-block {
  background: white;
  position: relative;
}

</style>