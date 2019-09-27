import React from "react";
import getUserData from "./utils/getUserData";
import "./Form.css";

const Form = ({
  username,
  setUsername,
  userData,
  setUserData,
  setCurrentPage
}) => {
  const url = `https://api.github.com/users/${username}`;

  const handleSubmit = event => {
    event.preventDefault();
    setUserData(event.target.value);
    getUserData(url)
      .then(response => response.json())
      .then(data =>
        setUserData({ name: data.name, avatar_url: data.avatar_url })
      )
      .then(() => setCurrentPage("hula"));
  };

  return (
    <section id="input-section">
      <form id="input-form">
        <label htmlFor="username-form" className="input-form--element">
          Username
        </label>
        <input
          id="username-form"
          type="text"
          value={username}
          className="input-form--element"
          onChange={event => setUsername(event.target.value)}
        />
        <button onClick={handleSubmit} className="input-form--element">
          Choose
        </button>
      </form>
    </section>
  );
};

export default Form;
