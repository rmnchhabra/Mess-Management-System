import React ,{useState,useEffect} from 'react';
import { Paper } from "@material-ui/core";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import {Link} from 'react-router-dom';
import NavBar from './Navbar';
import FeedBack from './feedback';
import Footermail from './footermail';
import axios from 'axios';
const Todaymenu=()=>{
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const today = new Date();
let day = weekday[today.getDay()];

const[breakfastmenu,setbreakfastmenu]=useState([]);
const[lunchmenu,setlunchmenu]=useState([]);
const[dinnermenu,setdinnermenu]=useState([]);


 

const getTodaymenuFromServer = async() =>{
  await axios.get('http://0ecb-103-156-19-229.ngrok.io/getmenu/' + day).then(
    (response) => {
      console.log(response);
       console.log(response.data[0].breakfast);
       setbreakfastmenu(response.data[0].breakfast.split(","));
       setlunchmenu(response.data[0].lunch.split(","));
       setdinnermenu(response.data[0].dinner.split(","))
       // setbreakfastmenu( response.data[0].breakfast.split(","));
       // setlunchmenu({...lunchmenu, value : response.data[0].lunch.split(",")});
      // setdinnermenu({...dinnermenu, value : response.data[0].dinner.split(",")});
          console.log(breakfastmenu);
          console.log(lunchmenu);
          console.log(dinnermenu);
    },
    (error) => {

    }
  )
}

useEffect(()=>{
  getTodaymenuFromServer();
  // console.log(day);
},[]);
 
// var b = breakfastmenu.split(",");
//  console.log(b); // ["This", " is", " javascript", " string ", "split example"]
//   var l = lunchmenu.split(",");
//   console.log(l);
//   var d = dinnermenu.split(",");
//   console.log(d);


    return (
        <>
        <div>
       <NavBar/>
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

      <FeedBack/>
      <Footermail/>

     
        
        </>
    )
}


export default Todaymenu;