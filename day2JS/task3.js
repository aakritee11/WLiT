let animal={
    makeSound:()=>{
         return "some sound";
    }

}

let dog = {
    name: "Buddy"
}

dog.__proto__ = animal;
console.log(dog.makeSound());


