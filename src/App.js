/*import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./documents/Navbar";
import Main from "./documents/Main";
import Footer from "./documents/Footer";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}*/

//export default App;
// import Header from "./Final/Header";
// import logo from "./logo.svg";
// // import "./App.css";

// function App() {
//   return <Header />;
// }

// export default App;
// import Footer from "./Final/Footer";
/*
import Header from "./Documents/Header";
// import Main from "./Final/Main";
import logo from "./logo.svg";
// import "./App.css";

function App() {
  return (
    <div>
      <Header />
      {/* <Main />
      <Footer /> *///}
      /*
    </div>
  );
}

export default App;*/

