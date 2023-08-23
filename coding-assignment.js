//1. Am I Perfect?
function calculate(num) {
    const str = []
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            str.push(i)
        }
    }
    const result = str.reduce(function (prv, cur) {
        return (prv + cur)
    }, 0)

    if (result === num) {
        return "Perfect Number"
    } else if (result > num) {
        return "Abundant"
    } else if (result < num) {
        return "Deficient"
    }
}
console.log(calculate(6))
console.log(calculate(12))
console.log(calculate(8))


//2. How many trails to 1?
function trails(x) {
  const num = []
  while (x > 1) {
    if (x % 2 == 0) {
      x = (x / 2)
      num.push(x)
    } else {
      x = ((3 * x) + 1)
      num.push(x)
    }
  }
  return num.length
}
console.log(trails(12))

//3. Hide that PIN!
function num(x) {
    const obj = {
      1: "pop",
      10: "double rip",
      100: "hide your mints",
      1000: "fall"
    }
    let str = ''
    const a = []
    const result = []
  
    str = (Number(x).toString(2))
  
    for (let i = 0; i < str.length; i++) {
      if (obj[str]) {
        result.push(obj[str])
        break
      } else {
        a.push(Number(str[i]))
        a.push(11 - Number(str[i]))
        if (Number(str >= 10000)) {
          a.push(9999 + Number(str[i]))
        }
        break
      }
    }
    for (let i = 0; i < a.length; i++) {
      if (obj[a[i]]) {
        result.push(obj[a[i]])
      }
    }
    if (a.includes(10000)) {
      result.reverse()
    }
    return result
  }
  console.log(num(3))
  console.log(num(19))