let arr = [10,20,30,40]

let arr2  = arr.map(function(item,index,arr){
    console.log(item,index,arr)
    return item*2
})
console.log(arr2)