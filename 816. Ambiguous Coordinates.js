/**
 * @param {string} s
 * @return {string[]}
 */
var ambiguousCoordinates = function(s) {
   const res = []
  for (let i = 2; i < s.length - 1; i++) {
    const x = s.slice(1, i)
    if (x.length > 1 && x*1 === 0) {
      continue
    }
    const y = s.slice(i, s.length - 1)
    if (y.length > 1 && y*1 === 0) {
      continue
    }
    for (let m = 0; m < x.length; m++) {
      const num1 = m === 0 ? x : x.slice(0, m) + '.' + x.slice(m)
      if (String(num1*1) !== num1) {
        continue
      }
      for (let n = 0; n < y.length; n++) {
        const num2 = n === 0 ? y : y.slice(0, n) + '.' + y.slice(n)
        if (String(num2*1) !== num2) {
          continue
        }
        res.push(`(${num1}, ${num2})`)
      }
    }
  }
  return res
};