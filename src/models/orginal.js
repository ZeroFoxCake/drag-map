// 基础数据模型

export function pageModel () {
  return {
    w: 900,
    h: 600
  }
}

export function baseModel (type) {

  const baseMap = {
    table: { w: 450, h: 300 },
    pagination: { w: 450, h: 60 }
  }

  return Object.assign({
    w: 200,
    h: 200,
    left: 0,
    top: 0
  }, baseMap[type])
}

// echart 图表元数据模型

export function titleSet () {
  return {
    show: true,
    text: '',
    subtext: '',
    left: '',
    top: '',
    sublink: '',
    textStyle: {
      color: '#333',
      fontStyle: '',
      fontWeight: '',
      fontSize: 18
    }
  }
}

function barSet () {
  return {
    title: titleSet(),
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }]
  }
}

function lineSet () {
  return {
    title: titleSet(),
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'line'
    }]
  }
}

function pieSet () {
  return {
    title: titleSet(),
    series: [{
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }]
  }
}

function tableSet () {
  return {
    cols: [],
    data: [],
    apiFnc: null,
    style: {
      align: 'left'
    }
  }
}

function paginationSet () {
  return {
    'background': false,
    'page-size': 10,
    'layout': 'prev,pager,next,total',
    'hide-on-single-page': false,
    'relate': '' // 关联的 table
  }
}

function blockSet () {
  return {
    background: ''
  }
}

export const chartMap = {
  bar: barSet,
  line: lineSet,
  pie: pieSet,
  table: tableSet,
  pagination: paginationSet,
  block: blockSet
}