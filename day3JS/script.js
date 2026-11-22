//excersise-1
console.log("1");
setTimeout(()=>console.log("2"),0);
Promise.resolve().then(()=>console.log("3"));
console.log("4");
1432


//excercise-2 : wrapping setTimeout inside the promise

async function run(){
    return new Promise(res=>setTimeout(()=>{console.log("waited 1 second!");
         res();
    },1000))
   
    
}
run();

//ex-3 : fetch post comments

async function getEmails() {
const r = await fetch(
"https://jsonplaceholder.typicode.com/posts/1/comments"

);
const list = await r.json();
console. log(list.map(c => c.email));
}
getEmails(); 

//ex-4 : Parse JSON text and count pending tasks.

const raw = '[{"id":1,"done":true}, {"id":2, "done": false}]';
const arr = JSON.parse(raw);
let pending = arr.filter(t=>!t.done);

console.log(JSON.stringify(pending));



