<template>

  <div v-if="elSet" class="title-set">
  

    <el-form label-width="80px">

      <div class="form-title">
        <span>表头配置</span>
        <el-button @click="addCol(elSet.id)" icon="el-icon-plus" type="primary" size="mini"></el-button>
      </div>
      
      <div v-for="(col, inx) in elSet.configs.cols" :key="inx" class="i-col">
        <el-form-item :label="`列名${inx}: `">
          <el-input v-model="col.name"></el-input>
          <span @click="deleteCol(elSet.id, inx)" class="i-btn">删除</span>
        </el-form-item>
        <el-form-item  label="数据键: ">
          <el-input v-model="col.key"></el-input>
        </el-form-item>
      </div>

      <div class="form-title">样式配置</div>
      <el-form-item label="对齐：">
        <el-select v-model="elSet.configs.style.align" placeholder="请选择">
          <el-option
            v-for="{ name, key } in alignOptions"
            :key="key"
            :label="name"
            :value="key">
          </el-option>
        </el-select>
      </el-form-item>

      <div class="form-title">数据配置</div>
      <el-form-item label="接口配置：">
        <el-select
          v-model="elSet.configs.apiFnc"
          placeholder="请选择"
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
  import { left } from '@/enums/select'
  import * as apis from '@/api'
  export default {
    inject: ['getActEl', 'addCol', 'deleteCol'],
    computed: {
      elSet () {
        return this.getActEl() || {}
      }
    },
    data () {
      return {
        alignOptions: left,
        fncKey: null,
        apiArrs: apis.getApiMaps() // 可选接口列表
      }
    }
  }
  </script>
  
  <style lang="less" scoped>
  
  .title-set {
    
    .form-title {
      color: #409EFF;
      font-weight: bold;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .i-col {
      margin-top: 20px;
      .i-btn {
        font-size: 12px;
        margin-left: 9px;
        color: #F72C5B;
        cursor: pointer;
      }
    }
  
    .el-input {
      width: 160px;
      font-size: 13px;
    }
    .el-input-number {
      width: 160px;
      font-size: 13px;
    }
    .el-select {
      width: 160px;
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