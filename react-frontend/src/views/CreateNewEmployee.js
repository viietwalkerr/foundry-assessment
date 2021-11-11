import axios from 'axios';
import React, { useState } from 'react';

function CreateNewEmployee() {

    const [name, setName] = useState();

    const submit = () => {
        const data = {name: name};
        axios.post("http://localhost:3001/employees", data)
        .then((response) => {
            console.log(response.data);
            if (response.data.error){
                console.log(response.data.error);
            } else {
                console.log("Success!");

            }
        })
    
    }

    return (
        <div>
            <div className="formBox">
                <div className="page-heading">
                <h5>Add New Employee</h5>
                </div>

                <form>
                    <input
                        type="text"
                        placeholder="Name"
                        onChange={(event) => {
                            setName(event.target.value)
                        }}
                        >
                    </input>
                    <button type="submit" className="submitButton" onClick={submit}>Add Employee</button>
                </form>
            </div>
        </div>
    )
}

export default CreateNewEmployee
