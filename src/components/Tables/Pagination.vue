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

    <div v-if="elSet" :style="elStyle" class="inner-box" @click="handleTap">
      <el-pagination
        class="in-pagination"
        :background="elSet.configs['background']"
        :layout="elSet.configs['layout']"
        :hide-on-single-page="elSet.configs['hide-on-single-page']"
        :page-size="relateTable.size"
        :total="relateTable.total"
        :current-page="relateTable.page"
      >
      </el-pagination>
    </div>
  
  </vue-drag-resize>
  
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
    },
    relateTable () {
      if (!this.elSet.configs.relate) return {}
      const { page, size, total } = this.$parent.$refs[this.elSet.configs.relate][0]
      return { page, size, total }
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
    overflow: hidden;
  }
  .in-pagination {
    width: 100%;
    height: 100%;
  }
}

</style>