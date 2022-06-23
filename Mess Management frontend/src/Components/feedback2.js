import React from 'react';
import Emoji from "./emoji";
import Button from "react-bootstrap/Button";
// import Emojisliders from "../emojisliders";
const FeedBack2=()=>{
    return(
      <>
       <div>
        <h3>Your Feedback is important for us</h3>
        <br/>
        <br/>
        <h2> Rate Your Breakfast</h2>
        {/* <Emojisliders/> */}
        <Emoji/>
        <h2> Rate Your Lunch</h2>
        <div>
        <Emoji/>
      </div>
        <h2> Rate Your Dinner</h2>
        <Emoji/>
        <br/>
        <br/>
        <h3>Any Suggestion??</h3>
        <div class="form-outline">
        <textarea class="form-control" id="textAreaExample1" rows="4"></textarea>
        <label class="form-label" for="textAreaExample">Message</label>
        </div>
        <Button variant="success" size="lg">
          submit
        </Button>
      </div>
      </>
    );
}
export default FeedBack2;