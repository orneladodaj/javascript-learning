 /*const person ={
    name: "Leo",
    age:1,
    height:70,
    weight:10,
};

const userInputValues = ["age", "name", "height"];
let userInput = userInputValues[1];


console.log(person[userInput]); // console.log(person["name"]);



// console.log(person);
// console.log("Person's age: " +person.age +person.name);
// console.log("Person's age: ", person.age , person.name);



// var query = "age";
// console.log("Person's age bracket: ", person[query] );
*/
// Create an object
const car = {
    type : "BMW",
    colour : "black",
    numberOfDoors : 4,
    speed : 0,
    move : function(speed){
       this.speed = speed;
       console.log("The car is moving at " +speed + "km/h.")
    }
}
console.log(car);
car.move(80);

//Another object
const house = {
    colour : "white",
    numberOfRooms : 5,
    area : 100,

}

class Person{
    constructor(personName,
        surname,
        age,
        height,
        weight)

    {
        this.personName = personName;
        this.surname = surname;
        this.age = age;
        this.height = height;
        this.weight = weight; 
    }
}

const leo = new Person("Leo","Dodaj",6,70,10);
console.log(leo); 

function Backpack (
    name,
    volume,
    colour,
    pocketNum
)
{
    this.name = name;
    this.volume = volume;
    this.colour = colour;
    this.pocketNum = pocketNum;

}
