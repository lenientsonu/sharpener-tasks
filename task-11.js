
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
    // //converting the userDetails object into string
    // let userDetails_serialized = JSON.stringify(userDetails);
    // //setting the user details into the local storage as an object
    // localStorage.setItem(userDetails.email,userDetails_serialized);

    //using axios to send this userDetails object in post request to crudcrud
    axios.post('https://crudcrud.com/api/9b3dfd50626e409284bb97d5a111057e/userDetails',userDetails)
    .then((response)=>{
        addUserToScreen(response.data);
        // console.log(response);
    }).catch(err=>console.log(err));


    //calling addUserToScreen func to add the new user object and display on screen
    // addUserToScreen(userDetails);
    
}


function addUserToScreen(object){

    // //checking if the email exist already
    // if(localStorage.getItem(object.email) !== null){
    //     //console.log('exists');
    //     removeUser(object.email);
    // }

    //getting the parent ul & creating a child li
    const ul = document.getElementById('users-list');
    const li = document.createElement('li');
    //adding user details to li 
    li.appendChild(document.createTextNode(object.name+' => '+object.email));
    //adding id to li
    li.id = object.email;
    li.className = 'list-group-item';
    // console.log(li.id);
    //creating delete button & adding to the new li element
    const delBtn = document.createElement('button');
    delBtn.className = 'btn btn-danger btn-sm float-right delete';
    delBtn.appendChild(document.createTextNode('Delete User'));
    li.appendChild(delBtn);
    //creating edit button and addig to new li element
    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-info btn-sm float-right edit';
    editBtn.appendChild(document.createTextNode('edit'));
    li.appendChild(editBtn);
    //adding the created li to ul
    ul.appendChild(li);

    //delete the user(li) from userlist(ul) & from local storage 
    delBtn.addEventListener('click', (e) => {
        localStorage.removeItem(object.email);
        li.remove();
    });

    editBtn.addEventListener('click', (e) => {
        document.getElementById('name').value = object.name;
        document.getElementById('email').value = object.email;
        document.getElementById('phone').value = object.phone;
        document.getElementById('passwd').value = object.passwd;
        li.remove();
    });
}

function removeUser(email){
    
    const parentNode = document.getElementById('users-list');
    const childNodeToBeDeleted = document.getElementById(email);
    if(childNodeToBeDeleted){
        //console.log(childNodeToBeDeleted);
        parentNode.removeChild(childNodeToBeDeleted);
    }
}
