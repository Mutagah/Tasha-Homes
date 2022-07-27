import React,{useState} from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import {Route,Switch} from "react-router-dom"
import About from "./About/About"
import Viewhouse from "./ViewHouse/Viewhouse"
import Registerhouse from './RegisterHouse/Registerhouse';
function App() {
  const [formData,setformData] = useState({
    name:"",
    age:"",
    phonenumber:"",
    typeofHouse: "Apartment",
    houseLocation:"Nairobi",
    numberOfRooms:"1",
    numberOfBedrooms :"1",
    preferedViewDay:"sunday",
    pictureLink:"https://www.designyourway.net/diverse/luxurioushouses/Armada-House1.jpg"
})

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path ="/">
          <About />
        </Route >
        <Route exact path="/registerhouse">
          <Registerhouse formData={formData} setformData={setformData}/>
        </Route>
        <Route exact path="/viewhouse">
          <Viewhouse formData={formData} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
