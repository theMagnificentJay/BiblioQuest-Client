import React, { useState, useEffect } from "react";

import Layout from "./components/Layout";



function App() {
  const [token, setToken] = useState("");

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    // console.log(token);
  }, [token]);

  return <Layout updateToken={updateToken} token={token} />;
}

export default App;
