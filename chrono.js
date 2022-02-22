
// let body = document.querySelector('#body');
// body.style.backgroundColor = "black";

let data = ["Apple", "Orange", "Mango", "Banana"]


data.forEach((val)=>{
	console.log(val);
});
console.log("###################");

data.map((val) => {
	console.log(val);
});
console.log("###################");

for(x in data){
	console.log(data[x]);
}
console.log("###################");
let person = {
	name : "Aung",
	age : 19,
};

console.log(person.name);
// console.log(person.own.car);
console.log("###################");
for (i in person){
	console.table(person[i]);
}

let students = [
	{
		name : "Mg Mg",
		age : 14
	},

	{
		name : "Su Su",
		age : 15
	},

	{
		name : "Mi Mi",
		age : 16
	},

	{
		name : "Nadi",
		age : 17
	}
];


let std_name = students.findIndex(student => student.age == 17);
let student_name = students[std_name].age == 15 ? students[0].name : "Not Found!";
console.log(student_name);

console.log("########################");
 
let date = new Date();
console.log(date);
console.log(date.toString());
console.log(date.getDay());
console.log(date.getDate());
console.log(date.getMonth() + 1);
console.log(date.getFullYear());
console.log("This is the time stamp: " + date.getTime());

console.log("########################");

let num = [1, 8, 9, 10, 92, 11, 27, 32];

function filter(x,y){
	return x-y;
}
console.log(num.sort(filter));
console.log(num.sort( (x,y) => y-x ));

function under10(a){
	return a < 10;
}
console.log(num.find(under10));

// let name = window.prompt("What is your name?");
// let name_para = document.querySelector('#para');
// name_para.innerText = "Hello Mr "+ name+ ". Welcome!";
// name_para.style.color = "red";
// name_para.style.fontSize = 30 + "px";
// name_para.style.fontWeight = "bold";
// name_para.style.textShadow  = '1px 1px 7px yellow';

let button = document.querySelector("#btn");



button.addEventListener('click', () => {
	console.log(window.location.search);
});

let lists = document.querySelectorAll("ul li > a");

for(let i=0; i<lists.length; i++){
   let a = lists[i];
   a.style.color = "red";
}
// lists[3].style.color = "blue";

console.log("##########################");
let lis = document.querySelector('.lis');

for(let i=0; i<lis.childNodes.length; i++){
	let node = lis.childNodes[i];
	if(node.nodeType == 3){
		continue;
	}
	console.log(node.childNodes[0].textContent);
}

console.log("###############################");

let ul = document.querySelector('.lis');

// <li><a href="#">Six</a></li>
let li_1 = document.createElement('li');
let a = document.createElement('a');
let text = document.createTextNode('Six');

a.setAttribute("href", '#');
a.appendChild(text);
li_1.appendChild(a);

ul.appendChild(li_1);

li_1.childNodes[0].style.color = "red";

let text_para_old = document.querySelector('#para');
let text_para_new = document.createElement('p');
let text_node = document.createTextNode('Hello');

text_para_new.idName = 'new_para';
text_para_new.appendChild(text_node);

let body = text_para_old.parentNode;
console.log(body);

body.replaceChild(text_para_new, text_para_old);
text_para_new.style.color = "blue";
text_para_new.style.fontSize = "44px" ;

console.log("#####################################");