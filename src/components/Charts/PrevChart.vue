<!-- 预览模式 -->
<template>

<div class="view-chart" :style="elStyle" :id="elSet.viewId"></div>

</template>

<script>
import createChart from '@/utils/echart'
import chartDic from '@/models/chartDic'

export default {
  props: {
    elSet: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    base () {
      return this.elSet.base
    },
    elStyle () {
      const { w, h, left, top } = this.base
      return {
        width: `${w}px`,
        height: `${h}px`,
        left: `${left}px`,
        top: `${top}px`,
      }
    }
  },
  data () {
    return {
      myChart: null
    }
  },
  mounted () {
    const { viewId, type, configs } = this.elSet
    this.myChart = createChart(viewId, chartDic[type])
    this.myChart.setOption(configs)
  }
}
</script>

<style lang="less" scoped>

.view-chart {
  position: absolute;
}

</style>