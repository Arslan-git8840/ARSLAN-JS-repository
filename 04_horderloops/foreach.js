//array
const array=[22,2,3,4,34,56,222]
// array.forEach( (item) => (console.log(item))
//  )
// array.forEach( (item,index,fullarray) => console.log(item,index,fullarray)
//or
// array.forEach( function (item)
// {
//     console.log(item);
    
// } )

//**** (item>2) = return item>2= item>2 */

const newarray= array.filter( (item)=> (item>2) )
const myarray= array.filter( function(element)
{
    return element>2;
} )
// console.log(newarray);
// console.log(myarray);


//**** map() */

const map= array.map( (item)=> item+29 )
const mymap= array.map( (x)=> x>2) //it will return true or false values
// console.log(mymap);

// console.log(map);

//using for each to get array element >2
const newarr=[];
array.forEach(
    function(x)
    {
        if(x>2)
        {
newarr.push(x);
        }
    }
)
console.log(newarr);




