

//? 核心：原型链向上查找
//todo 思路   第一：判断是否是基本数据类型 采用typeof检测    第二：拿到参数的原型对象 ，进行查找 



function my_instance_of(first,second) {
    //使用 typeof 判断是否为基本类型 是则返回
    if(typeof first !== 'object'|| first === null){
        return false 
    }
    // 拿到参数的原型对象
    let proto = Object.getPrototypeOf(first)
    while(true) {
        // 找到原型链的尽头
        if(proto === null){return false}
        // 比较是否是同一个原型，是则返回
        if(proto === second.prototype){
            return true
        }
        proto = Object.getPrototypeOf(proto)
    } 
}










// todo 测试
console.log(my_instance_of('kobe',String)) // todo false 
console.log(my_instance_of(new String('hello kobe'),String)) // todo true

// todo 原生的instanceof测试
console.log('kobe' instanceof String) //todo false
console.log(new String('hello Kobe')  instanceof String) // todo true
