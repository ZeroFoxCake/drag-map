<template>

  <div class="page-set">
  
    <div class="form-title">页面设置</div>

    <el-form label-width="80px">
          
      <el-form-item
        v-for="(val, key, inx) in configs"
        :key="key + inx"
        class="item-line"
        :label="`${elMap[key].name}：`"
      >
      
        <!-- 数字输入型 -->
        <el-input-number
          controls-position="right"
          v-if="elMap[key].type === 'number'"
          v-model="configs[key]"
          size="medium"
        />
        
      </el-form-item>
  
    </el-form>
  
  </div>
  
</template>
    
<script>

import { pageReflex } from '@/models/configReflex'

export default {
  inject: ['getPage'],
  computed: {
    configs () {
      return this.getPage()
    }
  },
  data () {
    return {
      elMap: pageReflex
    }
  }
}
</script>

<style lang="less" scoped>
  
  .page-set {
    .form-title {
      color: #409EFF;
      font-weight: bold;
      line-height: 45px;
    }
  
    .el-input {
      width: 180px;
    }
    .el-input-number {
      width: 180px;
    }
    .el-select {
      width: 180px;
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