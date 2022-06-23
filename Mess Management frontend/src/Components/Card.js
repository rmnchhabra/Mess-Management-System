import React,{useState,useEffect} from "react";
import { Paper } from '@material-ui/core'
import Dropdown from "react-bootstrap/Dropdown";

const Card = (props) => {

  // const [bvalue,setbvalue]=useState(0);
  // const [lvalue,setlvalue]=useState(0);
  // const [dvalue,setdvalue]=useState(0);
  
  // const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  // const today = new Date();
  // let tomorrow =  new Date()
  // tomorrow.setDate(today.getDate() + 1)
  // let day = weekday[tomorrow.getDay()];

  // const getTomorrowmenuFromServer=async()=>{
  //   const response=await fetch('http://5d9c-119-161-98-68.ngrok.io/getmenu/monday');
  //   const data =await response.json();
  //   console.log(data);
  //   console.log(data[0].breakfast); 
  // }

  console.log(props.menu);
  console.log(props.menu[0]);
  
  useEffect(()=>{
    // getTomorrowmenuFromServer();
    console.log(props);
  },[]);

  
  //   console.clear();
  //   fetch("http://5d9c-119-161-98-68.ngrok.io/getmenu/monday",{
  //     method:"GET",
  // })
  //     .then((response) => response.json())
  //     .then((responseData)=>{
  //         console.log(responseData);
  //         console.log(responseData[0]);
  //         // breakfastcount = responseData[0];
  //         document.getElementById("inst1").innerText = responseData.instruction1;
  //         document.getElementById("inst2").innerText = responseData.instruction2;
  //         document.getElementById("inst3").innerText = responseData.instruction3;
  //         document.getElementById("inst4").innerText = responseData.instruction4;
  //     })
  
  
  const paperStyle={padding :20,height:'60vh',width:400, margin:"20px auto"}
  return (
    
    <Paper style={paperStyle}>
    <div className="card" style={{width:"18rem"}}>
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h4 className="card-title">{props.title}</h4>
       
        
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            view menu/calories
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">{props.menu[0]}</Dropdown.Item>
            <Dropdown.Item href="#/action-2">{props.menu[1]}</Dropdown.Item>
            <Dropdown.Item href="#/action-3">{props.menu[2]}</Dropdown.Item>
            <Dropdown.Item href="#/action-3">{props.menu[3]}</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      
      <br/>
      <br/>
     
      

        <a href="#" className="btn btn-success">
          Add in Your Food
        </a>
        <a href="#" className="btn btn-success" style={{marginLeft:"10px"}}>
          Clear
        </a>
      </div>
    </div>
    </Paper>
  );
};
export default Card;
