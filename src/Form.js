import React from "react";
import getUserData from "./utils/getUserData";

const Form = ({ username, setUsername, userData, setUserData }) => {
  const url = `https://api.github.com/users/${username}`;

  const handleSubmit = event => {
    event.preventDefault();
    setUserData(event.target.value);
    getUserData(url)
      .then(response => response.json())
      .then(data => console.log(data));
  };

  return (
    <section>
      <form>
        <input type="text" value={username} />
        <button onClick={handleSubmit}>Choose</button>
      </form>
    </section>
  );
};

export default Form;
