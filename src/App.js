import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router, Route, Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>

      <Router>
        <Navbar title="Anjana" mode={mode} toggleMode={toggleMode} v />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about"
            element={<About />}></Route>
          <Route exact path="/"
            element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}></Route>
            <Route path="/signup" 
              element={<div> signup </div>}
            />
        </Routes>
      </Router>




      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
      {/* <Router>
        <Switch> 
        <>
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
          <div className="container my-3">
              {/* /users --> Component 1
        /users/home --> Component 2
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/">
                <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
              </Route>
          </div>
          </>
        </Switch> */}
      {/* </Router> */}
    </>
  );
}

export default App;