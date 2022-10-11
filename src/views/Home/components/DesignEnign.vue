<template>
  
<div class="design-engin">
  <JsonPop ref="jsonPop"></JsonPop>
  <JsPop ref="jsPop"></JsPop>
  <DesignPreview :page="page" ref="designPreview"></DesignPreview>
  
  <div class="ctrils">
    <el-button @click="openPreview" type="primary" size="mini">预览</el-button>
    <el-button @click="openJsonSet" type="primary" size="mini">JSON 配置</el-button>
    <el-button @click="openJsSet" type="primary" size="mini">JS 增强</el-button>
  </div>
  <div :style="inStyle" class="container">
    <template v-for="item in cache">
      <IChart
        v-if="isChart(item.type)"
        :ref="item.id"
        :key="item.id"
        :elSet="item"
      />

      <ITable
        v-if="item.type === 'table'"
        :ref="item.id"
        :key="item.id"
        :elSet="item"
      />

      <Pagination
        v-if="item.type === 'pagination'"
        :ref="item.id"
        :key="item.id"
        :elSet="item"
      />

      <Block 
        v-if="item.type === 'block'"
        :ref="item.id"
        :key="item.id"
        :elSet="item"
      />

    </template>
   
  </div>

</div>

</template>

<script>

import IChart from '@/components/Charts/IChart.vue'
import ITable from '@/components/Tables/ITable.vue'
import Pagination from '@/components/Tables/Pagination.vue'

import JsonPop from '@/components/Scripts/JsonPop.vue'
import JsPop from '@/components/Scripts/JsPop.vue'
import DesignPreview from '@/components/Preview.vue'
import Block from '@/components/Layout/Block.vue'

export default {
  components: {
    IChart,
    ITable,
    Pagination,
    JsonPop,
    JsPop,
    DesignPreview,
    Block
  },
  props: {
    page: {
      type: Object,
      default: () => ({})
    },
    cache: {
      type: Array,
      default: () => []
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
    tapHandle (id) {
      this.$emit('act-change', id)
    },
    isChart (type) {
      return ['bar', 'line', 'pie'].includes(type)
    },
    openJsonSet () {
      this.$refs.jsonPop.open(this.cache)
    },
    openJsSet () {
      this.$refs.jsPop.open()
    },
    openPreview () {
      this.$refs.designPreview.open(this.cache)
    }
  }
}
</script>

<style lang="less" scoped>

.design-engin {
  position: relative;
  height: 100vh;
  overflow-y: scroll;
  .ctrils {
    text-align: right;
    font-size: 14px;
    margin: 10px 20px;
  }
  .container {
    position: relative;
    margin: 10px auto;
    border: 1px dashed #8e8e8e;
  }
}

</style>