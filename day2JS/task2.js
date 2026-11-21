let textColor = document.getElementById("txtClr");
let bgClr = document.getElementById("bgClr");
let text = document.getElementById("txt");
let btn = document.getElementById("btn");
let container = document.getElementById("container");


function implement(){
    if(textColor.value && bgClr.value && text.value){
        container.innerHTML = `<p>${text.value}</p>`
        let paragraph = document.querySelector("p");
        paragraph.style.color= textColor.value;
        paragraph.style.backgroundColor= bgClr.value;
        
    }
    else{
        alert("Enter complete details!");
    }
}

btn.addEventListener("click",implement)
