// import logo from './logo.svg';
import './App.css';
import {
  
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'


function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/home" activeClassName="selected">HOME</Link>
        <Link to="/about" activeClassName="selected">ABOUT</Link>
        <Link to="contact" activeClassName="selected">CONTACT</Link>
        <Link to="/Homlogin" activeClassName="selected">LOGIN</Link>
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
