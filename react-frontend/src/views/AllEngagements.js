import react, { useState, useEffect } from 'react';
import axios from 'axios';

import AddEngagement from '../components/AddEngagement';

function AllEngagements() {

    const [listOfEngagements, setListOfEngagements] = useState([]);

    const [sortedField, setSortedField] = useState(null);

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
                <h5>Engagements</h5>
            </div>
            <div className="page-content">
                <div className="tab-list">
                    <table>
                        <thead>
                            <tr>
                                <th onClick={() => setSortedField('id')}>id</th>
                                <th onClick={() => setSortedField('name')}>name</th>
                                <th onClick={() => setSortedField('client')}>client</th>
                                <th onClick={() => setSortedField('employee')}>employee</th>
                                <th onClick={() => setSortedField('started')}>started</th>
                                <th onClick={() => setSortedField('description')}>description</th>
                                <th onClick={() => setSortedField('')}>ended</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listOfEngagements.map((value, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{value.id}</td>
                                        <td>{value.name}</td>
                                        <td>{value.client}</td>
                                        <td>{value.employee}</td>
                                        <td>{value.started}</td>
                                        <td>{value.description}</td>
                                        <td></td>
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