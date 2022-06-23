import React from "react";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button'
import { useState } from "react";

function AlertDismissible() {
    const [show, setShow] = useState(true);
  
    return (
      <>
        <Alert show={show} variant="success">
          <Alert.Heading>Hey Buddy!!</Alert.Heading>
          <p>
           Do You Know People who love to Eat are Always The Best People
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Close me y'all!
            </Button>
          </div>
        </Alert>
  
        {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
      </>
    );
  }
  
  export default AlertDismissible;