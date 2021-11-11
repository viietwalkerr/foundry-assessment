import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Engagements() {
    const [listofEngagements, setListOfEngagements] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001")
        .then((response)=> {
            if (response.data.error){

            } else {
                console.log(response.data);
                setListOfEngagements(response.data);
            }
        })
    })

    return (
        <div>
            <h2>Engagements</h2>
        </div>
    )
}

export default Engagements
