import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import CreateNewEmployee from '../views/CreateNewEmployee';
import DeleteEmployees from '../views/DeleteEmployees';
import EditEmployee from '../views/EditEmployee';

function ListOfEmployees() {

    const [listOfEmployees, setListOfEmployees] = useState([]);
    const [sorted, setSorted] = useState(false);

    let navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3001/employees")
        .then((response) => {
            // console.log(response.data);
            // console.log(response);
            setListOfEmployees(response.data);
        });
            
    }, [])

    const sort = () => {
        listOfEmployees.sort(function(a, b) {
            var textA = a.name.toUpperCase();
            var textB = b.name.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
        setListOfEmployees(listOfEmployees);
        setSorted(true);
    }

    return (
        <div>
            <div className="page-heading">
                <h2> Employees </h2>
            </div>
            <div className="page-content">
                <div className="tab-list">
                        <table>
                            <thead>
                                {sorted == false ? 
                            <tr>
                                <th>ID:</th>
                                <th>Name:</th>
                            </tr> : 
                            <tr>
                                <th>Name:</th>
                                <th>ID:</th>
                            </tr>
                            }
                            </thead>
                            <tbody>
                                
                            {listOfEmployees.map((value, key) => {
                                return (
                                    <tr key={key} onClick={() => {navigate(`/employee/${value.id}`)}}>
                                        {sorted == false ? <>  
                                            <td>
                                                {value.id}
                                            </td>
                                            <td>
                                                {value.name}
                                            </td>
                                        </> : <>
                                            <td> {value.name}</td>
                                            <td>{value.id}</td>
                                        </>}
                                    </tr> 
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                <div className="page-heading">    
                    <h5> Sort Employees </h5>
                </div>
                <button onClick={sort}>Sort by Name</button>

                <CreateNewEmployee />
            </div>
            {/* <EditEmployee />
            <DeleteEmployees /> */}
        </div>
    )
}

export default ListOfEmployees
