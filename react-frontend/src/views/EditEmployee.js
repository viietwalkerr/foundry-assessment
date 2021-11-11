import axios from 'axios';
import React, {useEffect, useState} from 'react';


function EditEmployee(props) {

    const [name, setName] = useState();
    const [id, setId] = useState();

    useEffect(()=> {
        if (!props) {
            console.log("Missing props");
        } else {
            setId(props.id);


        }
    }, [props]);

    const change = () => {
        const data = {name: name}
        axios.put(`http://localhost:3001/employees/${id}`, data)
        .then((response) => {
            console.log(response.data);
            if (response.data.error) {
                alert(response.data.error);
            } else {
                console.log(response.data);
            }
        })
    }

    return (
        <div>
            <div className="formBox">
                <h5> Edit Employee Name </h5>
                <form>
                    {/* <input
                        type="text"
                        placeholder="Enter Employee ID"
                        value={props.id}
                        onChange={(event) => {
                            setId(event.target.value)
                        }}

            
                            
            
                              'readOnly="true" class="transparent"' 
                              ,'className="transparent"'
                            
                    
                        
                    >
                        
                    </input> */}
                    {props.id ? 
                        <input 
                            type="text"
                            placeholder="Enter Employee ID"
                            value={props.id}
                            readOnly={true}
                            className="transparent"
                            
                        >
                        </input> : 
                        <input
                            type="text"
                            placeholder="Enter Employee ID"
                            onChange={(event) => {
                                setId(event.target.value)
                            }}
                        >

                        </input>
                    }
                    <input
                        type="text"
                        placeholder="Enter New Name"
                        onChange={(event) => {
                            setName(event.target.value)
                        }}>
                    </input>
                    <button type="submit" className="rainbowButton" onClick={change}><span>Change Name</span></button>
                </form>
            </div>
        </div>
    )
}

export default EditEmployee