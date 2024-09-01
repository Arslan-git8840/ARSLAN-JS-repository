// const response= fetch('api.github.com/users/hiteshchoudhary');
// // fetch returns a promise.
// ///consuming a promise
// response.then((responseData)=>
// {
//     return responseData.json();  
// }).then((data)=>
// {
//     console.log(data);
    
// }).catch((error)=>
// {
//     console.log(error);
    
// })

//using asycn await
(async () => {
    try {
        const response = await fetch('https://api.github.com/users/hiteshchoudhary');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
})();