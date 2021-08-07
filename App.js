// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as 
  NavLink
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/home" activeClassName="selected" className="navtext">HOME</NavLink>
        <NavLink to="/about" activeClassName="selected" className="navtext">ABOUT</NavLink>
        <NavLink to="/contact" activeClassName="selected" className="navtext">CONTACT</NavLink>
        <NavLink to="/login" activeClassName="selected" className="navtext">LOGIN</NavLink>
      </nav>
      
      <Route path="/home">
        <Home/>
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/contact">
        <Contact/>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
    </div>
  );
}

export default App;
