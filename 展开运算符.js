function fn(...arr){
  //剩余运算符
  console.log(arr);
 }
 Math.max(...[1,2,3,4,2,3])//展开运算符//4

//数组展开运算符应用
 var a=[1,2,30],
 b=[3,4,5,6];
 var c=[...a,...b];
 console.log(c);// [1, 2, 30, 3, 4, 5, 6]

//对象中的应用
 var obj1={a:1,a:2,c:3}
 obj2={q:100,w:200,C:300}
 console.log(obj1,obj2)//{a: 2, c: 3} {q: 100, w: 200, C: 300}

 var obj3={...obj1,...obj2}; 
 var obj4={...obj2,...obj1};
 console.log(obj3,obj4)//{a: 2, c: 3, q: 100, w: 200, C: 300} 
                       //{q: 100, w: 200, C: 300, a: 2, c: 3}


var s1 = Symbol();// Symbol() 每一次执行 都会返回一个唯一的值；

// es6的字符串模板
var myname = "jack";
var str = '<div>'+
            '<h1>hello '+myname+'</h1>'+
          '</div>';

// 模板字符串的最大特点就是可以编写换行，若需要变量 则 编写${变量名}；          
var str2 = `<div>
              <h1>hello ${myname}</h1>
            </div>`   ;   
console.log(str);       
console.log(str2)         