'use strict'
export function digData (obj, api) {
  const split = api.split('.')
  if (split.length === 1) { return obj[split[0]] }
  return digData(obj[split.shift()], split.join('.'))
}
