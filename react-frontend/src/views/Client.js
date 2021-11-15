import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

import EditClient from '../components/EditClient';
import DeleteClient from '../components/DeleteClient';
import EngagementsProfile from '../components/EngagementsProfile';

function Client() {

    let { id } = useParams();
    const [client, setClient] = useState([]);

    let navigate = useNavigate();

    useEffect(()=> {
        axios.get(`http://localhost:3001/clients/${id}`)
        .then((response) => {
            if (!response.data){
                navigate('/all-clients');
            } else {
                console.log(response.data);
                setClient(response.data);
            }
        })
    }, [id, navigate])

    return (
        <div>
            <div className="page-heading">
                <h5>Client</h5>
            </div>
            <div className="page-content">
                <div className="tab-list">
                    <table>
                        <thead>
                            <tr>
                                <th>Client ID</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{client.id}</td>
                                <td>{client.name}</td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
                <EngagementsProfile id={id} type="client"/>
                <EditClient id={id} />
                <DeleteClient id={id} />
            </div>
        </div>
    )
}

export default Client