function count(str){
    let arr=str.split(' ')
    let map1=new Map()
    for(i in arr){
        let ctr=1
        for(j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                ctr++
            }
        }
        (map1.has(arr[i]))?null:map1.set(arr[i],ctr)
    }
    return map1
}

let str="In the bustling city, people rush to work, work hard to earn a living, and living life to the fullest amidst the hustle and bustle.";
console.log(count(str))