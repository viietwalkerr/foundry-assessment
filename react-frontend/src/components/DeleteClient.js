import React, {useEffect, useState} from 'react';
import axios from 'axios';

function DeleteClient(props) {

    const [id, setId] = useState();

    useEffect(()=> {
        if (!props){
            console.log("Props missing!");
        } else {
            console.log("Props Found!");
            setId(props.id);
        }
    }, []);

    const deleteClient = (id) => {
        axios.delete(`http://localhost:3001/clients/${id}`)
        .then((response) => {
            if (response.data.error){
                console.log(response.data.error);
            } else {
                console.log(response.data);
                alert("Client Deleted Successfully!");
            }
        })
    };

    return (
        <div>
           <div className="formBox">
                <h5>Delete Client</h5>
                <form>
                    {!props.id ?
                        <input
                            type="text"
                            placeholder="Client ID"
                            onChange={(e) => {
                                setId(e.target.value)
                            }}
                        >
                        </input>
                    : <></>}
                    <button type="submit" className="rainbowButton" onClick={() => {deleteClient(id)}}><span>Delete Client</span></button>

                </form>
            </div> 
        </div>
    )
}

export default DeleteClient
