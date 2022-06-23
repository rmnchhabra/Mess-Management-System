import React,{useState} from 'react'
import Messtime from './messtime';
import Button from "react-bootstrap/Button";
import { Card } from 'react-bootstrap';
import Foodcomnav from './foodcomnav';
import {  Form } from 'reactstrap';
import { FormGroup } from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
const Setmesstime=()=>{

  const [messtime,setmesstime]=useState({});

  function notify(){ 
    toast.success("Mess Time updated successfully!");
  }

  const handleform=(e)=>{
    postdatatoserver(messtime);
    e.preventDefault();
    notify();
  };

  // let obj = {
  //   "id": 1,
  //   "breakfastin": 2.3,
  //   "breakfastout": 4.5,
  //   "lunchin": 5.7,
  //   "lunchout": 3.5,
  //   "dinnerin": 45.7,
  //   "dinnerout": 3.5
  //   }

  const  postdatatoserver= async (data)=>{
    console.log(messtime)
    axios.put('http://localhost:8087/updateTime/1', {
        "id": 1,
        "breakfastin": messtime.breakfastin,
        "breakfastout": messtime.breakfastout,
        "lunchin": messtime.lunchin,
        "lunchout": messtime.lunchout,
        "dinnerin": messtime.dinnerin, 
        "dinnerout": messtime.lunchout
        },{}).then(
            (response)=>{
                console.log(response);   
            },
            (error)=>{
                console.log(error);
            }
          )
  }






    return(
     <>
      <div>
        <Foodcomnav/>
       
        <br/>
        </div>
    
         <Card
              border="dark"
              style={{
                padding: 20,
                height: "90vh",
                width: 300,
                margin: "20px auto",
              }}
            >
              <Card.Header>Mess Timing</Card.Header>
              <Card.Body>
                <Card.Text>
                <Form >
                
                  <strong>Breakfast</strong> :
                  <FormGroup>
                  <input  id="bin" placeholder="breakfastin"
                  onChange={(e)=>{
                  setmesstime({...messtime,breakfastin : e.target.value})
                  }}/>  am to 
                  </FormGroup>
                  <FormGroup>
                  <input  id="bout" placeholder="breakfastout"
                    onChange={(e)=>{
                    setmesstime({...messtime,breakfastout : e.target.value})
                      }}/>pm
                  </FormGroup>
                  <strong>Lunch</strong> : 
                  <FormGroup>
                  <input  id="lin" placeholder="lunchin"
                  onChange={(e)=>{
                  setmesstime({...messtime,lunchin : e.target.value})
                    }}/> pm to 
                  </FormGroup>
                  <FormGroup>
                  <input  id="lout" placeholder="lunchout"
                  onChange={(e)=>{
                    setmesstime({...messtime,lunchout : e.target.value})
                    }}/>pm
                  </FormGroup>
                  <strong>Dinner</strong> :
                  <FormGroup>
                     <input  id="din" placeholder="dinnerin"
                     onChange={(e)=>{
                    setmesstime({...messtime,dinnerin : e.target.value})
                  }}/> pm to
                     </FormGroup> 
                     <FormGroup>
                     <input  id="dout" placeholder="dinnerout"
                     onChange={(e)=>{
                      setmesstime({...messtime,dinnerout: e.target.value})
                      }}/>  pm
                     </FormGroup>
                    
                     <Button variant="success" size="lg" onClick={handleform}>
                      UPDATE
                     </Button> 
                </Form>
                  
                </Card.Text>
              </Card.Body>
            </Card>
       <ToastContainer/>
     </>
    );
}
export default Setmesstime;