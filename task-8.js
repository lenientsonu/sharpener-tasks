//get the form and ul(list) in variables
let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

//form submit event => add a list item of input of form
form.addEventListener('submit', addItem);
//delete button event => delete the list item whose button is clicked
itemList.addEventListener('click', removeItem);

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