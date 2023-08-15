var jat = localStorage.setItem("name","jatin");
console.log(jat);
let key = prompt("enter the key");
let value = prompt("enter the value");

localStorage.setItem(key,value)

console.log("the value at ${key} is ${localStorage.getItem(key)}")