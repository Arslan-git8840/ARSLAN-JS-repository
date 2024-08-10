// this refers to current contexts.
// const myobj={
//     name:'arslan', 
//     function:function()
//     {
//         console.log(`my name is ${this.name}`);
//     }
// }
// myobj.function();

// console.log(this);

// *******arrow function *****

// syntax () =>
// {
//     body
// }

// const myfun= () =>
// {
//     console.log('hello js user');
    
// }
// myfun()

//or
// parameter
// const fun = (name,age) =>
// {
//   console.log(name,age);
  
// }
// fun('arslan',23);

// or explicit return

// const fun=() => {
//     return 'hello';
// }
// console.log(fun());


// or  implicit return

// const fun=() => console.log('hello world');
// fun()

// function chai()
// {
//     console.log(this);
    
// }
// chai()
// (num1+num2)=return num1+num2;
// const add= (num1,num2) =>(num1+num2);
// console.log(add(2,3));

// const obj= ()=> ({name:'arslan'});
// console.log(obj())


//*******iife */  (function defn)(function call/execute);

(function add(a,b)
{
    console.log(a+b);
})
(2,3);

//note we have to end the first function using ; to execute the next one.

((name) =>
{
    console.log(`hello ${name}`)
})('arslan')

