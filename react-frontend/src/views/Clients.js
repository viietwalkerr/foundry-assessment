import React, { useState, useEffect } from 'react';
import axios from 'axios';




function Clients() {

    const [listOfClients, setListOfClients] = useState([]);

    useEffect(()=> {
        axios.get("http://localhost:3001/clients")
        .then((response)=> {
            if(response.data.error){
                console.log(response.data.error);
            } else {
                setListOfClients(response.data);
            }
            
        })
    }, [])

    return (
        <div>
            <div className="page-heading">
                <h2> Clients </h2>
            </div>
            <div className="page-content">
                <div className="tab-list">
                    
                </div>
            </div>
        </div>
    )
}

export default Clients