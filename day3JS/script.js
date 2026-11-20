//excersise-1
console.log("1");
setTimeout(()=>console.log("2"),0);
Promise.resolve().then(()=>console.log("3"));
console.log("4");
//1432


//excercise-2 wrapping setTimeout inside the promise
// const wait =(ms)=> new Promise(res=>setTimeout(res,ms));
// async function run(){

//     await wait(1000);
//     console.log("waited 1 second!");
// }
// run();

async function run(){
    return new Promise(res=>setTimeout(()=>{console.log("waited 1 second!");
         res();
    },1000))
   
    
}
run();


