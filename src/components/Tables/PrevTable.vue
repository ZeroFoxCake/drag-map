<!-- table 预览 -->

<template>

<div v-if="elSet" :style="elStyle" class="view-table">
  <el-table :data="lists" v-loading="loading" class="in-table">
    <el-table-column
      v-for="(item, inx) in elSet.configs.cols"
      :key="inx"
      :align="elSet.configs.style.align"
      :prop="item.key"
      :label="item.name">
    </el-table-column>
  </el-table>
</div>

</template>

<script>
import * as apis from '@/api'
export default {
  props: {
    elSet: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      loading: false,
      params: {
        currentPage: 1,
        size: 10,
        total: 100
      },
      lists: []
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
  methods: {
    async getList (x) {
      if (!this.elSet.configs?.apiFnc) return
      if (x) this.params.currentPage = x
      this.loading = true
      const res = await apis[this.elSet.configs.apiFnc](this.params)
      this.lists = res
      this.loading = false
    }
  },
  mounted () {
    this.getList()
  }
}
</script>

<style lang="less" scoped>

.view-table {
  position: absolute;
  .in-table {
    width: 100%;
    height: 100%;
  }
}

</style>