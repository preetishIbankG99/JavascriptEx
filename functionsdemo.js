function sayHello()
{
console.log("Hello JS");
}
console.log(sayHello());
function showName(fname,lname)
{
    return fname+lname
}
console.log(showName('Preetish','Bhanja'));
console.log(typeof showName);
let myFunc=function f1()
{
    console.log("I am f1");
    return 30
}
let result=myFunc();
console.log(result);
console.log(typeof myFunc);
let myFuncNew=function(n1,n2,n3)
{
    console.log("I am f2");
    return n1+n2+n3
    }
   console.log(myFuncNew(12,10,2));
  let myObj={
      "Name":"Shiba",
      f3:function()
      {
          console.log("I am inside Object");
      }
  }
  myObj.f3();
  let arr=[12,"Leeku",f1=function()
{
    console.log("I am inside array");
}
]
let y=arr[2]
y()
let z=function f3()
{
    console.log("Hello JS Again");
}
z()
let myAddress= () =>{
    console.log("Hyderabad");
}
myAddress()
let myAddressNew=(house,street) =>console.log("Bangalore");
