import React from "react";
import getUserData from "./utils/getUserData";

const Form = ({ username, setUsername, userData, setUserData, setCurrentPage }) => {
  const url = `https://api.github.com/users/${username}`;

  const handleSubmit = event => {
    event.preventDefault();
    setUserData(event.target.value);
    getUserData(url)
      .then(response => response.json())
      .then(data => setUserData({ name: data.name, avatar_url: data.avatar_url })).then(() => setCurrentPage('hula'));
  };

  return (
    <section>
      <form>
        <input
          type="text"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
        <button onClick={handleSubmit}>Choose</button>
      </form>
    </section>
  );
};

export default Form;
