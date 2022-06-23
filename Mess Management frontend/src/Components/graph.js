import React from "react";
import { VictoryPie } from "victory-pie";
const Graph = (props) => {
  console.log(props.rate)
  
  const myData = [
    { x: "rate 1", y: 30 },
    { x: "rate 2", y: 20 },
    { x: "rate 3", y: 50 },
    { x: "rate 4", y: 80 },
    { x: "rate 5", y: 40 },
  ];
 
  return (
    <>
      <h1><i><b><ul>Food Ratings</ul></b></i></h1>
      <div style={{ height: 400 }}>
        <VictoryPie
          data={myData}
          colorScale={["blue", "yellow", "red","green","purple"]}
          radius={100}
        />
      </div>
    </>
  );
};
export default Graph;
