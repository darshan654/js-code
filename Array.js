//Array a collection of same or diff types of literals (homogenius/hetrogenius)
//copy this code and past it in v8 console to see inindex or run in node
const colours = ['red','blue',9];

console.log(colours[1]);

colours[0]='yellow';
//even const can be changed 
console.log(colours);

//js dynamic type
//.'. can add or substract 

colours[3]='red';

console.log(colours);


console.log(typeof(colours));//its a object

//.'. we could use dot notation we could use the properties defend by Js
//      to an array type literal

console.log("there are ",colours.length,"elements in colours Array");

colours.push("new");
console.log(colours);

colours.pop();
console.log(colours);

//can have nested array
colours.push([1,2]);
console.log(colours[4][1]);//at 0 index we have =1 and 1=2


// some usefull properties/methodes are 
                    //find ,sort , split ,find ,findIndex, join , reverse

// REFER Array_Funtion.js for all the methods use


