import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditClient(props) {

    const [name, setName] = useState();
    const [id, setId] = useState();

    useEffect(()=> {
        if (!props) {
            console.log("No client ID props");
        } else {
            setId(props.id);
        }
    }, [props]);

    const change = () => {
        const data = {name: name}
        axios.put(`http://localhost:3001/clients/${id}`, data)
        .then((response) => {
           if (response.data.error) {
               console.log(response.data.error);
           } else {
               console.log(response.data);
           }
        })
    }

    return (
        <div>
                <div className="formBox">
                    <h5>Edit Client Name</h5>
                        <form>
                            {props.id ? 
                                <input
                                    type="text"
                                    placeholder="Enter Client ID"
                                    value={props.id}
                                    readOnly={true}
                                    className="transparent"
                                >
                                </input> : 
                                <input
                                    type="text"
                                    placeholder="Enter Client ID"
                                    onChange={(e) => {
                                        setId(e.target.value)
                                    }}
                                >
                                </input>
                            }
                            <input
                                type="text"
                                placeholder="Enter New Client Name"
                                onChange={(e) => {
                                    setName(e.target.value)
                                }}>
                            </input>
                            <button type="submit" className="rainbowButton" onClick={change}><span>Change Name</span></button>
                        </form>
                    </div>
        </div>
    )
}

export default EditClient
