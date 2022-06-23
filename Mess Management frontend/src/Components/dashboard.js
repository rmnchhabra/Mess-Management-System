import React,{useEffect,useState} from "react";
import { Paper } from "@material-ui/core";
import Card from "./Card";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import NavBar from "./Navbar";
import Sidebarfoodcom from "./sidebarfoodcom";



const Dashboard = () => {
  const current  = new Date();
  const date=`${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  var [dates,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = 24-setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });
  

  
  return (
    
      <div>
        <div class="container">
  <div class="row">
 
        <NavBar />
       </div>


<br/>
<br/>
<br/>
<div   class="col-lg-3">
      <Paper>
        <h3>You have only {dates.toLocaleTimeString()} time to select your food</h3>
        
        <br/>
        <br/>
        <h1> Hi Buddy!! , What would you like to eat tomorrow?</h1>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <Card img="https://tse1.mm.bing.net/th?id=OIP.huhkxyr1vMlJcsXBN6nu8wHaEK&pid=Api&P=0&w=310&h=174" title="BREAKFAST"/>
            </div>
            <div className="col-sm">
              <Card  img="https://tse4.mm.bing.net/th?id=OIP.GjIwCh89aXCNSbCMbriWkwHaE7&pid=Api&P=0&w=231&h=154"/>
            </div>
            <div className="col-sm">
              <Card img="https://tse3.mm.bing.net/th?id=OIP.GTQh7hIpIUtnxtDRqUosxAHaEK&pid=Api&P=0&w=296&h=166" title="DINNER"/>
            </div>
          </div>

          {/* <AlertDismissible />*/}
          {/* for less calories added by student danger alert */}
          {/* <AlertDanger/> */}
        </div>

      </Paper>

    
       <br/>
        <Button variant="warning" size="lg">
         submit
        </Button>
        <br/>
        <br/>

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

      <div className="card-footer" align="center">
        <b>The new Tradition is Good Nutrition</b>
      </div>
    </div></div></div>
  );
};
export default Dashboard;
