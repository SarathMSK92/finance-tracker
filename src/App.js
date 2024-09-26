import "./App.css";
import HamburgerMenu from "./Pages/HamburgerMenu/HamburgerMenu";
import Navbar from "./Pages/navbar/Navbar";
import Router from "./Router";


function App() {
  return (

    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="finance-tracker-main">
        <HamburgerMenu />
        <Router />
      </div>
    </div>
  );
}

export default App;
