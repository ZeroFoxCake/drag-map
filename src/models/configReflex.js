
// 画布映射
export const pageReflex = {
  w: { name: '画布宽', type: 'number' },
  h: { name: '画布高', type: 'number' }
}

// 组件映射
export const baseReflex = {
  w: { name: '组件宽', type: 'number' },
  h: { name: '组件高', type: 'number' },
  left: { name: '左边距', type: 'number' },
  top: { name: '上边距', type: 'number' }
}

// echart 映射
const commonReflex = {
  title: {
    text: { name: '标题名称', type: 'input',  holder: '请输入标题'},
    left: { name: '横向布局', type: 'select', key: 'col_layout' },
    top: { name: '纵向布局', type: 'select', key: 'row_layout' },
    subtext: { name: '副标题', type: 'input', holder: '请输入副标题' },

    textStyle_color: { name: '标题颜色', type: 'color' },
    textStyle_fontSize: { name: '字体大小', type: 'number' },
    textStyle_fontWeight: { name: '字体粗细', type: 'number' }
  }
}
export const barReflex = {
  ...commonReflex,
  xAxis: {
    type: { name: 'x轴类型', type: 'select', key: 'xAxis_type' },
    data: { name: 'x轴数据', type: 'input' }
  }
}

export const titleReflex = {
  text: { name: '标题名称', type: 'input',  holder: '请输入标题'},
  left: { name: '横向布局', type: 'select', key: 'col_layout' },
  top: { name: '纵向布局', type: 'select', key: 'row_layout' },
  subtext: { name: '副标题', type: 'input', holder: '请输入副标题' },

  textStyle_color: { name: '标题颜色', type: 'color' },
  textStyle_fontSize: { name: '字体大小', type: 'number' },
  textStyle_fontWeight: { name: '字体粗细', type: 'number' }
}
