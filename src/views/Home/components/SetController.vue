<template>

<div :class="['set-controller', { 'show': state }]">

  <div class="space"></div>
  <div class="main-content">
    <div class="set-navs">
      <div
        v-for="(item, x) in navTree"
        :key="x"
        :class="['i-nav', { 'act': navAct === x }]"
        @click="navAct = x"
      >
        {{ item.name }}
      </div>
     
    </div>
    <div class="set-form">
      <CommentSet v-show="navAct === 0"></CommentSet>
      <ExclusiceSet v-show="navAct === 1"></ExclusiceSet>
    </div>
  </div>

</div>

</template>

<script>

import CommentSet from '@/components/CommonSet.vue'
import ExclusiceSet from '@/components/ExclusiveSet.vue'

export default {
  components: {
    CommentSet,
    ExclusiceSet
  },
  data () {
    return { 
      navAct: 0,
      navTree: [{
        name: '通用'
      }, {
        name: '专属'
      }],
      state: true
    }
  },
  
}
</script>

<style lang="less" scoped>

.trans {
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
  will-change: width transform;
}

.set-controller {
  .space {
    float: right;
    width: 0px;
    height: 100vh;
    overflow-y: scroll;
    .trans();
  }
  .main-content {
    width: 300px;
    height: 100vh;
    position: absolute;
    right: 0;
    background: white;
    box-shadow: 0 0 20px rgb(0 0 0 / 20%);
    transform: translateX(100%);
    display: flex;
    flex-direction: column;
    .trans();
    .set-navs {
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
    .set-form {
      flex-grow: 1;
      overflow-y: scroll;
      padding-bottom: 20px;
      margin: 10px;
    }
  }
  &.show {
    .space {
      width: 300px;
    }
    .main-content {
      transform: translateX(0);
    }
  }
}

</style>