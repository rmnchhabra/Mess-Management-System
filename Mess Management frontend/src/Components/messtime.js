import React,{useState,useEffect} from 'react';
import Card from "react-bootstrap/Card";
import axios from 'axios';
import NavBar from './Navbar';
import Footermail from './footermail';


const Messtime=()=>{
  const [time,settime]=useState([]);

const getTimeFromServer=async()=>{
  const response=await fetch('http://0ecb-103-156-19-229.ngrok.io/getMesstime');
  const data =await response.json();
  console.log(data);
  console.log(data[0].breakfastin);
  settime(data[0]);
}

useEffect(()=>{
  getTimeFromServer();
},[]);

          
    return(
     
      <>
     <NavBar/>
       <br/>
       <Card
              border="dark"
              style={{
                padding: 20,
                height: "40vh",
                width: 300,
                margin: "20px auto",
              }}
            >
              <Card.Header>Mess Timing</Card.Header>
              <Card.Body>
                <Card.Text>
                  <br/>
                  <strong>Breakfast</strong> : <span  id="brkin">{time.breakfastin}</span> am to <span  id="brkout">{time.breakfastout}</span> am
                  <br/>
                  <strong>Lunch</strong> : <span  id="lnchin">{time.lunchin}</span> pm to <span  id="lnchout">{time.lunchout}</span> pm
                  <br/>
                  <strong>Dinner</strong> : <span  id="dinrin">{time.dinnerin}</span> pm to <span  id="dinrout">{time.dinnerout}</span> pm
                  <br/>
                </Card.Text>
              </Card.Body>
            </Card>
            <Footermail/>

</>



)
   
       
}
export default Messtime;