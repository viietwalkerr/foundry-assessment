import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';


function EngagementsProfile(props) {

    const [listOfClientEngagements, setListOfClientEngagements] = useState([]);
    const [listOfEmployeeEngagements, setListOfEmployeeEngagements] = useState([]);

    const [id, setId] = useState();

    let navigate = useNavigate();

    useEffect(() => {
        if (!props.id){
            console.log("No Props ID found");
        } else {
            setId(props.id);
        }

        if (props.type) {
            if (props.type === "client"){
                axios.get(`http://localhost:3001/clients/${id}/engagements`)
                .then((response) => {
                    if (!response.data) {
                        console.log("No Engagements Found For Client");
                    } else {
                        setListOfClientEngagements(response.data);
                    }
                })
            }
            if (props.type === "employee"){
                axios.get(`http://localhost:3001/employees/${id}/engagements`)
                .then((response) => {
                    if (!response.data){
                        console.log("No Engagements Found for Employee");
                    } else {
                        setListOfEmployeeEngagements(response.data);
                    }
                })
            }
        }
        
            
    }, [id]);

    return (
        <div>
            <div className="page-heading">
                <h5>Engagements</h5>
                <div className="tab-list">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Client ID</th>
                                <th>Employee ID</th>
                                <th>Started</th>
                                <th>Description</th>
                                <th>Ended</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.type === "client" ? 
                                <>{listOfClientEngagements.map((value, key) => {
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
                                })}</> : 
                                <>{listOfEmployeeEngagements.map((value, key) => {
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
                                })}</> 
                            }





                            {/* {listOfClientEngagements.map ((value, key) => {
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
                            })} */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default EngagementsProfile
