             // method-1//
// const red=document.querySelector('#red')
// const green=document.querySelector('#green')
// const orange=document.querySelector('#orange')
// const grey=document.querySelector('#grey')
// red.addEventListener('click', ()=>{
//     document.body.style.backgroundColor='red'
// })
// green.addEventListener('click', ()=>{
//     document.body.style.backgroundColor='green'
// })
// grey.addEventListener('click', ()=>{
//     document.body.style.backgroundColor='grey'
// })
// orange.addEventListener('click', ()=>{
//     document.body.style.backgroundColor='orange'
// })
           //method-2//

const buttons= document.querySelectorAll('.button')
const body = document.querySelector('body')
buttons.foreach( function (btn) {
    btn.addEventListener('click', function(e)
{
    if(e.target.id === 'grey'){
        body.style.backgroundColor='grey'
}});});