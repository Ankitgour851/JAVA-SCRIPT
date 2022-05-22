// 1.Ways to print in java-script
// console.log("Hello World!");
// alert("me");
// document.write('this is a document write')


// 2.JavaScript console API
// console.log("Hello World!", 4 + 6, "Another log");
// console.warn("this is a warning");
// console.error("This is an error");


// 3.Java-Script Variables
// what are variables?--->Containers to store data values
var number1 = 34;
var number2 = 56;
// console.log(number1 + number2);


// 4. Data types in java-scripts 
// Number
var num1 = 455;
var num2 = 56.76;

//String
var str1 = "This is a string";
var str2 = 'This is a string';

// Objects
var marks = {
    ravi: 34,
    shubham: 78,
    ankit: 99.97
}
// console.log(marks);

// Booleans
var a = true;
var b = false;
// console.log(a,b);

// undefined
// var und = undefined;
var und;
// console.log(und);

var n = null;
// console.log(n);


/*At a very high level there are two types of data types in java-script
1.Primitive : undefined , null , number ,String , Boolean,Symbol
2.Reference: Arrays and objects
*/


var arr = [1, 2, "bablu", 3, 4, 5];
// console.log(arr);


// Operators in java-SCript
// Arithmetic operators
var a = 100;
var b = 10;
// console.log("The value of a + b ",a+b);
// console.log("The value of a - b ",a-b);
// console.log("The value of a * b ",a*b);
// console.log("The value of a / b ",a/b);

// Assignment Operator
var c = b;
// c += 2;
// c -= 2;
// c *= 2;
// c /= 2;
// console.log(c);

// Compare Operator
var x = 34;
var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x < y);

// Logical Operators

// Logical and 
// console.log( true && true);
// console.log( false && false);
// console.log( true && false);
// console.log( false && true);

// Logical or 
// console.log( true || true);
// console.log( false || false);
// console.log( true || false);
// console.log( false || true);

// Logical Not
// console.log(!true);
// console.log(!false);

//-----------------------------------------------------Function---------------------------------------------------------------------------------
function avg(a, b) {
    c = (a + b) / 2;
    return c;
}
// DRY = Do not Repeat Yourself
c1 = avg(4, 6);
c2 = avg(14, 16);
// console.log(c1,c2);


// Conditionals in java-script
/*var age = 41;

// Single  Statement
// if (age  > 18){
//      console.log('You can Drink rasna water');
//  }

 // if-else  statement
// if (age  > 18){
//     console.log('You can Drink rasna water');
// }
// else{
//     console.log('You cannot drink rasna water');
// }

age = 25;
// if-else ladder 
if(age > 32){
    console.log("You are not a kid");
}
else if(age > 26){
    console.log("Baacha nhi raha");
}
else if(age > 22){
    console.log("yes Baacha nhi raha");
}
else if(age > 18){
    console.log("18 Baacha nhi raha");
}
else {
    console.log("Baache rhe");
}
console.log("end of ladder")
*/

// -----------------------------------------------------------LOOPS-----------------------------------------------------------------------
var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for (var i = 0; i < arr.length; i++) {
//     if (i == 2) {
//         // break;
//         continue;
//     }
//     console.log(arr[i]);
// }

// arr.forEach(function(element){
//     console.log((element));
// })

// const ac = 0;
// ac++; ---> cannot change bcz it is constant
// ac = ac + 1;

let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

// do {
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);

let myArr = ["Fan", "Camera", 34, null, true];
// Array Methods
// myArr.pop();
// myArr.push("ankit");
// console.log(myArr.length);
// myArr.shift();
// const newlen = myArr.unshift("ankit");
// console.log(newlen);
// console.log(myArr);


// String Methods in Java-script
let mystring = "Ankit is a good good boy";
// console.log(mystring.length);
// console.log(mystring.indexOf('good'));
// console.log(mystring.lastIndexOf('good'));

// Slicing
// console.log(mystring.slice(1,5));
d = mystring.replace("Ankit", "Aman");
// d = d.replace("good","bad");
// console.log(mystring,d);

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

// ---------------------------------------DOM_Manipulation----------------------------------------------------
let elem = document.getElementById('click');
// console.log(elem);

let elemClass = document.getElementsByClassName("container");
// console.log(elemClass);
// elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary");
// elemClass[0].classList.add("text-success");
elemClass[0].classList.remove("text-success");
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

// tn = document.getElementsByTagName('button');
tn = document.getElementsByTagName('div');
// console.log(tn);
createElement = document.createElement('p');
createElement.innerText = "This is a created para";
tn[0].appendChild(createElement);
createElement2 = document.createElement('b');
createElement2.innerText = "This is a created bold";
tn[0].replaceChild(createElement2, createElement);
// removeChild(element);---> removes an element 

// Selecting using query
// sel = document.querySelector(".container");
// console.log(sel);
// sel = document.querySelectorAll(".container");
// console.log(sel);

// function clicked() {
//     console.log("The button was Clicked");
// }
// window.onload = function () {
//     console.log("The document was onload");
// }
// ---------------------------------------------Event in Java-Scripts---------------------------------
// firstcontainer.addEventListener('click', function () {
//     document.querySelectorAll('.container')[1].innerHTML = "<b> we have clicked </b>"
//     console.log("clicked on container");
// })
// firstcontainer.addEventListener('mouseover', function () {
//     console.log("Mouse hover hua container pe");
// })
// firstcontainer.addEventListener('mouseout', function () {
//     console.log("mouse out of container");
// })
// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstcontainer.addEventListener('mouseup', function () {
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("mouse up when click on container");
// })
// firstcontainer.addEventListener('mousedown', function () {
//     document.querySelectorAll('.container')[1].innerHTML = "<b> we have clicked </b>";
//     console.log("mouse down when click on container");
// })

// Arrow Function------------------
// function summ(a,b){
//     return a+b;
// }
// summ = (a,b)=>{
//     return a+b;
// }

logKaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired </b>"
    console.log("I am your log")
}
// SetTimeout and SetInterval 
// clr = setTimeout(logKaro,5000);
// clearTimeout(clr);
// clr = setInterval(logKaro,2000);
// clearInterval(clr);

// -----------------------------------------------------localStorage--------------------------------------------
// localStorage.setItem('name','harry')
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear();

//---------------------------------------------Json---------------------------------------------------------------
// obj = {name:"Harry",length:1,a:{this:'tha"t'}}
// jso = JSON.stringify(obj);
// console.log(jso)
// console.log(typeof(jso))
// parsed = JSON.parse(`{"name":"Harry","length":1,"a":{"this":"that"}}`)
// console.log(parsed);

//Template literals -- Backticks
a = 34;
console.log(`This is my ${a}`)












