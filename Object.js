//# this file demonstrate the object literal type in JS
// syntax let obj ={}
//{} this is callled a object literal in which we store key:value pairs

let personObj = {
    name: 'Radha',
    age: 20
};
//obj has to properties name and age

console.log(personObj); //to display the person on console

//dot notation to access the properties of person object
personObj.age = 21;

console.log(personObj.age);

//Bracket notation
personObj['name'] = "sita";

console.log(personObj['name']);




////////////////////////////////////////////////////////////////////////////////////////////

/*  Dot notation is widely used but,
    when you need to select property based on user i/p we use Bracket N. as 
    we can store value in a let and pass it as a argument in Bracket




    on web browser not on node js console as prompt() is used
*/

/*
console.log("enter 1 for name and 2 for age:");
let selection;
let ans = prompt("enter your choise:")      
                                            //alt+l alt+o in obj.html file
if (ans == 1) {
    selection = 'name';
}
else {
    selection = 'age';
}

console.log(personObj[selection]);

*/
