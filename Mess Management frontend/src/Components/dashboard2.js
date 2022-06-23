import React,{useEffect, useState} from "react";
import NavBar from "./Navbar";
import Button from "react-bootstrap/Button";
import Card from "./Card";
import { Paper } from "@material-ui/core";
import Table from "react-bootstrap/Table";
import Footermail from "./footermail";
import axios from "axios";



const Dashboard2 = () => {

//code for fetch from server
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const today = new Date();
let tomorrow =  new Date()
tomorrow.setDate(today.getDate() + 1)
let day = weekday[tomorrow.getDay()];

const[breakfastmenu,setbreakfastmenu]=useState([]);
const[lunchmenu,setlunchmenu]=useState([]);
const[dinnermenu,setdinnermenu]=useState([]);

const getTomorrowmenuFromServer = async() =>{
  await axios.get('http://c228-103-156-19-229.ngrok.io/getmenu/' + day).then(
    (response) => {
      console.log("inside response");
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
  getTomorrowmenuFromServer();
  // console.log(day);
},[]);




//   console.clear();
//   fetch("http://5d9c-119-161-98-68.ngrok.io/getmenu/monday",{
//     method:"GET",
// })
//     .then((response) => response.json())
//     .then((responseData)=>{
//         console.log(responseData);
//         console.log(responseData[0]);
//         breakfastmenu(response[0].breakfast);
//         lunchmenu(response[0].lunch);
//         dinnermenu(response[0].dinner);
        
//    })



















  const current  = new Date();
  const date=`${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
  return (
    <>
      <div>
       <NavBar/>
       <br/>
       <br/>
       <br/>
        <h2> Hi Buddy!! , What would you like to eat tomorrow?</h2>
        
       <table>
         <tr>
           <td>
           <Card img="https://tse1.mm.bing.net/th?id=OIP.huhkxyr1vMlJcsXBN6nu8wHaEK&pid=Api&P=0&w=310&h=174" title="BREAKFAST" menu={breakfastmenu} />
           </td>
           <td>
           <Card img="https://tse4.mm.bing.net/th?id=OIP.GjIwCh89aXCNSbCMbriWkwHaE7&pid=Api&P=0&w=231&h=154" title="LUNCH" menu={lunchmenu} />
           </td>
           <td>
           <Card img="https://tse3.mm.bing.net/th?id=OIP.GTQh7hIpIUtnxtDRqUosxAHaEK&pid=Api&P=0&w=296&h=166" title="DINNER" menu={dinnermenu} />
           </td>
         </tr>
       </table>

       <Paper>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>DATE</th>
              <th>BREAKFAST</th>
              <th>LUNCH</th>
              <th>DINNER</th>
              <th>cost/Calories/count</th>
              <th>Cost</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{date}</td>
              <td>56</td>
              <td>7</td>
              <td>78</td>
              <td>20</td>
              <td>20</td>
            </tr>
          </tbody>
        </Table>
      </Paper>
       
        <Button variant="warning" size="lg">
         submit
        </Button>
        <br/>
        <Footermail/>
        
        <br/>

      </div>
     
     
    </>
  )
};
export default Dashboard2;
