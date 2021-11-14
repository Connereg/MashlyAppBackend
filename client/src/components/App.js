import React, { useState, useEffect } from "react";
import '../App.css';
import Header from "./Header";
import NavBar from "./NavBar";

import Body from "./Body";



function App() {
  const [loggedInStatus, setLoggedInStatus] = useState(false);
  const [user, setUser] = useState({})

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
    setLoggedInStatus(true);
  }, []);

  function retrieveLoggedInStatus(lis) {
    setLoggedInStatus(lis);
    localStorage.setItem("isLoggedIn", true);
  }

  return (
    <div className="App">
      <Header />
      <NavBar loggedInStatus={loggedInStatus} setLoggedInStatus={setLoggedInStatus} retrieveLoggedInStatus={retrieveLoggedInStatus} setUser={setUser} user={user} />

      <Body loggedInStatus={loggedInStatus} user={user} />
    </div>
  );
}

export default App;
