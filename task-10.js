
const form = document.querySelector("form");
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
    
    //setting the constant values in local storage
    // localStorage.setItem('name',name);
    // localStorage.setItem('email',email);
    // localStorage.setItem('phone',phone);
    // localStorage.setItem('passwd',passwd);
    //setting the user details int the local storage as an object
    localStorage.setItem('userDetails',userDetails_serialized);
    
    //setting the const/input values in seesion storage
    // sessionStorage.setItem('name',name);
    // sessionStorage.setItem('email',email);
    // sessionStorage.setItem('phone',phone);
    // sessionStorage.setItem('passwd',passwd);
    //setting cookies
    //document.cookie = 'name=name';
}

