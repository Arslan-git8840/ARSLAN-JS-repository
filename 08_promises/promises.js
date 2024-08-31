// // syntax

let promise1 = new Promise( function(resolve, reject)
{
  console.log('mypromise first');
  resolve({username:"Arslan", age:22});// we can pass number, string, array or object also.
})// resolve will return the value to the value
// consuming the promise, we have to call the resolve to execute the then code
promise1.then((value)=>
{console.log(value);

    console.log(value.username);
    
});
// // console.log(promise1); it willprint the promise is pending fullfilled or rejected
// let promise2 = new Promise((resolve,reject)=>
// {
//     setTimeout(() =>
//     {
//         console.log('my secondpromise');
//     },1000)
//     resolve('success');
// })
// promise2.then((value)=>
// {console.log(value);
// }).catch((error)=>
// {
//     console.log(error);
// }).finally(()=>
// {
//     console.log('finally');
    
// })

// new Promise((resolve,reject)=>
// {
//  setTimeout(() => {
//     console.log('promise 3');
//  }, 1000)
//  resolve('resolved');
// }).then((value)=>
// {
//     return value;
    
// }).then((returnedValue)=>
// {
// console.log(returnedValue);

// })

let promise5 = new Promise((resolve,reject)=>
{
    setTimeout(() => {
        let error = false;
        if (error) {
            resolve({username:"Arslan", age:22})
        }else {
            reject("E: something went wrong")
        }


    }, 1000);
})
promise5.then((value)=>
{
    console.log(value);
    
}).catch((error)=>
{
    console.log(error);
    
})


let  promise6 = new Promise((resolve,reject)=>
{
    setTimeout(() => {
        
        let err = false;
        if (err) {
            resolve({username:"Arslan", age:22})
        }else 
        {
            reject("E: something wrong");
        }

    },1000);
})
// consuming the promise using async await

async function cosnumePromise6() {
    try {
        const response = await promise6;
    } catch (err) {
        console.log(err);
        
    }
    
}
cosnumePromise6();