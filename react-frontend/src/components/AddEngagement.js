import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddEngagement() {

    const [name, setName] = useState();
    const [clientId, setClientId] = useState("");
    const [employeeId, setEmployeeId] = useState("");
    const [description, setDescription] = useState();

    const [listOfClients, setListofClients] = useState([]);
    const [listOfEmployees, setListOfEmployees] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/clients")
        .then((response) => {
            if (response.data) {
                setListofClients(response.data);
                console.log(response.data);
                console.log("WHAT");
            } else {
                alert("Error Clients");
            }
        })

        axios.get("http://localhost:3001/employees")
        .then((response) => {
            if (response.data) {
                setListOfEmployees(response.data);
            } else {
                alert("Error Employees");
            }
        })
    }, []);

    const add = () => {
        const data = {
            name: name, 
            client: clientId, 
            employee: employeeId,
            description: description
        };

        axios.post("http://localhost:3001/engagements", data)
        .then((response) => {
            if (response.data.error){
                console.log(response.data.error);
            } else {
                console.log("Added Engagement with: " + clientId + " and " + employeeId);
            }
        })
    };

    const clientSelection = (val) => {
        console.log(val);
        listOfClients.map((value)=> {
            if (value.id === val){
                setClientId(value.id);
                console.log(value.id);
                
            }
        })

        // setClientId(listOfClients.map((value) => {
        //     if (value.name === val){
        //         console.log(value.id)
        //         return value.id;
        //     }
        // }))
    };

    const employeeSelection = (val) => {
        console.log(val);
        listOfEmployees.map((value)=> {
            if (value.id === val){
                setEmployeeId(value.id)
                console.log(value.id);
            }
        })
    };

    return (
        <div>
            <div className="formBox">
                <div className="page-heading">
                    <h5>Add New Engagement</h5>
                </div>
                <form>
                    <input
                        type="text"
                        placeholder="Engagement Name"
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    >

                    </input>
                    <select onChange={(e)=> {
                        clientSelection(e.target.value)
                    }}>
                            <option value="">Select Client</option>
                    {listOfClients.map((value, key) => {
                        return (
                                <option key={key} value={value.id}>{value.name}</option>
                            )
                    })}
                    </select>
                    <input
                        type="text"
                        placeholder="Client ID (Auto-filled)"
                        // onChange={(e) => {
                        //     setClient(e.target.value);
                        // }}
                        readOnly={true}
                        value={clientId}
                        
                        
                    >
                        
                        
                    </input>
                        <select onChange={(e) => {
                            employeeSelection(e.target.value)
                        }}>
                            <option>Select Employee</option>
                            {listOfEmployees.map((value, key) => {
                                return (
                                    <option key={key} value={value.id}>{value.name}</option>
                                )
                            })}
                        </select>
                    <input
                        type="text"
                        placeholder="Employee ID (Auto-filled)"
                        // onChange={(e) => {
                        //     setEmployee(e.target.value);
                        // }}
                        readOnly={true}
                        value={employeeId}
                    >
                        
                    </input>
                    
                    <input
                        type="text"
                        placeholder="Engagement Description"
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                    >
                        
                    </input>
                    <button type="submit" className="rainbowButton" onClick={add}><span>Submit</span></button>
                </form>
            </div>
        </div>
    )
}

export default AddEngagement