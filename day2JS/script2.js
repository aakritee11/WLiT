//dom manipulation

const ul = document.querySelector("ul");
console.log(ul);
const li = document.createElement("li");
console.log(li)
ul.append(li)
//modifying text
li.innerText = "swimming";
//modifying attributes
li.setAttribute("class","heading");
//removing attributes
li.removeAttribute("class");
//removing elements
li.remove();
