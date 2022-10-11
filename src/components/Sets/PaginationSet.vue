<template>

  <div v-if="elSet" class="pagination-set">
    <el-form label-width="90px">
          
      <el-form-item label="分页背景：">
        <el-radio v-model="elSet.configs['background']" :label="true">打开</el-radio>
        <el-radio v-model="elSet.configs['background']" :label="false">关闭</el-radio>
      </el-form-item>

      <el-form-item label="每页条数：">
        <el-input-number
          controls-position="right"
          v-model="elSet.configs['page-size']"
          size="medium"
          :min="1"
          :max="100"
        />
      </el-form-item>

      <el-form-item label="layout：">
        <el-checkbox-group v-model="layouts">
          <el-checkbox label="prev">上一页</el-checkbox>
          <el-checkbox label="pager">分页</el-checkbox>
          <el-checkbox label="next">下一页</el-checkbox>
          <el-checkbox label="jumper">跳转至</el-checkbox>
          <el-checkbox label="total">总数量</el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="关联Table">
        <el-select size="medium" v-model="elSet.configs.relate" placeholder="请选择：">
          <el-option
            v-for="item in tableSelectOptions"
            :key="item"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </el-form-item>
  
    </el-form>
  
    </div>
    
</template>
    
<script>
export default {
  inject: ['getActEl', 'getCache'],
  computed: {
    elSet () {
      return this.getActEl()
    },
    tableSelectOptions () {
      const cache = this.getCache()
      return cache.filter(item => item.type === 'table').map(item => item.id)
    },
    layouts: {
      get () {
        return this.elSet.configs['layout'].split(',').filter(item => item)
      },
      set (val) {
        const sortArr = ['prev', 'pager', 'next', 'total', 'jumper']
        this.elSet.configs['layout'] = sortArr.filter(item => val.includes(item)).join(',')
      }
    }
  }
}
</script>

<style lang="less" scoped>
  
  .pagination-set {
    
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
    }
  
    /deep/ .el-form-item {
      margin-bottom: 5px;
      
    }
  
    /deep/ .el-form-item__content {
      line-height: 40px;
    }

    /deep/ .el-radio__label {
      font-size: 13px;
      color: #b1b1b1;
    }

    .el-checkbox {
      margin-right: 20px;
    }
  }
  
  </style>