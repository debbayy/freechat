import logo from "./logo.svg";
import "./App.css";
import Index from "./component";
import { Route, Routes } from "react-router-dom";
import Register from "./component/register";

//import bootstrap

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Index />
    </div>
  );
}

export default App;
