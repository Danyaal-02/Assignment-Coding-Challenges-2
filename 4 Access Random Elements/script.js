const numbers = [1, 3, 7, 5, 9, 4, 8, 3, 6, 1, 2, 7, 5]

const access = (arr) => {
    let [a,b,...rest]=arr
    arr=[a,b,arr.pop()]
    return arr
}

console.log(access(numbers))