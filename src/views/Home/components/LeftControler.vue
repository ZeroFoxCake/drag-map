<template>

<div class="home-left-controler">

  <div class="controler-navs">
    <div
      v-for="(item, x) in navTree"
      :key="x"
      :class="['i-nav', { 'act': navAct === x }]"
      @click="navAct = x"
    >
      {{ item.name }}
    </div>
  </div>
  <div class="rect-list">
    <div 
      @click="addEl(item.key)" 
      v-for="(item, x) in navTree[navAct].meuns"
      :key="x"
      class="i-rect"
    >
      {{ item.name }}
    </div>
  </div>

</div>

</template>

<script>

import { reportMenus, panelMenus } from '@/models/menu'

export default {
  data () {
    return {
      navTree: [{
        name: '报表',
        meuns: reportMenus
      }, {
        name: '看板',
        meuns: panelMenus
      }],
      navAct: 0
    }
  },
  methods: {
    addEl (key) {
      this.$emit('add-el', key)
    }
  }
}
</script>

<style lang="less" scoped>

.home-left-controler {
  width: 200px;
  height: 100vh;
  float: left;
  background: white;
  box-shadow: 0 0 20px rgb(0 0 0 / 20%);
  color: rgb(17, 17, 17);

  .controler-navs {
    display: flex;
    border-bottom: 1px solid rgba(225, 229, 242, 0.5);
    .i-nav {
      height: 42px;
      line-height: 42px;
      text-align: center;
      flex-grow: 1;
      cursor: pointer;
      &.act {
        color: #F72C5B;
      }
    }
  }
  .rect-list {
    padding-top: 10px;
    .i-rect {
      height: 42px;
      line-height: 42px;
      text-align: center;
      cursor: pointer;
      &:hover {
        color: #337ab7;
      }
    }
  }
}

</style>