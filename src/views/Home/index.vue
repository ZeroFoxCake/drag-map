<template>

<div class="home">
  <left-controler @add-el="addEl" />

  <set-controller />

  <design-enign
    v-bind="{ page, cache }" 
  />

</div>

</template>

<script>

import LeftControler from './components/LeftControler.vue'
import DesignEnign from './components/DesignEnign.vue'
import SetController from './components/SetController.vue'

import { pageModel, baseModel, chartMap } from '@/models/orginal'

export default {
  name: 'home',
  components: {
    LeftControler,
    DesignEnign,
    SetController
  },
  provide () {
    return {
      getActEl: () => {
        return this.cache.find(item => item.id === this.actID)
      },
      getActID: () => {
        return this.actID
      },
      setActID: id => {
        this.actID = id
      },
      getPage: () => {
        return this.page
      },
      setChange: (id, sets) => {
        const inx = this.cache.findIndex(item  => item.id === id)
        const newEl = Object.assign({}, this.cache[inx], sets)
        this.cache.splice(inx, 1, newEl)
      },
      // 删除元素
      deleteEl: (id) => {
        const inx = this.cache.findIndex(item => item.id === id)
        this.cache.splice(inx, 1)
      },
      // 添加 table col
      addCol: (id) => {
        const inx = this.cache.findIndex(item  => item.id === id)
        const newEl = JSON.parse(JSON.stringify(this.cache[inx]))
        newEl.configs.cols.push({ name: '', key: '' })
        this.cache.splice(inx, 1, newEl)
      },
      // 删除 tabel col
      deleteCol: (id, x) => {
        const inx = this.cache.findIndex(item  => item.id === id)
        this.cache[inx].configs.cols.splice(x, 1)
      },
      // 提供 cache 数据
      getCache: () => {
        return this.cache
      },
      // json 形式设置
      setCache: (val) => {
        this.cache = val
      }
    }
  },
  data () {
    return {

      idCount: 0, // 布局元素计数，作自增 ID 用

      page: pageModel(),
      cache: [], // 布局元素缓存
      cacheMap: {}, // cache 的同步缓存 map

      actID: ''

    }
  },
  methods: {

    // 添加布局元素
    addEl (type) {
      if (!type) return
      this.idCount++
      this.cache.unshift({
        id: `CHARTID_${this.idCount}`, type,
        viewId: `CHARTID_${this.idCount}_VIEW`,
        base: baseModel(type),
        configs: chartMap[type]()
      })
      this.cacheMap[this.cache[0].id] = this.cache[0]
    },

    actChange () {

    }

  },
  mounted () {
    
  }
}
</script>

<style lang="less" scoped>

.home {
  overflow: hidden;
  position: relative;
}

</style>