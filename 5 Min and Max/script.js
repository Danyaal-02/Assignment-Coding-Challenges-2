const numbers = [1, 3, 7, 5, 9, 4, 8, 3, 6, 1, 2, 7, 5]
const map=new Map()
const access = (arr) => {
    map.set("max",Math.max(...arr))
    map.set("min",Math.min(...arr))
    return map
}

console.log(access(numbers))