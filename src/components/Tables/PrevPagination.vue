<template>

<div v-if="elSet" :style="elStyle" class="prev-pagination">
  <el-pagination
    class="in-pagination"
    :background="elSet.configs['background']"
    :layout="elSet.configs['layout']"
    :hide-on-single-page="elSet.configs['hide-on-single-page']"
    :page-size="relateTable.size"
    :total="relateTable.total"
    :current-page="relateTable.currentPage"
    @current-change="currentChange"
  >
  </el-pagination>
</div>

</template>

<script>
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
      relateTable: {}
    }
  },
  methods: {
    relateSet () {
      if (!this.elSet.configs.relate) return
      const viewKey = `${this.elSet.configs.relate}_VIEW`
      const { params: { currentPage, size, total }, getList } = this.$parent.$refs[viewKey][0]
      this.relateTable = { currentPage, size, total, getList }
    },
    currentChange (x) {
      this.relateTable.getList(x)
    }
  },
  mounted () {
    this.relateSet()
  }
}
</script>

<style lang="less" scoped>

.prev-pagination {
  position: absolute;
  overflow: scroll;
}

</style>