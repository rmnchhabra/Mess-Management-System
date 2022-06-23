import React from "react";
import { Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";

const Orderonline = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 400,
    margin: "20px auto",
  };  
  return (
    <>
      <Paper elevation={7} style={paperStyle}>
                <Grid>
                  <img src="https://tse1.mm.bing.net/th?id=OIP.dedMO1ISzBEJEMploIr7BwHaEA&pid=Api&P=0&w=306&h=165" alt="swiggy"/>
                </Grid>
       </Paper>
       <Paper elevation={7} style={paperStyle}>
                <Grid>
                <img src="https://tse2.mm.bing.net/th?id=OIP.2LodWUrg1EDnl5dgSLOhywHaFj&pid=Api&P=0&w=234&h=176" alt="zomato"/>
                </Grid>
      </Paper>
    </>
  );
};

export default Orderonline;
