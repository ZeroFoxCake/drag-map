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

  <div @click="handleTap" :style="elStyle" :id="elSet.id"></div>
  <div :class="['tools', { 'act': isAct }]">
    <div class="ctrl">
      <div class="i-tool">设置</div>
      <div @click="elDelete" class="i-tool">删除</div>
    </div>
    <div class="size">{{ base.w }} x {{ base.h }}</div>
  </div>

</vue-drag-resize>

</template>

<script>

import createChart from '@/utils/echart'
import { baseModel } from '@/models/orginal'
import chartDic from '@/models/chartDic'

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
      myChart: null
    }
  },
  watch: {
    'elSet.base': {
      deep: true,
      handler: function (newval) {
        const { w: width, h: height } = newval
        this.myChart.resize({
          width,
          height
        })
      }
    },
    'elSet.configs': {
      deep: true,
      handler: function (newval) {
        this.myChart.setOption(newval)
      }
    }
  },
  methods: {
    resize ({ width, height }) {
      const base = Object.assign({}, this.elSet.base, { w: width, h: height })
      this.setChange(this.elSet.id, { base })
    },
    move ({left, top}) {
      const base = Object.assign({}, this.elSet.base, { left, top })
      this.setChange(this.elSet.id, { base })
    },
    handleTap () {
      this.setActID(this.elSet.id)
    },
    // 删除
    elDelete () {
      this.deleteEl(this.elSet.id)
    }
  },
  mounted () {
    const { id, type, configs } = this.elSet
    this.myChart = createChart(id, chartDic[type])
    this.myChart.setOption(configs)
  }
}
</script>

<style lang="less" scoped>

.drag-box {
  z-index: 1;
  &.act {
    z-index: 99 !important;
    background: rgba(0, 0, 0, 0.1);
  }
  .def-chart {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tools {
    position: absolute;
    width: 100%;
    bottom: 0;
    opacity: 1;
    z-index: -1;
    padding: 10px 0;
    display: flex;
    align-items: center;
    .ctrl {
      flex-grow: 1;
      display: flex;
      .i-tool {
        flex-grow: 1;
        text-align: center;
        cursor: pointer;
      }
    }
    .size {
      text-align: center;
      line-height: 30px;
      font-size: 12px;
      color: #F72C5B;
      flex-grow: 1;
    }
    &.act {
      opacity: 1;
      transition-duration: 0.3s;
      transition-property: all;
      transform: translateY(50px);
    }
  }
}

</style>