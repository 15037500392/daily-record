const map = (array, fn) =>{
    let result = []
    for( let item of array){
        result.push(fn(item))
    }
    return result
}

// 测试
let arr = [ 2, 4, 6, 8]
arr = map(arr,item => { return item * 2})
console.log(arr,'map')