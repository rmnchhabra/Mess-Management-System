import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
const Footermail=()=>{
    return(
        <MDBFooter bgColor='dark' color='white' className='text-center text-lg-left' width="1000px">
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          Mail Us At 
          <a style={{margin:"10px"}} className='text-light' align="right" href='https://outlook.office.com/mail/'>
           foodcommittee@iiitb.ac.in 
          </a>
        </div>
      </MDBFooter>
    );
}
export default Footermail;