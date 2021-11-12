import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

import AddClient from '../components/AddClient';




function Clients() {

    const [listOfClients, setListOfClients] = useState([]);
    const [sorted, setSorted] = useState(false);

    const [sortedField, setSortedField] = useState(null);

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

    const sort = () => {
        listOfClients.sort(function(a, b) {
            var clientA = a.name.toUpperCase();
            var clientB = b.name.toUpperCase();
            return (clientA < clientB) ? -1 : (clientA > clientB) ? 1 : 0;
        });
        setListOfClients(listOfClients);
    }

    if (sortedField !== null){
        listOfClients.sort((a, b) => {
            if (a[sortedField] < b[sortedField]){
                return -1;
            }
            if (a[sortedField] > b[sortedField]){
                return 1;
            }
            return 0;
        });
    }

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
                                <th onClick={() => setSortedField('id')}>ID: </th>
                                <th onClick={() => setSortedField('name')}>Name: </th>
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