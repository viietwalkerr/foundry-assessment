import react, { useState, useEffect } from 'react';
import axios from 'axios';

function AddClient() {
    
    const [name, setName] =  useState();

    const submit = () => {
        const data = {name: name};
        axios.post("http://localhost:3001/clients", data)
        .then((response) => {
            if (response.data.error) {
                console.log(response.data.error);
            } else {
                console.log(response);
                console.log("Added Client " + name);
            }
            
        })
    }

    return (
        <div>
            <div className="formBox">
                <div className="page-heading">
                    <h5>Add New Client</h5>
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
                    <button type="submit" className="rainbowButton" onClick={submit}>
                        <span>
                            Add Client
                        </span>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddClient