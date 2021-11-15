import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

import AddEngagement from '../components/AddEngagement';

function AllEngagements() {

    const [listOfEngagements, setListOfEngagements] = useState([]);

    const [sortedField, setSortedField] = useState(null);

    let navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3001/engagements")
        .then((response) => {
            if (!response.data){
                alert("No Engagements Found!");
            } else {
                setListOfEngagements(response.data);
            }
        })
    }, []);

    if (sortedField !== null){
        listOfEngagements.sort((a, b) => {
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
                <h2>Engagements</h2>
            </div>
            <div className="page-content">
                <div className="tab-list">
                    <table>
                        <thead>
                            <tr>
                                <th onClick={() => setSortedField('id')}>ID</th>
                                <th onClick={() => setSortedField('name')}>Name</th>
                                <th onClick={() => setSortedField('client')}>Client ID</th>
                                <th onClick={() => setSortedField('employee')}>Employee ID</th>
                                <th onClick={() => setSortedField('started')}>Started</th>
                                <th onClick={() => setSortedField('description')}>Description</th>
                                <th onClick={() => setSortedField('ended')}>Ended</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listOfEngagements.map((value, key) => {
                                return (
                                    <tr key={key}>
                                        <td onClick={() => {navigate(`/engagement/${value.id}`)}}>{value.id}</td>
                                        <td onClick={() => {navigate(`/engagement/${value.id}`)}}>{value.name}</td>
                                        <td onClick={() => {navigate(`/client/${value.client}`)}}>{value.client}</td>
                                        <td onClick={() => {navigate(`/employee/${value.employee}`)}}>{value.employee}</td>
                                        <td>{value.started}</td>
                                        <td>{value.description}</td>
                                        <td>{value.ended}</td>
                                    </tr>
                                )
                            })}
                            
                        </tbody>
                    </table>
                </div>
                <AddEngagement />
            </div>
        </div>
    )
}

export default AllEngagements