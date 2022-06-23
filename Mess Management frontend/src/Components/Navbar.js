import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
const NavBar = () => {
  // function sentday()
  // {
  //   let selectElement = document.querySelector('#day');
  //   let selected_day = selectElement.value;
    
  // }
  return (
    <>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Hii Buddy</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Button href="todaymenu" variant="success" size="sm">TodayMenu </Button>
            
                
                <Button  href="dashboard3" variant="success" size="sm"> Select Tomorrow's Menu</Button>
              
              <h1>Select Day</h1>

              <select id="day">
                <option value="monday">MONDAY</option>
                <option value="tuesday">TUESDAY</option>
                <option value="wednesday">WEDNESDAY</option>
                <option value="thursday">THURSDAY</option>
                <option value="friday">FRIDAY</option>
                <option value="saturday">SATURDAY</option>
                <option value="sunday">SUNDAY</option>
              </select>
              <Button href="daymenu1" variant="success" size="sm">
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
    </>
  );
};
export default NavBar;
