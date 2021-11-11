import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

import AddClient from '../components/AddClient';




function Clients() {

    const [listOfClients, setListOfClients] = useState([]);

    let navigate = useNavigate();

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
                    <table>
                        <thead>
                            <tr>
                                <th>ID: </th>
                                <th>Name: </th>
                            </tr>
                        </thead>
                        <tbody>
                            {listOfClients.map((value, key) => {
                                return (
                                    <tr key={key} onClick={() => {navigate(`/client/${value.id}`)}}>
                                        <td>
                                            {value.id}
                                        </td>
                                        <td>
                                            {value.name}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <AddClient />

            </div>
        </div>
    )
}

export default Clients