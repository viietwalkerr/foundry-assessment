import react, { useState } from 'react';
import axios from 'axios';

function AddEngagement() {

    const [name, setName] = useState();
    const [client, setClient] = useState();
    const [employee, setEmployee] = useState();
    const [description, setDescription] = useState();

    const add = () => {
        const data = {
            name: name, 
            client: client, 
            employee: employee,
            description: description
        };

        axios.post("http://localhost:3001/engagements", data)
        .then((response) => {
            if (response.data.error){
                console.log(response.data.error);
            } else {
                console.log("Added Engagement with: " + client + " and " + employee);
            }
        })
    }

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
                    <input
                        type="text"
                        placeholder="Client ID"
                        onChange={(e) => {
                            setClient(e.target.value);
                        }}
                    >
                        
                    </input>
                    <input
                        type="text"
                        placeholder="Employee ID"
                        onChange={(e) => {
                            setEmployee(e.target.value);
                        }}
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