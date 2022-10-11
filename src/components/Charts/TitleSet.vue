<template>

<div v-if="configs" class="title-set">

  <div class="form-title">标题设置</div>

    <el-form label-width="90px">

     <el-form-item label="标题名称：">
      <el-input v-model="configs.text" placeholder="请输入标题"></el-input>
     </el-form-item>

     <el-form-item label="横向布局：">
      <el-select v-model="configs.left" placeholder="请选择">
        <el-option
          v-for="{ name, key } in rowOptions"
          :key="key"
          :label="name"
          :value="key">
        </el-option>
      </el-select>
     </el-form-item>

     <el-form-item label="纵向布局：">
      <el-select v-model="configs.top" placeholder="请选择">
        <el-option
          v-for="{ name, key } in colOptions"
          :key="key"
          :label="name"
          :value="key">
        </el-option>
      </el-select>
     </el-form-item>

     <el-form-item label="副标题：">
      <el-input v-model="configs.subtext" placeholder="请输入"></el-input>
     </el-form-item>

     <el-form-item label="标题颜色：">
      <el-color-picker v-model="configs.textStyle.color" show-alpha></el-color-picker>
     </el-form-item>

     <el-form-item label="字体大小：">
      <el-input-number
        controls-position="right"
        v-model="configs.textStyle.fontSize"
        size="medium"
      />
     </el-form-item>

     <el-form-item label="字体样式：">
      <el-select v-model="configs.textStyle.fontStyle" placeholder="请选择：">
        <el-option
          v-for="{ name, key } in styleOptions"
          :key="key"
          :label="name"
          :value="key">
        </el-option>
      </el-select>
     </el-form-item>

     <el-form-item label="字体粗细：">
      <el-select v-model="configs.textStyle.fontWeight" placeholder="请选择：">
        <el-option
          v-for="{ name, key } in weightOptions"
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

import { titleReflex } from '@/models/configReflex'
import selectMap from '@/enums/select'

import { left, top, fontStyle, fontWeight } from '@/enums/select'

export default {
  inject: ['getActEl'],
  computed: {
    configs () {
      return this.getActEl()?.configs?.title
    }
  },
  data () {
    return {
      elMap: titleReflex,
      selectMap: selectMap,
      rowOptions: left, // 水平布局
      colOptions: top, // 垂直布局
      styleOptions: fontStyle,
      weightOptions: fontWeight
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