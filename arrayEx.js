let arr=[10,20,30,"preetish",true]
console.log(arr);
console.log(typeof arr)
console.log(arr[2]);
console.log(arr[4]);
console.log(arr.length);
console.log(arr[arr.length-2]);
console.log(arr.push(100));
console.log(arr);
arr.unshift("bhanja");
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.splice(1,2);
console.log(arr);
arr.splice(0,1);
console.log(arr);
let arr1=[2,5,"Java","C","Dotnet"]
let arr2=["Selenium","Python"]
arr1.push(arr2)
console.log(arr1);
console.log(arr1[5][1]);
let obj1={
    "Name":"Gudu",
    "Skills":"Automation"
}
arr1.push(obj1);
console.log(arr1);
console.log(arr1[6]);
console.log(arr1[6].Skills);
let arr4=[1,2,3,4,"gudu",false]
for(let i=0;i<arr4.length;i++){
    console.log(arr4[i]);
}