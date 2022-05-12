import logo from "./logo.svg";
import "./App.css";
import Index from "./components/index";
import { Route, Routes } from "react-router-dom";
import Register from "./components/register";

//import bootstrap

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      {/* <Index /> */}
      <Register />
    </div>
  );
}

export default App;
