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

           const btn = document.querySelectorAll('.button')
           const body= document.querySelector('body')
           // console.log(btn);
           btn.forEach( function(buttons){
           //  console.log(buttons)
           buttons.addEventListener('click', function(e)
           {
             console.log(e)
             console.log(e.target)
           
             if(e.target.id==="grey")
             {
               body.style.backgroundColor='grey'
             }
             else if(e.target.id==="orange")
             {
               body.style.backgroundColor='orange'
             }
             else if(e.target.id==="green")
             {
               body.style.backgroundColor='green'
             }
             else if(e.target.id==="red")
             {
               body.style.backgroundColor='red'
             }
           })
           })