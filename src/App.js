import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [user,setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  })
  
  return (
    <div className="App">
      <p>Hello From Js</p>
      <div className="container">
      {
        user.map(user => <Display name={user.name} email={user.email} phone={user.phone} address={user.address} ></Display>)
      }
      </div>
    </div>
  );
}


function Display(props){
  const {name,email,phone,address} = props;
  const {zipcode,city,street} =address;
  return(
    <div>
      <div>
        <div className="user">
            <h2>Name:{name}</h2>
            <p>Phone:{phone}</p>
            <p>Email:{email}</p>
            <City City={city} ZipCode={zipcode} Street={street}></City>
        </div>
      </div>
    </div>
  )
}
function City(props){
  const {City,ZipCode,Street} = props;
  return(
    <div>
      <h2>Address</h2>
    <p>City: {City}</p>
    <p>Street: {Street}</p>
    <p>ZipCode: {ZipCode} </p>
    </div>
  )
}
export default App;
