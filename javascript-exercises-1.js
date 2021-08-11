//Ex: 1, Start
function string(str) {
  this.str = str;
}
string.prototype.isPallindrome = function () {
  return (
    this.str.toString() === this.str.toString().split("").reverse().join("")
  );
};

const myString = new string("level");

console.log(myString.isPallindrome());
  //Ex: 1, End


  //Ex:2, Start

  let num = 2;
  let expo = 3;
  function cube(){
      return Math.pow(num,expo); // number to the power exponential number // 2^3

  }
  console.log(cube())

  //Ex:2, End


  //Ex:3, Start

  let providedArray = [{id: 1, fullName:'John Doe'}, {id: 2, fullName:'Jim Doe'}, {id: 3, fullName:'Jane Doe'}];

  // reduce all elments in the array into single object 
  console.log(providedArray.reduce((acc, i)=> ({...acc, [i.id]:  {fullName:  i.fullName}}), {})) //(acc,i) =>(accumulator,current value)
  //Ex:3, End


  //Ex:4, Start
  let providedObject = {1: { fullName:'John Doe'}, 2: {fullName:'Jim Doe'}, 3: {fullName:'Jane Doe'} };

  //Object.keys return the array of the given object 
let result = Object.keys(providedObject).map((key) => [Number(key), providedObject[key]]); 

console.log(result)

//Ex:4, End


//Ex:5, Start

const points = { p1: [2, 3], p2: [6, 7]};

let x1 = 2;
let y1 = 3;
let x2 = 6;
let y2= 7;

 

function displacement(){
 let x = y2 -y1;
  let y = x2 - x1;
  return Math.sqrt((x*x)+(y*y)); // distance between two points 
  
}
console.log(displacement())

//Ex:5, End

  