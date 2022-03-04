for(let x=0;x<=10;x++){
    console.log("Value is ",x)
}

// console.log("=======================");
// for(let x=20;x>0;x--){
//     console.log("Value is ",x)
// }
for(let x=0;x<=10;x=x+2){
    console.log("Value is ",x)
}

let arr=[12,20,34,"preet",true]
for(let x=0;x<arr.length;x++){
    console.log("Array values ",arr[x]);
}
arr.forEach(element =>{
    console.log("Using for each",element);

})

for(let myarrValues of arr)
{
    console.log("Using for of ",myarrValues);
    
}
let myObj={
    "Name":"Preetish",
    marks:50,
    status:false
}
console.log(myObj);
for(let x in myObj){
    console.log(x);
    console.log(myObj[x]);
}
// let sum=5
// while(sum<15){
//     console.log("Sum value ",sum);
// }

