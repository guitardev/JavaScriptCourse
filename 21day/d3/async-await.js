(()=>{

// function simulateAsyncAPI(text, timeout, callback){
//     setTimeout(()=>console.log(text),timeout);
// };
// simulateAsyncAPI('A',1000);
// simulateAsyncAPI('B',500);
// simulateAsyncAPI('C',100);
function simulateAsyncAPI(text, timeout, callback){
    setTimeout(()=>{
        console.log(text)
        if (callback){
        callback();}
    }, timeout);
}
// Callback Hell
// simulateAsyncAPI('A',1000,()=>{
//     simulateAsyncAPI('B',500,()=>{
//         simulateAsyncAPI('C',100);

//     });
// });



})(); 