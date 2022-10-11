<template>
  
  <vue-drag-resize
    :class="['drag-box', { 'act': isAct }]"
    :parentLimitation="true"
    :x="base.left"
    :y="base.top"
    :w="base.w"
    :h="base.h"
    v-on:resizing="resize"
    v-on:dragging="move"
  >

  <div v-if="elSet" class="inner-box" @click="handleTap">
    <el-table :data="lists" class="in-table">
      <el-table-column
        v-for="(item, inx) in elSet.configs.cols"
        :key="inx"
        :align="elSet.configs.style.align"
        :prop="item.key"
        :label="item.name">
      </el-table-column>
    </el-table>
  </div>
  
  </vue-drag-resize>
  
</template>
  
<script>

import { baseModel } from '@/models/orginal'
import * as apis from '@/api'

export default {
  inject: ['getActID', 'setActID', 'setChange', 'deleteEl'],
  props: {
    elSet: {
      type: Object,
      default: () => ({})
    }
  },
  watch: {
    'elSet.configs.apiFnc': function (val) {
      this.getList()
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
      total: 1000,
      size: 10,
      page: 1,
      lists: []
    }
  },
  methods: {
    handleTap () {
      this.setActID(this.elSet.id)
    },
    resize ({ width, height }) {
      const base = Object.assign({}, this.elSet.base, { w: width, h: height })
      this.setChange(this.elSet.id, { base })
    },
    move ({left, top}) {
      const base = Object.assign({}, this.elSet.base, { left, top })
      this.setChange(this.elSet.id, { base })
    },
    async getList () {
      const fncKey = this.elSet.configs.apiFnc
      if (!fncKey) return
      const res = await apis[fncKey]()
      this.lists = res
    }
  }
}
</script>

<style lang="less" scoped>

.drag-box {
  z-index: 1;
  &.act {
    z-index: 1000 !important;
    background: rgba(0, 0, 0, 0.1);
  }
  .inner-box {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .in-table {
    width: 100%;
    height: 100%;
  }
}

</style>