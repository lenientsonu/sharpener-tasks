// document.title = 'Title changed';

// let headerTitle = document.getElementById('header-title');

// console.log(headerTitle.textContent);

// headerTitle.style.borderBottom = 'solid 3px #000';

// let addTitle = document.querySelector('.title');

// addTitle.style.fontWeight = 'bold';

// addTitle.style = 'color:green';

let items = document.getElementsByClassName('list-group-item');
console.log(items);

items[2].style.backgroundColor = 'green';

for(let i of items)
{
	i.style.fontWeight = 'bold';
}