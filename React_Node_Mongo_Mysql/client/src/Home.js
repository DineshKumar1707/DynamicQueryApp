import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Home() {

  const [details, setDetails] = useState([]);


  const retrieve = () => {
    axios.post('http://localhost:8080/api/mysqlread').then((response) => {
      setDetails(response.data);
    });
  };

    const [queryList, setQueryList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/read').then((response) => {
            setQueryList(response.data);
        })
    }, [])



  return (

    <div className="Query">
      <h1>Home Page</h1>
      <h1>Queries List</h1>
        {queryList.map((val, key) => {
        return <div key={key} className="queries">
        <h1> {val.name} </h1>
        <button onClick={() => retrieve(val._id)}>Retrieve</button>
      </div>
    })}
    {details.map((val, key) => {
      return<div key={key} className="details">
        <h1> {val.firstname} </h1>
        <h1> {val.lastname} </h1>
        <h1> {val.age} </h1>
      </div>
    })}
    </div>
  
   );
}



export default Home;