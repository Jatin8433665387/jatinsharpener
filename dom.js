//console.dir(document)
//.log(document.defaultView);
//console.log(document.all[10]);
//document.all[10].textContent = "hello"
//var a = document.getElementById('header-title');
//console.log(a);
//a.innerText = "god";
//a.innerHTML = '<h3>"hello"</h3>';

//var items = document.getElementsByClassName("list-group-item");
//console.log(items);
//console.log(items[1]);
//items[1].textContent = "hello 2";
//items[1].style.fontWeight = "bold";
//items[1].style.backgroundColor = "yellow";
// to manipulate all elements in list
//for(var i=0;i < items.length; i++){
//	items[i].style.backgroundColor = "orange";
//}

// get elements by tagname
// var li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "hello 2";
// li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor = "yellow";
// // to manipulate all elements in list
// for(var i=0;i < li.length; i++){
// 	li[i].style.backgroundColor = "orange";
// }

// query selector

var input = document.querySelector("input");
input.value = "hello bhailog";

var submit = document.querySelector('input[type="submit"]');
submit.value = "send";

var first = document.querySelector('.list-group-item');
first.style.backgroundColor = "green";

var last = document.querySelector('.list-group-item:last-child');
last.style.color = "red";

var middle = document.querySelector('.list-group-item:nth-child(2)');
middle.style.backgroundColor = "green";

var middlee = document.querySelector('.list-group-item:nth-child(3)');
middlee.style.color = "white";