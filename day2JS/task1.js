let numInput = document.getElementsByTagName("input")[0];
let btn = document.getElementById("btn");
let heading = document.getElementsByTagName("h1")[0];

function implement(){
  let num = Number(numInput.value);
      if(num){
        heading.style.fontSize = num + "px";
      }
        
}
btn.addEventListener("click",
    implement
)