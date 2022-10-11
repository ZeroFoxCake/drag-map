import { sleep } from '@/utils'

export async function getBarList () {
  await sleep(1000)
  return [
    { name: '毛衣', value: 90 },
    { name: '袜子', value: 100 },
    { name: '开水瓶', value: 30 },
    { name: '开水瓶', value: 30 },
    { name: 'switch', value: 2000 },
    { name: 'TV', value: 3000 }
  ]
}

export async function getLineList () {
  await sleep(1000)
  return [
    { name: '毛衣', value: 90 },
    { name: '袜子', value: 100 },
    { name: '开水瓶', value: 30 },
    { name: '开水瓶', value: 30 },
    { name: 'switch', value: 2000 },
    { name: 'TV', value: 3000 }
  ]
}

export async function getPieList () {
  await sleep(1000)
  return [
    { name: '毛衣', value: 90 },
    { name: '袜子', value: 100 },
    { name: '开水瓶', value: 30 },
    { name: '开水瓶', value: 30 },
    { name: 'switch', value: 2000 },
    { name: 'TV', value: 3000 }
  ]
}

export async function getTableList () {
  await sleep(1000)
  return [
    { title: '毛衣', sale: 100, price: '$100', has: 100 },
    { title: '袜子', sale: 10, price: '$100', has: 90 },
    { title: '开水瓶', sale: 90, price: '$100', has: 101 },
    { title: 'switch', sale: 100, price: '$1000', has: 89 }
  ]
}

export function getApiMaps () {
  return [
    { dis: '获取饼图数据', fns: 'getBarList' },
    { dis: '获取折线图数据', fns: 'getLineList' },
    { dis: '获取柱状图数据', fns: 'getPieList' },
    { dis: '获取 table 数据', fns: 'getTableList' }
  ]
}




