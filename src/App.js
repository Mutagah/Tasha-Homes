import React,{useState,useEffect} from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import {Route,Switch} from "react-router-dom"
import About from "./About/About"
import Viewhouse from "./ViewHouse/Viewhouse"
import Registerhouse from './RegisterHouse/Registerhouse';
function App() {
  const[houseInfo, sethouseInfo] = useState([])
  const [formData,setformData] = useState({
    name:"",
    age:"",
    phonenumber:"",
    typeofHouse: "Apartment",
    houseLocation:"Nairobi",
    numberOfRooms:"1",
    numberOfBedrooms :"1",
    estimatedCost :"",
    preferedViewDay:"sunday",
    pictureLink:"https://www.designyourway.net/diverse/luxurioushouses/Armada-House1.jpg"
})
useEffect(()=>
{
    fetch("http://localhost:5000/housesdata")
    .then((response)=> response.json())
    .then((data)=>sethouseInfo(data))
},[])
function handleaddingHouse(newHouse)
{
  setformData([...formData,newHouse])
}
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path ="/">
          <About />
        </Route >
        <Route exact path="/registerhouse">
          <Registerhouse onAddingHouse={handleaddingHouse}formData={formData} setformData={setformData}/>
        </Route>
        <Route exact path="/viewhouse">
          <Viewhouse houseInfo={houseInfo} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
