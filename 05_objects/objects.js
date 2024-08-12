// objects using function constructor.

function obj(name,city)
{
    this.name=name;
    this.location=city;
}
const myobj= new obj('arslan','lucknow');
// console.log(myobj.name);
// console.log(myobj.location);


// iterating  using for in loop
for (const key in myobj) {
    // console.log(key ,myobj[key]);
    }

// iterting in object
const  object= {
    'name':'arslan',
    age:23
}
for (const key in object) {
    // console.log(key, object[key]);
}


