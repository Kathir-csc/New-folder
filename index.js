// for the given JSON iterate over all for loops(for,for in,for of,foreach)
//for in loop
var person ={
    name:'xxx',
    age:'78',
    email:'xxx@gmail.com',
}
for(let key in person){
    console.log("key is"+ key+ "55");
}

let personJSON=JSON.stringify(person);
 console.log(personJSON)
let personArray=JSON.parse(personJSON);
console.log(personArray);

// for of loop

let Array=['apple','orange','mango','banana'];

for(let ele of Array){
    console.log("ele is"+ ele+ "55");
}

let ArrayJSON=JSON.stringify(Array);
console.log(ArrayJSON);
let elementArray=JSON.parse(ArrayJSON);
console.log(elementArray);

// for loop

 var Arr=[1,2,3,55,77,66];

for(i=0;i<=Arr.length;i++){
console.log("number is"+ Arr);
}
let ArrJSON=JSON.stringify(Arr);
console.log(ArrJSON);

let elementArr=JSON.parse(ArrJSON);
console.log(elementArr);


//foreach
var Arr1=[1,2,3,4,5];
var output=[];
Arr.forEach((ele)=>{
    output.push(ele*2)
});
console.log(Arr1);

let Arr1JSON=JSON.stringify(Arr1);

console.log(Arr1JSON);

let elementArr1=JSON.parse(Arr1JSON);

console.log(elementArr1);











