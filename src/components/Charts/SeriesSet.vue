<template>

  <div v-if="configs" class="title-set">
  
    <div class="form-title">数据配置</div>
  
      <el-form label-width="90px">
  
        <el-form-item label="接口配置：">
          <el-select v-model="configs.left" placeholder="请选择">
            <el-option
              v-for="{ name, key } in interFaceList"
              :key="key"
              :label="name"
              :value="key">
            </el-option>
          </el-select>
        </el-form-item>

      </el-form>
  
    </div>
  
  </template>
  
  <script>

  export default {
    inject: ['getActEl'],
    computed: {
      configs () {
        return this.getActEl()?.configs?.series
      }
    },
    data () {
      return {
        interFaceList: []
      }
    },
    methods: {
      // 获取可以提供数据的接口
      getInterfaces () {
        this.interFaceList = []
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