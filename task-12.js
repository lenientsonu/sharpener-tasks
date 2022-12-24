
const form = document.querySelector("form");

//adding a event listener when the DOM content being loaded than it gets local storage object and print user details
document.addEventListener('DOMContentLoaded', e =>{

    //getting the keys of local storage object & iterating the keys and parse them in json format
    Object.keys(localStorage).forEach((key) => {
        //getting the objects(user details) from local storage
        stringifiedDetailsOfPeople = localStorage.getItem(key);
        //parsing the object
        detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
        //calling the function to show the local storage object as list items
        addUserToScreen(detailsOfPeople); 
        });
});

// validating to validate the inputs
form.addEventListener('submit', e => {
    if(!form.checkValidity())
    {
        e.preventDefault();
    }
    form.classList.add('was-validated');
})

function onbuttonclick(event)
{      
    //getting the values form input and storing them in constants
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const passwd = document.getElementById('passwd').value;
    //creating a object of user details from input
    let userDetails = {
        'name': name,
        'email': email,
        'phone': phone,
        'passwd': passwd
    };
    //converting the userDetails object into string
    let userDetails_serialized = JSON.stringify(userDetails);
    
    //setting the user details into the local storage as an object
    localStorage.setItem(userDetails.email,userDetails_serialized);
    
    //calling addUserToScreen func to add the new user object and display on screen
    addUserToScreen(userDetails);
    
}


function addUserToScreen(object){

    //getting the parent ul & creating a child li
    const ul = document.getElementById('users-list');
    const li = document.createElement('li');
    //adding user details to li 
    li.appendChild(document.createTextNode(object.name+' => '+object.email));
    //creating delete button & adding to the new li element
    const delBtn = document.createElement('button');
    delBtn.className = 'btn btn-danger btn-sm float-right delete';
    delBtn.appendChild(document.createTextNode('X'));
    li.appendChild(delBtn);
    //creating edit button and addig to new li element
    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-info btn-sm float-right edit';
    editBtn.appendChild(document.createTextNode('edit'));
    li.appendChild(editBtn);
    
    //console.log(li);
    ul.appendChild(li);
}


