import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

import EditEngagement from '../components/EditEngagement';
import DeleteEngagement from '../components/DeleteEngagement';

function Engagement() {

    const { id } = useParams();
    const [engagement, setEngagement] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3001/engagements/${id}`)
        .then((response) => {
            if (response.data){
                setEngagement(response.data);
            } else {
                navigate('/all-engagements');
                alert("Cannot find engagement");

            }
        })
    }, [id])

    return (
        <div>
            <div className="page-heading">
                
                    <h5>Engagement</h5>
            </div>
            <div className="page-content">
                <div className="tab-list">
                    <table>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>client</th>
                                <th>employee</th>
                                <th>started</th>
                                <th>description</th>
                                <th>ended</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{engagement.id}</td>
                                <td>{engagement.name}</td>
                                <td>{engagement.client}</td>
                                <td>{engagement.employee}</td>
                                <td>{engagement.started}</td>
                                <td>{engagement.description}</td>
                                <td>{engagement.ended}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <EditEngagement id={id} />
                <DeleteEngagement id={id} />
            </div>
        </div>
    )
}

export default Engagement
