//todo  typeof 可以判断的类型 所有的基本类型除了null 

console.log(typeof 'kobe')
console.log(typeof 39)
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof Symbol())

var arr = []
var obj = {}
var fun = function(){ alert('你好!' )
}

console.log(typeof arr)//todo object
console.log(typeof obj)//todo object
console.log(typeof fun)//todo object

//todo instance of   他是基于原型链进行查询的 只要原型链上有的 都会返回true

console.log(arr instanceof Array) //todo true
console.log(obj instanceof Object) //todo true
console.log(fun instanceof Function) //todo true


// todo '1'是string
console.log('1' instanceof String) //todo false 


//todo 这个str1 是通过new String出来的  所以可以在原型链上找到
var str1 = new String('hi kobe')
console.log(String.prototype)
console.log(str1 instanceof String) //todo true

