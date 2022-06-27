//forEach使用
var ary = [{ a: 100 }, { a: 200 }, { a: 300 }, { a: 400 }];
let fn = (item, index) => {
        //item和index 都是形参
        //item 是数组中的每一项
        //index 是每一项对应的索引
        console.log(item, index) // {a: 100} 0
            // {a: 200} 1
            // {a: 300} 2
            // {a: 400} 3
        item.a = 1000;
        return 100;
    }
    //forEach没有返回值，
var t1 = ary.forEach(fn); //没有返回值
//map有返回值，是一个新数组,新数组是由每一个回调函数返回值决定的
console.log(t1) //undefined



//map  用法
//1.数组中的末尾加0
let fn = item => {
    return item + '0'
}
let ary = [100, 200, 300, 400];
let res2 = ary.map(fn);
console.log(res2); //=>["1000", "2000", "3000", "4000"]

//2.数组的前面加0
let fn = item => {
    return '0' + item
}
let ary = [100, 200, 300, 400];
let res2 = ary.map(fn);
console.log(res2); //=>["0100", "0200", "0300", "0400"]

//3.数组中每一位都加100
let fn = item => {
    return item += 100
}
let ary = [100, 200, 300, 400];
let res2 = ary.map(fn);
console.log(res2); //=>[200, 300, 400, 500]


//需求，把arr中的每一项加1000
var arr = [100, 200, 300, 400];
var newArr = arr.map((item) => 1000 + item);
console.log(newArr); //[1100, 1200, 1300, 1400]



//some的使用：
//1.只要有个回调函数的返回值是true，则some的运行结果修饰true  
//2、一旦有一个回调函数结果是true  则后边的回调就不再执行了
var arr = [100, 200, 300, 400];
var bol = arr.some((item, index) => {
    //只要有一个对调函数的额返回值是true 则some的运行结果就是true
    console.log('1', item)
    return item > 600 //100, 200, 300, 400 都不大与600 就是false
})
var bol2 = arr.some((item, index) => {
    console.log('2', item)
    return item > 200 //100, 200, 300,大于200就是true 结果就是true后面的不在执行了
})
console.log(bol, bol2); //false true



//every的使用：
//1.只要有个回调函数的返回值是false，则every的运行结果false  
//2、一旦有一个回调函数结果是false  则后边的回调就不再执行了
var arr = [100, 200, 300, 400];
var bol = arr.every((item, index) => {
    //只要有一个对调函数的额返回值是true 则some的运行结果就是true
    console.log('1', item)
    return item > 10 //100 true
})

var bol2 = arr.every((item, index) => {
    console.log('2', item)
    return item > 200 //100 false
})
console.log(bol, bol2); // true false



//filter  就是条件成立的数组放到一个新的数组中
// 过滤 把回调函数return值是true的值赋值一份放到新数组中
let ary = [1, 2, 3, 4]
let res1 = ary.filter(item => {
    return item > 2
})
let res2 = ary.filter(item => {
    return item <= 2
})
console.log(res1, res2); //=[3, 4] (2) [1, 2]



//reduce 
//prex,next是形参 prev代表钱一项 next代表后一项
let ary = [1, 2, 3, 4]
let res3 = ary.reduce((prev, next) => {
    console.log(prev, next); // 1  2
    // undefined 3
    // undefined 4
})


//reduce  相加返回运算
let arr = [10, 20, 30, 40, 50];
let res = arr.reduce((prev, next) => {
    console.log(prev, next); //=>10 20
    //30 30
    //60 40
    //100 50
    return prev += next;
});


//练习 使用reduce (传了实参100，prev默认值就是100) 实现数组求和  
let ary3 = [10, 20, 30, 40];
let res6 = ary3.reduce((prev, next) => {
    return prev + next
}, 100)
console.log(res6); //=>200




//Object.is(1, 1)
Object.is(NaN,NaN)//true
Object.is(1, 1) //=true
Object.is(+0, -0) //=>false


//Object.assign 是把obj2合并到obj中，返回值是合并后的obj
var obj = { a: 1 },
    obj2 = { b: 2 }
console.log(Object.assign(obj, obj2)); //=>{a:1,b:2}


//object.keys()  把obj中的所有属性名组成一个新数组
var obj = { a: 123, b: 234, c: 345 }
console.log(Object.keys(obj)) //=>["a", "b", "c"]


//object.value();把obj中的所有属性值组成一个新数组
var obj = { a: 123, b: 234, c: 345 }
console.log(Object.values(obj)) //=>[123, 234, 345]

// Object.freeze()：把某个对象冻结，后面就改不了了
var obj={a:123,b:234,c:234}
var obj2=Object.freeze(obj)
obj2.a=66
console.log(obj2)//{a:123,b:234,c:234} 此时obj2.a还是123，不是66

Object.create()