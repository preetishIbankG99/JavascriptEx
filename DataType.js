let fname="Preetish"
console.log(fname);
console.log(typeof fname);

let marks=98
console.log(marks);
console.log(typeof marks);
 
let status=true
console.log(typeof status);
console.log(status);

let address=null
console.log(address);
console.log(typeof address);

let person={
    "Fname":"Preetish",
    "Lname":"Bhanjadeo"
}
console.log(typeof person);
console.log(person);

let studentmarks=[20,40,65]
console.log(typeof studentmarks);
console.log(studentmarks);
let f_name="My name is Preetish Bhanjadeo"
console.log(f_name.length);
console.log(f_name[1]);
console.log(f_name.includes("name"));
console.log(f_name.includes("Name"));
console.log(f_name.startsWith("My"));
console.log(f_name.startsWith("Hi"));
console.log(f_name.endsWith("Bhanjadeo"));
console.log(f_name.split(" "));
let arr=f_name.split(" ");
console.log(arr[4]);
console.log(f_name.toUpperCase());
console.log(f_name.toLowerCase());
console.log(f_name.trim());
console.log(f_name.replace("Bhanjadeo","bhanjadev"));

let finalmsg="Total price is 200 USD"
let value=finalmsg.split(" ")[3]
console.log(typeof value);
let price=parseInt(value);
console.log(typeof price);
console.log(price);
if(price==200){
    console.log("Pass");
}
else{
    console.log("Fail");
}
let msg='Final \tamount is \'300\' \nUSD'
console.log(msg);
let x=200
let newmsg='Final amount is ${x} USD'
console.log(newmsg);
