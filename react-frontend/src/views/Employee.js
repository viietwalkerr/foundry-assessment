import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


import EditEmployee from './EditEmployee';
import DeleteEmployees from './DeleteEmployees';
import EngagementsProfile from '../components/EngagementsProfile';


function Employee() {

    let { id } = useParams();
    const [employee, setEmployee] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3001/employees/${id}`)
        .then((response) => {
            if (!response.data){
                console.log(response.data.error);
                console.log("User could not be found!");
                navigate('/all-employees');
                
            } else {
                console.log(response.data);
                setEmployee(response.data);
                console.log("data?");
                console.log(response);
            }

            
        })
    }, [id, navigate]);
    
    return (
        <div>
            <div className="page-heading">
            <h5>Employee</h5>
            </div>
            <div className="page-content">
            <div className="tab-list">
            <table>
                <thead>    
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <EngagementsProfile id={id} type="employee" />
            <EditEmployee id={id}/>
            <DeleteEmployees id={id} />
            </div>
        </div>
    )
}

export default Employee