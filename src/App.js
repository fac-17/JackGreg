import React from "react";
import Page from "./Page";
import Header from "./Header";
import "./App.css";

const App = () => {
  const [user, setUser] = React.useState("jackbridger");
  return (
    <div className="App">
      <Header />
      <Page />
    </div>
  );
};

export default App;
