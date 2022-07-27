import React,{useState,useEffect} from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import {Route,Switch} from "react-router-dom"
import About from "./About/About"
import Viewhouse from "./ViewHouse/Viewhouse"
import Registerhouse from './RegisterHouse/Registerhouse';
function App() {
  const[houseInfo, sethouseInfo] = useState([])
useEffect(()=>
{
    fetch("http://localhost:5000/housesdata")
    .then((response)=> response.json())
    .then((data)=>sethouseInfo(data))
},[])
function addingHouse(newHouse)
{
  sethouseInfo([...houseInfo,newHouse])
}

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path ="/">
          <About />
        </Route >
        <Route exact path="/registerhouse">
          <Registerhouse onAddingHouse={addingHouse}/>
        </Route>
        <Route exact path="/viewhouse">
          <Viewhouse houseInfo={houseInfo} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
