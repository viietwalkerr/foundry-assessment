import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';


function EmployeeEngagements(props) {

    const [listOfEmployeeEngagements, setListOfEmployeeEngagements] = useState([]);

    const [id, setId] = useState();

    let navigate = useNavigate();

    useEffect(() => {
        if (!props.id) {
            console.log("No Employee ID Found");
        } else {
            setId(props.id)
        }

        axios.get(`http://localhost:3001/employees/${id}/engagements`)
        .then((response) => {
            if (!response.data){
                console.log("No Engagements Found for Employee");
            } else {
                setListOfEmployeeEngagements(response.data);
            }
        })
    }, [id])

    return (
        <div>
            <div className="page-heading">
                <h5
            </div>
        </div>
    )
}

export default EmployeeEngagements
