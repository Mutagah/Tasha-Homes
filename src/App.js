import './App.css';
import NavBar from './NavBar/NavBar';
import {Route,Switch} from "react-router-dom"
import About from "./About/About"
import Viewhouse from './Viewhouse';
import Registerhouse from './RegisterHouse/Registerhouse';
function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path ="/">
          <About />
        </Route >
        <Route exact path="/registerhouse">
          <Registerhouse />
        </Route>
        <Route exact path="/viewhouse">
          <Viewhouse />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
