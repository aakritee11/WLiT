// let x = "12";
// console.log(typeof(x));
// console.log(typeof typeof(x));
// console.log(null== undefined ); //true
// console.log(null=== undefined); //false

//hoisting
// printHello();
// function printHello(){
//     console.log("Hello");
// }

//ternary operators

// console.log(printHello?"welcome!":"no salutation");

//if else
// function checkGrade(score){
// if(score>95){
//     console.log("Grade: A")
// }else if(score>80&& score<95){
//     console.log("Grade: B")
// }
// else
//     console.log("Grade: C")
// }
// checkGrade(20);

//switch cases

// let a = "..";
// switch(a){
//     case "bike":
//         console.log("it's bike ");
//         break;
//         case "car":
//         console.log("it's a car");
//         break;
//     case "truck":
//         console.log("it's a truck")
//         break;
//         default :
//         console.log("Invalid")
// }

//loops

//functions

// function add(a,b){
//   console.log(a+b);
// }
// add(0,2)

//task-1

function numCheck(x){
    if(x>0)
        console.log(x+" is a positive number")
    else
           console.log(x+" is a negative number")
}
numCheck(-1);

// //task-2
let arr = [10,2,3,4,9];
const largestNum = (arr)=>{
    let largest = 0;
    for(let i=0;i<arr.length;i++){
        if(largest<arr[i]){
            largest = arr[i];
        }
    }
    console.log(largest+" is the largest number.");
}
largestNum(arr);

//spread Operator 


//objects

// let student ={
//     name: "",
//     age: 12,
//     class: 5,
//     hasGraduated: false
// }
// student.address = "kathmandu";
// console.log(student);


//task-3

function calcArea(){
    return this.length*this.breadth;
}

let rectangle = {
    length: 10,
    breadth: 5,
    area: calcArea
}

let square = {
    length: 10,
    breadth: 10,
    area: calcArea
}

console.log(rectangle.area()+"is the area of rectangle");
console.log(square.area()+"is the area of square");