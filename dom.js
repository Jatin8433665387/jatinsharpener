//console.dir(document)
//.log(document.defaultView);
//console.log(document.all[10]);
//document.all[10].textContent = "hello"
//var a = document.getElementById('header-title');
//console.log(a);
//a.innerText = "god";
//a.innerHTML = '<h3>"hello"</h3>';
var items = document.getElementsByClassName("list-group-item");
console.log(items);
console.log(items[1]);
items[1].textContent = "hello 2";
items[1].style.fontWeight = "bold";
items[1].style.backgroundColor = "yellow";
// to manipulate all elements in list
for(var i=0;i < items.length; i++){
	items[i].style.backgroundColor = "orange";
}