//get the form and ul(list) in variables
let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

//form submit event => add a list item of input of form
form.addEventListener('submit', addItem);
//delete button event => delete the list item whose button is clicked
itemList.addEventListener('click', removeItem);
//searchbar(filter) event
filter.addEventListener('keyup', filterItems);

//function addItem for form submit event to add item in list
function addItem(e){
    e.preventDefault();

    //get input value
    let newItem = document.getElementById('item').value;
    //create new li element & add class to that li
    let li = document.createElement('li');
    li.className = 'list-group-item';
    //add text node with input value(newItem)
    li.appendChild(document.createTextNode(newItem));
    //get desc value
    let descInput = document.getElementById('desc').value;
    //add desc text node to new li
    li.appendChild(document.createTextNode("\n"+descInput));
    //create delete button & add class to that delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //adding the text node (x) to the button
    deleteBtn.appendChild(document.createTextNode('X'));
    //add the button to the li
    li.appendChild(deleteBtn);
    //create edit button and add class to that btn
    let editBtn = document.createElement('button');
    editBtn.className = 'btn btn-info btn-sm float-right edit';
    //adding text node(edit) to editBtn
    editBtn.appendChild(document.createTextNode('edit'));
    //add the editBtn to the Li
    li.appendChild(editBtn);
    //add the newItem to itemlist
    itemList.appendChild(li);

}

//function removeitem to deleting the parent list item of button clicked
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are Your Sure?')){
            let deleteLi = e.target.parentElement;
            itemList.removeChild(deleteLi);
        }
    }    
}


//function to filter items from itemList
function filterItems(e){

    //get text from filter search bar & convert to lowercase
    let filterText = e.target.value.toLowerCase();
    //getting the List items(Lis) from listItem(ul)
    let items = itemList.getElementsByTagName('li');
    //convert the items to an array & iterate the array to match the filter text
    Array.from(items).forEach(function(item){
        let itemName = item.childNodes[0].textContent;
        let descName = item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(filterText) != -1 || descName.toLowerCase().indexOf(filterText) != -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    })
}


