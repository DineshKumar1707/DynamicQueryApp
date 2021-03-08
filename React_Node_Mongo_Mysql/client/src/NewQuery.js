import React, { useState } from 'react';
import axios from 'axios';
import "./style.css";


function NewQuery() {

    const [name, setName] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [age, setAge] = useState(0);
    const [insertQuery, setInsertQuery] = useState('');
    const [selectQuery, setSelectQuery] = useState('');

    const addToList = () => {
        axios.post('http://localhost:8080/api/save', {
            name: name,
            insertQuery: insertQuery,
            selectQuery: selectQuery
        });
    };

    const addInsertQuery = () => {
      axios.post('http://localhost:8080/api/mysqlcreate', {
        firstname: firstname,
        lastname: lastname,
        age: age,
        insertQuery: insertQuery
      })
    }

  return (

    <div className="NewQuery">
      <h1>Create Your Query Here</h1>
      <label>Name</label>
      <input type="text" onChange={(event) => {setName(event.target.value)}} />
      <label>Insert Query</label>
      <input type="text" onChange={(event) => {setInsertQuery(event.target.value)}} />
      <label>Select Query</label>
      <input type="text" onChange={(event) => {setSelectQuery(event.target.value)}} />
      <button onClick={addToList}>SAVE</button>
      <label>First Name</label>
      <input type="text" onChange={(event) => {setFirstName(event.target.value)}} />
      <label>Last Name</label>
      <input type="text" onChange={(event) => {setLastName(event.target.value)}} />
      <label>Age</label>
      <input type="text" onChange={(event) => {setAge(event.target.value)}} />
      <button onClick={addInsertQuery}>Insert Query</button>

    </div>
   );
}


export default NewQuery;
