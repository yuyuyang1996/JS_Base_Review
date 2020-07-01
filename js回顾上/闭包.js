// ! 需要补充


// todo 闭包是一个函数 闭包是指有权能够访问另一个函数作用域中的变量的函数
// todo 闭包本质就是当前环境中存在指向父级作用域的引用



// ? demo1

var a = 1 

function f1() {
    var a = 2 
    function f2() {
        var a = 3
        console.log(a)
    }
    return f2()
}
f1()