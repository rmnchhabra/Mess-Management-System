import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./Components/login";
import Signup from "./Components/signup";
import Dashboard from "./Components/dashboard";
import Foodcom from "./Components/foodcom";
import MessManager from "./Components/messmanager";
import Dashboard2 from "./Components/dashboard2";
import Dashboard3 from "./Components/dashboard3";
// import Bar from "./Components/test";
import Todaymenu from "./Components/Todaymenu";
import NavBar from "./Components/Navbar";
import Emoji from "./Components/emoji";
import FeedBack from "./Components/feedback";
import Foodcommemberlist from "./Components/foodcommemberlist";
import Footermail from "./Components/footermail";
import Instruction from "./Components/Instruction";
import Messtime from "./Components/messtime";
import Landingpage from "./Components/landingpage";
import Orderonline from "./Components/orderonline";
import Graph from "./Components/graph";
import AlertDanger from "./Components/Alertdanger";
import AlertDismissible from "./Components/AlertDismissible";
import Foodcomnav from "./Components/foodcomnav";
import Setmesstime from "./Components/setmesstime";
import Setinstruction from "./Components/setinstruction";
import Sidebarfoodcom from "./Components/sidebarfoodcom";
import Usersidebar from "./Components/usersidebar";
import History from "./Components/history";
import Tables from "./Components/table";
import Daymenu from "./Components/daymenu";
import Daymenu1 from "./Components/daymenu1";
import FeedBack2 from "./Components/feedback2";
const App = () => {
  return (
    <div>
      
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/usersidebar" element={<Usersidebar />} />
            <Route path="/setmesstime" element={<Setmesstime />} />
            <Route path="/sidebarfoodcom" element={<Sidebarfoodcom/>} />
            <Route path="/setinstruction" element={<Setinstruction />} />
            <Route path="/foodcomnav" element={<Foodcomnav/>}/>
            <Route path="/alertdanger" element={<AlertDanger />} />
            <Route path="/alertdismissible" element={<AlertDismissible />} />
            <Route path="graph" element={<Graph />} />
            <Route path="/foodcommemberlist" element={<Foodcommemberlist />} />
           
            <Route path="/orderonline " element={<Orderonline />} />
            <Route path="/messtime" element={<Messtime />} />
            <Route path="/instruction" element={<Instruction />} />
           
            <Route path="/feedback" element={<FeedBack />} />
            <Route path="footermail" element={<Footermail />} />
            <Route path="/navbar" element={<NavBar />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/foodcom" element={<Foodcom />} />
            <Route path="/messmanager" element={<MessManager />} />
            <Route path="/dashboard2" element={<Dashboard2 />} />
            <Route path="/dashboard3" element={<Dashboard3/>} />
            <Route path="/todaymenu" element={<Todaymenu />} />
            <Route path="/history" element={<History />} />
            <Route path="/table" element={<Tables/>} />
            <Route path="/daymenu" element={<Daymenu/>}/>
            <Route path="/daymenu1" element={<Daymenu1/>}/>
            <Route path="/feedback2" element={<FeedBack2 />} />
            <Route path="/emoji"element={<Emoji/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
