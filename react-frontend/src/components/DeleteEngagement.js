import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DeleteEngagement(props) {

    const [id, setId] =  useState();

    useEffect(() => {
        if (!props.id) {
            console.log("Missing prop ID!");
            alert("Cannot Find Engagement");
        } else {
            console.log("Found Engagement");
            setId(props.id);
        }
    }, [props]);

    const deleteEngagement = (id) => {
        axios.delete(`http://localhost:3001/engagements/${id}`)
        .then((response) => {
            if (!response.data){
                console.log("Error Deleting Engagement");
            } else {
                console.log(response.data);
                alert("Engagement Deleted Successfully");
            }
        })
    };

    return (
        <div>
            <div className="page-content sub-content">
                <div className="formBox">
                    <h5> Delete Engagement</h5>
                    <form>
                        {!props.id ? 
                            <input 
                                type="text"
                                placeholder="Enter Engagement ID"
                                onChange={(e) => {
                                    setId(e.target.value)
                            }}/> 
                            : <></> 
                        }
                        <button type="submit" className="rainbowButton" onClick={() => {deleteEngagement(id)}}><span>Delete</span></button>
                    </form>    
                </div>
            </div>      
        </div>
    )
}

export default DeleteEngagement
