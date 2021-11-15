import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditEngagement(props) {

    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [id, setId] = useState();

    useEffect(() => {
        if (!props) {
            console.log("No Engagement ID Found!");
        } else {
            setId(props.id);
        }
    }, [props]);

    const edit = () => {

        const data = {name: name, description: description}

        axios.put(`http://localhost:3001/engagements/${id}`, data)
        .then((response) => {
            if (response.data.error){
                alert(response.data.error);
            } else {
                alert(response.data);
                alert("Engagement Edited Successfully");
            }
        })

    }

    return (
        <div>
            
                <div className="formBox">
                    <h5>Edit Engagement</h5>
                    <form>
                    <input 
                        type="text"
                        placeholder="Enter New Engagement Name"
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    <input 
                        type="text" 
                        placeholder="Enter New Description"
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                    />
                    
                    <button type="submit" className="rainbowButton" onClick={edit}><span>Edit</span></button>
                    </form>
                </div>
            
        </div>
    )
}

export default EditEngagement