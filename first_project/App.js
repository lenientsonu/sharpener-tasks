import React,{useState} from 'react';
import './App.css';
import UserForm from './components/UserForm';
import Users from './components/Users';

const userList = [];
function App() {

  const [users, setUserList] = useState(userList);
  
  const getUserDetails = (userDetails) => {
    // console.log(userDetails);
    setUserList((prevUserList) =>{
      return [...prevUserList,userDetails];
    });
  };

  return (
  <div>
  <UserForm user={getUserDetails} />
  <h3>Users</h3>
  <Users users={users}/>
  </div>
  );
}

export default App;
