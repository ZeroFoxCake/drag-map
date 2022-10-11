<template>

<div v-if="act" :class="['design-preview', { 'act': act }]">
  <i @click="act = false" class="el-icon-close"></i>

  <div :style="inStyle" class="container">
    <template v-for="item in cache">
      <PrevChart
        v-if="isChart(item.type)"
        :ref="item.viewId"
        :key="item.viewId"
        :elSet="item"
      />

      <PrevTable
        v-if="item.type === 'table'"
        :ref="item.viewId"
        :key="item.viewId"
        :elSet="item"
      />

      <PrevPagination
        v-if="item.type === 'pagination'"
        :ref="item.viewId"
        :key="item.viewId"
        :elSet="item"
      />

    </template>
   
  </div>

</div>

</template>

<script>

import PrevChart from '@/components/Charts/PrevChart.vue'
import PrevTable from '@/components/Tables/PrevTable.vue'
import PrevPagination from '@/components/Tables/PrevPagination.vue'

export default {
  components: {
    PrevChart,
    PrevTable,
    PrevPagination
  },
  props: {
    page: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      act: false,
      cache: []
    }
  },
  computed: {
    inStyle () {
      return {
        width: `${this.page.w}px`,
        height: `${this.page.h}px`
      }
    }
  },
  methods: {
    isChart (type) {
      return ['bar', 'line', 'pie'].includes(type)
    },
    open (cache) {
      this.cache = cache
      this.act = true
    }
  }
}
</script>

<style lang="less" scoped>

.design-preview {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: white;
  z-index: 9999;
  .container {
    margin: 0 auto;
    position: relative;
  }
  .el-icon-close {
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 24px;
    &:hover {
      color: salmon;
      cursor: pointer;
    }
  }
}

</style>