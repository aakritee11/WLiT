//dom manipulation 
const title = document.querySelector("#heading");
title.style.color = "blue";
title.textContent = "I do theses:"

//approach-1
const items = document.querySelectorAll(".item-list");
for(let i =0;i<items.length;i++){
    items[i].style.fontWeight = "bold";

}
//approach-2
items.forEach((item)=>{
 item.style.color="violet"
})