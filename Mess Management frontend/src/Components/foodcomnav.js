import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button"; 
import { Dropdown } from 'react-bootstrap';
const Foodcomnav=()=>{
    return(
        <>
        <div style={{ width:"1400px"}}>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="foodcom" style={{paddingleft:"50px" ,margin:"10px"}}>  Hey Foodcomm</Navbar.Brand> 

           
        <table>
          <tr>
          <td>
          <Button href="foodcom" style={{margin:"10px"}} variant="success" size="sm">
            Setmenu
           </Button>
           </td>
            <td>
          <Button href="setmesstime" style={{margin:"10px"}} variant="success" size="sm">
            Settime
           </Button>
           </td>
           <td>
           <Button href="setinstruction" style={{margin:"10px"}} variant="success" size="sm">
            Setinstruction
           </Button>
           </td>
           <td>
            <Button href="login" style={{margin:"10px"}} variant="success" size="sm">
            LOGOUT
           </Button>
           </td>
           </tr>
           </table>
          </Navbar>
        </div>
        </>
    )
}
export default Foodcomnav;