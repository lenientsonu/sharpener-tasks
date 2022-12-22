// document.title = 'Title changed';

// let headerTitle = document.getElementById('header-title');

// console.log(headerTitle.textContent);

// headerTitle.style.borderBottom = 'solid 3px #000';

// let addTitle = document.querySelector('.title');

// addTitle.style.fontWeight = 'bold';

// addTitle.style = 'color:green';

// let items = document.getElementsByClassName('list-group-item');
// console.log(items);

// items[2].style.backgroundColor = 'green';

// for(let i of items)
// {
// 	i.style.fontWeight = 'bold';
// }


// let items = document.getElementsByClassName('list-group-item');

// items[3].style.color = 'red';

// //gives error because new li does not have classname
// //items[4].style.color = 'red';

// let li = document.getElementsByTagName('li');

// li[4].style.color = 'red';


//task 6 
// using queryselector
// 1. Make the 2nd item have green background color
// 2. Make the 3rd item invisible

// using queryselectorall
// 1. Using QuerySelectorALL change the font color to green for 2nd item in the item list
// 2. Choose all the odd elements and make their background green using QuerySelectorALL﻿
// 3. What is the difference between queryselector and queryselectorall?

//code for 1 & 2 queryselector
// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';

// let thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display = 'none';

//code for queryselectorall

// let li = document.querySelectorAll('.list-group-item');
// li[1].style.color = 'green';

// let odd = document.querySelectorAll('li:nth-child(odd)');

// for (let i of odd){
// 	i.style.backgroundColor = 'green';
// }


//traversing the dom //

//let itemList = document.querySelector('#items');

//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';

//childNodes
// console.log(itemList.childNodes);

//children
// console.log(itemList.children[1]);

//firstChild & lastChild
// console.log(itemList.firstChild);

//firstElementChild & lastElementChild
// console.log(itemList.firstElementChild);

// //nextSibling & nextElementSibling
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

// //previousSibling & previousElementSibling
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);

//createElement
let newDiv = document.createElement('div');

//add class
newDiv.className = 'hello';

//add id
newDiv.id = 'hello1';

//add attr
newDiv.setAttribute('title','Hello div');

//create text node
let newDivText = document.createTextNode('Hello World');

// add text to div
newDiv.appendChild(newDivText);

// console.log(newDiv);

//inserting hello world before Item Lister
let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');

container.insertBefore(newDiv,h1);

//inserting hello world before Item 1
let ul = document.querySelector('ul');
let li = document.querySelector('li');
ul.insertBefore(newDiv,li);