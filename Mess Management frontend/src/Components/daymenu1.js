import React ,{useState,useEffect} from 'react';
import { Paper } from "@material-ui/core";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import {Link} from 'react-router-dom';
import NavBar from './Navbar';
import FeedBack from './feedback2';
import Footermail from './footermail';
import axios from 'axios';
import Button from "react-bootstrap/Button";
const Daymenu1=()=>{
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const today = new Date();
// let day = weekday[today.getDay()];

const[breakfastmenu,setbreakfastmenu]=useState([]);
const[lunchmenu,setlunchmenu]=useState([]);
const[dinnermenu,setdinnermenu]=useState([]);
 let day= "monday"
function sentday(){
   let myVar = document.getElementById('day').value; 
   console.log(myVar);
   let day=myVar;
   getDaymenuFromServer(day);
}

console.log(day);

const getDaymenuFromServer = async(day) =>{
  await axios.get('http://0ecb-103-156-19-229.ngrok.io/getmenu/' + day).then(
    (response) => {
      console.log(response);
       console.log(response.data[0].breakfast);
       setbreakfastmenu(response.data[0].breakfast.split(","));
       setlunchmenu(response.data[0].lunch.split(","));
       setdinnermenu(response.data[0].dinner.split(","))
      
          console.log(breakfastmenu);
          console.log(lunchmenu);
          console.log(dinnermenu);
    },
    (error) => {

    }
  )
}

useEffect(()=>{
  getDaymenuFromServer();
  // console.log(day);
},[]);
 



    return (
        <>
        <div>
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Hii Buddy</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Button href="todaymenu" variant="success" size="sm">
            TodayMenu
          </Button>
            
                
                <Button  href="dashboard3" variant="success" size="sm"> Select Tomorrow's Menu</Button>
              
              <h1>Select Day</h1>

              <select id="day">
              <option value="none" selected disabled hidden>Select day</option>
                <option value="monday">MONDAY</option>
                <option value="tuesday">TUESDAY</option>
                <option value="wednesday">WEDNESDAY</option>
                <option value="thursday">THURSDAY</option>
                <option value="friday">FRIDAY</option>
                <option value="saturday">SATURDAY</option>
                <option value="sunday">SUNDAY</option>
              </select>
              <Button onClick={sentday} variant="success" size="sm">
        check
        </Button>

            

              {/* <NavDropdown title="DAY" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">MONDAY</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
          TUESDAY
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">
          WEDNESDAY
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">
          THURSDAY
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">FRIDAY</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">
          SATURDAY
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">SUNDAY</NavDropdown.Item>
      </NavDropdown> */}

     

            </Nav>
          </Navbar.Collapse>
          <Button href="messtime" variant="success" size="sm">
        Messtime
        </Button>
        <Button href="instruction" variant="success" size="sm">
         Instruction
        </Button>
        <Button href="history" variant="success" size="sm">
            History
          </Button>
          <Button href="login" align="right" variant="success" size="sm">
            LOGOUT
          </Button>
        </Container>
      </Navbar>
      </div>
      <br/>
      <br/>
      <br/>
      <div className="card-footer text-muted">
        The new Tradition is Good Nutrition
      </div>
        <Paper>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>DISH NO.</th>
              <th>BREAKFAST</th>
              <th>LUNCH</th>
              <th>DINNER</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1.</td>
              <td>{breakfastmenu[0]}</td>
              <td>{lunchmenu[0]}</td>
              <td>{dinnermenu[0]}</td>
            </tr>
         

          
            <tr>
              <td>2.</td>
              <td>{breakfastmenu[1]}</td>
              <td>{lunchmenu[1]}</td>
              <td>{dinnermenu[1]}</td>
            </tr>
            <tr>
              <td>3.</td>
              <td>{breakfastmenu[2]}</td>
              <td>{lunchmenu[2]}</td>
              <td>{dinnermenu[2]}</td>
            </tr>
            <tr>
              <td>3.</td>
              <td>{breakfastmenu[3]}</td>
              <td>{lunchmenu[3]}</td>
              <td>{dinnermenu[3]}</td>
            </tr>
          </tbody>
        </Table>
      </Paper>

     
      <Footermail/>

     
        
        </>
    )
}


export default Daymenu1;