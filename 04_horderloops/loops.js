// // for (let i=0; i<=10;i++) {
// //     for(let j=1;j<=10;j++)
//     {
// //         console.log(`the value of ${i} * ${j} is`, j*i);
        
// //     }
// // }

// // ***** for of loop */
// //  const myarray =[1,2,4,5,7,89]
// //  for (const array of myarray) {
// //     console.log(array);
// //  }

// // const ar=[1,2,4];
// // for (let i=0; i<ar.length;i++) {
// //     console.log(`the value at index ${i} is` ,ar[i]);
    
// // }

// //  const mystr="chaiaurcode"
// //  for (const str of mystr) {
// //     console.log(str);
// //  }

// // const s="hello "
// // for (const str of s) {
// //     console.log(`each char value is ${str}`);
    
    
// // }

// // let a=2
// // do
// // {
// //     console.log('hello');
// // }while(a>3);

// // for in loop for objects
// // const myobj = {
// //     name:'arslan',
// //     age:23
// // }
// // for (const key in myobj) {
// //     console.log(key, ':-', myobj[key])
// // }

// for in loop in array
const myarray=['hello',2,3,4,6];
for (const key in myarray) {
   // console.log(myarray[key]);it will print the items of the array. 
 //console.log(key); it will print index of the array.
 }

const mymap= new Map()
mymap.set('in','india');
mymap.set('uk','utr');
for (const key in mymap) {
    console.log(key);
}

