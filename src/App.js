import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import About from "./Components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App(props) {
  const [myMode, setMyMode] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [modeBtn, setModeBtn] = useState("Dark Mode");

  const [navbar, setNavbar] = useState("light");

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const changeMode = () => {
    if (myMode.color === "black") {
      setMyMode({
        color: "white",
        backgroundColor: "black",
      });
      setModeBtn("Enable Light Mode");
      setNavbar("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode Enable", "success");
    } else {
      setMyMode({
        color: "black",
        backgroundColor: "white",
      });
      setModeBtn("Enable Dark Mode");
      setNavbar("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enable", "success");
    }
  };

  return (
    <>
      <Router>
        {/* calling Navbar with our own title and about */}
        <Navbar
          title="TextUtils"
          about="About"
          onClk={changeMode}
          mode={myMode}
          modebtn={modeBtn}
          navbar={navbar}
        />

        <Alert alert={alert} />

        {/* If we dont pass title and about they bacome undefined
    as now we set defult values for them so they use that value if dont pass value here
    <Navbar/> */}
        <Routes>
          <Route path="/about" element={ <About mode={myMode} />}>
           
          </Route>
          <Route path="/" element={ <TextForm
              mode={myMode}
              changeMode={changeMode}
              showAlert={showAlert}
            />}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
