import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


function Query() {


  const [queryList, setQueryList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/read').then((response) => {
            setQueryList(response.data);
        })
    }, [])

    const execute = (id) => {
      axios.post('http://localhost:8080/api/mysqlcreate');
    };

  return (

    <div className="Query">
      <h1>Queries List</h1>
        {queryList.map((val, key) => {
        return <div key={key} className="queries">
        <h1> {val.name} </h1>
        <Link to='/query'><Button onClick={() => execute(val._id)}>Open</Button></Link>
      </div>
    })}
    </div>
   );
}


export default Query;
