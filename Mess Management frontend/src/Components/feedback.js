import React ,{useState} from 'react';
import Emoji from "./emoji";
import Button from "react-bootstrap/Button";
import { RatingComponent } from 'react-rating-emoji'
import 'react-rating-emoji/dist/index.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
// import Emojisliders from "../emojisliders";
const FeedBack=()=>{

  function notify(){ 
    toast("Your feedback is Valuable for us!");
  }

    const [brating, setbRating] = useState(0);
    const [lrating, setlRating] = useState(0);
    const [drating, setdRating] = useState(0);
    const [feedback, setfeedback] = useState({});

    const handleRating1 = (newRating) => {
      setbRating(newRating);
    }
    const handleRating2 = (newRating) => {
        setlRating(newRating);
      }
      const handleRating3 = (newRating) => {
        setdRating(newRating);
      }
     

      let sentfeedback = {
        "breakfastrating": brating,
        "lunchrating": lrating,
        "dinnerrating": drating,
        "feedback": feedback
        }
       
      
      const handleform = (e) => {
 
        postdatatoserver(sentfeedback);
        e.preventDefault();
        notify();
      };
    
    
      const  postdatatoserver= async (data)=>{
        console.log(data)
        axios.post("http://c228-103-156-19-229.ngrok.io/postrating", {
        "studentid": 1,
        "breakfastrating": sentfeedback.brating,
        "lunchrating": sentfeedback.lrating,
        "dinnerrating": sentfeedback.drating,
        "feedback": sentfeedback.feedback
           
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
        <h3>Your Feedback is important for us</h3>
        <br/>
        <br/>
        <h2> Rate Your Breakfast</h2>
        {/* <Emojisliders/> */}
        <RatingComponent rating={brating} onClick={handleRating1} />
        <h2> Rate Your Lunch</h2>
        <div>
        <RatingComponent rating={lrating} onClick={handleRating2} />
      </div>
        <h2> Rate Your Dinner</h2>
        <RatingComponent rating={drating} onClick={handleRating3} />
        <br/>
        <br/>
        <h3>Any Suggestion??</h3>
        <div class="form-outline">
        <textarea class="form-control" id="textAreaExample1" rows="4"onChange={(e) => {
                    setfeedback({
                      ...feedback,
                      feedback: e.target.value
                    });
                  }}/>
        <label class="form-label" for="textAreaExample">Message</label>
        </div>
        <Button variant="success" size="lg" onClick={handleform}>
          submit
        </Button>
      </div>
      <ToastContainer/>
      </>
    );
}
export default FeedBack;