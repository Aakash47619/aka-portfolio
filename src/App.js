import react from "react"
import './App.css';
import HomePage from "./HomePage";
import Nav from "./Nav";
import Resume from "./Resume";
import "./Style.css"
function App() {
  return (
    <div>
      <Nav/>
      <img src="toon.jpg" alt="Profile Picture" id="profile-pic"/>
      <div>
      <Resume/>
      </div>
      <HomePage/>
    </div>
  );
}

export default App;
