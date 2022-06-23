import React, { useState,useEffect} from 'react';
import Card from "react-bootstrap/Card";
import axios from 'axios';
import NavBar from './Navbar';
import Footermail from './footermail';


const Instruction=()=>{
  console.clear();
  fetch("http://0ecb-103-156-19-229.ngrok.io/getInstruction/1",{
    method:"GET",
})
    .then((response) => response.json())
    .then((responseData)=>{
        console.log(responseData);
        console.log(responseData[0]);
        // breakfastcount = responseData[0];
        document.getElementById("inst1").innerText = responseData.instruction1;
        document.getElementById("inst2").innerText = responseData.instruction2;
        document.getElementById("inst3").innerText = responseData.instruction3;
        document.getElementById("inst4").innerText = responseData.instruction4;
    })

  
    return(
      <>
        <NavBar/>
         <Card
              border="dark"
              style={{
                padding: 20,
                height: "40vh",
                width: 300,
                margin: "20px auto",
              }}
            >
              <Card.Header>Instructions</Card.Header>
              <Card.Body>
                <Card.Text>
                  1. <span  id="inst1"></span>
                  <br/>
                  <br/>
                 2. <span  id="inst2"></span>
                  <br/>
                  <br/>
                 3.<span  id="inst3"></span>
                  <br/>
                  <br/>
                  4.<span  id="inst4"></span>
                  <br/>
                  <br/>
                  

                </Card.Text>
              </Card.Body>
            </Card>
            <Footermail/>
      </>

    );
}
export default Instruction;