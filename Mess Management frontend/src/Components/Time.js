import { Col,Row } from 'reactstrap';
import StudentHomePage from './StudentHomePage';

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Container,
    
} from "reactstrap";
import { Button } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import base_url from "./api/bootapi";


const Time = ({time}) => {

return(
    <div>
        
        <Row>
    <Col md>Product Name</Col>

<Col>
<CardSubtitle 
 className='font-weight-bold'>{time.breakfastin}</CardSubtitle>
</Col>

    </Row>
        </div>
   

)
}
export default Time