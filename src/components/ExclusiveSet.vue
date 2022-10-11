<template>

<div class="exclusive-set">
  <BarChartSet v-if="chartType === 'bar'"></BarChartSet>
  <LineChartSet v-if="chartType === 'line'"></LineChartSet>
  <PieChartSet v-if="chartType === 'pie'"></PieChartSet>
  <TableSet v-if="chartType === 'table'"></TableSet>
  <Pagination v-if="chartType === 'pagination'"></Pagination>
</div>

</template>

<script>

import BarChartSet from './Sets/BarChartSet.vue'
import LineChartSet from './Sets/LineChartSet.vue'
import PieChartSet from './Sets/PieChartSet.vue'
import TableSet from  './Sets/TableSet.vue'
import Pagination from './Sets/PaginationSet.vue'

export default {
  inject: ['getActEl'],
  computed: {
    chartType () {
      return this.getActEl()?.type
    }
  },
  components: {
    BarChartSet,
    LineChartSet,
    PieChartSet,
    TableSet,
    Pagination
  }
}
</script>
