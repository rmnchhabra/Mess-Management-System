import React,{useEffect, useState} from "react";
import NavBar from "./Navbar";
import Button from "react-bootstrap/Button";
import Card from "./Card";
import { Paper } from "@material-ui/core";
import Table from "react-bootstrap/Table";
import Footermail from "./footermail";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";

import Dropdown from "react-bootstrap/Dropdown";


const Dashboard3 = () => {

  function notify(){ 
    toast(" your meal added successfully!");
  }
  const current  = new Date();
  const date=`${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
  const [bvalue,setbvalue]=useState(0);
  const [lvalue,setlvalue]=useState(0);
  const [dvalue,setdvalue]=useState(0);
   
  let mealinfo = {
    "breakfast": bvalue,
    "lunch": lvalue,
    "dinner": dvalue,
    }
  const submitmeal = (e) => {
    postmealtoserver(mealinfo);
    e.preventDefault();
    notify();
   
  };

    //save meal to the server
    const  postmealtoserver= async (data)=>{
      console.log(mealinfo)
      axios.put('http://0ecb-103-156-19-229.ngrok.io/postplatecount', {
          "id": 1,
          "breakfast": bvalue,
          "lunch": lvalue,
          "dinner": dvalue, 
         
          },{}).then(
              (response)=>{
                  console.log(response);   
              },
              (error)=>{
                  console.log(error);
              }
            )
    }




    




    const paperStyle={padding :20,height:'60vh',width:400, margin:"20px auto"}
   
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
  await axios.get('http://0ecb-103-156-19-229.ngrok.io/getmenu/' + day).then(
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
            
    <Paper style={paperStyle}>
    <div className="card" style={{width:"18rem"}}>
      <img src="https://tse1.mm.bing.net/th?id=OIP.huhkxyr1vMlJcsXBN6nu8wHaEK&pid=Api&P=0&w=310&h=174" className="card-img-top" alt="..." />
      <div className="card-body">
        <h4 className="card-title">BREAKFAST</h4>
       
        
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            view menu/calories
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">{breakfastmenu[0]}</Dropdown.Item>
            <Dropdown.Item href="#/action-2">{breakfastmenu[1]}</Dropdown.Item>
            <Dropdown.Item href="#/action-3">{breakfastmenu[2]}</Dropdown.Item>
            <Dropdown.Item href="#/action-3">{breakfastmenu[3]}</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      
      <br/>
      <br/>
     
      

        <a href="#" className="btn btn-success" onClick={() => setbvalue(1)}>
          Add in Your Food
        </a>
        <a href="#" className="btn btn-success" style={{marginLeft:"10px"}} onClick={() => setbvalue(0)}>
          Clear
        </a>
      </div>
    </div>
    </Paper>
           </td>
           <td>
           
    <Paper style={paperStyle}>
    <div className="card" style={{width:"18rem"}}>
      <img src="https://tse4.mm.bing.net/th?id=OIP.GjIwCh89aXCNSbCMbriWkwHaE7&pid=Api&P=0&w=231&h=154" className="card-img-top" alt="..." />
      <div className="card-body">
        <h4 className="card-title">LUNCH</h4>
       
        
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            view menu/calories
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">{lunchmenu[0]}</Dropdown.Item>
            <Dropdown.Item href="#/action-2">{lunchmenu[1]}</Dropdown.Item>
            <Dropdown.Item href="#/action-3">{lunchmenu[2]}</Dropdown.Item>
            <Dropdown.Item href="#/action-3">{lunchmenu[3]}</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      
      <br/>
      <br/>
     
      

        <a href="#" className="btn btn-success" onClick={() => setlvalue(1)}>
          Add in Your Food
        </a>
        <a href="#" className="btn btn-success" style={{marginLeft:"10px"}} onClick={() => setlvalue(0)}>
          Clear
        </a>
      </div>
    </div>
    </Paper>
           </td>
           <td>
            
    <Paper style={paperStyle}>
    <div className="card" style={{width:"18rem"}}>
      <img src="https://tse3.mm.bing.net/th?id=OIP.GTQh7hIpIUtnxtDRqUosxAHaEK&pid=Api&P=0&w=296&h=166" className="card-img-top" alt="..." />
      <div className="card-body">
        <h4 className="card-title">DINNER</h4>
       
        
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            view menu/calories
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">{dinnermenu[0]}</Dropdown.Item>
            <Dropdown.Item href="#/action-2">{dinnermenu[1]}</Dropdown.Item>
            <Dropdown.Item href="#/action-3">{dinnermenu[2]}</Dropdown.Item>
            <Dropdown.Item href="#/action-3">{dinnermenu[3]}</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      
      <br/>
      <br/>
     
      

        <a href="#" className="btn btn-success" onClick={() => setdvalue(1)}>
          Add in Your Food
        </a>
        <a href="#" className="btn btn-success" style={{marginLeft:"10px"}} onClick={() => setdvalue(0)}>
          Clear
        </a>
      </div>
    </div>
    </Paper>
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
              <td>{bvalue}</td>
              <td>{lvalue}</td>
              <td>{dvalue}</td>
              <td>{bvalue*30+lvalue*60+dvalue*40}</td>
              <td>{bvalue*60+lvalue*30+dvalue*60}</td>
            </tr>
          </tbody>
        </Table>
      </Paper>
       
        <Button variant="warning" size="lg" onClick={submitmeal}>
         submit
        </Button>
        <br/>
        <Footermail/>
        
        <br/>

      </div>
     
      <ToastContainer/>
    </>
  )
};
export default Dashboard3;
