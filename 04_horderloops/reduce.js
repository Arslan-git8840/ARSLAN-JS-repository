const array=[2,3,5,7,8,65,43]
// syntax reduce((accumulator,currentvalue)=> acc+curval, initial value) here the initial value 
// stored in the accumulator
const num=array.reduce( (accumulator,currentvalue) => (accumulator+currentvalue+7),0);
console.log(num);
