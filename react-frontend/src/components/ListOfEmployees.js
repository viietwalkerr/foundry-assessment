import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import CreateNewEmployee from '../views/CreateNewEmployee';

function ListOfEmployees() {

    const [listOfEmployees, setListOfEmployees] = useState([]);
    const [sorted, setSorted] = useState(false);
    
    const[sortedField, setSortedField] = useState(null);

    let navigate = useNavigate();

    // const tableRef = useRef();

    useEffect(() => {
        axios.get("http://localhost:3001/employees")
        .then((response) => {
            if (!response.data) {
                alert("No Employees Found!");
            } else {
            // console.log(response.data);
            // console.log(response);
                setListOfEmployees(response.data);
            }
        });
            
        // const tableElement = tableRef.current;
        // console.log(tableElement);
    }, [])

    const sort = () => {

        // if (sortedField !== null) {
        //     listOfEmployees.sort((a, b) => {
        //         if (a[sortedField] < b[sortedField]){
        //             return -1;
        //         }
        //         if (a[sortedField] > b[sortedField]){
        //             return 1;
        //         }
        //         return 0;
        //     });
        // }
        // setListOfEmployees(listOfEmployees);

        listOfEmployees.sort(function(a, b) {
            var empA = a.name.toUpperCase();
            var empB = b.name.toUpperCase();
            return (empA < empB) ? -1 : (empA > empB) ? 1 : 0;
        });
        console.log(listOfEmployees);
        setListOfEmployees(listOfEmployees);
        setSorted(true);
    }

    if (sortedField !== null) {
            listOfEmployees.sort((a, b) => {
                if (a[sortedField] < b[sortedField]){
                    return -1;
                }
                if (a[sortedField] > b[sortedField]){
                    return 1;
                }
                return 0;
            });
        }

    // const sortTable = (n) =>{
    //     var table 
    //     var rows, switching, i, x, y, shouldSwitch, dir, switchcount;
    //     // table = document.getElementById("tableData");

    //     const tableElement = tableRef.current;
    //     console.log(tableElement);

    //     switching = true;

    //     dir = "asc";

    //     while (switching) {
    //         switching = false;
    //         // rows = table.rows;
    //         rows = tableElement.rows

    //         for (i=1; i < (rows.length - 1); i++){
    //             shouldSwitch = false;
    //             x = rows[i].getElementsByTagName("td")[n];
    //             y = rows[i+1].getElementsByTagName("td")[n];

    //             if (dir == "asc"){

                
    //                 if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
    //                     shouldSwitch = true;
    //                     break;
    //                 }
    //             } else if (dir == "desc"){
    //                 if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()){
    //                     shouldSwitch = true;
    //                     break;
    //                 }
    //             }
    //         }
    //         if (shouldSwitch){
    //             rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
    //             switching = true;
    //             switchcount++;
    //         } else {
    //             if (switchcount == 0 && dir == "asc"){
    //                 dir = "desc";
    //                 switching = true;
    //             }
    //         }
    //     }
    // }

    return (
        <div>
            <div className="page-heading">
                <h2> Employees </h2>
            </div>
            <div className="page-content">
                <div className="tab-list">
                        <table id="tableData" >
                            <thead>
                                {sorted === false ? 
                            <tr>
                                <th onClick={() => setSortedField('id')}>ID:</th>
                                <th onClick={() => setSortedField('name')}>Name:</th>
                            </tr> : 
                            <tr>
                                <th >Name:</th>
                                <th>ID:</th>
                            </tr>
                            }
                            </thead>
                            <tbody>
                                
                            {listOfEmployees.map((value, key) => {
                                return (
                                    <tr key={key} onClick={() => {navigate(`/employee/${value.id}`)}}>
                                        {sorted === false ? <>  
                                            <td>
                                                {value.id}
                                            </td>
                                            <td>
                                                {value.name}
                                            </td>
                                        </> : <>
                                            <td> {value.name}</td>
                                            <td>{value.id}</td>
                                        </>}
                                    </tr> 
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                <div className="page-heading">    
                    <h5> Sort Employees </h5>
                </div>
                <button className="rainbowButton" onClick={sort}>
                    <span>
                        Sort by Name
                    </span>
                </button>

                <CreateNewEmployee />
            </div>
            {/* <EditEmployee />
            <DeleteEmployees /> */}
        </div>
    )
}

export default ListOfEmployees
