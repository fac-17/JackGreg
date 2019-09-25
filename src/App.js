import React from "react";
import Page from "./Page";
import Header from "./Header";
import Footer from "./Footer.js";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Page />
      <Footer />
    </div>
  );
};

export default App;
