import React,{useState,useEffect} from 'react';
import { Paper } from "@material-ui/core";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import {Link} from 'react-router-dom';
import NavBar from './Navbar';
const History=()=>{
  
    const [History, setHistory] = useState([]);
    // const [bvalue,setbvalue]=useState(0);
    // const [lvalue,setlvalue]=useState(0);
    // const [dvalue,setdvalue]=useState(0);
  
    // useEffect(() => {
    //   const gethistory = async () => {
    //     const res = await fetch("localhost:8087/history/16");
    //     console.log(res);
    //     const getdata = await res.json();
    //     setHistory(getdata);
    //     // console.log(getdata);
    //   };
    // gethistory();
   // },[]);

   const getHistoryFromServer=async()=>{
    const response=await fetch('http://localhost:8087/history/16');
    const data =await response.json();
    console.log(data);
    console.log(data[0]);
    setHistory(data);
    // setbvalue(data[0]);
    // setlvalue(data[1]);
    // setdvalue(data[2]);
  }
  
  useEffect(()=>{
    getHistoryFromServer();
  },[]);

    return  History.length>0?(
        <>
        <div>
       <NavBar/>
      </div>

        <Paper>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Date</th>
              <th>BREAKFAST</th>
              <th >LUNCH</th>
              <th>DINNER</th>
              <th>credit</th>
            </tr>
          </thead>


          <tbody>
          {History.map((his) => (
                  <tr>
                    <td>{his.date}</td>
                    <td>{his.breakfast}</td>
                    <td> {his.lunch}</td>
                    <td> {his.dinner}</td>
                    <td>{}</td>
                  </tr>
                ))}
          </tbody>
        </Table>
      </Paper>

      <div className="card-footer text-muted">
        The new Tradition is Good Nutrition
      </div>
        
        </>
    ):
    (<div> <NavBar/>no data found</div>)
}


export default History;