let ul=document.querySelector(".images")
let f=document.querySelector(".first")
let s=document.querySelector(".second")
let t=document.querySelector(".third")

ul.addEventListener('click', function(e)
{
    console.log('ul is clicked');
    
},false)
f.addEventListener('click', function(e)
{
     console.log('first image clicked');
}, false)

// event bubbling concept
ul.addEventListener('click', function(e)
{
    console.log('ul is clicked');
    
},false)
f.addEventListener('click', function(e)
{
     console.log('first image clicked');
     e.stopPropagation()
}, false)

