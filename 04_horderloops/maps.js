const mymap = new Map();
mymap.set("IN","INDIA");
mymap.set("AU","AUSTRIA");
mymap.set("ZU","ZURICH");
//console.log(mymap);
// console.log(mymap.clear);
// console.log(mymap.get("IN"));
// console.log(mymap.size);

// for of loop

for (const [key,value] of mymap) {
    // console.log(key, ':-' ,value);
    // console.log(`The meaning of ${key} is ${value}`);

}
// converting a map into array
const array = Array.from(mymap);
// console.log(array);
const flatarray= array.flat();
// console.log(flatarray);
for (const arr of array) {
    console.log(arr);
}
 //or
 for (const arr of flatarray) {
    // console.log(flatarray);
    
 }






