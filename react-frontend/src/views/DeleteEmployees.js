import axios from 'axios';
import React, { useState, useEffect } from 'react';

function DeleteEmployees(props) {

    const [id, setId] = useState();

    useEffect(() => {
        if (!props){
            console.log("Props missing!");
        } else {
            console.log("Props Found!");
            setId(props.id);
        }
    })

    const deleteEmp = (id) => {
        axios.delete(`http://localhost:3001/employees/${id}`)
        .then((response) => {
            console.log(response.data);
            if (response.data.error){
                alert(response.data.error);
            } else {
                alert("Employee Deleted Successfully!");
            }
        })
    }

    return (
        <div>
            <div className="formBox">
                <h5>Delete Employee </h5>
                <form>
                    {!props.id ?  
                    <input
                        type="text"
                        placeholder="User ID"
                        onChange={(event) => {
                            setId(event.target.value)
                        }}
                    > 
                    </input>
                    : <></>}
                    <button type="submit" className="rainbowButton" onClick={() => {deleteEmp(id)}}><span>Delete</span></button>
                </form>
            </div>
        </div>
    )
}

export default DeleteEmployees