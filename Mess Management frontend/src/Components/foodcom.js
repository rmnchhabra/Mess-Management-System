import { CenterFocusStrong } from "@material-ui/icons";
import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Foodcomnav from "./foodcomnav";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";


const Foodcom = () => {
  const[breakfastitem1,setbreakfastitem1]=useState("");
  const[breakfastitem2,setbreakfastitem2]=useState("");
  const[breakfastitem3,setbreakfastitem3]=useState("");
  const[breakfastitem4,setbreakfastitem4]=useState("");
  const[lunchitem1,setlunchitem1]=useState("");
  const[lunchitem2,setlunchitem2]=useState("");
  const[lunchitem3,setlunchitem3]=useState("");
  const[lunchitem4,setlunchitem4]=useState("");
  const[dinneritem1,setdinneritem1]=useState("");
  const[dinneritem2,setdinneritem2]=useState("");
  const[dinneritem3,setdinneritem3]=useState("");
  const[dinneritem4,setdinneritem4]=useState("");

  const breakfastmenu =[breakfastitem1,breakfastitem2,breakfastitem3,breakfastitem4];
  const lunchmenu = [lunchitem1,lunchitem2,lunchitem3,lunchitem4];
  const dinnermenu =[dinneritem1,dinneritem2,dinneritem3,dinneritem4];

  //post data to server
  function notify(){ 
    toast("menu updated successfully!");
  }

 function cleartable(e) {
  //e.preventDefault();
  console.log("this works");
   setbreakfastitem1({...""});
   setbreakfastitem2("dttttttt");
   setbreakfastitem3("");
   setbreakfastitem4("");
   setlunchitem1("");
   setlunchitem2("");
   setlunchitem3("");
   setlunchitem4("");
   setdinneritem1("");
   setdinneritem2("");
   setdinneritem3("");
   setdinneritem4("");
 }

 var b= breakfastmenu.join(',');
  var l= lunchmenu.join(',');
  var d= dinnermenu.join(',');


  
  const submitmenu = (e) => {
    const selectday = document.querySelector('#select1');
    const day = selectday.value;
   const menu={
     "days": day,
     "breakfast": b,
     "lunch": l,
     "dinner": d
   }
    postmenutoserver(menu);
    e.preventDefault();
    notify();
  };


  const  postmenutoserver= async (data)=>{
    console.log(data)
    axios.post("http://localhost:8087/updateMenu",  data ,{}).then(
            (response)=>{
                console.log(response);   
            },
            (error)=>{
                console.log(error);
            }
          )
  }






  return (
    <>
      <div>
        <Foodcomnav fixed="top"/>
       
        <br/>
        <div>

         <select id="select1">
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
            <option value="saturday">Saturday</option>
            <option value="sunday">Sunday</option>

        </select>
        
          <h3 align="center"><i><b>Laughter is Brighest where food is best</b></i></h3>
        </div>  
        <br />
        
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
              <td>1</td>
              <td><input  id="bin" placeholder="breakfast dish1"  onChange={(e)=>
                  setbreakfastitem1(e.target.value)
                    } required/> </td>  
              <td><input  id="bin" placeholder="lunch dish1" onChange={(e)=>
                  setlunchitem1(e.target.value)
                    }/></td>
              <td><input  id="bin" placeholder="dinner dish1" onChange={(e)=>
                  setdinneritem1(e.target.value)
                    }/></td>
            </tr>
            <tr>
              <td>2</td>
              <td><input  id="bin" placeholder="breakfast dish2" onChange={(e)=>{
                  setbreakfastitem2(e.target.value)
                    }}/></td>
              <td><input  id="bin" placeholder="lunch dish2" onChange={(e)=>{
                  setlunchitem2(e.target.value)
                    }}/></td>
              <td><input  id="bin" placeholder="dinner dish2" onChange={(e)=>{
                  setdinneritem2(e.target.value)
                    }}/></td>
            </tr>
            <tr>
              <td>3</td>
              <td><input  id="bin" placeholder="breakfast dish3" onChange={(e)=>{
                  setbreakfastitem3(e.target.value)
                    }}/></td>
              <td><input  id="bin" placeholder="lunch dish3" onChange={(e)=>{
                  setlunchitem3(e.target.value)
                    }}/></td>
              <td><input  id="bin" placeholder="dinner dish3" onChange={(e)=>{
                  setdinneritem3(e.target.value)
                    }}/></td>
            </tr>
            <tr>
              <td>4</td>
              <td><input  id="bin" placeholder="breakfast dish4" onChange={(e)=>{
                  setbreakfastitem4(e.target.value)
                    }}/></td>
              <td><input  id="bin" placeholder="lunch dish4" onChange={(e)=>{
                  setlunchitem4(e.target.value)
                    }}/></td>
              <td><input  id="bin" placeholder="dinner dish4" onChange={(e)=>{
                  setdinneritem4(e.target.value)
                    }}/></td>
            </tr> 
            
           
          </tbody>
        </Table>
        <div style={{margin:"10px "}} align="center">
        {/* <Button style={{margin:"10px"}} variant="success" size="lg">
          UPDATE
        </Button> */}
       
        <Button style={{margin:"10px"}} variant="success" size="lg" onClick={submitmenu}>
          UPDATE
        </Button>
        <Button style={{margin:"10px"}} variant="danger" size="lg" onClick={cleartable}>
          CLEAR
        </Button>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
};
export default Foodcom;
