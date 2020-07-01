// todo js中的继承

// todo 借助 call 来实现继承  
function Parent1() {
    this.name = 'parent1'
}
function Child1() {
    Parent1.call(this)
    console.log(this)
    this.type = 'child1'
}
console.log(new Child1)