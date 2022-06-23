import React from 'react';
import { Paper } from "@material-ui/core";
import Table from "react-bootstrap/Table";
const Tables =()=>{
    fetch("http://localhost:8084/getmenu/monday",{
        method:"GET",
    })
        .then((response) => response.json())
        .then((responseData)=>{
            console.log(responseData);
            
            // breakfastcount = responseData[0];
            // bitem1 = responseData[1][0];
            // bitem2 = responseData[1][1];
            // bitem3 = responseData[1][3];
            // bitem3 = responseData[1][4];
            document.getElementById("litem1").innerText = responseData[0][1][0];
            console.log(responseData[0][1][0]);
            document.getElementById("litem2").innerText = responseData[1][1];
            document.getElementById("litem3").innerText = responseData[1][2];
        })
        return(
           <>
           <Paper>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>DISH NO.</th>
              <th colSpan={2}>BREAKFAST</th>
              <th colSpan={2}>LUNCH</th>
              <th colSpan={2}>DINNER</th>
            </tr>
          </thead>

          <thead>
            <tr>
              <th></th>
              <th>Items</th>
              <th>calories</th>
              <th>Items</th>
              <th>calories</th>
              <th>Items</th>
              <th>calories</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td><span  id="litem1"></span></td>
              <td>10</td>
              <td>Otto</td>
              <td>20</td>
              <td>@mdo</td>
              <td>30</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>10</td>
              <td>Thornton</td>
              <td>10</td>
              <td>@fat</td>
              <td>10</td>
            </tr>
          </tbody>
        </Table>
      </Paper>
      
           </>
        );
}
export default Tables;