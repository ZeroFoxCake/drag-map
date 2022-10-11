function isObject (e) {
  return Object.prototype.toString.call(e).includes('Object')
}

export function sleep (tm) {
  let wait = null
  return new Promise(resolve => {
    wait = setTimeout(() => {
      clearTimeout(wait)
      resolve(true)
    }, tm, wait)
  })
}