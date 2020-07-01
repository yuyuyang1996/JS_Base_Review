//!  todo 是代码高亮
//todo  null 是否是对象？
//todo  null 不是对象 

console.log(typeof null) //todo  object  虽然typeof判断下来是object 但是null并不是一个对象 是JS中很早存在的bug
console.log(Object.prototype.toString.call(null)) //todo  [object Null]
console.log(null instanceof Object) //todo  false 
