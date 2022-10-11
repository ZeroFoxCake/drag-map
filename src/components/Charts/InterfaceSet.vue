<template>

  <div v-if="configs" class="title-set">
  
    <div class="form-title">接口配置</div>
  
      <el-form label-width="90px">
  
        <el-form-item label="接口配置：">
          <el-select
            v-model="fncKey"
            placeholder="请选择"
            @change="apiChange"
          >
            <el-option
              v-for="{ dis, fns } in apiArrs"
              :key="fns"
              :label="dis"
              :value="fns">
            </el-option>
          </el-select>
        </el-form-item>

      </el-form>
  
    </div>
  
  </template>
  
  <script>
  import * as apis from '@/api/index'

  export default {
    inject: ['getActEl', 'setChange'],
    computed: {
      configs () {
        return this.getActEl()?.configs?.xAxis
      }
    },
    data () {
      return {
        apiArrs: apis.getApiMaps(),
        fncKey: null
      }
    },
    methods: {
      // 获取可以提供数据的接口
      getInterfaces () {
        this.interFaceList = []
      },

      async apiChange () {
        const res = await apis[this.fncKey]()
        const nowEl = this.getActEl()

        nowEl.configs.xAxis.data = res.map(item => item.name)
        nowEl.configs.series[0].data = res.map(item => item.value)

        this.setChange(nowEl.id, JSON.parse(JSON.stringify(nowEl.configs)))
      }
    }
  }
  </script>
  
  <style lang="less" scoped>
  
  .title-set {
    
    .form-title {
      color: #409EFF;
      font-weight: bold;
      line-height: 45px;
    }
  
    .el-input {
      width: 180px;
      font-size: 13px;
    }
    .el-input-number {
      width: 180px;
      font-size: 13px;
    }
    .el-select {
      width: 180px;
      font-size: 13px;
    }
  
    /deep/ .el-form-item__label {
      font-size: 13px;
      color: #b1b1b1;
    }
  
    /deep/ .el-form-item {
      margin-bottom: 5px;
    }
  
    /deep/ .el-form-item__content {
      line-height: 20px;
    }
  }
  
  </style>