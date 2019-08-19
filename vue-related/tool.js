/** tool */

// check 是否日期重复
export const checkDate = (arr, date) => {
  if (!date) return false
  const tempArr = arr.map(v => v.lessonDate)
  const res = tempArr.reduce((res, item) => {
    res[item] ? res[item] += 1 : res[item] = 1
    return res
  }, {})
  return res[date] > 1
}

// 判断是否为连续选中
export const checkisContiuous = (time, options) => {
  if (!time || time.length <= 1) return true
  // find index
  const idxArr = time.map((item) => options.findIndex(v => v.id === item))
  const len = idxArr.length
  const sortArr = idxArr.sort(function(a, b) { return a - b })
  return len - 1 === sortArr[sortArr.length - 1] - sortArr[0]
}