(()=>{

// function simulateAsyncAPI(text, timeout, callback){
//     setTimeout(()=>console.log(text),timeout);
// };
// simulateAsyncAPI('A',1000);
// simulateAsyncAPI('B',500);
// simulateAsyncAPI('C',100);
// function simulateAsyncAPI(text, timeout, callback){
//     setTimeout(()=>{
//         console.log(text)
//         if (callback){
//         callback();}
//         // callback();
//     }, timeout);
// }
// Callback Hell
// simulateAsyncAPI('A',1000,()=>{
//     simulateAsyncAPI('B',500,()=>{
//         simulateAsyncAPI('C',100);
//     });
// });
// 3.Promise
// function simulateAsyncAPI(text,timeout){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             if (text === 'C') return reject('C got error')
//             console.log(text);
//             resolve();
//         }, timeout);
//     });
// }
// simulateAsyncAPI('A',1000)
//     .then(()=> {
//         return simulateAsyncAPI('B',500)
//     })
//     .then(() => {
//         return simulateAsyncAPI('C',1000)
//     })
//     .catch((error) => {
//         console.error(error);
//     });
// 4.Promise + Async Await
function simulateAsyncAPI(text,timeout){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if (text === 'C') return reject('C got error')
            console.log(text);
            resolve();
        }, timeout);
    });
}

async function run(){
    try {
    await simulateAsyncAPI('A',1000);
    await simulateAsyncAPI('B',2500);
    await simulateAsyncAPI('C',5000);
} catch (error){
    console.error(error)
}}

run();
})(); 